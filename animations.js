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
let facts = ["Julio Jaramillo<br>Everywhere you go, you will catch a song from Julio Jaramillo <br><img class='f_imgs' src='https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/I774BJTTGVFQLDJEXP2XRNTYYA.jpg'><br><audio src='sounds/alma_mia.mp3' autoplay> </audio><br>",
            "A MI LINDO ECUADOR <br><audio src='sounds/lindo.mp3' autoplay> </audio><img class='f_imgs' src='https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMTk5NDAxMy9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY0MTQ3MzYxOX0.h1TPH1k8n_pB1FWxB_V1BnARecAU6NZwVhb9clcaAmM/img.jpg?width=1200&coordinates=0%2C90%2C0%2C91&height=600'><br>This song comes up everywhere when appreciating Ecuador",
            "There is a park dedicated to Iguanas In Guayaquil<br><img class='f_imgs' src='https://one-million-places.com/wp-content/uploads/2015/ecuador/guayaquil-ecuador-12.jpg'>",
            "September 26, all high school graduates go up to the flag one by one and stomp the ground in front of the flag<br><img class='f_imgs' src='https://lahora.com.ec/contenido/cache/45/adelantan-juramento-a-la-bandera-imagen-1-_20190922092741-2000x2000.jpg'>",
            "Las Penas: 444 steps <br><img class='f_imgs' src='https://media-cdn.tripadvisor.com/media/photo-s/03/e4/2b/c6/las-penas.jpg'>",
            "Lanaguages spoken in Ecuador: Spanish and Kichwa (a Quechuan language of the Inca empire) <br><img class='f_imgs' src='https://www.planv.com.ec/sites/default/files/yaku-eolz39ow8amkilj.jpg'> <br>Yaku Pérez Fighting For Indigenous Rights"
            ]
function slide(){
    console.log("animayion");
    document.getElementById("slide").style.display = "block";
    // document.getElementById("slide").style.webkitAnimation = "slide 0.5s forwards";
    // -webkit-animation: slide 0.5s forwards;
    document.getElementById("slide").style.animation = "slide 0.5s forwards";
    // animation: slide 0.5s forwards;
    var index = Math.floor(Math.random() * facts.length);
    document.getElementById("slide").innerHTML = facts[index];
    console.log(index);
    // document.getElementById("slide").style.animation-delay
    // animation: slide 0.5s forwards;
    // animation-delay: 2s;
}