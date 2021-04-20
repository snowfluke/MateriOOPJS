class OperasiLogika {
    // property dari object
    constructor(a,b){
        // kita akan menangkap nilai a dan b
        // berupa true/false lalu memasukkannya
        // ke dalam variable air1 dan air2.
        // supaya mudah dipahami,
        // jika air1 = true artinya air bening
        // jika false artinya air kotor.
        this.air1 = a
        this.air2 = b
    }

    and(){
        // kita tidak perlu melakukan pengecekan seperti
        // if(this.air1 == true && this.air2 == true)
        // cukup dengan menuliskan variable nya (jika true)
        // dan !variablenya (jika false)

        if(this.air1 && this.air2){
            return "semua air bening"
        }
        return "salah satu air atau semua air kotor"
    }

    or(){
        if(this.air1 || this.air2){
            return "salah satu air atau semua air bening"
        }
        return "air kotor semua"
    }

    not(){
        // perhatikan tanda seru (!)
        // not merupakan operator unary
        if(!this.air1){
            // jika air 1 tidak kotor (not true)
            return "air 1 bening"
        }
        return "air 1 kotor"
    }
}

// Membuat object air dimana air1 = true, air2 = false
const air = new OperasiLogika(true, false)

console.log("Air 1: ", air.air1)
console.log("Air 2: ", air.air2)
console.log("====================")
console.log("Air 1 dan Air 2: ", air.and())
console.log("Air 1 atau Air 2: ", air.or())
console.log("Bukan Air 1: ", air.not())
