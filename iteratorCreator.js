//Rain World Iterator Name Generator!

//Function to get random integers
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//Lists storing the words
var pluralNouns = ["Skies", "Trees", "Fields", "Minds", "Stones", "Rivers", "Buildings", "Cities", "Doors", "Roots", "Streams", "Droplets", "Riches", "Deaths", "Births", "Rooms", "Horizons", "Stars"];
var singleNouns = ["Sky", "Tree", "Field", "Mind", "Stone", "River", "Building", "City", "Door", "Root", "Stream", "Droplet", "Wealth", "Death", "Birth", "Room", "Horizon", "Star"];
var adjectives = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Soft", "Kind", "Rough", "High", "Beautiful", "Wide", "Deadly", "Great", "Ancient", "Intelligent", "Wonderful", "Red", "Green", "Blue", "Yellow", "Cyan", "Purple"];
var verbs = ["Run", "Dance", "Walk", "Look", "Appear", "Die", "Create", "Jump", "Paint", "Scribe", "Write", "Fall", "Listen", "Speak", "Remember", "Think", "Sleep", "Read"];
var adverbs = ["Quickly", "Quietly", "Silently", "Kindly", "Powerfully", "Tearfully", "Enchantingly", "Bravely", "Rarely", "Bodly", "Briskly", "Seldomly", "Barely", "Fully", "Justly", "Forcefully"];

//Creates canvas to draw iterators on
const canvas = document.getElementById("drawIterator");
const iteratorDrawing = canvas.getContext("2d");

//Create images
var imageLinks = ["square.png"];

function createIteratorName() {
    var type = getRandomInt(5);
    var name = "";
    if (type == 0) {
        var adj = getRandomInt(adjectives.length);
        name = name + adjectives[adj] + " ";
        var non = getRandomInt(singleNouns.length);
        if (adj == 0 || (adj <= 12 && adj > 1)) {
            name = name + pluralNouns[non];
        } else if (adj == 1) {
            name = name + singleNouns[non];
        } else if (getRandomInt(1) == 0) {
            name = name + singleNouns[non];
        } else {
            name = name + pluralNouns[non];
        }
        if (getRandomInt(2) == 1) {
            name = "No " + name;
        }
    } else if (type == 1) {
        var adj = getRandomInt(adjectives.length);
        name = name + adjectives[adj] + " ";
        var non = getRandomInt(singleNouns.length);
        var vrb = getRandomInt(verbs.length);
        if (adj == 0 || (adj <= 12 && adj > 1)) {
            name = name + pluralNouns[non] + " " + verbs[vrb];
        } else if (adj == 1) {
            name = name + singleNouns[non] + " " + verbs[vrb] + "s";
        } else if (getRandomInt(1) == 0) {
            name = name + singleNouns[non] + " " + verbs[vrb] + "s";
        } else {
            name = name + pluralNouns[non] + " " + verbs[vrb];
        }
    } else if (type == 2) {
        var non = getRandomInt(singleNouns.length);
        if (getRandomInt(2) == 1) {
            var newNoun = pluralNouns[non];
        } else {
            var newNoun = singleNouns[non];
        }
        var vrb = getRandomInt(verbs.length);
        var name = verbs[vrb] + "s ";
        var chance = getRandomInt(3);
        if (chance == 0) {
            name = name + "at the ";
        } else if (adj == 1) {
            name = name + "to the ";
        } else if (getRandomInt(1) == 0) {
            name = name + "from the ";
        } else {
            name = name + "on the ";
        }
        name = name + newNoun;
    } else if (type == 3) {
        var adj = getRandomInt(adjectives.length);
        name = name + adjectives[adj] + " ";
        var non = getRandomInt(singleNouns.length);
        var vrb = getRandomInt(verbs.length);
        if (adj == 0 || (adj <= 12 && adj > 1)) {
            name = name + pluralNouns[non] + " " + verbs[vrb];
        } else if (adj == 1) {
            name = name + singleNouns[non] + " " + verbs[vrb] + "s";
        } else if (getRandomInt(1) == 0) {
            name = name + singleNouns[non] + " " + verbs[vrb] + "s";
        } else {
            name = name + pluralNouns[non] + " " + verbs[vrb];
        }
        name = name + " " + adverbs[getRandomInt(adverbs.length)];
    } else if (type == 4) {
        var non = getRandomInt(singleNouns.length);
        if (getRandomInt(2) == 1) {
            var newNoun = pluralNouns[non];
        } else {
            var newNoun = singleNouns[non];
        }
        var vrb = getRandomInt(verbs.length);
        var name = verbs[vrb] + "s ";
        name = name + adverbs[getRandomInt(adverbs.length)] + " ";
        var chance = getRandomInt(3);
        if (chance == 0) {
            name = name + "at the ";
        } else if (adj == 1) {
            name = name + "to the ";
        } else if (getRandomInt(1) == 0) {
            name = name + "from the ";
        } else {
            name = name + "on the ";
        }
        name = name + newNoun;
    }
    return name;
}
function drawIterator() {
    var bright = 0;
    //Draw background
    red = getRandomInt(255);
    green = getRandomInt(255);
    blue = getRandomInt(255);
    iteratorDrawing.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
    iteratorDrawing.fillRect(0, 0, canvas.width, canvas.height);
    //Draw Body
    iteratorDrawing.beginPath();
    iteratorDrawing.moveTo(275, 200);
    iteratorDrawing.lineTo(350, 500);
    iteratorDrawing.lineTo(150, 500);
    iteratorDrawing.lineTo(225, 200);
    iteratorDrawing.lineTo(275, 200);
    bright = getRandomInt(190);
    red = bright + getRandomInt(70);
    green = bright + getRandomInt(70);
    blue = bright + getRandomInt(70);
    iteratorDrawing.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
    iteratorDrawing.fill();
    //Draw antennae
    bright = getRandomInt(20);
    red = bright + getRandomInt(50);
    green = bright + getRandomInt(50);
    blue = bright + getRandomInt(50);
    iteratorDrawing.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
    iteratorDrawing.fillRect(175, 200, 10, -100);
    iteratorDrawing.fillRect(325, 200, -10, -100);
    //Draw head
    iteratorDrawing.beginPath();
    iteratorDrawing.arc(250, 200, 75, 0, 2 * Math.PI);
    bright = getRandomInt(190);
    var headColor = [];
    headColor[0] = bright + getRandomInt(70);
    headColor[1] = bright + getRandomInt(70);
    headColor[2] = bright + getRandomInt(70);
    red = headColor[0];
    green = headColor[1];
    blue = headColor[2];
    iteratorDrawing.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
    iteratorDrawing.fill();
    //Draw eyes
    iteratorDrawing.beginPath();
    var chance = getRandomInt(2);
    iteratorDrawing.arc(210, 210, 20, 0, 2 * Math.PI);
    if (chance == 1) {
        iteratorDrawing.fillStyle = "white";
    } else {
        iteratorDrawing.fillStyle = "black";
    }
    iteratorDrawing.arc(290, 210, 20, 0, 2 * Math.PI);
    if (chance == 1) {
        iteratorDrawing.fillStyle = "white";
    } else {
        iteratorDrawing.fillStyle = "black";
    }
    iteratorDrawing.fill();
    //Draw symbol
    var image = new Image(50, 50);
    image.src = "Iterator Symbols (" + getRandomInt(63) + ").png";
    image.crossOrigin = "anonymous";
    image.onload = function () {
        iteratorDrawing.drawImage(image, 225, 140, 50, 50);
        var imageData = iteratorDrawing.getImageData(225, 140, 50, 50);
        var symbolColor = [];
        symbolColor[0] = getRandomInt(256);
        symbolColor[1] = getRandomInt(256);
        symbolColor[2] = getRandomInt(256);
        for (var i = 0; i < imageData.data.length; i += 4) {
            if (imageData.data[i] != headColor[0] || imageData.data[i + 1] != headColor[1] || imageData.data[i + 2] != headColor[2]) {
                imageData.data[i] = symbolColor[0];
                imageData.data[i + 1] = symbolColor[1];
                imageData.data[i + 2] = symbolColor[2];
                console.log(imageData.data[i]);
            }
            console.log(imageData.data[i]);
        }
        iteratorDrawing.putImageData(imageData, 225, 140);
    }
    
}

const nameDisplay = document.getElementById("name");
nameDisplay.innerHTML = createIteratorName();
drawIterator();
const generate = document.getElementById("newName");
generate.addEventListener("click", function (e) {
    nameDisplay.innerHTML = createIteratorName();
    drawIterator();
});
