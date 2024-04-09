export class Toast {
    toastController(dati) {
        return this.gestioneToast(dati);
    }
    gestioneToast(dati) {
        try {
            const elementi = this.trovaToast();
            if (!elementi) {
                throw new Error("GT-1");
            }
            const divLiveToast = elementi[0];
            const headerToast = elementi[1];
            const txtHeader = headerToast.querySelector("strong");
            if (!txtHeader) {
                throw new Error("GT-2");
            }
            const bodyToast = elementi[2];
            const dangerIcon = elementi[3];
            const successIcon = elementi[4];
            const closeToast = elementi[5];
            if (!divLiveToast.classList.contains("d-block")) {
                divLiveToast.classList.add("d-block");
            }
            if (divLiveToast.classList.contains("d-none")) {
                divLiveToast.classList.remove("d-none");
            }
            divLiveToast.style.transition = "opacity 1.0s ease";
            divLiveToast.style.opacity = "1";
            if (dati[0] === false) {
                divLiveToast.classList.remove("text-bg-success");
                divLiveToast.classList.add("text-bg-danger");
                successIcon.classList.remove("d-block");
                successIcon.classList.add("d-none");
                dangerIcon.classList.add("d-block");
                dangerIcon.classList.remove("d-none");
                txtHeader.textContent = "Attenzione";
                txtHeader.classList.remove("text-success");
                txtHeader.classList.add("text-danger");
            }
            else if (dati[0] === true) {
                divLiveToast.classList.remove("text-bg-danger");
                divLiveToast.classList.add("text-bg-success");
                dangerIcon.classList.remove("d-block");
                dangerIcon.classList.add("d-none");
                successIcon.classList.add("d-block");
                successIcon.classList.remove("d-none");
                txtHeader.textContent = "Successo";
                txtHeader.classList.remove("text-danger");
                txtHeader.classList.add("text-success");
            }
            bodyToast.textContent = dati[1];
            closeToast.addEventListener("click", (event) => {
                divLiveToast.style.opacity = "0";
                setTimeout(() => {
                    if (divLiveToast.classList.contains("d-block")) {
                        divLiveToast.classList.remove("d-block");
                    }
                    if (!divLiveToast.classList.contains("d-none")) {
                        divLiveToast.classList.add("d-none");
                    }
                }, 1000);
            });
            setTimeout(() => {
                divLiveToast.style.opacity = "0";
                setTimeout(() => {
                    if (divLiveToast.classList.contains("d-block")) {
                        divLiveToast.classList.remove("d-block");
                    }
                    if (!divLiveToast.classList.contains("d-none")) {
                        divLiveToast.classList.add("d-none");
                    }
                }, 1000);
            }, 3000);
        }
        catch (error) {
            console.error("GT" + error);
        }
    }
    trovaToast() {
        try {
            const toastDiv = document.querySelector("#liveToast");
            if (!toastDiv) {
                throw new Error("TT-01");
            }
            const headToast = toastDiv?.querySelector(".toast-header");
            if (!headToast) {
                throw new Error("TT-02");
            }
            const bodyToast = toastDiv?.querySelector(".toast-body");
            if (!bodyToast) {
                throw new Error("TT-03");
            }
            const dangerIcon = headToast?.querySelector(".bi-exclamation-triangle");
            if (!dangerIcon) {
                throw new Error("TT-04");
            }
            const successIcon = headToast?.querySelector(".bi-check2-circle");
            if (!successIcon) {
                throw new Error("TT-05");
            }
            const closeToast = headToast?.querySelector(".closeToast");
            if (!closeToast) {
                throw new Error("TT-06");
            }
            const toastElement = [
                toastDiv,
                headToast,
                bodyToast,
                dangerIcon,
                successIcon,
                closeToast,
            ];
            return toastElement;
        }
        catch (error) {
            console.error("TT" + error);
            return [undefined, undefined, undefined, undefined, undefined, undefined];
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVFMvY29udHJvbGxlcnMvdG9hc3RDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BLE1BQU0sT0FBTyxLQUFLO0lBT1AsZUFBZSxDQUFDLElBQXVCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBUU8sYUFBYSxDQUFDLElBQXVCO1FBQ3pDLElBQUksQ0FBQztZQUNELE1BQU0sUUFBUSxHQUE0QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDNUQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUIsQ0FBQztZQUVELE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQWdCLENBQUM7WUFDaEQsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBZ0IsQ0FBQztZQUMvQyxNQUFNLFNBQVMsR0FBZ0IsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQWdCLENBQUM7WUFDbEYsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUIsQ0FBQztZQUNELE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQWdCLENBQUM7WUFDN0MsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBZ0IsQ0FBQztZQUM5QyxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFnQixDQUFDO1lBQy9DLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQXNCLENBQUM7WUFFcEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7Z0JBQzlDLFlBQVksQ0FB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