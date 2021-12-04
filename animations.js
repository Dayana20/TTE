var input = '';
var gua = 0;
var qui = 0;
var san = 0;

console.log(this.input);
var chosen = "False";
function getCharacter0(someForm) {
    input=document.getElementById('image1').value;
    console.log(this.input);
    if (chosen=="True"){
        // document.getElementById('image1').style.backgroundColor="#FFDDD2";
        document.getElementById('image2').style.backgroundColor="transparent";
        document.getElementById('image3').style.backgroundColor="transparent";
    }
    document.getElementById('image1').style.backgroundColor="#FFDDD2";
    chosen="True";
    // https://stackoverflow.com/questions/19211768/saving-a-javascript-variable-for-later-usage
    // save data value
    localStorage.setItem("name", this.input);
    // alert(input);
}

function getCharacter1(someForm) {
    input=document.getElementById('image2').value;
    console.log(this.input);
    if (chosen=="True"){
        // document.getElementById('image2').style.backgroundColor="#FFDDD2";
        document.getElementById('image1').style.backgroundColor="transparent";
        document.getElementById('image3').style.backgroundColor="transparent";
    }
    document.getElementById('image2').style.backgroundColor="#FFDDD2";
    chosen="True";
    // save data value
    localStorage.setItem("name", this.input);
    // alert(input);
}

function getCharacter2(someForm) {
    input=document.getElementById('image3').value;
    console.log(this.input);
    if (chosen=="True"){
        // document.getElementById('image3').style.backgroundColor="#FFDDD2";
        document.getElementById('image2').style.backgroundColor="transparent";
        document.getElementById('image1').style.backgroundColor="transparent";
    }
    document.getElementById('image3').style.backgroundColor="#FFDDD2";
    chosen="True";
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
    document.getElementById("img4").src =this.name;
}

var elem2 = document.getElementById('parallax_end');
if(elem2){
    console.log("setting up2");
    document.getElementById("img_end").src =this.name;
}

console.log("finished switching images");

function changeText(id) {
    // Guayaquil
    if(id=="food"){
        document.getElementById("message").innerHTML = "This is Encebollado! Traditional Guayaquileño Food";
        gua = 1;
    }
    else if(id=="food1"){
        document.getElementById("message").innerHTML = "Anything With Green Plantain Is Traditional Food";
        gua = 1;
    }
    else if(id=="food2"){
        document.getElementById("message").innerHTML = "New Years? Lets Burn Things";
        gua = 1;
    }
    else if(id=="food3"){
        document.getElementById("message").innerHTML = "Don't Go Outside If You Don't Want To End Up In A Strangers Pool";
        gua = 1;
    }
    // Quito
    else if(id=="elem0"){
        document.getElementById("Q_mes").innerHTML = "This Is Ecuador's Tree House, <br>you can swing at the edge of the mountain with no safety harness";
        qui = 1;
    }
    else if(id=="elem1"){
        document.getElementById("Q_mes").innerHTML = "This Is Where It Got Its Name From, <br> The Equator";
        qui = 1;
    }
    else if(id=="elem2"){
        document.getElementById("Q_mes").innerHTML = "There are 47 volcanoes in Ecuador";
        qui = 1;
    }
    else if(id=="elem3"){
        document.getElementById("Q_mes").innerHTML = "You Can Get Any Handmade Product";
        qui = 1;
    }
    // Santa Elena
    else if(id=="elem4"){
        document.getElementById("S_mes").innerHTML = "Lets Get Dangeriously Close To Whales";
        san = 1;
    }
    else if(id=="elem5"){
        document.getElementById("S_mes").innerHTML = "This Is La Chocolatera, <br> There Is No Chocolate Though";
        // backstory: possible murder?
        san = 1;
    }
    else if(id=="elem6"){
        document.getElementById("S_mes").innerHTML = "Salinas, a nice family beach ";
        san = 1;
    }
    else if(id=="elem7"){
        document.getElementById("S_mes").innerHTML = "What Happens In Montañita, Stays In Montañita";
        san = 1;
    }


    // alert(id);
}

let count = 1;
function showImg() {
    if(count%2!=0){
        document.getElementById("gu").style.display = "none";
        document.getElementById("parallax2").style.backgroundImage = "none";
        document.getElementById("p2_img1").style.display = "block";
        document.getElementById("p2_img2").style.display = "block";
        document.getElementById("p2_img3").style.display = "block";
        document.getElementById("p2_img4").style.display = "block";
    } else{
        document.getElementById("parallax2").style.backgroundImage = "url(images/guiti_pool.jpg)";
        document.getElementById("parallax2").style.border = "none";
        document.getElementById("p2_img1").style.display = "none";
        document.getElementById("p2_img2").style.display = "none";
        document.getElementById("p2_img3").style.display = "none";
        document.getElementById("p2_img4").style.display = "none";
        document.getElementById("gu").style.display = "block";
    }
    count+=1;
    console.log(count%2);
}


function completion(){
    if(gua==1 && qui==1 && san==1){
        document.getElementById("theEnd").style.display = "block";
        document.getElementById("keepGoing").style.display = "none";

    }
    // alert(gua,cue,qui,san);
}