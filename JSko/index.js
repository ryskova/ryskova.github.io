const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function (){
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    if (isOpen) {
        toggleBtnIcon.classList.remove('fa-bars');
        toggleBtnIcon.classList.add('fa-solid', 'fa-xmark');
    } else {
        toggleBtnIcon.classList.remove('fa-solid', 'fa-xmark');
        toggleBtnIcon.classList.add('fa-solid', 'fa-bars');
    }
}

//menu accordion
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionBody = header.nextElementSibling;
    const chevron = header.querySelector('i');

    if (accordionBody.style.display === 'none') {
      accordionBody.style.display = 'block';
      chevron.classList.remove('fa-chevron-down');
      chevron.classList.add('fa-chevron-up');
    } else {
      accordionBody.style.display = 'none';
      chevron.classList.remove('fa-chevron-up');
      chevron.classList.add('fa-chevron-down');
    }
  });
});