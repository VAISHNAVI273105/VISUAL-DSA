// =========================
// ARRAYLIST DATA
// =========================

let arrayList = [];
let capacity = 10;

// =========================
// DOM ELEMENTS
// =========================

const container = document.getElementById("arrayContainer");
const messageBox = document.getElementById("messageBox");
const historyList = document.getElementById("historyList");
const sizeDisplay = document.getElementById("sizeDisplay");
const capacityDisplay = document.getElementById("capacityDisplay");

// =========================
// RENDER ARRAY
// =========================

function renderArray() {

    container.innerHTML = "";

    arrayList.forEach((value, index) => {

        const box = document.createElement("div");
        box.className = "array-box";

        box.innerHTML = `
            ${value}
            <div class="index">${index}</div>
        `;

        container.appendChild(box);
    });

    updateStats();
}

// =========================
// UPDATE STATS
// =========================

function updateStats() {

    sizeDisplay.textContent = arrayList.length;
    capacityDisplay.textContent = capacity;

    if (arrayList.length >= capacity) {
        capacity *= 2;
        capacityDisplay.textContent = capacity;
    }
}

// =========================
// GET INPUTS
// =========================

function getValue() {
    return document.getElementById("valueInput").value;
}

function getIndex() {
    return parseInt(document.getElementById("indexInput").value);
}

// =========================
// MESSAGE
// =========================

function showMessage(text) {
    messageBox.textContent = text;
}

// =========================
// HISTORY
// =========================

function addHistory(text) {

    const li = document.createElement("li");
    li.textContent = text;

    historyList.prepend(li);
}

// =========================
// ADD END
// =========================

function addEnd() {

    const value = getValue();

    if (value === "") {
        showMessage("Enter a value");
        return;
    }

    arrayList.push(Number(value));

    renderArray();

    showMessage(`${value} inserted at end`);

    addHistory(`Added ${value} at end`);
}

// =========================
// ADD BEGINNING
// =========================

function addBeginning() {

    const value = getValue();

    if (value === "") return;

    arrayList.unshift(Number(value));

    renderArray();

    showMessage(`${value} inserted at beginning`);

    addHistory(`Added ${value} at beginning`);
}

// =========================
// ADD AT INDEX
// =========================

function addAtIndex() {

    const value = getValue();
    const index = getIndex();

    if (value === "") return;

    if (isNaN(index)) {
        showMessage("Enter index");
        return;
    }

    if (index < 0 || index > arrayList.length) {
        showMessage("Invalid index");
        return;
    }

    arrayList.splice(index, 0, Number(value));

    renderArray();

    showMessage(`${value} inserted at index ${index}`);

    addHistory(`Inserted ${value} at index ${index}`);
}

// =========================
// REMOVE FIRST
// =========================

function removeFirst() {

    if (arrayList.length === 0) {
        showMessage("ArrayList Empty");
        return;
    }

    let removed = arrayList.shift();

    renderArray();

    showMessage(`${removed} removed`);

    addHistory(`Removed first element ${removed}`);
}

// =========================
// REMOVE LAST
// =========================

function removeLast() {

    if (arrayList.length === 0) {
        showMessage("ArrayList Empty");
        return;
    }

    let removed = arrayList.pop();

    renderArray();

    showMessage(`${removed} removed`);

    addHistory(`Removed last element ${removed}`);
}

// =========================
// REMOVE INDEX
// =========================

function removeIndex() {

    const index = getIndex();

    if (isNaN(index)) {
        showMessage("Enter index");
        return;
    }

    if (index < 0 || index >= arrayList.length) {
        showMessage("Invalid index");
        return;
    }

    let removed = arrayList.splice(index, 1);

    renderArray();

    showMessage(`${removed} removed from index ${index}`);

    addHistory(`Removed ${removed} from index ${index}`);
}

// =========================
// UPDATE ELEMENT
// =========================

function updateElement() {

    const value = getValue();
    const index = getIndex();

    if (value === "") return;

    if (isNaN(index)) {
        showMessage("Enter index");
        return;
    }

    if (index < 0 || index >= arrayList.length) {
        showMessage("Invalid index");
        return;
    }

    arrayList[index] = Number(value);

    renderArray();

    showMessage(`Index ${index} updated`);

    addHistory(`Updated index ${index} to ${value}`);
}

// =========================
// SEARCH
// =========================

function searchElement() {

    const value = Number(getValue());

    const boxes = document.querySelectorAll(".array-box");

    boxes.forEach(box => {
        box.classList.remove("search");
        box.classList.remove("highlight");
    });

    let index = arrayList.indexOf(value);

    if (index === -1) {

        showMessage("Element not found");

        addHistory(`Search failed for ${value}`);

        return;
    }

    boxes[index].classList.add("highlight");

    showMessage(`${value} found at index ${index}`);

    addHistory(`Found ${value} at index ${index}`);
}

// =========================
// TRAVERSE
// =========================

async function traverseArray() {

    const boxes = document.querySelectorAll(".array-box");

    if (boxes.length === 0) {
        showMessage("ArrayList Empty");
        return;
    }

    for (let i = 0; i < boxes.length; i++) {

        boxes[i].classList.add("search");

        await new Promise(resolve =>
            setTimeout(resolve, 500)
        );

        boxes[i].classList.remove("search");
    }

    showMessage("Traversal Complete");

    addHistory("Traversed ArrayList");
}

// =========================
// SHOW SIZE
// =========================

function showSize() {

    showMessage(
        `Current Size : ${arrayList.length}`
    );

    addHistory(
        `Checked size (${arrayList.length})`
    );
}

// =========================
// RANDOM GENERATOR
// =========================

function generateRandom() {

    arrayList = [];

    let count =
        Math.floor(Math.random() * 8) + 5;

    for (let i = 0; i < count; i++) {

        arrayList.push(
            Math.floor(Math.random() * 100)
        );
    }

    renderArray();

    showMessage(
        "Random ArrayList Generated"
    );

    addHistory(
        "Generated Random ArrayList"
    );
}

// =========================
// CLEAR
// =========================

function clearArray() {

    arrayList = [];

    renderArray();

    showMessage(
        "ArrayList Cleared"
    );

    addHistory(
        "Cleared ArrayList"
    );
}

// =========================
// INITIAL LOAD
// =========================

renderArray();