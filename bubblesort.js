let array = [];

let comparisons = 0;
let swaps = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getSpeed() {
    return parseInt(
        document.getElementById("speedSlider").value
    );
}

function updateStats() {

    document.getElementById("comparisons").textContent =
        comparisons;

    document.getElementById("swaps").textContent =
        swaps;
}

function renderArray() {

    const container =
        document.getElementById("arrayContainer");

    container.innerHTML = "";

    array.forEach(value => {

        const bar =
            document.createElement("div");

        bar.classList.add("bar");

        bar.style.height =
            `${value * 3}px`;

        bar.textContent =
            value;

        container.appendChild(bar);

    });

}

function generateRandomArray() {

    array = [];

    for (let i = 0; i < 8; i++) {

        array.push(
            Math.floor(Math.random() * 90) + 10
        );

    }

    document.getElementById("arrayInput").value =
        array.join(",");

    comparisons = 0;
    swaps = 0;

    updateStats();
    renderArray();

    document.getElementById("stepText").textContent =
        "Random array generated.";
}

function resetArray() {

    document.getElementById("arrayInput").value = "";

    array = [];

    comparisons = 0;
    swaps = 0;

    updateStats();

    document.getElementById("arrayContainer").innerHTML =
        "";

    document.getElementById("stepText").textContent =
        "Visualizer reset.";
}

async function startSorting() {

    const input =
        document.getElementById("arrayInput").value;

    if (!input.trim()) {

        alert("Please enter array values.");

        return;
    }

    array = input
        .split(",")
        .map(num => parseInt(num.trim()));

    comparisons = 0;
    swaps = 0;

    updateStats();

    renderArray();

    const bars =
        document.getElementsByClassName("bar");

    const stepText =
        document.getElementById("stepText");

    let n = array.length;

    for (let i = 0; i < n - 1; i++) {

        for (let j = 0; j < n - i - 1; j++) {

            bars[j].classList.add("comparing");
            bars[j + 1].classList.add("comparing");

            comparisons++;
            updateStats();

            stepText.textContent =
                `Comparing ${array[j]} and ${array[j + 1]}`;

            await sleep(getSpeed());

            if (array[j] > array[j + 1]) {

                bars[j].classList.remove("comparing");
                bars[j + 1].classList.remove("comparing");

                bars[j].classList.add("swapping");
                bars[j + 1].classList.add("swapping");

                stepText.textContent =
                    `Swapping ${array[j]} and ${array[j + 1]}`;

                await sleep(getSpeed());

                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                swaps++;
                updateStats();

                renderArray();

                await sleep(200);
            }

            renderArray();

            const newBars =
                document.getElementsByClassName("bar");

            if (newBars[j]) {
                newBars[j].classList.remove("comparing");
                newBars[j].classList.remove("swapping");
            }

            if (newBars[j + 1]) {
                newBars[j + 1].classList.remove("comparing");
                newBars[j + 1].classList.remove("swapping");
            }

        }

        renderArray();

        const updatedBars =
            document.getElementsByClassName("bar");

        updatedBars[n - i - 1]
            .classList.add("sorted");
    }

    renderArray();

    const finalBars =
        document.getElementsByClassName("bar");

    for (let bar of finalBars) {

        bar.classList.add("sorted");

    }

    stepText.textContent =
        "Sorting Completed Successfully!";
}

window.onload = () => {

    generateRandomArray();

};