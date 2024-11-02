// 5. Urutkan Array Tanpa Metode Bawaan

// Soal: Buatlah fungsi yang menerima array angka dan mengembalikan array 
//yang sudah diurutkan dalam urutan menaik tanpa menggunakan metode bawaan JavaScript seperti .sort().

// Contoh:

sortArray([5, 2, 9, 1, 5, 6]); // [1, 2, 5, 5, 6, 9]
sortArray([5, 2, 9, 1, 5, 6,-1]);

// Bubble sort
function sortArray(array){
    let l = array.length;
    for (let i = 0; i <= l-1; i++) {
        for (let j = 0; j <= l-1-i; j++) {
            if (array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    console.log(array);
};
