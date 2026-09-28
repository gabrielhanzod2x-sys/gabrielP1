/* =====================================================================
   FUNDO — cetim preto em WebGL (interpretação da referência 01)
   Dobras suaves com brilho especular; reage devagar ao tempo, ao scroll
   e ao ponteiro. Renderiza em baixa resolução (é um fundo desfocado por
   natureza) e pausa quando a aba está oculta. Sem WebGL → CSS fallback.
   ===================================================================== */
(function () {
  'use strict';
  const canvas = document.getElementById('satin');
  if (!canvas) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none)').matches;
  const gl = canvas.getContext('webgl', { antialias: false, alpha: false, depth: false, stencil: false, powerPreference: 'low-power', preserveDrawingBuffer: false });
  if (!gl) return;

  const VS = 'attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}';
  const FS = `
  precision highp float;
  uniform vec2 u_res; uniform float u_time; uniform vec2 u_ptr; uniform float u_scroll;
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453123); }
  float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
    return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x), mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x), f.y); }
  float fbm(vec2 p){ float v=0., a=.5; for(int i=0;i<4;i++){ v+=a*noise(p); p=p*2.03+vec2(1.7,9.2); a*=.5; } return v; }
  float field(vec2 p, float t){
    vec2 q = vec2(fbm(p*0.55 + t*0.04), fbm(p*0.55 - t*0.03 + 3.1));
    float h = fbm(p*0.9 + 1.6*q + vec2(t*0.015, 0.0));
    // dobras largas e contínuas (as faixas da referência), deformadas pelo ruído
    float w  = sin(p.x*0.9 + p.y*1.9 + q.x*2.6 + t*0.10);
    float w2 = sin(p.x*1.8 - p.y*0.9 + q.y*2.2 - t*0.07);
    float w3 = sin(p.x*0.5 + p.y*3.1 + q.x*1.5 + t*0.05);
    return h*0.30 + (w*0.5+0.5)*0.34 + (w2*0.5+0.5)*0.20 + (w3*0.5+0.5)*0.16;
  }
  void main(){
    vec2 uv = (gl_FragCoord.xy - 0.5*u_res)/u_res.y;
    vec2 p = uv*1.7 + vec2(0.0, u_scroll*0.22) + u_ptr*0.035;
    float t = u_time;
    float e = 0.014;
    float h  = field(p, t);
    float hx = field(p+vec2(e,0.), t);
    float hy = field(p+vec2(0.,e), t);
    vec3 n = normalize(vec3(-(hx-h)/e*0.6, -(hy-h)/e*0.6, 1.0));
    vec3 L = normalize(vec3(-0.55, 0.75, 0.55));
    vec3 V = vec3(0.,0.,1.); vec3 H = normalize(L+V);
    float diff = max(dot(n,L),0.0);
    float spec = pow(max(dot(n,H),0.0), 90.0);
    float sheen = pow(max(dot(n,H),0.0), 7.0);
    vec3 col = vec3(0.016) + vec3(0.085)*diff*0.6 + vec3(0.40)*spec + vec3(0.10)*sheen;
    col += vec3(1.0,0.38,0.2)*0.03*smoothstep(-0.2,1.3,uv.x+uv.y*0.5)*(spec+sheen*0.35);
    col *= 1.0 - 0.42*length(uv*vec2(0.62,1.0));
    gl_FragColor = vec4(col,1.0);
  }`;
  function shader(type, src) { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { console.warn(gl.getShaderInfoLog(s)); return null; } return s; }
  const vs = shader(gl.VERTEX_SHADER, VS), fs = shader(gl.FRAGMENT_SHADER, FS); if (!vs || !fs) return;
  const prog = gl.createProgram(); gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
  gl.useProgram(prog);
  const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const a = gl.getAttribLocation(prog, 'a'); gl.enableVertexAttribArray(a); gl.vertexAttribPointer(a, 2, gl.FLOAT, false, 0, 0);
  const U = { res: gl.getUniformLocation(prog, 'u_res'), time: gl.getUniformLocation(prog, 'u_time'), ptr: gl.getUniformLocation(prog, 'u_ptr'), scroll: gl.getUniformLocation(prog, 'u_scroll') };

  const SCALE = isTouch ? 0.32 : 0.45; // resolução interna (fundo suave por natureza)
  function resize() { const w = Math.max(2, Math.floor(innerWidth * SCALE)), h = Math.max(2, Math.floor(innerHeight * SCALE)); if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; gl.viewport(0, 0, w, h); } }
  window.addEventListener('resize', resize); resize();

  let px = 0, py = 0, tx = 0, ty = 0, t0 = performance.now(), running = true, lastFrame = 0;
  if (!isTouch) window.addEventListener('pointermove', (e) => { tx = (e.clientX / innerWidth - 0.5); ty = -(e.clientY / innerHeight - 0.5); }, { passive: true });
  document.addEventListener('visibilitychange', () => { running = !document.hidden; if (running) requestAnimationFrame(frame); });
  const fpsCap = isTouch ? 24 : 60;
  function frame(now) {
    if (!running) return;
    requestAnimationFrame(frame);
    if (now - lastFrame < 1000 / fpsCap) return; lastFrame = now;
    px += (tx - px) * 0.04; py += (ty - py) * 0.04;
    const time = reduced ? 0 : (now - t0) / 1000;
    const scroll = window.scrollY / Math.max(1, innerHeight);
    gl.uniform2f(U.res, canvas.width, canvas.height); gl.uniform1f(U.time, time); gl.uniform2f(U.ptr, px, py); gl.uniform1f(U.scroll, scroll);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
  requestAnimationFrame(frame);
  canvas.classList.add('is-on');
})();
