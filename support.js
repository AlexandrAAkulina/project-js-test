// import save_the_children from './img/save_the_children.png';
// import hope from './img/hope.png';
// import united_24 from './img/united_24.png';
// import medical_corps from './img/medical_corps.png';
// import med_sans_front from './img/med_sans_front.png';
// import razom from './img/razom.png';
// import against_hunger from './img/against_hunger.png';
// import world_vision from './img/world_vision.png';
// import serhiy_prytula from './img/serhiy_prytula.png';

// import img from './img/*.png';

const supportFonds = [
  {
    title: 'Save the Children',
    url:
      'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: './img/save_the_children.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: './img/hope.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: './img/support3.png',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: './img/medical_corps.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: './img/med_sans_front.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: './img/razom.png',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: './img/against_hunger.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: './img/world_vision.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: './img/serhiy_prytula.png',
  },
]



const supportList = document.querySelector('.support-list-js');
const supportSlideBtn = document.querySelector('.support-slide-btn');

supportSlideBtn.addEventListener('click', slideTo);

function createSupportListMarkup() {
    return elems.map(({ title, url, img }, i) =>
        `<li class="support-item">
        <span class='support-item-num'>0${i + 1}</span>
        <a class="support-link" target='blank' href="${url}">
          <img
            class="support-img"
            src="${img}"
            alt="${title}"
          />
        </a>
      </li>`).join('');
}
supportList.innerHTML = createSupportListMarkup(elems);

const supportSlideDownBtn = document.querySelector('.support-slide-down-btn');
const supportSlideUpBtn = document.querySelector('.support-slide-up-btn');

function slideTo() {
    if (supportSlideBtn.classList.contains('top')) {
        supportSlideBtn.classList.remove('top');
        supportSlideUpBtn.style.display = 'none';
        supportSlideDownBtn.style.display = 'block';
        slideTop();
    } else {
        slideBottom();
        supportSlideBtn.classList.add('top');
        supportSlideDownBtn.style.display = 'none';
        supportSlideUpBtn.style.display = 'block';
}
}

function slideTop() {
    supportList.scrollTop = 0;
}

function slideBottom() {
    supportList.scrollTop = supportList.scrollHeight
}



// Герб

// const letters = document.querySelector('.support-icon');

// anime({
//   targets: letters,
//   duration: 5000,
//   easing: 'easeInOutExpo',
//   strokeDashoffset: [anime.setDashoffset, 0]
// });