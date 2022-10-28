"use strict";
class navigatore {
    constructor(marca, modello) {
        this.marca = marca;
        this.modello = modello;
        this.credito = 0;
        this.minutiConsumati = 0;
        this.costoChiamata = 0.2;
    }
    ricarica(e) { }
    chiamnata(m) { }
    numero404() { }
    getNumeroChiamate() { }
    azzerraChiamate() { }
}
class cellulari extends navigatore {
}
document.addEventListener("DOMContentLoaded", () => {
    let page = document.querySelector(".container");
    let display = page.querySelector(".display");
    class smartPhone extends cellulari {
        constructor(marca, modello, scontoSullaChiamata) {
            super(marca, modello);
            this.scontoSullaChiamata = scontoSullaChiamata;
        }
        ricarica(e) {
            this.credito += this.credito + e;
            return (display.textContent = `il tuo credito: ${this.credito}`);
        }
        chiamnata(m) {
            if (this.credito >= 0.2) {
                this.credito = this.credito - (m * this.costoChiamata * (100 - this.scontoSullaChiamata)) / 100;
                this.minutiConsumati = this.minutiConsumati + m;
            }
            else {
                display.textContent = "non hai creddito sufficente , fai una ricarica per chiamare!";
            }
        }
        numero404() {
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
    let marca = page.querySelector(".userbox :nth-child(1)");
    let modello = page.querySelector(".userbox :nth-child(2)");
    let sconto = page.querySelector(".userbox :nth-child(3)");
    let btn = document.querySelector(".userbox button");
    btn.addEventListener("click", addSmartphone);
    let users = [];
    function addSmartphone() {
        users.push(new smartPhone(marca.value, modello.value, Number(sconto.value)));
        console.log(users);
        let userInfo = document.querySelector(".user-info");
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
