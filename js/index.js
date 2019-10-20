var arr = [];

$( "form" ).submit(function(event) {
    event.preventDefault();
    var data = $( this ).serializeArray();
    var rand = Math.random().toString(36).substring(7); //génére une clé aléatoire
    var key = rand;
    localStorage.setItem(key, JSON.stringify(data));
    arr.push(key);
    window.location = 'index.html';
;});

$(document).ready(function(){
    for (var i = 0; i < localStorage.length; i++) {
        var temp1 = JSON.parse(localStorage.getItem(localStorage.key(i)));
     $('.affich').append(
'<div class=card style=width: 18rem;><div class=card-body><h5 class="card-title">'+temp1[0].value+'</h5>'+'<p class="card-text">'+temp1[1].value+'</p>'+'</div></div>');
        // temp1.forEach(element => {
        //  });
        
     }
});

$('.delete').click(function(event){
    event.preventDefault();
    localStorage.clear();
    window.location = 'index.html';   
});
