console.log("It's working!");

function write(){
    console.log("Inside the write function");

var place = document.getElementById('place').value;
console.log(place);

var boy = document.getElementById('boy').value;
console.log(boy);

var adject1 = document.getElementById('adject1').value;
console.log(adject1);

var color = document.getElementById('color').value;
console.log(color);

var girl = document.getElementById('girl').value;
console.log(girl);

var adject2 = document.getElementById('adject2').value;
console.log(adject2);

var bodypart = document.getElementById('bodypart').value;
console.log(bodypart);

var adject3 = document.getElementById('adject3').value;
console.log(adject3);

var shape = document.getElementById('shape').value;
console.log(shape);

var clothing = document.getElementById('clothing').value;
console.log(clothing);

var bev= document.querySelector('input[name=beverage]:checked').value;
console.log(bev);

var bevMessage;

if(bev=="Chocolate"){
    bevMessage = "<img class='img-fluid' src='images/chocolate.png' alt='chocolate'> With every snowflake, a new adventure awaits!";
}else if(bev=="Coffee"){
    bevMessage = "<img class='img-fluid' src='images/coffee.png' alt='coffee'> Let the snow adventures begin!";
}else if(bev=="Tea"){
    bevMessage = "<img class='img-fluid' src='images/tea.png' alt='tea'> The best childhood memories are from the chilly moments amidst the snowflakes!";
}else if(bev=="Lemonade"){
    bevMessage = "<img class='img-fluid' src='images/lemonade.png' alt='lemonade'> Snowy days are like a giant playground of happiness!";
}

console.log(bevMessage);


document.getElementById ('output').innerHTML += "<h2>SNOW MUCH FUN!</h2><h5>Your Personalized MadLibs Story</h5>" +bevMessage;

document.getElementById('output').innerHTML += " <justify><br><br> One sunny afternoon in " + place + ", a kid named " + boy + " had his first " + adject1 + " snow experience. He just came home from school when the snow began to fall from the sky. " + boy + " was delighted upon seeing it. He immediately grabbed his " + color + " coat and winter boots and called his sister " + girl +". He thought it would be " + adject2 + " to play outside. As soon as " + boy + " stepped into the snow, he started laughing because he felt the cold wind sweeping under in his feet. <br><br> On the other hand, " + girl + " was screaming in delight as she caught the snowflakes on her " + bodypart + ". She danced and twirled under the snowfall. " + boy + " tried to make a " + adject3 + " snowman. He scooped a handful of snow and packed it together in a "  + shape + " shape. He got another ball of snow and put it on top of the other. " + girl + " immediately grabbed her " + clothing + " and put it on their snow creation. <br><br>After all the fun activities, " + boy + " and " + girl + " went back home and drank their cup of Hot " + bev + ". They both stood at the glass window and stared outside while giggling. It was a fun and tiring day for both of them. </justify><br><br> THE END.";

}