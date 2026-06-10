let currentString = "";

// MESSAGE

function showMessage(msg) {
    document.getElementById("message").innerHTML = msg;
}

// VISUALIZATION

function renderString(str) {

    let container = document.getElementById("visualization");

    container.innerHTML = "";

    if (str.length === 0) {

        container.innerHTML = "No String Available";

        return;
    }

    for (let ch of str) {

        let box = document.createElement("div");

        box.className = "char-box";

        box.innerHTML = ch;

        container.appendChild(box);
    }
}

// CREATE

function createString() {

    let input = document.getElementById("stringInput").value;

    if (input === "") {

        showMessage("⚠ Please enter a string.");

        return;
    }

    currentString = input;

    renderString(currentString);

    showMessage(
        "✅ CREATE STRING<br><br>" +
        "String created successfully.<br>" +
        "Each character is stored sequentially."
    );
}

// LENGTH

function lengthString() {

    if (currentString === "") {

        showMessage("⚠ Create a string first.");

        return;
    }

    showMessage(
        "📏 LENGTH OPERATION<br><br>" +
        "Length of String = <b>" +
        currentString.length +
        "</b>"
    );
}

// CHAR AT

function charAtString() {

    if (currentString === "") {

        showMessage("⚠ Create a string first.");

        return;
    }

    let index = prompt(
        "Enter Index Position"
    );

    if (index === null) return;

    if (
        index < 0 ||
        index >= currentString.length
    ) {

        showMessage(
            "❌ Invalid Index."
        );

        return;
    }

    showMessage(
        "🔍 CHAR AT<br><br>" +
        "Character at index " +
        index +
        " = <b>" +
        currentString.charAt(index) +
        "</b>"
    );
}

// CONCAT

function concatString() {

    if (currentString === "") {

        showMessage("⚠ Create a string first.");

        return;
    }

    let str2 = prompt(
        "Enter String to Concatenate"
    );

    if (str2 === null) return;

    currentString += str2;

    renderString(currentString);

    showMessage(
        "🔗 CONCATENATION<br><br>" +
        "Second string appended to the first string."
    );
}

// SUBSTRING

function substringString() {

    if (currentString === "") {

        showMessage("⚠ Create a string first.");

        return;
    }

    let start = prompt("Start Index");

    let end = prompt("End Index");

    if (
        start === null ||
        end === null
    ) return;

    let sub =
        currentString.substring(
            start,
            end
        );

    showMessage(
        "✂ SUBSTRING<br><br>" +
        "Result = <b>" +
        sub +
        "</b>"
    );
}

// REVERSE

function reverseString() {

    if (currentString === "") {

        showMessage("⚠ Create a string first.");

        return;
    }

    let rev =
        currentString
        .split("")
        .reverse()
        .join("");

    renderString(rev);

    showMessage(
        "🔄 REVERSE STRING<br><br>" +
        "Characters are reversed."
    );
}

// UPPERCASE

function uppercaseString() {

    if (currentString === "") {

        showMessage("⚠ Create a string first.");

        return;
    }

    currentString =
        currentString.toUpperCase();

    renderString(currentString);

    showMessage(
        "🔠 UPPERCASE<br><br>" +
        "Converted all letters to uppercase."
    );
}

// LOWERCASE

function lowercaseString() {

    if (currentString === "") {

        showMessage("⚠ Create a string first.");

        return;
    }

    currentString =
        currentString.toLowerCase();

    renderString(currentString);

    showMessage(
        "🔡 LOWERCASE<br><br>" +
        "Converted all letters to lowercase."
    );
}

// SEARCH

function searchChar() {

    if (currentString === "") {

        showMessage("⚠ Create a string first.");

        return;
    }

    let ch = prompt(
        "Enter Character to Search"
    );

    if (ch === null) return;

    let pos =
        currentString.indexOf(ch);

    if (pos !== -1) {

        showMessage(
            "✅ SEARCH<br><br>" +
            "Character found at index " +
            pos
        );

    } else {

        showMessage(
            "❌ Character not found."
        );
    }
}

// REPLACE

function replaceChar() {

    if (currentString === "") {

        showMessage("⚠ Create a string first.");

        return;
    }

    let oldChar = prompt(
        "Character to Replace"
    );

    let newChar = prompt(
        "New Character"
    );

    if (
        oldChar === null ||
        newChar === null
    ) return;

    currentString =
        currentString.replace(
            oldChar,
            newChar
        );

    renderString(currentString);

    showMessage(
        "♻ REPLACE<br><br>" +
        "Character replaced successfully."
    );
}

// COMPARE

function compareString() {

    if (currentString === "") {

        showMessage("⚠ Create a string first.");

        return;
    }

    let str2 = prompt(
        "Enter Another String"
    );

    if (str2 === null) return;

    if (
        currentString === str2
    ) {

        showMessage(
            "✅ COMPARE<br><br>" +
            "Both Strings are Equal."
        );

    } else {

        showMessage(
            "❌ COMPARE<br><br>" +
            "Strings are Not Equal."
        );
    }
}

// PALINDROME

function palindromeCheck() {

    if (currentString === "") {

        showMessage("⚠ Create a string first.");

        return;
    }

    let rev =
        currentString
        .split("")
        .reverse()
        .join("");

    if (
        currentString === rev
    ) {

        showMessage(
            "✅ PALINDROME<br><br>" +
            "String reads same forward and backward."
        );

    } else {

        showMessage(
            "❌ NOT A PALINDROME."
        );
    }
}

// IS NUMERIC

function isNumeric() {

    if (currentString === "") {

        showMessage("⚠ Create a string first.");

        return;
    }

    if (
        !isNaN(currentString)
    ) {

        showMessage(
            "✅ NUMERIC STRING"
        );

    } else {

        showMessage(
            "❌ CHARACTER STRING"
        );
    }
}

// SUM OF DIGITS

function sumDigits() {

    if (
        currentString === "" ||
        isNaN(currentString)
    ) {

        showMessage(
            "⚠ Enter Numeric String."
        );

        return;
    }

    let sum = 0;

    for (let digit of currentString) {

        sum += Number(digit);
    }

    showMessage(
        "➕ SUM OF DIGITS<br><br>" +
        "Sum = <b>" +
        sum +
        "</b>"
    );
}

// LARGEST DIGIT

function largestDigit() {

    if (
        currentString === "" ||
        isNaN(currentString)
    ) {

        showMessage(
            "⚠ Enter Numeric String."
        );

        return;
    }

    let max = Math.max(
        ...currentString.split("")
    );

    showMessage(
        "🏆 LARGEST DIGIT<br><br>" +
        "Largest Digit = <b>" +
        max +
        "</b>"
    );
}

// INITIAL MESSAGE

showMessage(
    "❤️ Welcome to String Visualizer. Create a string and perform operations."
);