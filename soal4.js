// 4. Bilangan Prima

// Soal: Buatlah fungsi yang menerima sebuah angka n dan mengembalikan true jika angka tersebut adalah 
// bilangan prima, dan false jika tidak.

// Contoh:

isPrime(7);  // true
isPrime(10); // false
isPrime(21); 
isPrime(7); 
isPrime(83); 
isPrime(11); 

function isPrime(number){
    if (number === 1 || number === 0){
        console.log(false);
    }
    else if (number > 1){
        for (let i = 2; i <= number; i++) {
            if(number%i == 0 && number != i){
                return console.log(false);
            }
          }
        return console.log(true);    
    }
};
