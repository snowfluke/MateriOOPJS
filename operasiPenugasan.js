class OperasiPenugasan{
    angka;
    operand;

    constructor(a,b){
        this.angka = a
        this.operand = b
    }

    samaDengan(){
        this.angka = this.operand
        // nilai angka menjadi sama dengan operand
        return this.angka
    }

    tambahSamaDengan(){
        this.angka += this.operand
        // nilai angka = angka + operand
        return this.angka
    }

    kurangSamaDengan(){
        this.angka -= this.operand
        // nilai angka = angka - operand
        return this.angka
    }

    kaliSamaDengan(){
        this.angka *= this.operand
        // nilai angka = angka * operand
        return this.angka
    }

    bagiSamaDengan(){
        this.angka /= this.operand
        // nilai angka = angka / operand
        return this.angka
    }

    sisaSamaDengan(){
        this.angka %= this.operand
        // nilai angka = angka % operand
        return this.angka
    }
}

// Membuat object angka dengan angka = 10 dan operand = 2
const angka = new OperasiPenugasan(10,2)

console.log("Angka awal: ", angka.angka)
console.log("Operand: ", angka.operand)
console.log("====================")
console.log("Angka = Operand: ", angka.samaDengan())
console.log("Angka += Operand: ", angka.tambahSamaDengan())
console.log("Angka -= Operand: ", angka.kurangSamaDengan())
console.log("Angka *= Operand: ", angka.kaliSamaDengan())
console.log("Angka /= Operand: ", angka.bagiSamaDengan())
console.log("Angka %= Operand: ", angka.sisaSamaDengan())
