// 3. Jumlah Angka dalam Array

// Soal: Buatlah sebuah fungsi yang menerima array dari angka-angka dan mengembalikan jumlah dari semua angkanya. 
//Jika array kosong, kembalikan 0.

// Contoh:
sumArray([1, 2, 3, 4, 5]); 
// 15
sumArray([]);             
// 0

function sumArray(array){
    let l = array.length;
    if (l == 0){
        return console.log(0);
    }
    let sum = array[0];
    for (let i = 1; i < l; i++) {
        sum+=array[i]
    }
    return console.log(sum);

};