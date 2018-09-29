function calculate(){
    var first_name;
    var last_name;
    var avg  = 0;
    var wins = 0;
    var games = 0;
    wins = Number(myForm.frtwins.value);
    games = Number(myForm.frtgames.value);
    avg = Number(wins)/Number(games);
    myForm.averagewins.value = avg*100;
}