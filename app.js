// second
function red(){
    let color1 = document.getElementById("body");
    color1.style.backgroundColor = "red"
}
function green(){
    let color2 = document.getElementById("body");
    color2.style.backgroundColor = "green"
}
function blue(){
    let color3 = document.getElementById("body");
    color3.style.backgroundColor = "blue"
}
// Third
function input(){
    let num = document.getElementById("num1").value;
    alert(num);
}
// Fourth
function image(){
    let image1 = document.getElementById("img");
    if(image1.src === "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="){
        image1.src = "https://thumbs.dreamstime.com/b/tajmahal-india-taj-mahal-indian-palace-taj-mahal-world-landmark-48997084.jpg"
    }
    else{
        image1.src ="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
    }
}
// six
function length(){
    let num3 = document.getElementById("num_2").value.length;
    alert("Length! " + num3);
}
// seven
function date(){
    var now = new Date();
    var now1 = now.getDate();
    var now2 = now.getHours();
    var now3 = now.getMinutes();
    var now4 = now.getSeconds();
    alert("Current time ! " + now2 + " : " + now3 + " : " + now4 + "\n" + "Current Date ! " + now1);
}
// five
function reload() {                            
    var rand = Math.round(Math.random() * 5)
    var qoute = ["Coding is the art of giving life to digital dreams and turning imagination into reality.", "In the world of coding, every bug is an opportunity to learn and improve.", "Coding is like playing a puzzle game where you have the power to create your own challenges and solutions.", "Coding is a language that empowers you to communicate with machines and bring your ideas to life.", "The best coders are those who see errors as stepping stones towards innovation.", "Coding is the closest thing we have to magic in the digital realm, where lines of code can shape the world around us."]//Index of 06
    document.getElementById('qoute').innerHTML = qoute[rand]; //array index 1 to 5;
}