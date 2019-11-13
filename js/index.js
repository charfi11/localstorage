var arr = [];

$( ".formFirst" ).submit(function(event) {
    event.preventDefault();
    var data = $( this ).serializeArray();
    var rand = Math.random().toString(36).substring(7); //génére une clé aléatoire
    var key = rand;
    localStorage.setItem(key, JSON.stringify(data));
    arr.push(key);
    window.location = 'index.html';
});

$(document).ready(function(){
    for (var i = 0; i < localStorage.length; i++) {
        var temp1 = JSON.parse(localStorage.getItem(localStorage.key(i)));
        var keyz = localStorage.key(i); 
        var dlt = Math.random(0, 10000000); 
     $('.affich').append(
        '<div class=mr-3><div class="card bg-dark" id='+keyz+' style="width: 20rem;" data-toggle=modal data-target=#exampleModalCenter><div class=card-body><div class="idel rounded-circle bg-warning deletes" id='+dlt+' data-toggle="tooltip" data-placement="bottom" title="effacer le mémo"><i class="fas fa-trash text-dark"></i></div><h5 class="card-title text-warning">'+temp1[0].value+'</h5>'+'<h4 class="card-text text-info font-weight-bold">'+temp1[1].value+'</h4>'+'<p class="card-text">'+temp1[2].value+'</p>'+'</div></div></div>');   
        var card = document.getElementById(keyz);
arrCard = [card];
arrCard.forEach(element => {
    var del = $(card).children().children()[0];
    var c = localStorage.key(i);
    var l = $(card).children().children()[3];
    var n = $(l).text();
    console.log(n);
        $(card).mouseenter(function(){
        $(del).show();
    });
    $(card).mouseleave(function(){
        $(del).hide('slow');
    });
    $(del).click(function(e){
        e.preventDefault();
    localStorage.removeItem(c);
    $(card).remove();
    $(del).remove();
    });
    $(card).click(function(){
        $('#zero').val(JSON.parse(localStorage.getItem(c))[0].value);
        $('#first').val(JSON.parse(localStorage.getItem(c))[1].value);
        $('#second').val(JSON.parse(localStorage.getItem(c))[2].value);
        $('#formModal').submit(function(){
        var datas = $( this ).serializeArray();
        var keyup = c;
        localStorage.setItem(keyup, JSON.stringify(datas));
    });
    });
});
};
});

$('.deleteall').click(function(event){
    event.preventDefault();
    localStorage.clear();
    window.location = 'index.html';   
});


$('.btnmemo').click(function(){
$('form').slideToggle('slow');
});