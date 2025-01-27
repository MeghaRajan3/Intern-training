function str_Random(length){
    let data="andkiksl1234890drhijk"
    let result= ''
    for(let i=0;i<=length;i++){
        let id=Math.floor(Math.random()*data.length)
        result+=data.charAt(id)
    }
console.log(result)
}
str_Random(10);

