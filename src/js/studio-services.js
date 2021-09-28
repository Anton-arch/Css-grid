const gridContainer = document.querySelector('.studio-services__grid');
const toggler = document.querySelector('.studio-services__toggler');
const mainLists = document.querySelectorAll('.studio-services__subgrid_main-list');
const complitedWorks = document.querySelectorAll('.studio-services__subgrid_complited-work');

let currentToggleBtn = toggler.firstElementChild;
let currentMainList = mainLists[0];
let currentCumplitedWorks = complitedWorks[0];

toggler.addEventListener('click', ev => {
  if (ev.target === toggler.firstElementChild || ev.target === toggler.lastElementChild) {
    if (ev.target.classList.contains('active-toggle-btn')) {
      return;
    }

    currentToggleBtn.classList.remove('active-toggle-btn');
    ev.target.classList.add('active-toggle-btn');
    currentToggleBtn = ev.target;

    if (currentToggleBtn.textContent === 'Основной перечень') {
      gridContainer.replaceChild(mainLists[0], currentMainList);
      gridContainer.replaceChild(complitedWorks[0], currentCumplitedWorks);
      mainLists[0].classList.remove('visually-hidden');
      complitedWorks[0].classList.remove('visually-hidden');
      currentMainList = mainLists[0];
      currentCumplitedWorks = complitedWorks[0];
    } else if (currentToggleBtn.textContent === 'Услуги по ретуши') {
      gridContainer.replaceChild(mainLists[1], currentMainList);
      gridContainer.replaceChild(complitedWorks[1], currentCumplitedWorks);
      mainLists[1].classList.remove('visually-hidden');
      complitedWorks[1].classList.remove('visually-hidden');
      currentMainList = mainLists[1];
      currentCumplitedWorks = complitedWorks[1];
    }
  }
})
