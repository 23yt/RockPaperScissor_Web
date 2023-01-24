
// Generating PlayerA's Choice
var randomA = Math.floor(Math.random() * 3) + 1;
var random_imageA = "RPS" + randomA + ".png";
var random_choiceA = "images/" + random_imageA;
var playerA = $(".img")[0].setAttribute("src", random_choiceA);

// Generating PlayerB's Choice
var randomB = Math.floor(Math.random() * 3) + 1;
var random_imageB = "RPS" + randomB + ".png";
var random_choiceB = "images/" + random_imageB;
var playerB = $(".img")[1].setAttribute("src", random_choiceB);

// Comparing the two Player's results
if ((randomA == 1 && randomB == 3) || (randomA == 2 && randomB == 1) ||
(randomA == 3 && randomB == 2)) {
    $("h1").text("🚩 Player 1 Wins!");
}
else if ((randomA == 3 && randomB == 1) || (randomA == 1 && randomB == 2) ||
(randomA == 2 && randomB == 3)) {
    $("h1").text("Player 2 Wins! 🚩");
}
else {
    $("h1").text("A Tie; Please Try Again!");
}
