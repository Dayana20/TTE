var input = '';

console.log(this.input);

function displayFormContents(someForm) {
    input=document.getElementById('image1').value;
    console.log(this.input);

    // save data value
    localStorage.setItem("name", this.input);
    // alert(input);
}

function getCharacter(someForm) {
    input=document.getElementById('image2').value;
    console.log(this.input);

    // save data value
    localStorage.setItem("name", this.input);
    // alert(input);
}

var name = localStorage.getItem("name");
var elem = document.getElementById('img1');
if(elem){
    console.log("setting up");
    // later use if statement to do varied images of same character
    // retrieve data value
    document.getElementById("img1").src =this.name;
    document.getElementById("img2").src =this.name;
    document.getElementById("img3").src =this.name;
    document.getElementById("img4").src =this.name;
}

console.log("finished switching images");
