import { PswController } from "./controllers/PswController.js";

document.addEventListener("DOMContentLoaded", function () {
    const buttonShowHide = document.querySelectorAll(".showHide");
    const psw = document.querySelector("#psw") as HTMLInputElement;
    const pswCheck = document.querySelector("#pswCheck") as HTMLInputElement;
    const pswController = new PswController();
    buttonShowHide.forEach(function (button) {
        const bottone = button as HTMLButtonElement;
        bottone.addEventListener("click", function () {
            if (bottone.classList.contains("psw")) {
                pswController.setPsw(psw, bottone);
            } else if (bottone.classList.contains("pswCheck")) {
                pswController.setPsw(pswCheck, bottone);
            }
        });
    });
});
