class Salam{
    halo(){
        // Penggabungan dengan menggunakan template literal
        // yaitu petik (`) backtick
        // kemudian mengakses variable di dalam ${}

        let nama = 'Tsukishima'
        let tinggi = 190

        let salam = `Halo ${nama}, tinggimu adalah ${tinggi}cm`
        
        console.log(salam)
    }
}

const tsukishima = new Salam()
tsukishima.halo()
