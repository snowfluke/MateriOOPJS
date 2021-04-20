class OperasiPerbandingan{
    constructor(a,b){
        this.angka1 = a
        this.angka2 = b
    }

    sama(){
        // Perhatikan simbolnya
        if(this.angka1 == this.angka2){
            return "angka1 sama dengan angka2"
        }

        return "angka1 tidak sama dengan angka2"
    }

    lebih(){
        if(this.angka1 > this.angka2){
            return "angka1 lebih dari angka2"
        }

        return "angka1 tidak lebih dari angka2"
    }

    lebihSama(){
        if(this.angka1 >= this.angka2){
            return "angka1 sama dengan atau lebih dari angka2"
        }

        return "angka1 tidak sama atau tidak lebih dari angka2"
    }

    kurang(){
        if(this.angka1 < this.angka2){
            return "angka1 kurang dari angka2"
        }

        return "angka1 tidak kurang dari angka2"
    }

    kurangSama(){
        if(this.angka1 <= this.angka2){
            return "angka1 sama dengan atau kurang dari angka2"
        }

        return "angka1 tidak sama atau kurang dari angka2"
    }

    tidakSama(){
        if(this.angka1 != this.angka2){
            return "angka1 tidak sama dengan angka2"
        }

        return "angka1 sama dengan angka2"
    }
}

// Membuat object angkaBaru dengan a = 20 dan b = 5
const angkaBaru = new OperasiPerbandingan(20, 5)

console.log("Angka 1: ",angkaBaru.angka1)
console.log("Angka 2: ",angkaBaru.angka2)
console.log("====================")
console.log(angkaBaru.sama())
console.log(angkaBaru.lebih())
console.log(angkaBaru.lebihSama())
console.log(angkaBaru.kurang())
console.log(angkaBaru.kurangSama())
console.log(angkaBaru.tidakSama())
