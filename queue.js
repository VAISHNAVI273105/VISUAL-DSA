// Queue Visualizer Logic

let queue = [];

// Render Queue
function renderQueue() {

    const container = document.getElementById("queue");

    container.innerHTML = "";

    queue.forEach((item, index) => {

        const div = document.createElement("div");

        div.className = "queue-item";

        div.innerHTML = item;

        container.appendChild(div);

    });

}

// Show Explanation Message
function showMessage(message) {

    document.getElementById("message").innerHTML = message;

}

// Enqueue Operation
function enqueue() {

    let value = document.getElementById("value").value;

    if (value === "") {

        showMessage("⚠ Please enter an element.");

        return;

    }

    queue.push(value);

    showMessage(
        "✅ ENQUEUE Operation<br><br>" +
        "Element <b>" + value + "</b> is inserted at the REAR of the queue.<br>" +
        "Queue follows FIFO (First In First Out)."
    );

    renderQueue();

    document.getElementById("value").value = "";

}

// Dequeue Operation
function dequeue() {

    if (queue.length === 0) {

        showMessage(
            "❌ Queue Underflow<br><br>" +
            "Queue is empty. Nothing can be removed."
        );

        return;

    }

    let removed = queue.shift();

    showMessage(
        "✅ DEQUEUE Operation<br><br>" +
        "Element <b>" + removed + "</b> removed from the FRONT of the queue.<br>" +
        "The first inserted element leaves first."
    );

    renderQueue();

}

// Front Operation
function frontElement() {

    if (queue.length === 0) {

        showMessage("❌ Queue is Empty.");

        return;

    }

    showMessage(
        "👉 FRONT Operation<br><br>" +
        "Front Element = <b>" + queue[0] + "</b>"
    );

}

// Rear Operation
function rearElement() {

    if (queue.length === 0) {

        showMessage("❌ Queue is Empty.");

        return;

    }

    showMessage(
        "👉 REAR Operation<br><br>" +
        "Rear Element = <b>" + queue[queue.length - 1] + "</b>"
    );

}

// Size Operation
function queueSize() {

    showMessage(
        "📏 SIZE Operation<br><br>" +
        "Current Queue Size = <b>" + queue.length + "</b>"
    );

}

// Is Empty Operation
function isEmpty() {

    if (queue.length === 0) {

        showMessage(
            "✅ ISEMPTY Operation<br><br>" +
            "Queue is Empty."
        );

    } else {

        showMessage(
            "❌ ISEMPTY Operation<br><br>" +
            "Queue is NOT Empty."
        );

    }

}

// Traverse Operation
function traverseQueue() {

    if (queue.length === 0) {

        showMessage("❌ Queue is Empty.");

        return;

    }

    showMessage(
        "🔄 TRAVERSE Operation<br><br>" +
        queue.join(" ➜ ")
    );

}

// Search Operation
function searchElement() {

    if (queue.length === 0) {

        showMessage("❌ Queue is Empty.");

        return;

    }

    let value = prompt("Enter element to search");

    if (value === null) return;

    if (queue.includes(value)) {

        showMessage(
            "✅ SEARCH Operation<br><br>" +
            "Element <b>" + value + "</b> Found in Queue."
        );

    } else {

        showMessage(
            "❌ SEARCH Operation<br><br>" +
            "Element <b>" + value + "</b> Not Found."
        );

    }

}

// Clear Operation
function clearQueue() {

    queue = [];

    renderQueue();

    showMessage(
        "🗑 CLEAR Operation<br><br>" +
        "All elements removed successfully."
    );

}