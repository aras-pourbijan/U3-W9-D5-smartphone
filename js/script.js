"use strict";
document.addEventListener("DOMContentLoaded", () => {
    let text = document.querySelector(".container p");
});
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
class smartPhone extends cellulari {
    constructor(marca, modello, scontoSullaChiamata) {
        super(marca, modello);
        this.scontoSullaChiamata = scontoSullaChiamata;
    }
    ricarica(e) {
        this.credito += this.credito + e;
        return console.log(`il tuo credito: ${this.credito}`);
    }
    chiamnata(m) {
        if (this.credito >= 0.2) {
            this.credito = this.credito - (m * this.costoChiamata * (100 - this.scontoSullaChiamata)) / 100;
            this.minutiConsumati = this.minutiConsumati + m;
        }
        else {
            console.log("non hai creddito sufficente , fai una ricarica per chiamare!");
        }
    }
    numero404() {
        this.credito < this.costoChiamata * 10
            ? console.log(`il tuo credito : ${this.credito} ma attenzione hai pocco  credito, ti conviene effettuare una ricarica!`)
            : console.log(`il tuo credito : ${this.credito}`);
    }
    getNumeroChiamate() {
        return console.log(this.minutiConsumati);
    }
    azzerraChiamate() {
        this.minutiConsumati = 0;
        return console.log("hai azzerato i minuti consumati!");
    }
}
let u1 = new smartPhone("samsung", "galaxy s22", 0);
u1.ricarica(10);
u1.chiamnata(1);
u1.numero404();
u1.chiamnata(3);
u1.chiamnata(14);
u1.chiamnata(53);
u1.chiamnata(2);
