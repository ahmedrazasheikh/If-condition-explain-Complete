var a = 6
var b = 4 
var c = a > b ;
if(c){
    console.log(c)
}


function valueSubmit(event) {
    event.preventDefault();

    console.log('Working Properly')
}

var id = document.getElementById('submit')
console.log(id)

id.addEventListener('click' , valueSubmit , true )