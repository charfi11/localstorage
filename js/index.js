var arr = [];

$( ".formFirst" ).submit(function(event) {
    event.preventDefault();
    var data = $( this ).serializeArray();
    var rand = Math.random().toString(36).substring(7); //génére une clé aléatoire
    var key = rand;
    localStorage.setItem(key, JSON.stringify(data));
    arr.push(key);
        var dlt = Math.random(0, 10000000); 
     $('.affich').append(
        '<div class=mr-3><div class=card id='+key+' style=width: 18rem; data-toggle=modal data-target=#exampleModalCenter><div class=card-body><h5 class="card-title">'+data[0].value+'</h5>'+'<p class="card-text">'+data[1].value+'</p>'+'</div></div><button class='+dlt+'>supp</button></div>');   
});

$(document).ready(function(){
    for (var i = 0; i < localStorage.length; i++) {
        var temp1 = JSON.parse(localStorage.getItem(localStorage.key(i)));
        var keyz = localStorage.key(i); 
        var dlt = Math.random(0, 10000000); 
     $('.affich').append(
        '<div class=mr-3><div class=card id='+keyz+' style=width: 18rem; data-toggle=modal data-target=#exampleModalCenter><div class=card-body><h5 class="card-title">'+temp1[0].value+'</h5>'+'<p class="card-text">'+temp1[1].value+'</p>'+'</div></div><button class='+dlt+'>supp</button></div>');   
        var card = document.getElementById(keyz);
arrCard = [card];
arrCard.forEach(element => {
    var del = $(card).next()[0];
    var c = localStorage.key(i);
    $(del).click(function(){
    localStorage.removeItem(c);
    });
    $(card).click(function(){
        // var title = $(event.target).children();
        $('#first').val(JSON.parse(localStorage.getItem(c))[0].value);
        $('#second').val(JSON.parse(localStorage.getItem(c))[1].value);
        $('#formModal').submit(function(){

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
