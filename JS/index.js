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


//jídlo menu accordion
const menicka = document.querySelectorAll(".nabidky");

menicka.forEach(nabidky => {
    nabidky.addEventListener("click", () => {
        nabidky.classList.toggle("active");
    })
})

//datum pro nadpis o denním menu
const currentDate = new Date();

const daysOfWeek = ["neděli", "pondělí", "úterý", "středu", "čtvrtek", "pátek", "sobotu"];

const dayOfWeek = daysOfWeek[currentDate.getDay()];
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();

const formattedDate = `Denní menu na ${dayOfWeek} ${day}.${month}.${year}`;

document.getElementById("datumjidelnicku").innerHTML = formattedDate;

//faq funkčnost otevírání
const otazecky = document.querySelectorAll(".dotazy");

otazecky.forEach(dotazy => {
    dotazy.addEventListener("click", () => {
        dotazy.classList.toggle("active");
    })
})



