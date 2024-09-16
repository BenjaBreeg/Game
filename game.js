// Benja Guzzetta

// The function to play the game when the button is clicked.
function playGame() {
    // This gets the user's choice from the dropdown menu.
    var userChoice = document.getElementById('userChoice').value;

    // The list of possible choices for the computer.
    var choices = ["cockroach", "foot", "atom bomb"];
    
    // This generates a random choice for the computer.
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // A variable to store the result of the game.
    var result;

    // This if-else loop determines the result of the game based on the user's and computer's choices.
    if (userChoice === computerChoice) {

        // If both choices are the same, it's a tie.
        result = "It's a tie! Both chose " + userChoice + ".";}

        else if (
        (userChoice === "foot" && computerChoice === "cockroach") ||
        (userChoice === "cockroach" && computerChoice === "atom bomb") ||
        (userChoice === "atom bomb" && computerChoice === "foot")) 
        
        // If the user wins, this displays a winning message.
        {result = "You win! " + userChoice.charAt(0).toUpperCase() + userChoice.slice(1) + " beats " + computerChoice + ".";} 
        
        else 
        // If the user loses, this displays a losing message.
        {result = "You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + userChoice + ".";}

    // Shows the result on the webpage in the result container.
    document.getElementById('gameResult').innerHTML = "<p>Computer chose: " + computerChoice + "</p><p>" + result + "</p>";
}

// Adds an event listener to the button to run the playGame function when it's clicked.
document.getElementById('playGame').addEventListener('click', playGame);