const words = ["apple", "bat", "ball", "pineapple", "cat"];

function long(words){
    return words.length >4;
}
let result=words.filter(long);
console.log(result);