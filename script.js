// Define Objects

// BOSSES
const object1 = {
    name: "General Graardor",
    imagePath: "img/General Graardor.png",
    message: "Kill 5 General Graardor",
    bossLink: "https://oldschool.runescape.wiki/w/General_Graardor",
    strategyLink: "https://oldschool.runescape.wiki/w/General_Graardor/Strategies"
};

const object2 = {
    name: "Commander Zilyana",
    imagePath: "img/Commander Zilyana.png",
    message: "Kill 5 Commander Zilyana",
    bossLink: "https://oldschool.runescape.wiki/w/Commander_Zilyana",
    strategyLink: "https://oldschool.runescape.wiki/w/Commander_Zilyana/Strategies"
};

const object3 = {
    name: "K'ril Tsutsaroth",
    imagePath: "img/K'ril Tsutsaroth.png",
    message: "Kill 5 General K'ril Tsutsaroth",
    bossLink: "https://oldschool.runescape.wiki/w/K%27ril_Tsutsaroth",
    strategyLink: "https://oldschool.runescape.wiki/w/K%27ril_Tsutsaroth/Strategies"
};

const object4 = {
    name: "Kree'arra",
    imagePath: "img/Kree'arra.png",
    message: "Kill 5 Kree'arra",
    bossLink: "https://oldschool.runescape.wiki/w/Kree%27arra",
    strategyLink: "https://oldschool.runescape.wiki/w/Kree%27arra/Strategies"
};
 
const object5 = {
    name: "Sarachnis",
    imagePath: "img/Sarachnis.png",
    message: "Kill 5 Sarachnis",
    bossLink: "https://oldschool.runescape.wiki/w/Sarachnis",
    strategyLink: "https://oldschool.runescape.wiki/w/Sarachnis/Strategies"
};
 
const object6 = {
    name: "King Black Dragon",
    imagePath: "img/King Black Dragon.png",
    message: "Kill 5 King Black Dragon",
    bossLink: "https://oldschool.runescape.wiki/w/King_Black_Dragon",
    strategyLink: "https://oldschool.runescape.wiki/w/King_Black_Dragon/Strategies"
};
 
const object7 = {
    name: "Giant Mole",
    imagePath: "img/Giant Mole.png",
    message: "Kill 10 Giant Mole Dragon",
    bossLink: "https://oldschool.runescape.wiki/w/Giant Mole",
    strategyLink: "https://oldschool.runescape.wiki/w/Giant Mole/Strategies"
};
 
const object8 = {
    name: "Chaos Fanatic",
    imagePath: "img/Chaos Fanatic.png",
    message: "Kill 10 Chaos Fanatic Dragon",
    bossLink: "https://oldschool.runescape.wiki/w/Chaos Fanatic",
    strategyLink: "https://oldschool.runescape.wiki/w/Chaos Fanatic/Strategies"
};
 
const object9 = {
    name: "Dagannoth Kings",
    imagePath: "img/Dagannoth Rex.png",
    message: "Kill 10 Dagannoth Kings Dragon",
    bossLink: "https://oldschool.runescape.wiki/w/Dagannoth Kings",
    strategyLink: "https://oldschool.runescape.wiki/w/Dagannoth Kings/Strategies"
};
 

// Array of tasks
const taskArr = [object1, object2, object3, object4, object5, object6, object7, object8, object9];

// Function to generate a random task
function generateTask() {
    let currentTask = taskArr[Math.floor(Math.random()*taskArr.length)];

    //update the taskCard content with the selected task's data
    document.querySelector('.task').textContent = currentTask.message;
    document.querySelector('.taskCard img').src = currentTask.imagePath;

    //Update the boss link
    const bossLinkElement = document = document.querySelector('#bossLink');
    bossLinkElement.href = currentTask.bossLink;

    //Update the strategy link
    const strategyLinkElement = document = document.querySelector('#strategyLink');
    strategyLinkElement.href = currentTask.strategyLink;
};

// New Task Button event listener
document.querySelector('.newTaskBtn').addEventListener("click", generateTask);
