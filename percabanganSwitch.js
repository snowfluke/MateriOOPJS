class UtsPbo{
    constructor(nama, nilaiUtsPbo){
        this.nama = nama
        this.nilai = nilaiUtsPbo
    }

    cek(){
        let nilai = this.nilai

    // Perhatikan dan analisis kode switch dengan teliti
    // Switch() hanya menerima ekspresi, kemudian ekspresi
    // di evaluasi menggunakn case :
    // dan break untuk keluar dari switch
    // default sama saja dengan else

        switch(nilai){
            case nilai > 85:
                console.log(`${this.nama}, Kamu mendapat nilai A`)
                break;
            case nilai > 75:
                console.log(`${this.nama}, Kamu mendapat nilai B`)
                break;
            case nilai > 60:
                console.log(`${this.nama}, Kamu mendapat nilai C`)
                break;
            default:
                console.log(`${this.nama}, Kamu mendapat nilai D`)
                break;
        }
    }

}

const edgar = new UtsPbo("Edgar", 70)
edgar.cek()
