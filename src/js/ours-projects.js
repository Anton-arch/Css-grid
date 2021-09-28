const sliders = document.querySelectorAll('.ours-projects__slide');
const paginationContainer = document.querySelector('.ours-projects__pagination');
const wrapper = document.querySelector('.ours-projects__slider-wrapper');
let activePaginationBtn;
let currentSlide;

function createPagination(count) {
  const paginationBtn = document.createElement('button');
  paginationBtn.classList.add('ours-projects__pagination-btn');
  paginationBtn.textContent = ++count;

  return paginationBtn;
};

function addPaginationOnPage() {
  for (let i = 0; i < sliders.length; i++) {
    paginationContainer.insertAdjacentElement('beforeend', createPagination(i))
  }

  paginationContainer.firstChild.classList.add('ours-projects__pagination-btn_active');
  activePaginationBtn = paginationContainer.firstChild;
};

paginationContainer.addEventListener('pointerup', ev => {
  currentSlide = wrapper.firstChild;
  wrapper.replaceChild(sliders[ev.target.textContent - 1], wrapper.firstChild)

  activePaginationBtn.classList.remove('ours-projects__pagination-btn_active');
  ev.target.classList.add('ours-projects__pagination-btn_active');
  activePaginationBtn = ev.target;
});
