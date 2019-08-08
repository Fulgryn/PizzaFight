$(document).ready(function() {
    console.log(getQueryVariable('p1'));
    console.log(getQueryVariable('p2'));
});

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}


var gameSettings = {
    player1: getQueryVariable('p1'),
    player2: getQueryVariable('p2'),
    stage: 'stage'+getQueryVariable('s')
}

let config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    parent: 'container',
    pixelArt: true,
    backgroundColor: 0x000000,
    scene: [scene1, scene2, annonceur],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 700 },
            debug: false
        }
    }
};

let game = new Phaser.Game(config);

