class Perulangan{
    contohDoWhile(){
        let itachi = 20
        let sasuke = 10

        do{
            console.log("Sasuke lebih hebat dari Itachi")
        }while(sasuke>itachi)

        // Meski itachi lebih besar nilainya dari sasuke
        // Namun "sasuke lebih hebat dari itachi" akan di tampilkan sekali
    }

    contohWhile(){
        let itachi = 20
        let sasuke = 10
        
        while(sasuke>itachi){
            console.log("Sasuke lebih hebat dari Itachi")
        }

        // Sasuke lebih hebat dari itachi tidak akan ditampilkan ke layar
    }

    contohWhileLangsung(){
        let escanor = 10
        let batas = 20
        
    	console.log("=======================================")
        console.log(`Kekuatan escanor: ${escanor}`)
    	console.log("=======================================")

        // selama nilai escanor kurang dari nilai batas

        while (escanor < batas){
            console.log(`Kekuatan escanor bertambah menjadi ${escanor}`)

            escanor++ 
            
            // Tambah kekuatan escanor setiap perulangan
            // sampai escanor melebihi nilai batas, maka perulangan berhenti
        }

        console.log(`Kekuatan Escanor sekarang: ${escanor}`)

    }
}

const coba = new Perulangan()

coba.contohDoWhile()
coba.contohWhile()
coba.contohWhileLangsung()
