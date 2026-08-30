const nav=document.getElementById('mainNav');
window.addEventListener('scroll',()=>nav.classList.toggle('nav-scrolled',window.scrollY>60));

const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

const counters=document.querySelectorAll('.counter');
let countersStarted=false;
const metricSection=document.getElementById('metricas');
const counterObserver=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting&&!countersStarted){countersStarted=true;counters.forEach(counter=>{
    const target=Number(counter.dataset.target||0);const prefix=counter.dataset.prefix||'';const duration=1500;const start=performance.now();
    const tick=now=>{const progress=Math.min((now-start)/duration,1);const eased=1-Math.pow(1-progress,3);const value=Math.floor(target*eased);counter.textContent=prefix+value.toLocaleString('es-AR');if(progress<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)
  })}
},{threshold:.35});
if(metricSection)counterObserver.observe(metricSection);

document.querySelectorAll('#navMenu .nav-link').forEach(link=>link.addEventListener('click',()=>{
  const collapseEl=document.getElementById('navMenu');if(window.innerWidth<992&&collapseEl.classList.contains('show'))bootstrap.Collapse.getOrCreateInstance(collapseEl).hide();
}));