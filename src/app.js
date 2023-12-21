const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];


// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.ceil(Math.random() * 100);
}


// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    players.forEach((player,i)=>{
        detailedPlayers.push({
            name: player,
            strength: getRandomStrength(),
            image:  "images/super-"+(i+1)+".png",
            type: i % 2 == 0 ? 'hero' : 'villain',
        });
    });
    return detailedPlayers;
}



const buildPlayers = (players, type) => {
    let fragment = ''; 
    if(type=="hero"){
        for(let i=0;i<players.length;i++){
            if(players[i].type=="hero"){
                fragment += `<div class="player">
                <img src="${players[i].image}">
                <div class="name">${players[i].name}</div>
                <div class="strength">${players[i].strength}</div>
             </div>`
            }
        }
    }
    else{
        for(let i=0;i<players.length;i++){
            if(players[i].type=="villain"){
                fragment += `<div class="player">
                <img src="${players[i].image}">
                <div class="name">${players[i].name}</div>
                <div class="strength">${players[i].strength}</div>
             </div>`
            }
        }
    }
    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}


