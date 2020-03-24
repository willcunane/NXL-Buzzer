var team1Score = 0
var team2Score = 0
var team3score = 0
var team4score = 0

function addScoreTeam(teamScore, selector) {
    teamScore = document.getElementById(selector).innerHTML;
    teamScore ++;
    console.log(teamScore, selector);
    document.getElementById(selector).innerHTML = teamScore;
}


function removeScoreTeam(teamScore, selector){
    teamScore = document.getElementById(selector).innerHTML;
    teamScore --;
    console.log(teamScore, selector);
    document.getElementById(selector).innerHTML = teamScore;
}
