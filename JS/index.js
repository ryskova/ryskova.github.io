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

document.querySelector('.toggle_btn').addEventListener('click', function() {
    document.querySelector('.links').classList.toggle('active');
});


//faq funkčnost otevírání
const otazecky = document.querySelectorAll(".dotazy");

otazecky.forEach(dotazy => {
    dotazy.addEventListener("click", () => {
        dotazy.classList.toggle("active");
    })
})



