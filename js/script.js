(function () {
  'use strict';

  /* =====================================================
     Icon set (inline SVG strings, currentColor + accents)
     ===================================================== */
  var UI = {
    menu: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    cart: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 8H6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10" cy="20" r="1.4" fill="currentColor"/><circle cx="17" cy="20" r="1.4" fill="currentColor"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1L6.6 10.8Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    minus: '<svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-9 0 1 12.5A1.5 1.5 0 0 0 7.5 21h9a1.5 1.5 0 0 0 1.5-1.5L19 7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none"><path d="M5 13l5 5L19 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 11.5 12 4l8 7.5M6 10v9a1 1 0 0 0 1 1h4v-6h2v6h4a1 1 0 0 0 1-1v-9" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none"><path d="M8 3c-2.8 2-4.5 5.2-4.5 9 0 5 3.6 9 8.5 9s8.5-4 8.5-9c0-1-.1-2-.4-2.8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M13.5 3c1 1.6 1.5 3.3 1.5 5 0 2-1.3 3-3 3s-3 1-3 3 1.3 4 3 4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><circle cx="12" cy="9.5" r="2.4" stroke="currentColor" stroke-width="1.7"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.7"/><path d="M12 7.5V12l3 2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none"><path d="M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 4v14M15 6v14" stroke="currentColor" stroke-width="1.6"/></svg>',
    insta: '<svg viewBox="0 0 24 24" fill="none"><rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.7"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor"/></svg>',
    bag: '<svg viewBox="0 0 24 24" fill="none"><path d="M6 8h12l1 12.2a1 1 0 0 1-1 .8H6a1 1 0 0 1-1-.8L6 8Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>'
  };

  // Illustrated food icons — flat, two-tone, brand-consistent
  var FOOD = {
    burger:
      '<svg viewBox="0 0 64 64"><ellipse cx="32" cy="47" rx="21" ry="6" fill="#C24C22"/>' +
      '<path d="M11 40h42v3a5 5 0 0 1-5 5H16a5 5 0 0 1-5-5v-3Z" fill="#E85D2D"/>' +
      '<rect x="11" y="32" width="42" height="6" rx="2" fill="#6FA97A"/>' +
      '<rect x="11" y="24" width="42" height="7" rx="2" fill="#A85A2E"/>' +
      '<path d="M13 24c0-8 8.5-13 19-13s19 5 19 13H13Z" fill="#F5A623"/>' +
      '<circle cx="24" cy="19" r="1.3" fill="#F6EEE3"/><circle cx="32" cy="16.5" r="1.3" fill="#F6EEE3"/><circle cx="40" cy="19" r="1.3" fill="#F6EEE3"/></svg>',
    pizza:
      '<svg viewBox="0 0 64 64"><path d="M32 8 55 48H9L32 8Z" fill="#F5A623"/>' +
      '<path d="M32 16 48 44H16L32 16Z" fill="#E85D2D"/>' +
      '<circle cx="32" cy="26" r="2.6" fill="#B8481F"/><circle cx="26" cy="34" r="2.2" fill="#B8481F"/><circle cx="38" cy="34" r="2.2" fill="#B8481F"/><circle cx="32" cy="40" r="2.2" fill="#6FA97A"/>' +
      '<path d="M9 48h46l-2 5H11l-2-5Z" fill="#D9C7A8"/></svg>',
    fries:
      '<svg viewBox="0 0 64 64"><path d="M18 26h28l-3 26a3 3 0 0 1-3 3H24a3 3 0 0 1-3-3l-3-26Z" fill="#E85D2D"/>' +
      '<path d="M20 28h24l1 4H19l1-4Z" fill="#C24C22"/>' +
      '<rect x="22" y="10" width="4" height="22" rx="1.5" fill="#F5A623"/>' +
      '<rect x="29" y="6" width="4" height="26" rx="1.5" fill="#F7C165"/>' +
      '<rect x="36" y="12" width="4" height="20" rx="1.5" fill="#F5A623"/></svg>',
    hotdog:
      '<svg viewBox="0 0 64 64"><path d="M8 30c0-6 5-10 10-7l30 15c5 2.5 5 10 0 12.5-5 2.5-10-1-10-1L9 35c-2-1-1-5-1-5Z" fill="#F5A623"/>' +
      '<path d="M12 27c4-3 8-2 11 1l26 15c3 2 3 6.5 0 8-3 1.5-6 0-6 0L12 34c-2-1-2-5 0-7Z" fill="#E85D2D"/>' +
      '<path d="M17 30c8-2 22 6 28 12" stroke="#F6EEE3" stroke-width="2" stroke-linecap="round" fill="none"/></svg>',
    cola:
      '<svg viewBox="0 0 64 64"><path d="M20 14h24l-3 38a4 4 0 0 1-4 4H27a4 4 0 0 1-4-4L20 14Z" fill="#2B2119"/>' +
      '<path d="M22 22h20l-2.3 28.5a2.4 2.4 0 0 1-2.4 2.2h-10.6a2.4 2.4 0 0 1-2.4-2.2L22 22Z" fill="#E85D2D"/>' +
      '<rect x="18" y="10" width="28" height="6" rx="2" fill="#F5A623"/><rect x="30" y="2" width="3" height="10" rx="1.4" fill="#B9A896"/></svg>',
    juice:
      '<svg viewBox="0 0 64 64"><path d="M22 12h20l-2 38a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4L22 12Z" fill="#F5A623"/>' +
      '<path d="M23.4 22h17.2l-1.6 26a2.2 2.2 0 0 1-2.2 2H27.2a2.2 2.2 0 0 1-2.2-2l-1.6-26Z" fill="#F7C165"/>' +
      '<rect x="27" y="4" width="10" height="4" rx="2" fill="#6FA97A"/><rect x="30.5" y="0" width="3" height="6" rx="1.3" fill="#6FA97A"/></svg>',
    flame:
      '<svg viewBox="0 0 64 64"><path d="M32 4c3 8-6 11-6 19a8 8 0 0 0 16 0c0-3-1.5-5-1.5-5S46 22 46 30a14 14 0 1 1-28 0C18 16 26 12 32 4Z" fill="#F5A623"/></svg>'
  };

  /* =====================================================
     Menu data
     ===================================================== */
  var MENU = [
    { id: 'chicken-burger', cat: 'burger', icon: 'burger', name: 'Chicken Burger', desc: 'Чикен, салат, соус ва панири мулоим', price: 29 },
    { id: 'beef-burger', cat: 'burger', icon: 'burger', name: 'Beef Burger', desc: 'Гӯшти гов, панир, салат ва соуси махсус', price: 35 },
    { id: 'pizza-mix', cat: 'pizza', icon: 'pizza', name: 'Pizza Mix', desc: 'Пицца бо панир, ҳасиб ва сабзавот', price: 45 },
    { id: 'fries', cat: 'fastfood', icon: 'fries', name: 'French Fries', desc: 'Картошкаи crispy', price: 15 },
    { id: 'hotdog', cat: 'fastfood', icon: 'hotdog', name: 'Hot Dog', desc: 'Ҳасиб, сабзавот ва соуси махсус', price: 20 },
    { id: 'cola', cat: 'drinks', icon: 'cola', name: 'Cola', desc: 'Нӯшокии хунуки газнок', price: 10 },
    { id: 'juice', cat: 'drinks', icon: 'juice', name: 'Fresh Juice', desc: 'Афшураи тару тоза', price: 18 }
  ];

  var CATEGORIES = [
    { id: 'all', label: 'Ҳама' },
    { id: 'burger', label: '🍔 Бургер' },
    { id: 'pizza', label: '🍕 Пицца' },
    { id: 'fastfood', label: '🍟 Фастфуд' },
    { id: 'drinks', label: '🥤 Нӯшокиҳо' }
  ];

  var OFFER_ITEM = { id: 'combo-offer', cat: 'offer', icon: 'burger', name: 'Burger + Fries + Cola', desc: 'Пешниҳоди махсус', price: 49 };

  var CART_KEY = 'vaqt_cart_v1';

  /* =====================================================
     State
     ===================================================== */
  var state = {
    cart: loadCart(),
    activeCategory: 'all'
  };

  function loadCart() {
    try {
      var raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }
  function saveCart() {
    try { localStorage.setItem(CART_KEY, JSON.stringify(state.cart)); } catch (e) {}
  }

  function findItem(id) {
    if (id === OFFER_ITEM.id) return OFFER_ITEM;
    for (var i = 0; i < MENU.length; i++) if (MENU[i].id === id) return MENU[i];
    return null;
  }

  function cartCount() {
    var n = 0;
    for (var id in state.cart) n += state.cart[id];
    return n;
  }
  function cartTotal() {
    var t = 0;
    for (var id in state.cart) {
      var item = findItem(id);
      if (item) t += item.price * state.cart[id];
    }
    return t;
  }

  /* =====================================================
     DOM refs
     ===================================================== */
  var $ = function (s, ctx) { return (ctx || document).querySelector(s); };
  var $$ = function (s, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(s)); };

  var header = $('#siteHeader');
  var menuGrid = $('#menuGrid');
  var tabsWrap = $('#tabs');
  var cartBadgeEls = $$('.cart-badge');
  var cartBar = $('#cartBar');
  var cartBarText = $('#cartBarText');
  var bnCartDot = $('#bnCartDot');
  var toast = $('#toast');

  /* =====================================================
     Render: menu cards
     ===================================================== */
  function renderMenu() {
    var list = state.activeCategory === 'all' ? MENU : MENU.filter(function (m) { return m.cat === state.activeCategory; });
    menuGrid.innerHTML = list.map(cardTemplate).join('');
  }

  function cardTemplate(item) {
    var qty = state.cart[item.id] || 0;
    return (
      '<article class="food-card" data-id="' + item.id + '">' +
        '<div class="food-media">' + FOOD[item.icon] + '</div>' +
        '<div class="food-info">' +
          '<h3 class="food-name">' + item.name + '</h3>' +
          '<p class="food-desc">' + item.desc + '</p>' +
          '<div class="food-foot">' +
            '<span class="food-price">' + item.price + ' сомонӣ</span>' +
            (qty > 0 ? qtyControlTemplate(item.id, qty) : addBtnTemplate(item.id)) +
          '</div>' +
        '</div>' +
      '</article>'
    );
  }
  function addBtnTemplate(id) {
    return '<button class="add-btn" data-add="' + id + '" aria-label="Илова кардан">' + UI.plus + '</button>';
  }
  function qtyControlTemplate(id, qty) {
    return (
      '<div class="qty-control">' +
        '<button data-dec="' + id + '" aria-label="Кам кардан">' + UI.minus + '</button>' +
        '<span>' + qty + '</span>' +
        '<button data-inc="' + id + '" aria-label="Зиёд кардан">' + UI.plus + '</button>' +
      '</div>'
    );
  }

  function refreshCardControls(id) {
    var card = menuGrid.querySelector('.food-card[data-id="' + id + '"]');
    if (!card) return;
    var foot = card.querySelector('.food-foot');
    var qty = state.cart[id] || 0;
    var existingControl = foot.querySelector('.qty-control, .add-btn');
    if (existingControl) existingControl.remove();
    foot.insertAdjacentHTML('beforeend', qty > 0 ? qtyControlTemplate(id, qty) : addBtnTemplate(id));
  }

  /* =====================================================
     Cart mutations
     ===================================================== */
  function addToCart(id, opts) {
    state.cart[id] = (state.cart[id] || 0) + 1;
    saveCart();
    afterCartChange(id, opts);
  }
  function decFromCart(id) {
    if (!state.cart[id]) return;
    state.cart[id] -= 1;
    if (state.cart[id] <= 0) delete state.cart[id];
    saveCart();
    afterCartChange(id);
  }
  function removeFromCart(id) {
    delete state.cart[id];
    saveCart();
    afterCartChange(id);
  }

  function afterCartChange(id, opts) {
    refreshCardControls(id);
    updateCartUI();
    if (cartModal.classList.contains('is-open')) renderCartModal();
    if (opts && opts.showToast) showToast('Илова шуд ба сабад');
    pulseCartBar();
  }

  function updateCartUI() {
    var count = cartCount();
    var total = cartTotal();
    cartBadgeEls.forEach(function (el) {
      el.textContent = count > 9 ? '9+' : String(count);
      el.classList.toggle('is-visible', count > 0);
    });
    if (bnCartDot) bnCartDot.classList.toggle('is-visible', count > 0);
    if (count > 0) {
      cartBarText.textContent = '🛒 ' + count + ' маҳсулот — ' + total + ' сомонӣ';
      cartBar.classList.add('is-visible');
    } else {
      cartBar.classList.remove('is-visible');
    }
  }

  var pulseTimer = null;
  function pulseCartBar() {
    if (!cartBar.classList.contains('is-visible')) return;
    cartBar.classList.remove('is-pulse');
    void cartBar.offsetWidth;
    cartBar.classList.add('is-pulse');
    clearTimeout(pulseTimer);
    pulseTimer = setTimeout(function () { cartBar.classList.remove('is-pulse'); }, 400);
  }

  var toastTimer = null;
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('is-visible'); }, 1800);
  }

  /* =====================================================
     Category tabs
     ===================================================== */
  function renderTabs() {
    tabsWrap.innerHTML = CATEGORIES.map(function (c) {
      return '<button class="tab-btn' + (c.id === state.activeCategory ? ' is-active' : '') + '" data-cat="' + c.id + '">' + c.label + '</button>';
    }).join('');
  }
  tabsWrap.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-cat]');
    if (!btn) return;
    state.activeCategory = btn.dataset.cat;
    renderTabs();
    renderMenu();
  });

  /* =====================================================
     Card click delegation
     ===================================================== */
  menuGrid.addEventListener('click', function (e) {
    var addBtn = e.target.closest('[data-add]');
    var incBtn = e.target.closest('[data-inc]');
    var decBtn = e.target.closest('[data-dec]');
    if (addBtn) addToCart(addBtn.dataset.add, { showToast: true });
    else if (incBtn) addToCart(incBtn.dataset.inc);
    else if (decBtn) decFromCart(decBtn.dataset.dec);
  });

  /* =====================================================
     Special offer
     ===================================================== */
  var offerBtn = $('#offerAddBtn');
  if (offerBtn) {
    offerBtn.addEventListener('click', function () {
      addToCart(OFFER_ITEM.id, { showToast: true });
    });
  }

  /* =====================================================
     Header scroll shadow
     ===================================================== */
  window.addEventListener('scroll', function () {
    header.classList.toggle('is-scrolled', window.scrollY > 6);
    updateBottomNavActive();
  }, { passive: true });

  /* =====================================================
     Mobile drawer
     ===================================================== */
  var drawer = $('#mobileDrawer');
  var menuToggleBtns = $$('[data-open-drawer]');
  var drawerCloseEls = $$('[data-close-drawer]');
  menuToggleBtns.forEach(function (b) { b.addEventListener('click', function () { openDrawer(); }); });
  drawerCloseEls.forEach(function (b) { b.addEventListener('click', function () { closeDrawer(); }); });
  function openDrawer() { drawer.classList.add('is-open'); }
  function closeDrawer() { drawer.classList.remove('is-open'); }
  $$('.drawer-panel a').forEach(function (a) { a.addEventListener('click', closeDrawer); });

  /* =====================================================
     Generic modal open/close
     ===================================================== */
  function setupModal(modalEl) {
    $$('[data-close]', modalEl).forEach(function (el) {
      el.addEventListener('click', function () { closeModal(modalEl); });
    });
  }
  function openModal(modalEl) {
    modalEl.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(modalEl) {
    modalEl.classList.remove('is-open');
    if (!$$('.modal.is-open').length) document.body.style.overflow = '';
  }

  var cartModal = $('#cartModal');
  var orderModal = $('#orderModal');
  var successModal = $('#successModal');
  [cartModal, orderModal, successModal].forEach(setupModal);

  $$('[data-open-cart]').forEach(function (b) {
    b.addEventListener('click', function () { renderCartModal(); openModal(cartModal); });
  });

  /* =====================================================
     Cart modal render
     ===================================================== */
  var cartItemsEl = $('#cartItems');
  var cartEmptyEl = $('#cartEmpty');
  var cartSummaryEl = $('#cartSummary');
  var cartCheckoutBtn = $('#cartCheckoutBtn');

  function renderCartModal() {
    var ids = Object.keys(state.cart);
    if (!ids.length) {
      cartItemsEl.hidden = true;
      cartSummaryEl.hidden = true;
      cartEmptyEl.hidden = false;
      cartCheckoutBtn.disabled = true;
      return;
    }
    cartEmptyEl.hidden = true;
    cartItemsEl.hidden = false;
    cartSummaryEl.hidden = false;
    cartCheckoutBtn.disabled = false;

    cartItemsEl.innerHTML = ids.map(function (id) {
      var item = findItem(id);
      if (!item) return '';
      var qty = state.cart[id];
      return (
        '<div class="cart-item" data-id="' + id + '">' +
          '<div class="food-media">' + FOOD[item.icon] + '</div>' +
          '<div class="cart-item-info">' +
            '<b>' + item.name + '</b>' +
            '<span class="unit-price">' + item.price + ' сомонӣ / дона</span>' +
          '</div>' +
          '<div class="qty-control">' +
            '<button data-dec="' + id + '" aria-label="Кам кардан">' + UI.minus + '</button>' +
            '<span>' + qty + '</span>' +
            '<button data-inc="' + id + '" aria-label="Зиёд кардан">' + UI.plus + '</button>' +
          '</div>' +
          '<button class="cart-item-remove" data-remove="' + id + '" aria-label="Хориҷ кардан">' + UI.trash + '</button>' +
        '</div>'
      );
    }).join('');

    var total = cartTotal();
    cartSummaryEl.innerHTML =
      '<div class="summary-row"><span>Маҳсулот</span><span>' + cartCount() + ' дона</span></div>' +
      '<div class="summary-row total"><span>Ҳамагӣ</span><span>' + total + ' сомонӣ</span></div>';
  }

  cartItemsEl.addEventListener('click', function (e) {
    var inc = e.target.closest('[data-inc]');
    var dec = e.target.closest('[data-dec]');
    var rem = e.target.closest('[data-remove]');
    if (inc) addToCart(inc.dataset.inc);
    else if (dec) decFromCart(dec.dataset.dec);
    else if (rem) removeFromCart(rem.dataset.remove);
  });

  cartCheckoutBtn.addEventListener('click', function () {
    closeModal(cartModal);
    renderOrderSummary();
    openModal(orderModal);
  });

  /* =====================================================
     Order form
     ===================================================== */
  var orderForm = $('#orderForm');
  var deliveryOpts = $$('.delivery-opt');
  var addressField = $('#fieldAddress');
  var orderSummaryMini = $('#orderSummaryMini');
  var deliveryMode = 'delivery';

  deliveryOpts.forEach(function (opt) {
    opt.addEventListener('click', function () {
      deliveryOpts.forEach(function (o) { o.classList.remove('is-active'); });
      opt.classList.add('is-active');
      deliveryMode = opt.dataset.mode;
      addressField.style.display = deliveryMode === 'delivery' ? '' : 'none';
    });
  });

  function renderOrderSummary() {
    orderSummaryMini.innerHTML = '<span>' + cartCount() + ' маҳсулот</span><b>' + cartTotal() + ' сомонӣ</b>';
  }

  function validateField(input, testFn, msg) {
    var field = input.closest('.field');
    var ok = testFn(input.value.trim());
    field.classList.toggle('has-error', !ok);
    var errEl = field.querySelector('.field-error');
    if (errEl && msg) errEl.textContent = msg;
    return ok;
  }

  orderForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var nameInput = $('#inputName');
    var phoneInput = $('#inputPhone');
    var addressInput = $('#inputAddress');

    var nameOk = validateField(nameInput, function (v) { return v.length >= 2; }, 'Лутфан номи худро нависед');
    var phoneOk = validateField(phoneInput, function (v) { return v.replace(/[^0-9]/g, '').length >= 9; }, 'Рақами телефон нодуруст аст');
    var addressOk = true;
    if (deliveryMode === 'delivery') {
      addressOk = validateField(addressInput, function (v) { return v.length >= 4; }, 'Лутфан адреси худро нависед');
    } else {
      addressInput.closest('.field').classList.remove('has-error');
    }

    if (!nameOk || !phoneOk || !addressOk) return;

    closeModal(orderModal);
    openModal(successModal);
    orderForm.reset();
    deliveryOpts.forEach(function (o) { o.classList.remove('is-active'); });
    $('[data-mode="delivery"]').classList.add('is-active');
    deliveryMode = 'delivery';
    addressField.style.display = '';

    state.cart = {};
    saveCart();
    updateCartUI();
    renderMenu();
  });

  /* =====================================================
     Bottom nav active state + smooth scroll
     ===================================================== */
  var bottomNavBtns = $$('.bottom-nav [data-scroll]');
  var sections = {
    home: $('#top'),
    menu: $('#menu')
  };
  bottomNavBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.dataset.scroll;
      if (target === 'cart') { renderCartModal(); openModal(cartModal); return; }
      if (target === 'contact') { document.getElementById('location').scrollIntoView({ behavior: 'smooth' }); return; }
      var el = document.getElementById(target === 'home' ? 'top' : target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  });
  function updateBottomNavActive() {
    var y = window.scrollY + 120;
    var menuEl = document.getElementById('menu');
    var locEl = document.getElementById('location');
    var current = 'home';
    if (menuEl && y >= menuEl.offsetTop) current = 'menu';
    if (locEl && y >= locEl.offsetTop) current = 'contact';
    bottomNavBtns.forEach(function (btn) {
      btn.classList.toggle('is-active', btn.dataset.scroll === current);
    });
  }

  /* =====================================================
     Smooth-scroll for in-page links (desktop nav too)
     ===================================================== */
  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href').slice(1);
      var el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* =====================================================
     Init
     ===================================================== */
  renderTabs();
  renderMenu();
  updateCartUI();
  $('#year').textContent = new Date().getFullYear();
})();
