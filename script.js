// Optional: paste your own Formspree endpoint below after following README.md.
// Leave blank to use the honest email-draft fallback.
const CONTACT_ENDPOINT = "";
const toggle = document.querySelector('#nav-toggle');
const nav = document.querySelector('#navigation');
const mobile = window.matchMedia('(max-width: 720px)');
function syncNavigation() { nav.hidden = mobile.matches; toggle.setAttribute('aria-expanded', String(!nav.hidden)); }
syncNavigation(); mobile.addEventListener('change', syncNavigation);
toggle.addEventListener('click', () => { nav.hidden = !nav.hidden; toggle.setAttribute('aria-expanded', String(!nav.hidden)); });
nav.addEventListener('keydown', e => { if (e.key === 'Escape' && mobile.matches) { nav.hidden = true; toggle.setAttribute('aria-expanded','false'); toggle.focus(); } });
const grid = document.querySelector('#menu-grid');
if (grid) {
 const select = document.querySelector('#category'), search = document.querySelector('#search');
 [...new Set(MENU.map(d => d.category))].forEach(c => { const option = document.createElement('option'); option.value = c; option.textContent = c; select.append(option); });
 function render() {
  const query = search.value.trim().toLowerCase();
  const matches = MENU.filter(d => (select.value === 'All' || d.category === select.value) && (d.name + ' ' + d.category).toLowerCase().includes(query));
  grid.replaceChildren();
  matches.forEach(d => {
   const card = document.createElement('article'); card.className = 'food-card dish';
   if (d.image) { const image = document.createElement('img'); image.src = d.image; image.alt = d.name; image.loading = 'lazy'; card.append(image); }
   else { const placeholder = document.createElement('div'); placeholder.className = 'no-photo'; placeholder.textContent = 'Mount Everest · ' + d.category; card.append(placeholder); }
   const content = document.createElement('div'), category = document.createElement('p'), name = document.createElement('h3'), price = document.createElement('p');
   category.className = 'category'; category.textContent = d.category; name.textContent = d.name; price.className = 'price'; price.textContent = d.price;
   content.append(category,name,price); card.append(content); grid.append(card);
  });
  document.querySelector('#result-count').textContent = matches.length ? matches.length + ' dishes found' : 'No dishes found. Try another search or category.';
 }
 search.addEventListener('input',render); select.addEventListener('change',render); render();
}
const dialog = document.querySelector('#photo-dialog');
if (dialog) {
 document.querySelectorAll('[data-photo]').forEach(button => button.addEventListener('click', () => {
  document.querySelector('#large-photo').src = button.dataset.photo; document.querySelector('#large-photo').alt = button.dataset.caption; document.querySelector('#photo-caption').textContent = button.dataset.caption; dialog.showModal();
 }));
 document.querySelector('#close-photo').addEventListener('click', () => dialog.close());
}
const form = document.querySelector('#contact-form');
if (form) {
 const status = document.querySelector('#form-status'), button = document.querySelector('#send-button');
 if (CONTACT_ENDPOINT) { document.querySelector('#form-note').textContent = 'We’ll receive your message by email.'; button.textContent = 'Send message'; }
 form.addEventListener('submit', async e => {
  e.preventDefault(); if (!form.reportValidity()) return;
  const data = new FormData(form);
  if (!CONTACT_ENDPOINT) {
   const subject = 'Restaurant inquiry: ' + data.get('topic');
   const body = 'Name: ' + data.get('name') + '\nReply email: ' + data.get('email') + '\n\n' + data.get('message');
   window.location.href = 'mailto:mt.everestbaltimore@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
   status.textContent = 'Your message has not been sent yet. Send the draft in your email app, or email mt.everestbaltimore@gmail.com directly.'; return;
  }
  button.disabled = true; status.textContent = 'Sending…';
  try {
   const response = await fetch(CONTACT_ENDPOINT, { method:'POST', body:data, headers:{ Accept:'application/json' } });
   if (!response.ok) throw new Error('Request failed');
   status.textContent = 'Thank you. Your message was sent.'; form.reset();
  } catch { status.textContent = 'We couldn’t send your message. Please try again or email mt.everestbaltimore@gmail.com.'; }
  finally { button.disabled = false; }
 });
}
