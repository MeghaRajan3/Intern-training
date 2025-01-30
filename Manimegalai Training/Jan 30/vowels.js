// Write a function to Count number of Vowels in String passed as parameter
const count=()=>{
    let value="Manimegalai".split("")
    let vowels=["a","e","i","o","u"]
    let result=[]
    
    for(i=0;i<value.length;i++){
        if(vowels.includes(value[i])){
        result.push(value[i]);}
    }console.log(result.length)
};


count()