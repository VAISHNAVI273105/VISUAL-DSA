let currentText = "";

// MESSAGE

function showMessage(msg) {
    document.getElementById("message").innerHTML = msg;
}

// VISUALIZATION

function renderText(text) {

    let container =
        document.getElementById("visualization");

    container.innerHTML = "";

    if (text.length === 0) {

        container.innerHTML =
            "No Text Available";

        return;
    }

    for (let ch of text) {

        let box =
            document.createElement("div");

        box.className = "char-box";

        box.innerHTML = ch;

        container.appendChild(box);
    }
}

// CREATE

function createText() {

    let input =
        document.getElementById("bufferInput").value;

    if (input === "") {

        showMessage(
            "⚠ Please enter text."
        );

        return;
    }

    currentText = input;

    renderText(currentText);

    showMessage(
        "✅ CREATE<br><br>" +
        "StringBuffer/StringBuilder object created successfully."
    );
}

// APPEND

function appendText() {

    if (currentText === "") {

        showMessage("⚠ Create text first.");

        return;
    }

    let value =
        prompt("Enter text to append");

    if (value === null) return;

    currentText += value;

    renderText(currentText);

    showMessage(
        "➕ APPEND<br><br>" +
        "New text appended at the end."
    );
}

// INSERT

function insertText() {

    if (currentText === "") {

        showMessage("⚠ Create text first.");

        return;
    }

    let index =
        parseInt(prompt("Enter Position"));

    let value =
        prompt("Enter Text");

    if (isNaN(index) || value === null)
        return;

    currentText =
        currentText.slice(0, index) +
        value +
        currentText.slice(index);

    renderText(currentText);

    showMessage(
        "📥 INSERT<br><br>" +
        "Text inserted at position " +
        index
    );
}

// DELETE

function deleteText() {

    if (currentText === "") {

        showMessage("⚠ Create text first.");

        return;
    }

    let start =
        parseInt(prompt("Start Index"));

    let end =
        parseInt(prompt("End Index"));

    if (
        isNaN(start) ||
        isNaN(end)
    ) return;

    currentText =
        currentText.slice(0, start) +
        currentText.slice(end);

    renderText(currentText);

    showMessage(
        "🗑 DELETE<br><br>" +
        "Characters removed from index " +
        start +
        " to " +
        (end - 1)
    );
}

// DELETE CHAR AT

function deleteCharText() {

    if (currentText === "") {

        showMessage("⚠ Create text first.");

        return;
    }

    let index =
        parseInt(prompt("Enter Index"));

    if (isNaN(index))
        return;

    currentText =
        currentText.slice(0, index) +
        currentText.slice(index + 1);

    renderText(currentText);

    showMessage(
        "❌ DELETE CHAR AT<br><br>" +
        "Character removed successfully."
    );
}

// REPLACE

function replaceText() {

    if (currentText === "") {

        showMessage("⚠ Create text first.");

        return;
    }

    let oldText =
        prompt("Text to Replace");

    let newText =
        prompt("New Text");

    if (
        oldText === null ||
        newText === null
    ) return;

    currentText =
        currentText.replace(
            oldText,
            newText
        );

    renderText(currentText);

    showMessage(
        "♻ REPLACE<br><br>" +
        "Text replaced successfully."
    );
}

// REVERSE

function reverseText() {

    if (currentText === "") {

        showMessage("⚠ Create text first.");

        return;
    }

    currentText =
        currentText
            .split("")
            .reverse()
            .join("");

    renderText(currentText);

    showMessage(
        "🔄 REVERSE<br><br>" +
        "Characters reversed."
    );
}

// LENGTH

function lengthText() {

    if (currentText === "") {

        showMessage("⚠ Create text first.");

        return;
    }

    showMessage(
        "📏 LENGTH<br><br>" +
        "Length = " +
        currentText.length
    );
}

// CAPACITY

function capacityText() {

    if (currentText === "") {

        showMessage("⚠ Create text first.");

        return;
    }

    let capacity =
        currentText.length + 16;

    showMessage(
        "📦 CAPACITY<br><br>" +
        "Approx Capacity = " +
        capacity +
        "<br><br>" +
        "Java default capacity = Length + 16"
    );
}

// CHAR AT

function charAtText() {

    if (currentText === "") {

        showMessage("⚠ Create text first.");

        return;
    }

    let index =
        parseInt(prompt("Enter Index"));

    if (
        isNaN(index) ||
        index < 0 ||
        index >= currentText.length
    ) {

        showMessage(
            "❌ Invalid Index"
        );

        return;
    }

    showMessage(
        "🔍 CHAR AT<br><br>" +
        "Character = " +
        currentText.charAt(index)
    );
}

// SET CHAR AT

function setCharText() {

    if (currentText === "") {

        showMessage("⚠ Create text first.");

        return;
    }

    let index =
        parseInt(prompt("Enter Index"));

    let ch =
        prompt("Enter New Character");

    if (
        isNaN(index) ||
        ch === null
    ) return;

    currentText =
        currentText.substring(0, index) +
        ch +
        currentText.substring(index + 1);

    renderText(currentText);

    showMessage(
        "✏ SET CHAR AT<br><br>" +
        "Character modified successfully."
    );
}

// SUBSTRING

function substringText() {

    if (currentText === "") {

        showMessage("⚠ Create text first.");

        return;
    }

    let start =
        parseInt(prompt("Start Index"));

    let end =
        parseInt(prompt("End Index"));

    if (
        isNaN(start) ||
        isNaN(end)
    ) return;

    let sub =
        currentText.substring(
            start,
            end
        );

    showMessage(
        "✂ SUBSTRING<br><br>" +
        "Result = " +
        sub
    );
}

// COMPARE

function compareText() {

    if (currentText === "") {

        showMessage("⚠ Create text first.");

        return;
    }

    let another =
        prompt("Enter Another Text");

    if (another === null)
        return;

    if (
        currentText === another
    ) {

        showMessage(
            "✅ COMPARE<br><br>" +
            "Both texts are equal."
        );

    } else {

        showMessage(
            "❌ COMPARE<br><br>" +
            "Texts are different."
        );
    }
}

// SEARCH

function searchText() {

    if (currentText === "") {

        showMessage("⚠ Create text first.");

        return;
    }

    let value =
        prompt("Enter Text to Search");

    if (value === null)
        return;

    let pos =
        currentText.indexOf(value);

    if (pos !== -1) {

        showMessage(
            "🔎 SEARCH<br><br>" +
            "Found at index " +
            pos
        );

    } else {

        showMessage(
            "❌ Text not found."
        );
    }
}

// CLEAR

function clearText() {

    currentText = "";

    renderText(currentText);

    showMessage(
        "🧹 CLEAR<br><br>" +
        "All characters removed."
    );
}

// INITIAL MESSAGE

showMessage(
    "💛 Welcome to StringBuffer & StringBuilder Visualizer. Create text and perform operations."
);