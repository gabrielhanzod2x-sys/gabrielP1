/* =====================================================================
   PORTFÓLIO — seção "Omêga" (projeto em destaque: sistema do IASM)
   Renderiza pilares, texto, stack e as telas do sistema a partir de
   PORTFOLIO.omega. As telas usam a mesma galeria/lightbox do resto do
   site (data-gal), registrada aqui e consumida por main.js.
   Carregado antes de main.js para que os reveals sejam observados.
   ===================================================================== */
(function () {
  'use strict';
  const O = window.PORTFOLIO && window.PORTFOLIO.omega;
  const root = document.getElementById('omega');
  if (!O || !root) return;

  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ícones dos pilares (inline, sem dependência externa) */
  const icons = {
    lock: '<path d="M6 10V7a6 6 0 1 1 12 0v3" /><rect x="4" y="10" width="16" height="11" rx="2.5" /><circle cx="12" cy="15.5" r="1.6" />',
    db: '<ellipse cx="12" cy="6" rx="8" ry="3.2" /><path d="M4 6v6c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2V6" /><path d="M4 12v6c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2v-6" />',
    shield: '<path d="M12 3l8 3v6c0 5-3.4 8.4-8 9.8C7.4 20.4 4 17 4 12V6z" /><path d="M9 12l2.2 2.2L15.5 10" />',
    heart: '<path d="M12 20s-7-4.6-7-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7 2.6C19 15.4 12 20 12 20z" />',
  };
  const icon = (name) => `<svg class="omega-pillar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.shield}</svg>`;

  /* pilares */
  $('#omegaPillars').innerHTML = O.pilares.map((p, i) => `
    <li class="omega-pillar" data-reveal style="--d:${i * 80}ms">
      ${icon(p.icone)}
      <h3 class="omega-pillar__title">${esc(p.titulo)}</h3>
      <p class="omega-pillar__text">${esc(p.texto)}</p>
    </li>`).join('');

  /* texto corrido */
  $('#omegaText').innerHTML = O.paragrafos.map((t, i) => `<p data-reveal style="--d:${i * 70}ms">${esc(t)}</p>`).join('');

  /* stack */
  $('#omegaStack').innerHTML = O.stack.map(t => `<li>${esc(t)}</li>`).join('');

  /* link do projeto */
  const cta = $('#omegaLink');
  if (cta && O.link && O.link.url) cta.href = O.link.url;

  /* telas: registra a galeria para o lightbox de main.js */
  window.PORTFOLIO_GALLERIES = window.PORTFOLIO_GALLERIES || {};
  window.PORTFOLIO_GALLERIES['omega'] = {
    title: O.titulo + ' · ' + O.subtitulo,
    items: O.telas.map(t => ({ src: t.full, cap: t.nome })),
  };

  $('#omegaShots').innerHTML = O.telas.map((t, i) => `
    <figure class="omega-shot${i === 0 ? ' omega-shot--wide' : ''}" role="listitem" data-reveal style="--d:${(i % 2) * 90}ms">
      <button class="omega-shot__btn" type="button" data-gal="omega" data-i="${i}" aria-label="Ampliar: ${esc(t.nome)}">
        <img src="${t.thumb}" alt="${esc(O.subtitulo)}, ${esc(t.nome)}" loading="lazy">
        <span class="omega-shot__zoom mono">Ampliar</span>
      </button>
      <figcaption>
        <span class="omega-shot__name mono">${esc(t.nome)}</span>
        <span class="omega-shot__cap">${esc(t.legenda)}</span>
      </figcaption>
    </figure>`).join('');
})();
