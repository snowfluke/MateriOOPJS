class OperatorUnary{
    constructor(a){
        this.nilaiAwal = a
    }

    inc(){
        this.nilaiAwal++
        return
    }

    dec(){
        this.nilaiAwal--
        return
    }
}

// Membuat object skor dengan a = 5
const skor = new OperatorUnary(5)

console.log("Nilai awal: " + skor.nilaiAwal)
skor.inc()
console.log("Setelah di increment: "+ skor.nilaiAwal)
skor.inc()
console.log("Setelah di increment lagi: "+ skor.nilaiAwal)
skor.dec()
console.log("Setelah di decrement: "+ skor.nilaiAwal)
