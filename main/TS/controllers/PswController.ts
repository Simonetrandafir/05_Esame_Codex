export class PswController {
    public setPsw(psw: HTMLInputElement, button: HTMLButtonElement): void {
        return this.showHide(psw, button);
    }

    private showHide(input: HTMLInputElement, button: HTMLButtonElement): void {
        try {
            if (input.type === "password") {
                input.type = "text";
                button.classList.remove("bi-eye");
                button.classList.add("bi-eye-slash-fill");
            } else if (input.type === "text") {
                input.type = "password";
                button.classList.add("bi-eye");
                button.classList.remove("bi-eye-slash-fill");
            }
        } catch (error) {
            console.error("SH" + error);
        }
    }
}
