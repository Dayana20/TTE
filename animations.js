var input = '';

console.log(this.input);

function displayFormContents(someForm) {
    input=document.getElementById('image1').value;
    // document.getElementById("character0").src = "images/img1_temp.png";
    console.log(this.input);

    // save data value
    localStorage.setItem("name", this.input);
    // alert(input);
}

function getCharacter(someForm) {
    input=document.getElementById('image2').value;
    // document.getElementById("character0").src = "images/img2.png";
    // console.log("here");
    console.log(this.input);

    // save data value
    localStorage.setItem("name", this.input);
    // alert(input);
}

// var myEle = document.getElementById("character0");
// if(myEle){
//     document.getElementById("character0").src = this.input;
// }

// // save data value
// localStorage.setItem("name", this.input);

// retrieve data value
var name = localStorage.getItem("name");

console.log("here");
console.log(this.name);
console.log("here");





// var allOrangeJuiceByClass = document.getElementsByClassName('character');
// var result = "document.getElementsByClassName('character')";
// for (var i=0, len=allOrangeJuiceByClass.length|0; i<len; i=i+1|0) {
//     result += "\n  " + allOrangeJuiceByClass[i].textContent;
// }
// console.log("here");
// console.log(allOrangeJuiceByClass[0].);
// console.log("end");

// var element = document.getElementById("character0");
// document.getElementById("character0").src='images/img2.png';
// // document.getElementByID('character0').src = 'images/img2.png';
// console.log("here");
// console.log();
