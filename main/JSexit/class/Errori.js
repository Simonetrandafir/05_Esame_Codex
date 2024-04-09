export class Errori {
    gestisciErrore(tuple, input) {
        try {
            const divErrore = input.nextElementSibling;
            if (!divErrore) {
                throw new Error("GE-01");
            }
            const msgAiuto = divErrore.querySelector(".invalid-help");
            if (!msgAiuto) {
                throw new Error("GE-00");
            }
            switch (tuple[0]) {
                case false:
                    if (input.classList.contains("is-valid")) {
                        input.classList.remove("is-valid");
                    }
                    input.classList.add("is-invalid");
                    msgAiuto.textContent = tuple[1];
                    break;
                case true:
                    if (input.classList.contains("is-invalid")) {
                        input.classList.remove("is-invalid");
                    }
                    input.classList.add("is-valid");
                    msgAiuto.textContent = "";
                    break;
                default:
                    break;
            }
        }
        catch (error) {
            console.error("GE" + error);
        }
    }
    gestisciCheckDati(x, input) {
        switch (x) {
            case false:
                if (input.classList.contains("is-valid")) {
                    input.classList.remove("is-valid");
                }
                input.classList.add("is-invalid");
                break;
            case true:
                if (input.classList.contains("is-invalid")) {
                    input.classList.remove("is-invalid");
                }
                input.classList.add("is-valid");
                break;
            default:
                break;
        }
    }
    gestisciErrorePsw(tuple, input) {
        try {
            const divErrore = input.nextElementSibling;
            if (!divErrore) {
                throw new Error("GEP-01");
            }
            const msgAiuto = divErrore.querySelector(".invalid-help");
            if (!msgAiuto) {
                throw new Error("GEP-00");
            }
            const parentDiv = input.parentElement;
            if (!parentDiv) {
                throw new Error("GEP-02");
            }
            const progressDiv = parentDiv.nextElementSibling;
            if (!progressDiv) {
                throw new Error("GEP-03");
            }
            const progressBar = progressDiv.querySelector(".progress-bar");
            if (!progressBar) {
                throw new Error("GEP-03");
            }
            progressBar.style.width = `${tuple[2]}%`;
            switch (tuple[0]) {
                case false:
                    if (input.classList.contains("is-valid")) {
                        input.classList.remove("is-valid");
                    }
                    input.classList.add("is-invalid");
                    msgAiuto.textContent = tuple[1];
                    if (!progressBar.classList.contains("bg-danger")) {
                        progressBar.classList.add("bg-danger");
                    }
                    if (progressBar.classList.contains("bg-succes")) {
                        progressBar.classList.remove("bg-success");
                    }
                    break;
                case true:
                    if (input.classList.contains("is-invalid")) {
                        input.classList.remove("is-invalid");
                    }
                    input.classList.add("is-valid");
                    msgAiuto.textContent = "";
                    if (progressBar.classList.contains("bg-danger")) {
                        progressBar.classList.remove("bg-danger");
                    }
                    if (!progressBar.classList.contains("bg-succes")) {
                        progressBar.classList.add("bg-success");
                    }
                    break;
                default:
                    break;
            }
        }
        catch (error) {
            console.error("GEP" + error);
        }
    }
    gestisciProgress(input, tipoEvento) {
        try {
            const parentDiv = input.parentElement;
            if (!parentDiv) {
                throw new Error("GEP-02");
            }
            const progressDiv = parentDiv.nextElementSibling;
            if (!progressDiv) {
                throw new Error("GEP-03");
            }
            const progressBar = progressDiv.querySelector(".progress-bar");
            if (!progressBar) {
                throw new Error("GEP-03");
            }
            if (tipoEvento === "focus") {
                if (progressDiv.classList.contains("d-none")) {
                    progressDiv.classList.remove("d-none");
                }
            }
            else if (tipoEvento === "blur") {
                if (!progressDiv.classList.contains("d-none")) {
                    progressDiv.classList.add("d-none");
                }
            }
        }
        catch (error) {
            console.error("GPR" + error);
        }
    }
    pulisciStato(input) {
        if (input.classList.contains("is-invalid")) {
            input.classList.remove("is-invalid");
        }
        if (input.classList.contains("is-valid")) {
            input.classList.remove("is-valid");
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVFMvY2xhc3MvRXJyb3JpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBLE1BQU0sT0FBTyxNQUFNO0lBUVIsY0FBYyxDQUFDLEtBQXdCLEVBQUUsS0FBa0I7UUFDOUQsSUFBSSxDQUFDO1lBQ0QsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDO1lBQzNDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDYixNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLENBQUM7WUFDRCxNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBb0IsQ0FBQztZQUM3RSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ1osTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QixDQUFDO1lBR0QsUUFBUSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDZixLQUFLLEtBQUs7b0JBQ04sSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO3dCQUN2QyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDdkMsQ0FBQztvQkFDRCxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDbEMsUUFBUSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLE1BQU07Z0JBQ1YsS0FBSyxJQUFJO29CQUNMLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQzt3QkFDekMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3pDLENBQUM7b0JBQ0QsS0FBSyxDQUFDLFNBQVMs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