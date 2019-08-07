$(document).ready(function() {
    $("#music").prop("volume", 0.2);
    $("#select").prop("volume", 0.3);
    $("#select")[0].play();
});
$date = ['9 aout','10 aout','11 aout'];
$stage = ["Satilleu", "Loops", "Bar à Saxe", "L'Hélice", "Coloquinette", "7 rue du Lac", "Atenium", "Sco"];
$player = 1;
$player1 = null;
$player2 = null;
$norepeat = true;
$ready = false;

function next(num, p) { 
  return p[($.inArray(num, p) + 1) % p.length]; 
}
function prev(num, p) { 
  return p[($.inArray(num, p) - 1 + p.length) % p.length];
}

function characterSelect(perso,team){
    var audio = $("#audio"+perso)[0];
    audio.volume = 0.5;
    audio.play();
    if($player == 1 && $player1 == null){
        $('#player1 div.placeholder').remove(); 
        $('#player1').prepend('<img src="./img/'+perso+'.png">');
        $('#player1').addClass(team);
        $player = 2;
        $('body').css({"cursor": "url(./img/main2.png), auto"});
        $player1 = perso;
        $('#'+perso).prepend('<img id="select1" src="./img/select1.png">');
    }else if($player == 2 && $player2 == null){
        $('#player2 div.placeholder').remove(); 
        $('#player2').prepend('<img src="./img/'+perso+'.png">');
        $('#player2').addClass(team);
        $player = 1;
        $('body').css({"cursor": "url(./img/main1.png), auto"});
        $player2 = perso;
        $('#'+perso).prepend('<img id="select2" src="./img/select2.png">');
    }
    if($player1 != null && $player2 != null && $norepeat){
        $('#container, footer, header').addClass('shadow');
        if($player1 == 'perso20' && $player2 == 'perso20'){
            $("#textbando").attr("src","./img/text8.png");
        }else{
            $("#textbando").attr("src","./img/text" + Math.floor((Math.random()*8)+1) + ".png");
        }
        $('#imgbando, #textbando').removeClass('hidden');
        $norepeat = false;
        $ready = true;
    }
};

function launchGame(player1,player2){
        window.location = "game.html?p1="+player1+"&p2="+player2;
}

$('#time .icon.fleche.gauche').click(function(){
    $('#time .text p').text(prev($('#time .text p').text(),$date));
});
$('#time .icon.fleche.droite').click(function(){
    $('#time .text p').text(next($('#time .text p').text(),$date));
});
$('#stage .icon.fleche.gauche').click(function(){
    $('#stage .text p').text(prev($('#stage .text p').text(),$stage));
});
$('#stage .icon.fleche.droite').click(function(){
    $('#stage .text p').text(next($('#stage .text p').text(),$stage));
});
$('#imgbando, #textbando, #ready').click(function(){
    launchGame($player1,$player2);
});
$('#title').click(function(){
    $("#music").prop("muted",!$("#music").prop("muted"));
});
$('#perso1').click(function(){
    characterSelect('perso1','red');
});
$('#perso2').click(function(){
    characterSelect('perso2','red');
});
$('#perso3').click(function(){
    characterSelect('perso3','purple');
});
$('#perso4').click(function(){
    characterSelect('perso4','purple');
});
$('#perso5').click(function(){
    characterSelect('perso5','blue');
});
$('#perso6').click(function(){
    characterSelect('perso6','blue');
});
$('#perso7').click(function(){
    characterSelect('perso7','green');
});
$('#perso8').click(function(){
    characterSelect('perso8','green');
});
$('#perso9').click(function(){
    characterSelect('perso9','red');
});
$('#perso10').click(function(){
    characterSelect('perso10','red');
});
$('#perso11').click(function(){
    characterSelect('perso11','purple');
});
$('#perso12').click(function(){
    characterSelect('perso12','purple');
});
$('#perso13').click(function(){
    characterSelect('perso13','blue');
});
$('#perso14').click(function(){
    characterSelect('perso14','blue');
});
$('#perso15').click(function(){
    characterSelect('perso15','green');
});
$('#perso16').click(function(){
    characterSelect('perso16','green');
});
$('#perso17').click(function(){
    characterSelect('perso17','cpu');
});
$('#perso18').click(function(){
    characterSelect('perso18','cpu');
});
$('#perso19').click(function(){
    characterSelect('perso19','cpu');
});
$('#perso20').click(function(){
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
    $player = 1;
    $('body').css({"cursor": "url(./img/main1.png), auto"});
    $player1 = null;
    $('#select1').remove();
    $('#imgbando, #textbando').addClass('hidden');
    $('#container, footer, header').removeClass('shadow');
    $norepeat = true;
    $ready = false;
});
$('#player2').click(function(){
    var audio = $("#select")[0];
    audio.volume = 0.5;
    audio.play();
    $('#player2 img').remove(); 
    $('#player2').prepend('<div class="placeholder"><p>Select<br>your<br>fighter</p></div>');
    $('#player2').removeClass();
    $('#player2').addClass('fighter select');
    $player = 2;
    $('body').css({"cursor": "url(./img/main2.png), auto"});
    $player2 = null;
    $('#select2').remove();
    $('#imgbando, #textbando').addClass('hidden');
    $('#container, footer, header').removeClass('shadow');
    $norepeat = true;
    $ready = false;
});


