const sub = document.getElementById("demo");

sub.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission action

    const weightInput = document.getElementById("weight");
    const nameInput = document.getElementById("name");

    const weight = parseFloat(weightInput.value);
    const name = nameInput.value;

    if (!isNaN(weight)) { // Check if weight is a valid number
        const calculation = weight * 0.03;
        const resultBlock = `<p>Hello ${name}. The amount of water you need to drink per day is<span> ${calculation.toFixed(2)} </span> liters!</p>`;
        document.getElementById("new").innerHTML = resultBlock;
    } else {
        alert("Please enter a valid weight.");
    }
});
