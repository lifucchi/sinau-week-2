// Soal: Buatlah sebuah fungsi yang menerima sebuah string dan 
//mengembalikan true jika string tersebut merupakan palindrome 
//(dibaca sama dari depan dan belakang) dan false jika tidak.
//Contoh:

isPalindrome("racecar"); 
isPalindrome("Racecar"); 
// true
isPalindrome("hello");   
// false

function isPalindrome(str){
    let strlen = str.length
    let l = Math.floor(strlen/2);
    var str = str.toLowerCase();

    for (let i = 0; i < l; i++) {
        if (str[i] != str[strlen-1-i]){
            return console.log(false)
        }
    }
    return console.log(true)
};

