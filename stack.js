// Stack Data Structure

let stack = [];

// Render Stack

function renderStack() {

    let container = document.getElementById("stack");

    container.innerHTML = "";

    stack.forEach(item => {

        let div = document.createElement("div");

        div.className = "stack-item";

        div.innerHTML = item;

        container.appendChild(div);

    });

}

// Show Explanation

function showMessage(message) {

    document.getElementById("message").innerHTML = message;

}

// PUSH

function pushElement() {

    let value = document.getElementById("value").value;

    if(value === "") {

        showMessage(
            "⚠ Please enter an element before performing PUSH operation."
        );

        return;
    }

    stack.push(value);

    showMessage(
        "✅ PUSH Operation<br><br>" +
        "Element <b>" + value + "</b> is inserted at the TOP of the Stack.<br>" +
        "Stack follows <b>LIFO (Last In First Out)</b>."
    );

    renderStack();

    document.getElementById("value").value = "";

}

// POP

function popElement() {

    if(stack.length === 0) {

        showMessage(
            "❌ POP Operation Failed.<br><br>" +
            "Stack Underflow. Stack is Empty."
        );

        return;
    }

    let removed = stack.pop();

    showMessage(
        "✅ POP Operation<br><br>" +
        "Element <b>" + removed + "</b> removed from the TOP of the Stack.<br>" +
        "Last inserted element is removed first."
    );

    renderStack();

}

// PEEK

function peekElement() {

    if(stack.length === 0) {

        showMessage(
            "❌ Stack is Empty."
        );

        return;
    }

    showMessage(
        "👀 PEEK Operation<br><br>" +
        "Top Element = <b>" + stack[stack.length - 1] + "</b>"
    );

}

// SIZE

function stackSize() {

    showMessage(
        "📏 SIZE Operation<br><br>" +
        "Current Stack Size = <b>" + stack.length + "</b>"
    );

}

// IS EMPTY

function isEmpty() {

    if(stack.length === 0) {

        showMessage(
            "✅ ISEMPTY Operation<br><br>" +
            "Stack is Empty."
        );

    } else {

        showMessage(
            "❌ ISEMPTY Operation<br><br>" +
            "Stack is NOT Empty."
        );

    }

}

// TRAVERSE

function traverseStack() {

    if(stack.length === 0) {

        showMessage(
            "❌ Stack is Empty."
        );

        return;
    }

    let result = [...stack].reverse();

    showMessage(
        "🔄 TRAVERSE Operation<br><br>" +
        "Top to Bottom : " +
        result.join(" ➜ ")
    );

}

// SEARCH

function searchElement() {

    if(stack.length === 0) {

        showMessage(
            "❌ Stack is Empty."
        );

        return;
    }

    let value = prompt("Enter element to search");

    if(value === null) return;

    if(stack.includes(value)) {

        showMessage(
            "✅ SEARCH Operation<br><br>" +
            "Element <b>" + value + "</b> Found in Stack."
        );

    } else {

        showMessage(
            "❌ SEARCH Operation<br><br>" +
            "Element <b>" + value + "</b> Not Found."
        );

    }

}

// CLEAR

function clearStack() {

    stack = [];

    renderStack();

    showMessage(
        "🗑 CLEAR Operation<br><br>" +
        "All elements removed successfully from the Stack."
    );

}

// Initial Message

showMessage(
    "💜 Welcome to Stack Visualizer. Click any operation to see how Stack works."
);