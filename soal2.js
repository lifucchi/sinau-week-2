// 2. FizzBuzz

// Soal: Buatlah sebuah fungsi yang mencetak angka dari 1 hingga n. 
// Untuk setiap angka yang merupakan kelipatan 3, cetak "Fizz" sebagai gantinya. 
// Untuk kelipatan 5, cetak "Buzz". 
//Dan untuk angka yang merupakan kelipatan 3 dan 5, cetak "FizzBuzz".

// Contoh:

fizzBuzz(15);
// /*
// Output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// */


function fizzBuzz(number){
    for (let i = 1; i <= number; i++) {
        if (i%3 == 0 && i%5 == 0){
            console.log("FizzBuzz");
        }else if (i%3 == 0) {
            console.log("Fizz");
        }else if (i%5 == 0){
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
};
