(function () {
  'use strict';
  const choices = [
    { id: 'original', type: 'original', label: 'Fundo original' },
    { id: 'purple-pearl', type: 'color', label: 'Roxo perolado', color: 'radial-gradient(circle at 28% 18%, #c6a4dc 0, #71478f 25%, #332044 58%, #160f20 100%)' },
    { id: 'matte-red', type: 'color', label: 'Vermelho fosco', color: '#651d22' },
    { id: 'dark-green', type: 'color', label: 'Verde-escuro liso', color: '#0d2b22' },
    { id: 'via-lactea', type: 'image', label: 'Via Láctea (capa)', image: 'assets/img/hero/capa-m.jpg', thumb: 'assets/img/hero/capa-m.jpg' }
  ];
  const body = document.body;
  const layer = document.getElementById('wallpaper');
  const dialog = document.getElementById('bgPicker');
  const grid = document.getElementById('bgPickerGrid');
  const trigger = document.getElementById('bgPickerOpen');
  const storageKey = 'gabriel-portfolio-background';
  let active = 'original';

  function card(choice) {
    const preview = choice.type === 'image'
      ? '<img src="' + choice.thumb + '" alt="" loading="lazy">'
      : '<span class="bg-picker__swatch" style="background:' + (choice.color || '#050505') + '"></span>';
    return '<button class="bg-picker__option" type="button" data-bg-id="' + choice.id + '" aria-pressed="false">' + preview + '<span>' + choice.label + '</span></button>';
  }

  function apply(id, persist) {
    const choice = choices.find(item => item.id === id) || choices[0];
    active = choice.id;
    body.classList.toggle('has-custom-background', choice.type !== 'original');
    body.dataset.backgroundType = choice.type;
    if (choice.type === 'image') {
      layer.style.backgroundImage = 'url("' + choice.image + '")';
      layer.style.backgroundColor = '#050505';
    } else if (choice.type === 'color') {
      layer.style.backgroundImage = choice.color.includes('gradient') ? choice.color : 'none';
      layer.style.backgroundColor = choice.color.includes('gradient') ? '#160f20' : choice.color;
    } else {
      layer.style.backgroundImage = '';
      layer.style.backgroundColor = '';
    }
    grid.querySelectorAll('[data-bg-id]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.bgId === active)));
    trigger.title = 'Fundo atual: ' + choice.label;
    if (persist) localStorage.setItem(storageKey, active);
  }

  function open() {
    dialog.hidden = false;
    body.classList.add('is-locked');
    const selected = grid.querySelector('[data-bg-id="' + active + '"]');
    (selected || dialog.querySelector('button')).focus();
  }
  function close() {
    dialog.hidden = true;
    body.classList.remove('is-locked');
    trigger.focus();
  }

  grid.innerHTML = choices.map(card).join('');
  grid.addEventListener('click', event => {
    const option = event.target.closest('[data-bg-id]');
    if (!option) return;
    apply(option.dataset.bgId, true);
  });
  trigger.addEventListener('click', open);
  dialog.querySelectorAll('[data-bg-close]').forEach(button => button.addEventListener('click', close));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !dialog.hidden) close(); });
  apply(localStorage.getItem(storageKey) || 'original', false);
})();