// Operasi aritmatika number
class Test{
    main() {

        let angka1 = 7
        let angka2 = 3
        let string1 = 'cortana'
        let objek1 = {nama: 'sasuke'}
        let array1 = ['mobil', 'motor']

        console.log('Perkalian angka*angka: ', angka1*angka2 )
        // Operasi simbol -, *, / dan % dibawah akan menghasilkan NaN
        // Karena operator tersebut khusus untuk angka
        console.log('Perkalian angka*string: ', angka1*string1 )
        console.log('Perkalian angka*array: ', angka1*array1 )
        console.log('Perkalian angka*object: ', angka1*objek1 )

    }
}

const testCase = new Test()
testCase.main()
