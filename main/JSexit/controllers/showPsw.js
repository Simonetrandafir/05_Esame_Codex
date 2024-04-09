export class PswController {
    setPsw() {
        return this.psw();
    }
    setPswCheck() {
        return this.pswCheck();
    }
    psw() {
        try {
            const psw = document.getElementById("psw");
            if (!psw) {
                throw new Error("PSW-1");
            }
            this.showHide(psw);
        }
        catch (error) {
            console.error("PSWC" + error);
        }
    }
    pswCheck() {
        try {
            const pswCheck = document.getElementById("pswCheck");
            if (!pswCheck) {
                throw new Error("PSW-1");
            }
            this.showHide(pswCheck);
        }
        catch (error) {
            console.error("PSWC" + error);
        }
    }
    showHide(input) {
        try {
            switch (input.type) {
                case "password":
                    input.type = "text";
                    break;
                case "text":
                    input.type = "password";
                    break;
                default:
                    break;
            }
        }
        catch (error) {
            console.error("SH" + error);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd1Bzdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1RTL2NvbnRyb2xsZXJzL3Nob3dQc3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLGFBQWE7SUFDZixNQUFNO1FBQ1QsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNNLFdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ08sR0FBRztRQUNQLElBQUksQ0FBQztZQUNELE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFxQixDQUFDO1lBQy9ELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDUCxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLENBQUM7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1lBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbEMsQ0FBQztJQUNMLENBQUM7SUFDTyxRQUFRO1FBQ1osSUFBSSxDQUFDO1lBQ0QsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQXFCLENBQUM7WUFDekUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0IsQ0FBQztZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7WUFDYixPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNsQyxDQUFDO0lBQ0wsQ0FBQztJQUNPLFFBQVEsQ0FBQyxLQUF1QjtRQUNwQyxJQUFJLENBQUM7WUFDRCxRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDakIsS0FBSyxVQUFVO29CQUNYLEtBQUssQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO29CQUNwQixNQUFNO2dCQUNWLEtBQUssTUFBTTtvQkFDUCxLQUFLLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztvQkFDeEIsTUFBTTtnQkFDVjtvQkFDSSxNQUFNO1lBQ2QsQ0FBQztRQUNMLENBQUM7UUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1lBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQztJQUNMLENBQUM7Q0FDSiJ9