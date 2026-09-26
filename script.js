const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const form=document.getElementById('contactForm');
const status=document.getElementById('formStatus');
form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);if(!data.get('name')||!data.get('phone'))return;status.textContent='Заявка подготовлена. Подключите обработчик формы или Telegram-бота для отправки.';form.reset();});

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{document.body.classList.remove('menu-open')}));