import { FormRegistrazione } from "./class/FormRegistrazione.js";
(() => {
    document.addEventListener("DOMContentLoaded", function () {
        const registrazioneForm = new FormRegistrazione();
    });
    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach((form) => {
        const formType = form.getAttribute("data-form-type");
        form.addEventListener("submit", (event) => {
            switch (formType) {
                case "accedi":
                    if (!form.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                        form.classList.add("was-validated");
                    }
                    break;
                default:
                    break;
            }
        }, false);
    });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL1RTL3ZhbGlkYUZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHakUsQ0FBQyxHQUFHLEVBQUU7SUFDRixRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUU7UUFDMUMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7SUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQWtCLG1CQUFtQixDQUFDLENBQUM7SUFFOUUsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUUvQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFckQsSUFBSSxDQUFDLGdCQUFnQixDQUNqQixRQUFRLEVBQ1IsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNOLFFBQVEsUUFBUSxFQUFFLENBQUM7Z0JBRWYsS0FBSyxRQUFRO29CQUVULElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQzt3QkFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO3dCQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7d0JBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUN4QyxDQUFDO29CQUNELE1BQU07Z0JBRVY7b0JBQ0ksTUFBTTtZQUNkLENBQUM7UUFDTCxDQUFDLEVBQ0QsS0FBSyxDQUNSLENBQUM7SUFDTixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMifQ==