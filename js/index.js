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
   
        
//      $('.affich').append(
//         '<div class=mr-3><div class=card id='+keyz+' style=width: 18rem; data-toggle=modal data-target=#exampleModalCenter><div class=card-body><h5 class="card-title">'+temp1[0].value+'</h5>'+'<p class="card-text">'+temp1[1].value+'</p>'+'</div></div><button class=delete>supp</button></div>');   
//         var card = document.getElementById(keyz);
// arrCard = [card];
// arrCard.forEach(element => {
//     $(card).click(function(){
//         var l = localStorage.getItem(keyz, temp1);
//         console.log(l);
//         var title = $(event.target).children();
//         $('#first').val(title[0].textContent);// bug au petit bonheur la chance!
//         $('#second').val(title[1].textContent);
//         $('#formModal').submit(function(){
//         if(card = localStorage.getItem(key)){
//         var data = $(this).serializeArray();
//         localStorage.setItem(key, JSON.stringify(data));
//         }
//     });
//     });
// });
  
});

$('.del').click(function(event){
    event.preventDefault();
    localStorage.clear();
    window.location = 'index.html';   
});
