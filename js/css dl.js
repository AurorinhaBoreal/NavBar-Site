

function changeTheme() {
    const body = document.querySelector("body");
    const button = document.querySelector(".ctButton");
    const navbar = document.querySelector(".navbarColor");

    body.classList.toggle('dark');
    button.classList.toggle('dark');
    navbar.classList.toggle('dark');
}