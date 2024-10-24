let teamOneScore = parseInt(document.getElementById("teamOneScore").innerHTML, 10);
let teamTwoScore = parseInt(document.getElementById("teamTwoScore").innerHTML, 10);

function updateScores() {
    document.getElementById("teamOneScore").innerHTML = teamOneScore;
    document.getElementById("teamTwoScore").innerHTML = teamTwoScore;
}
function countScore(team, count) {
    if (team == 1) {
        teamOneScore += count;
    } else if (team == 2) {
        teamTwoScore += count;
    }
    updateScores();
}
function addOnePoint(team) {
    countScore(team, 1)
}
function addTwoPoints(team) {
    countScore(team, 2)
}
function addThreePoints(team) {
    countScore(team, 3)
}
function resetScore(team) {
    if (team === 1) {
        teamOneScore = 0;
    } else if (team === 2) {
        teamTwoScore = 0;
    }
    updateScores();
}