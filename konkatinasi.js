// Operator konkatinasi
class Test{
    main() {

        let string1 = 'cortana'
        let angka1 = 7
        let objek1 = {nama: 'sasuke'}
        let array1 = ['mobil', 'motor']
        let boolean1 = true

        console.log('Konkatinasi string+string: ', string1+string1 )

        // Operasi simbol + pada semua operator akan menjadi sebuah string
        console.log('Konkatinasi string+angka: ', string1+angka1 )

        // untuk array akan dipisahkan dengan ',' tiap elemennya
        console.log('Konkatinasi string+array: ', string1+array1 )

        // Untuk boolean, yaitu stringnya (bukan angka 1 atau 0)
        console.log('Konkatinasi string+boolean: ', string1+boolean1 )
        
        // Untuk object, akan di ubah menjadi string [object Object]
        console.log('Konkatinasi string+object: ', string1+objek1 )

    }
}

const testCase2 = new Test()
testCase2.main()
