document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
      style: `
      --move-x: ${(e.clientX - window.innerWidth / 2) * -.006}deg;
      --move-y: ${(e.clientY - window.innerHeight / 2) * -.014}deg;
      `
    })
})
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add('lock-scroll');

  const button = document.querySelector('.button-start');
  const target = document.querySelector('.scroll-target');

  button.addEventListener('click', () => {
    document.body.classList.remove('lock-scroll');
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
(function(){
const crafts = [
  {title:'Введение', link:'#', text:'Для перехода выберите один из промыслов.', img:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=cover&w=800&q=80', color:'#2862ff'},
  {title:'Валяние', link:'https://encyclopediasyserti.tilda.ws/#qwertyuiop', text:'Изучение валяния, техники и инструменты.', img:'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=cover&w=800&q=80', color:'#bb5c26'},
  {title:'Вязание', link:'https://encyclopediasyserti.tilda.ws/#3ert', text:'Вязание спицами и крючком.', img:'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=cover&w=800&q=80', color:'#1b9678'},
  {title:'Вышивка.', link:'https://encyclopediasyserti.tilda.ws/#asdfghjkl', text:'Виды ручной вышивки, нитки и иглы.', img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=cover&w=800&q=80', color:'#c8568a'},
  {title:'Гончарный промысел', link:'https://encyclopediasyserti.tilda.ws/#gonchar', text:'Основы работы с глиной, формы и методы.', img:'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=cover&w=800&q=80', color:'#f09d32'},
  {title:'Деревообрабатывающий промысел.', link:'https://encyclopediasyserti.tilda.ws/#derevo', text:'Древесина и инструмент, изделия.', img:'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=cover&w=800&q=80', color:'#7a5c2e'},
  {title:'Плетение из лозы', link:'https://encyclopediasyserti.tilda.ws/#loza', text:'Лоза для плетения, техника и идеи.', img:'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=cover&w=800&q=80', color:'#b59c56'},
  {title:'Дом ремесел «Живинка в деле»', link:'https://encyclopediasyserti.tilda.ws/#dom', text:'Деятельность дома ремесел, мастер-классы.', img:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=cover&w=800&q=80', color:'#3e4ea4'},
  {title:'Камнерезный промысел', link:'https://encyclopediasyserti.tilda.ws/#kamen', text:'Обработка камня, изделия.', img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=cover&w=800&q=80', color:'#76787a'},
  {title:'Кожевенный промысел', link:'https://encyclopediasyserti.tilda.ws/#koggg', text:'Работа с кожей, техника обработки.', img:'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=cover&w=800&q=80', color:'#924e3a'},
  {title:'Кружево на коклюшках', link:'https://encyclopediasyserti.tilda.ws/#kokoko', text:'Инструменты и техники плетения кружева.', img:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=cover&w=800&q=80', color:'#91c1e2'},
  {title:'Кукольный промысел.', link:'https://encyclopediasyserti.tilda.ws/#kykla', text:'История и изготовление кукол.', img:'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=cover&w=800&q=80', color:'#c39a7a'},
  {title:'Медно - слесарный промысел', link:'https://encyclopediasyserti.tilda.ws/#medno', text:'Обработка металла, традиционные изделия.', img:'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=cover&w=800&q=80', color:'#877f65'},
  {title:'«Океан идей»', link:'https://encyclopediasyserti.tilda.ws/#okean', text:'Проекты и творчество.', img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=cover&w=800&q=80', color:'#469cff'},
  {title:'Строчевая вышивка', link:'https://encyclopediasyserti.tilda.ws/#stroch', text:'Особенности техники строчевой вышивки.', img:'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=cover&w=800&q=80', color:'#ad256a'},
  {title:'Ткачество.', link:'https://encyclopediasyserti.tilda.ws/#tkachestvo', text:'Традиции, станки и материалы.', img:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=cover&w=800&q=80', color:'#2cb4c3'},
  {title:'Филейное вязание', link:'https://encyclopediasyserti.tilda.ws/#vill', text:'Техника филейного вязания.', img:'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=cover&w=800&q=80', color:'#a29f87'}
];
const container = document.querySelector('.crafts-carousel-container');
const bgImage = container.querySelector('.bg-image');
const sideInfo = container.querySelector('.side-info');
const changeTitle = container.querySelector('.change-title');
const infoText = container.querySelector('.info-text');
const infoBtn = container.querySelector('.side-btn');
const carousel = container.querySelector('.carousel');
const arrowLeft = container.querySelector('#arrowLeft');
const arrowRight = container.querySelector('#arrowRight');
let centerIdx = 0;
const visible = 5;
let isAnimating = false;
let lastClicked = 0;
function render(direction = 0) {
  carousel.innerHTML = '';
  let N = crafts.length;
  for(let pos=0; pos < visible; pos++) {
    let dataIdx = (centerIdx + pos - Math.floor(visible/2) + N)%N;
    let div = document.createElement('div');
    div.className = 'carousel-rect show-center';
    div.style.backgroundImage = `url('${crafts[dataIdx].img}')`;
    div.innerHTML = `<div class="rect-title">${crafts[dataIdx].title}</div>`;
    div.onclick = () => {
      setInfo(dataIdx);
      lastClicked = dataIdx;
      bgImage.style.backgroundImage = `url('${crafts[dataIdx].img}')`;
      bgImage.style.opacity = 1;
    };
    div.onmouseenter = function() {
      div.style.transform = 'scale(1.16)';
      div.style.boxShadow = '0 25px 56px #000b';
      div.style.zIndex = "38";
    };
    div.onmouseleave = function() {
      div.style.transform = 'scale(1)';
      div.style.boxShadow = '0 6px 24px #0004';
      div.style.zIndex = '10';
    };
    carousel.appendChild(div);
  }
  // анимация сдвига карточек
 
}
if(arrowLeft) arrowLeft.onclick = function() {
  if (isAnimating) return;
  centerIdx = (centerIdx-1 + crafts.length)%crafts.length;
  render(-1);
};
if(arrowRight) arrowRight.onclick = function() {
  if (isAnimating) return;
  centerIdx = (centerIdx+1)%crafts.length;
  render(1);
};
function setInfo(i){
  changeTitle.textContent = crafts[i].title;
  infoText.textContent = crafts[i].text;
  infoBtn.textContent = crafts[i].title;
  infoBtn.style.display = '';
  infoBtn.style.background = crafts[i].color;
  infoBtn.onclick = ()=>window.open(crafts[i].link, '_blank');
  sideInfo.style.zIndex = 11;
}
setInfo(0);
bgImage.style.backgroundImage = `url('${crafts[0].img}')`;
bgImage.style.opacity = 1;
render(0);
})();


