class OperasiAritmatika {
    // property dari object
    constructor(a,b){
        this.angka1 = a
        this.angka2 = b
    }

    // method dari object
    tambah(){
        return this.angka1 + this.angka2
    }

    kurang(){
        // Supaya pengurangan tidak negatif
        if(this.angka1 < this.angka2){
            return this.angka2 - this.angka1
        }
        return this.angka1 - this.angka2
    }

    kali(){
        return this.angka1 * this.angka2
    }

    bagi(){
        // Supaya pembagian tidak desimal
        if(this.angka1 < this.angka2){
            return this.angka2 / this.angka1
        }
        return this.angka1 / this.angka2
    }

    sisa(){
        // Supaya hasil sisa bagi diperoleh dari bilangan terbesar di depan
        if(this.angka1 < this.angka2){
            return this.angka2 % this.angka1
        }
        return this.angka1 % this.angka2
    }
}
        
// Membuat object baru dengan a = 8, dan b = 2
const angkaBaru = new OperasiAritmatika(8,2)

console.log("Angka a: ", angkaBaru.angka1)
console.log("Angka b: ", angkaBaru.angka2)
console.log("====================")
console.log("Penjumlahan: ",angkaBaru.tambah()) // 10
console.log("Pengurangan: ",angkaBaru.kurang()) // 6
console.log("Perkalian: ",angkaBaru.kali()) // 16
console.log("Pembagian: ",angkaBaru.bagi()) // 4
console.log("Sisa bagi: ",angkaBaru.sisa()) // 0
