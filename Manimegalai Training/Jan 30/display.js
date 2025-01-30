// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. 
var library= [ 
    {
        author:"james",
        book:"season show",
        readingStatus: true

    },
{

    author:"ryan",
    book:"wonder winter",
    readingStatus:true
},
{
    author:"neymer",
    book:"world winner",
    readingStatus:false
},
]
let value=library.length;
for(i=0;i<value;i++)
{
    console.log(library[i].author);
    console.log(library[i].book);
    console.log(library[i].readingStatus);
}
