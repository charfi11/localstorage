$('#notif').click(function(){
    var champ = document.getElementById('champ').value;
    var jsonChamp = JSON.stringify(champ);
    localStorage.setItem('cham', jsonChamp);

    console.log(jsonChamp);
})