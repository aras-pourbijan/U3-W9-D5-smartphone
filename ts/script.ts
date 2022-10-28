abstract class navigatore {
    protected marca: string;
    protected modello: string;
    protected credito: number;
    protected minutiConsumati: number;
    protected costoChiamata: number;

    constructor(marca: string, modello: string) {
        this.marca = marca;
        this.modello = modello;
        this.credito = 0;
        this.minutiConsumati = 0;
        this.costoChiamata = 0.2;
    }

    protected ricarica(e: number) {}
    protected chiamnata(m: number) {}

    public numero404(): void {}

    protected getNumeroChiamate(): void {}

    protected azzerraChiamate(): void {}
}

abstract class cellulari extends navigatore {}

document.addEventListener("DOMContentLoaded", () => {
    let page = document.querySelector(".container") as HTMLElement;
    let display = <HTMLInputElement>page.querySelector(".display");
    class smartPhone extends cellulari {
        scontoSullaChiamata: number;

        constructor(marca: string, modello: string, scontoSullaChiamata: number) {
            super(marca, modello);
            this.scontoSullaChiamata = scontoSullaChiamata;
        }

        ricarica(e: number) {
            this.credito += this.credito + e;
            return (display.textContent = `il tuo credito: ${this.credito}`);
        }

        chiamnata(m: number) {
            if (this.credito >= 0.2) {
                this.credito = this.credito - (m * this.costoChiamata * (100 - this.scontoSullaChiamata)) / 100;
                this.minutiConsumati = this.minutiConsumati + m;
            } else {
                display.textContent = "non hai creddito sufficente , fai una ricarica per chiamare!";
            }
        }

        public numero404() {
            this.credito < this.costoChiamata * 10
                ? (display.textContent = `il tuo credito : ${this.credito} ma attenzione hai pocco  credito, ti conviene effettuare una ricarica!`)
                : (display.textContent = `il tuo credito : ${this.credito}`);
        }

        getNumeroChiamate() {
            return (display.textContent = `totale chiamate finora: ${this.minutiConsumati}`);
        }

        azzerraChiamate() {
            this.minutiConsumati = 0;
            return (display.textContent = "hai azzerato i minuti consumati!");
        }
    }

    let userbox = page.querySelector(".userbox");
    let marca = page.querySelector(".userbox :nth-child(1)") as HTMLInputElement;
    let modello = page.querySelector(".userbox :nth-child(2)") as HTMLInputElement;
    let sconto = page.querySelector(".userbox :nth-child(3)") as HTMLInputElement;
    let btn = document.querySelector(".userbox button") as HTMLButtonElement;
    btn.addEventListener("click", addSmartphone);

    let users: object[] = [];
    function addSmartphone() {
        users.push(new smartPhone(marca.value, modello.value, Number(sconto.value)));
        console.log(users);
        let userInfo = document.querySelector(".user-info") as HTMLElement;
        userInfo.innerHTML = `questo utente ha un smartphone di marca ${marca.value} e modello ${modello.value} e puo ${sconto.value}avere  % di sconto ! `;
    }

    let u1 = new smartPhone("samsung", "galaxy s22", 0);
    let u2 = new smartPhone("apple", "iphone 14", 0);
    let u3 = new smartPhone("xiaomi", "12 pro", 20);

    u1.ricarica(10);
    u1.chiamnata(20);
    u1.numero404();

    u1.chiamnata(14);
    u1.getNumeroChiamate();

    //     u1.chiamnata(53);
    //     u1.chiamnata(2);
    // })
});
