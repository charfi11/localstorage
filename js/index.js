var arr = [];
arr.sort();

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
        '<div class=mr-3><div class="card bg-dark" id='+keyz+' style="width: 20rem;" data-toggle=modal data-target=#exampleModalCenter><div class=card-body><h5 class="card-title text-warning">'+temp1[0].value+'</h5>'+'<h4 class="card-text text-info">'+temp1[1].value+'</h4>'+'<p class="card-text">'+temp1[2].value+'</p>'+'</div></div><button class="btn btn-warning btndel" id='+dlt+' style=width:100%;><i class="fas fa-trash"></i></button></div>');   
        var card = document.getElementById(keyz);
arrCard = [card];
arrCard.forEach(element => {
    var del = $(card).next()[0];
    var c = localStorage.key(i);
    $(del).click(function(e){
        e.preventDefault();
    localStorage.removeItem(c);
    $(card).remove();
    $(del).remove();
    });
    $(card).mouseenter(function(){
        $(del).fadeIn('slow');
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

$('.del').click(function(event){
    event.preventDefault();
    localStorage.clear();
    window.location = 'index.html';   
});


$('.btnmemo').click(function(){
$('form').slideToggle('slow');
});