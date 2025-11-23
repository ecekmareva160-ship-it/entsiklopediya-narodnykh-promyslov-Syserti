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
  {title:'Введение', link:'#', text:'Выберите главу, чтобы прочитать её краткое содержание и перейти к полному тексту.', 
    img:'js/imges/ved.png',  color:'#000000ff'},
  {title:'1. Валяние', link:'https://encyclopediasyserti.tilda.ws/#qwertyuiop', 
    text:'Валяние валенок — старинный промысл Сысерти. В XX веке валенки  делали и на предприятиях, и частные мастера: тёплая и практичная обувь была необходимой для уральских зим. Сейчас традиция сохранена в виде художественного валяния украшений и сувениров ручной работы.', 
    img:'js/imges/il-1.png',  color:'rgba(160, 119, 6, 1)'},
  {title:'2. Вязание', link:'https://encyclopediasyserti.tilda.ws/#3ert', text:'Вязание на Урале зародилось как необходимость, продиктованная суровым климатом, и было перенято у коренных народов. Со временем этот промысел эволюционировал от создания тёплой одежды до декоративных изделий, сохранившись как живая традиция, в которой ценится тепло человеческих рук и уникальность.', 
    img:'js/imges/il-2.png',  color:'#998d64ff'},
  {title:'3. Вышивка', link:'https://encyclopediasyserti.tilda.ws/#asdfghjkl', text:'Искусство вышивки — одно из самых доступных и массовых ремесел Сысерти, требовавшее лишь иглы с нитью. На смену изящной вышивке гладью XIX столетия пришла кропотливая работа крестом, а в наше время популярность завоевала вышивка бисером, сохраняя традиции рукоделия в новых формах.', 
    img:'js/imges/il-3.png', color:'#639155ff'},
  {title:'4. Гончарный промысел', link:'https://encyclopediasyserti.tilda.ws/#gonchar', text:'В Сысерти с XVIII века делали простую глиняную посуду. Местная глина была неидеальной, но удобные крынки и горшки пользовались спросом. В  XX  веке это ремесло продолжал Леонид Гилёв. Он вручную создавал точные копии старинных предметов: щанки для еды, походные кувшины и даже глиняные умывальники.', 
    img:'js/imges/il-4.png' , color:'#d1a572ff'},
  {title:'5. "Дамские штучки"', link:'https://encyclopediasyserti.tilda.ws/#derevo', text:'Клуб «Дамские штучки» под руководством Ольги Тимофеевой объединяет сысертских мастериц. Участницы осваивают разные техники — от машинного валяния до японской аппликации, изучают символику старинных узоров и вместе создают проекты, которые регулярно побеждают на конкурсах.', 
    img:'js/imges/il-5.png', color:'#d35454ff'},
  {title:'6. Деревообрабатывающий промысел.', link:'https://encyclopediasyserti.tilda.ws/#derevo', text:'Из дерева делали всё для жизни: от саней и мебели до резных наличников на домах. В каждой семье были деревянные прялки, а парни дарили девушкам резные валики для стирки. Сегодня традицию продолжают скульпторы и художники, которые создают из дерева скульптуры и предметы искусства.', 
    img:'js/imges/il-6.png', color:'#50b6c4ff'},
  {title:'7. Плетение из лозы', link:'https://encyclopediasyserti.tilda.ws/#loza', text:'В Сысерти плетёные корзины из ивы были частью быта. Эту традицию в наши дни продолжает Алексей Фролов. Освоив ремесло самостоятельно, он за несколько лет прошёл путь от первой чашечки до создания больших изделий, прославивших его мастерство далеко за пределами родного города.', 
    img:'js/imges/il-7.png', color:'#a29f87'},
  {title:'8. Камнерезный промысел', link:'https://encyclopediasyserti.tilda.ws/#kamen', text:'Юрий Ильмурзин добывает минералы и мастерит сувениры для своей «Каменной лавки», а под наставничеством Елены Секачёвой учащиеся школы №6 уже больше десяти лет собирают коллекцию минералов родного края и создают из них собственные работы, продолжая дело неизвестного мастера, чья минеральная горка хранится в школьном музее с 1970-х годов.', 
    img:'js/imges/il-8.png', color:'#af5ecfff'},
  {title:'9. Кожевенный промысел', link:'https://encyclopediasyserti.tilda.ws/#koggg', text:'Кожевенный промысел Сысерти, где столетиями выделывали шкуры для тулупов и полушубков, в XXI веке нашел своего мастера в лице Ивана Алонсо. Начав с изготовления ремешков для часов, он методом проб и ошибок освоил ремесло и превратил хобби в профессиональное дело, используя сегодня кожу высшего качества и инструменты из разных стран мира.', 
    img:'js/imges/il-9.png', color:'#2878a7ff'},
  {title:'10. Кружево на коклюшках', link:'https://encyclopediasyserti.tilda.ws/#kokoko', text:'Сысертское кружевоплетение на коклюшках, известное с XVII-XVIII веков, изначально было домашним промыслом жен рабочих завода. Как и мать писателя Бажова, многие мастерицы выполняли заказы, обеспечивая дополнительные средства для семьи. Интерес к этой технике с замысловатыми узорами сохраняется до настоящего времени, оставаясь частью местной культурной традиции.', 
    img:'js/imges/il-10.png', color:'#345737ff'},
  {title:'11. Кукольный промысел.', link:'https://encyclopediasyserti.tilda.ws/#kykla', text:'Сысертские мастерицы создают кукол, будоражащие детскую фантазию, в отличие от многих современных игрушек. Среди них — Елена Секачёва, работающая в технике ватной игрушки и смешанных техниках, Инна Аширова с её эмоциональными куклами-бабушками и Ольга Шаврина, чьи мишки получили признание на международных выставках. ', 
    img:'js/imges/il-11.png', color:'#c5b27eff'},
  {title:'12. Медно - слесарный промысел', link:'https://encyclopediasyserti.tilda.ws/#medno', text:'**Сысертские мастера-медники XIX века создавали медные предметы быта: Алексей Банников — рукомойники и чаши, братья Стихины — кофейники и вазы, Григорий Макаров — кузнечные изделия и механизмы.', 
    img:'js/imges/il-12.png', color:'#000000ff'},
  {title:'13. «Океан идей»', link:'https://encyclopediasyserti.tilda.ws/#okean', text:'Магазин «Океан идей» в Сысерти — творческое пространство, созданное Татьяной Бутаковой. Здесь представлены работы местных мастериц в разных техниках, а сама хозяйка проводит мастер-классы и демонстрирует собственные произведения, вдохновляя посетителей на занятия рукоделием.', 
    img:'js/imges/il-13.png', color:'#a29f87'},
  {title:'14. Ткачество.', link:'https://encyclopediasyserti.tilda.ws/#tkachestvo', text:'В каждом доме стояли ткацкие станки. Местные мастерицы создавали половики с характерными узорами - полосами и ромбами, используя технику "стлань" и новгородские мотивы. Сегодня традицию возрождает Дом ремёсел, а фестиваль "На зелёной горке холст" собирает талантливых мастеров со всей России.', 
    img:'js/imges/il-14.png',  color:'#a17cb3ff'},
  {title:'16. Филейное вязание', link:'https://encyclopediasyserti.tilda.ws/#vill', text:'Филейное вязание и вышивка гарусом были популярны в Сысерти в начале XX века. Эти техники требовали особой точности: мастерицы создавали сложные узоры на сетчатой основе, где любая ошибка могла испортить изделие. Работы в филейной технике украшали домашний текстиль - скатерти, дорожки и накроватники, часто сочетаясь с другими видами рукоделия.', 
    img:'js/imges/il-15.png', color:'#c29500ff'}
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
const leftArrowBtn = document.getElementById('goToFirstBlock');
if (leftArrowBtn) {
  leftArrowBtn.onclick = function() {
    window.open(crafts[0].link, '_blank');
  };
}
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


