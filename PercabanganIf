// Contoh penggunaan if/if-else/if-else-if
class UtsPbo{
    constructor(nama, nilaiUtsPbo){
        this.nama = nama
        this.nilai = nilaiUtsPbo
    }

    // Hanya ada satu if, jika kondisi tidak terpenuhi maka
    // Kode di dalamnya akan diabaikan
    cek1(){
        if(this.nilai > 85){
            // Jika kondisi terpenuhi
            console.log(`${this.nama}, Kamu mendapat nilai A`)
        }
    }

    cek2(){
        if(this.nilai > 85){
            // Jika terpenuhi
            console.log(`${this.nama}, Kamu mendapat nilai A`)
        }else{
            // Jika tidak terpenuhi
            console.log(`${this.nama}, Kamu tidak mendapat nilai A`)
        }
    }

    cek3(){
        if(this.nilai > 85){
            // Jika terpenuhi
            console.log(`${this.nama}, Kamu mendapat nilai A`)

            // Jika tidak terpenuhi lakukan pengecekan kembali
        }else if (this.nilai > 75){
            // Jika pengecekan kedua terpenuhi
            console.log(`${this.nama}, Kamu mendapat nilai B`)
        }else {
            // jika tidak terpenuhi
            console.log(`${this.nama}, Kamu tidak mendapat nilai A maupun B`)
        }
    }
}

const edgar = new UtsPbo("Edgar", 70)
edgar.cek1()
edgar.cek2()
edgar.cek3()

