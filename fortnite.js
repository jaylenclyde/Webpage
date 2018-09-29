function submit(){
    var first_name;
    var last_name;
    var avg  = 0;
    var wins = 0;
    var games = 0;
    wins = number(container.row.col_75.frtwins.value);
    games = number(container.row.col_75.frtgames.value);
    avg = number(game)/number(wins);
    container.row.averagewins.value = avg.toFixed(3);
}

