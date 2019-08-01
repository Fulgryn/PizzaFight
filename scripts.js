$(document).ready(function() {
    $("#music").prop("volume", 0.2);
    $("#select").prop("volume", 0.3);
    $("#select")[0].play();
});

let player = 1;

function characterSelect(perso,team){
    var audio = $("#audio"+perso)[0];
    audio.volume = 0.5;
    audio.play();
    if(player==1){
        $('#player1 div.placeholder').remove(); 
        $('#player1').prepend('<img src="img/'+perso+'.png">');
        $('#player1').addClass(team);
        player = 2;
        $('body').css({"cursor": "url(img/main2.png), auto"});
    }else if(player==2){
        $('#player2 div.placeholder').remove(); 
        $('#player2').prepend('<img src="img/'+perso+'.png">');
        $('#player2').addClass(team);
        player = 1;
        $('body').css({"cursor": "url(img/main1.png), auto"});
    }
};

$('#title').click(function(){
    $("#music").prop("muted",!$("#music").prop("muted"));
});


$('#rigal').click(function(){
    characterSelect('perso1','red');
});
$('#alame').click(function(){
    characterSelect('perso2','red');
});
$('#lena').click(function(){
    characterSelect('perso3','purple');
});
$('#tim').click(function(){
    characterSelect('perso4','purple');
});
$('#arthur').click(function(){
    characterSelect('perso5','blue');
});
$('#clement').click(function(){
    characterSelect('perso6','blue');
});
$('#florent').click(function(){
    characterSelect('perso7','green');
});
$('#agathe').click(function(){
    characterSelect('perso8','green');
});
$('#tornier').click(function(){
    characterSelect('perso9','red');
});
$('#marine').click(function(){
    characterSelect('perso10','red');
});
$('#niels').click(function(){
    characterSelect('perso11','purple');
});
$('#louac').click(function(){
    characterSelect('perso12','purple');
});
$('#juliette').click(function(){
    characterSelect('perso13','blue');
});
$('#philippe').click(function(){
    characterSelect('perso14','blue');
});
$('#julien').click(function(){
    characterSelect('perso15','green');
});
$('#cyril').click(function(){
    characterSelect('perso16','green');
});
$('#leo').click(function(){
    characterSelect('perso17','cpu');
});
$('#jules').click(function(){
    characterSelect('perso18','cpu');
});
$('#clementine').click(function(){
    characterSelect('perso19','cpu');
});
$('#semoule').click(function(){
    characterSelect('perso20','cpu');
});
$('#player1').click(function(){
    var audio = $("#select")[0];
    audio.volume = 0.5;
    audio.play();
    $('#player1 img').remove(); 
    $('#player1').prepend('<div class="placeholder"><p>Select<br>your<br>fighter</p></div>');
    $('#player1').removeClass();
    $('#player1').addClass('fighter select');
    player = 1;
    $('body').css({"cursor": "url(img/main1.png), auto"});
});
$('#player2').click(function(){
    var audio = $("#select")[0];
    audio.volume = 0.5;
    audio.play();
    $('#player2 img').remove(); 
    $('#player2').prepend('<div class="placeholder"><p>Select<br>your<br>fighter</p></div>');
    $('#player2').removeClass();
    $('#player2').addClass('fighter select');
    player = 2;
    $('body').css({"cursor": "url(img/main2.png), auto"});
});


