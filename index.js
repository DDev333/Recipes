const show = () => {
    const a = document.querySelector('.nav-links');
    a.classList.toggle('show-links');
}
const date = document.getElementById("date");
const year = new Date().getFullYear();
date.innerHTML = year;