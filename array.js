let arr = [];

// ==========================
// DISPLAY ARRAY
// ==========================

function renderArray() {

    const container = document.getElementById("array-container");
    container.innerHTML = "";

    arr.forEach((value, index) => {

        const box = document.createElement("div");
        box.className = "array-box";

        box.innerHTML = `
            ${value}
            <span class="array-index">${index}</span>
        `;

        container.appendChild(box);
    });

    document.getElementById("size-display").innerText =
        "Size : " + arr.length;
}

// ==========================
// RESULT
// ==========================

function showResult(msg) {
    document.getElementById("result").innerHTML = msg;
}

function showComplexity(text) {
    document.getElementById("complexity-result").innerHTML = text;
}

// ==========================
// INSERT END
// ==========================

function insertEnd() {

    const value =
        parseInt(document.getElementById("value").value);

    if (isNaN(value)) {
        showResult("Enter a value");
        return;
    }

    arr.push(value);

    renderArray();

    showResult(value + " inserted at end");

    showComplexity("Time Complexity : O(1)");
}

// ==========================
// INSERT POSITION
// ==========================

function insertAtPosition() {

    const value =
        parseInt(document.getElementById("value").value);

    const index =
        parseInt(document.getElementById("index").value);

    if (isNaN(value) || isNaN(index)) {
        showResult("Enter value and index");
        return;
    }

    if (index < 0 || index > arr.length) {
        showResult("Invalid index");
        return;
    }

    arr.splice(index, 0, value);

    renderArray();

    showResult(value +
        " inserted at position " + index);

    showComplexity("Time Complexity : O(n)");
}

// ==========================
// DELETE
// ==========================

function deleteByIndex() {

    const index =
        parseInt(document.getElementById("index").value);

    if (isNaN(index)) {
        showResult("Enter index");
        return;
    }

    if (index < 0 || index >= arr.length) {
        showResult("Invalid index");
        return;
    }

    let deleted = arr[index];

    arr.splice(index, 1);

    renderArray();

    showResult(deleted + " deleted");

    showComplexity("Time Complexity : O(n)");
}

// ==========================
// UPDATE
// ==========================

function updateElement() {

    const value =
        parseInt(document.getElementById("value").value);

    const index =
        parseInt(document.getElementById("index").value);

    if (isNaN(value) || isNaN(index)) {
        showResult("Enter value and index");
        return;
    }

    if (index < 0 || index >= arr.length) {
        showResult("Invalid index");
        return;
    }

    arr[index] = value;

    renderArray();

    showResult("Updated successfully");

    showComplexity("Time Complexity : O(1)");
}

// ==========================
// SEARCH
// ==========================

function searchElement() {

    const value =
        parseInt(document.getElementById("value").value);

    if (isNaN(value)) {
        showResult("Enter value");
        return;
    }

    let index = arr.indexOf(value);

    if (index !== -1)
        showResult("Found at index " + index);
    else
        showResult("Not Found");

    showComplexity("Time Complexity : O(n)");
}

// ==========================
// TRAVERSE
// ==========================

function traverseArray() {

    showResult(
        "Traversal : " + arr.join(" → ")
    );

    showComplexity("Time Complexity : O(n)");
}

// ==========================
// REVERSE
// ==========================

function reverseArray() {

    arr.reverse();

    renderArray();

    showResult("Array Reversed");

    showComplexity("Time Complexity : O(n)");
}

// ==========================
// SORT
// ==========================

function sortArray() {

    arr.sort((a, b) => a - b);

    renderArray();

    showResult("Array Sorted");

    showComplexity("Time Complexity : O(n log n)");
}

// ==========================
// MAX
// ==========================

function findMax() {

    if (arr.length === 0) return;

    let max = Math.max(...arr);

    showResult("Maximum = " + max);

    showComplexity("Time Complexity : O(n)");
}

// ==========================
// MIN
// ==========================

function findMin() {

    if (arr.length === 0) return;

    let min = Math.min(...arr);

    showResult("Minimum = " + min);

    showComplexity("Time Complexity : O(n)");
}

// ==========================
// SUM
// ==========================

function findSum() {

    let sum = arr.reduce(
        (total, value) => total + value, 0
    );

    showResult("Sum = " + sum);

    showComplexity("Time Complexity : O(n)");
}

// ==========================
// AVERAGE
// ==========================

function findAverage() {

    if (arr.length === 0) return;

    let sum =
        arr.reduce((a, b) => a + b, 0);

    let avg = sum / arr.length;

    showResult(
        "Average = " + avg.toFixed(2)
    );

    showComplexity("Time Complexity : O(n)");
}

// ==========================
// RANDOM ARRAY
// ==========================

function generateRandomArray() {

    arr = [];

    for (let i = 0; i < 8; i++) {

        arr.push(
            Math.floor(Math.random() * 100)
        );
    }

    renderArray();

    showResult("Random Array Generated");

    showComplexity("Time Complexity : O(n)");
}

// ==========================
// CLEAR
// ==========================

function clearArray() {

    arr = [];

    renderArray();

    showResult("Array Cleared");

    showComplexity("Time Complexity : O(1)");
}

// ==========================
// LINEAR SEARCH ANIMATION
// ==========================

async function linearSearchAnimation() {

    const value =
        parseInt(document.getElementById("value").value);

    if (isNaN(value)) {
        showResult("Enter value");
        return;
    }

    const boxes =
        document.querySelectorAll(".array-box");

    for (let i = 0; i < boxes.length; i++) {

        boxes[i].style.background =
            "#f7c873";

        await sleep(500);

        if (arr[i] === value) {

            boxes[i].style.background =
                "#7dd87d";

            showResult(
                "Found at index " + i
            );

            return;
        }

        boxes[i].style.background =
            "#D8C3A5";
    }

    showResult("Not Found");

    showComplexity("Time Complexity : O(n)");
}

// ==========================
// BINARY SEARCH ANIMATION
// ==========================

async function binarySearchAnimation() {

    const value =
        parseInt(document.getElementById("value").value);

    if (isNaN(value)) {
        showResult("Enter value");
        return;
    }

    arr.sort((a, b) => a - b);

    renderArray();

    let low = 0;
    let high = arr.length - 1;

    const boxes =
        document.querySelectorAll(".array-box");

    while (low <= high) {

        let mid =
            Math.floor((low + high) / 2);

        boxes[mid].style.background =
            "#f7c873";

        await sleep(700);

        if (arr[mid] === value) {

            boxes[mid].style.background =
                "#7dd87d";

            showResult(
                "Found at index " + mid
            );

            return;
        }

        if (arr[mid] < value)
            low = mid + 1;
        else
            high = mid - 1;

        boxes[mid].style.background =
            "#D8C3A5";
    }

    showResult("Not Found");

    showComplexity(
        "Time Complexity : O(log n)"
    );
}

// ==========================
// SLEEP
// ==========================

function sleep(ms) {

    return new Promise(resolve =>
        setTimeout(resolve, ms)
    );
}

// ==========================
// INITIAL LOAD
// ==========================

renderArray();