let linkedList = [];

// ==========================
// RENDER LINKED LIST
// ==========================

function renderList() {

    const container =
        document.getElementById("linkedListContainer");

    container.innerHTML = "";

    if (linkedList.length === 0) {

        container.innerHTML =
            `<div class="null-node">NULL</div>`;

        document.getElementById("count").innerText =
            "Nodes : 0";

        return;
    }

    linkedList.forEach((value, index) => {

        const node = document.createElement("div");
        node.className = "node";

        node.innerHTML = `
            <div class="data-box">${value}</div>
            <div class="pointer-box">→</div>
        `;

        container.appendChild(node);

        if (index !== linkedList.length - 1) {

            const arrow =
                document.createElement("div");

            arrow.className = "arrow";
            arrow.innerHTML = "→";

            container.appendChild(arrow);
        }
    });

    const nullNode =
        document.createElement("div");

    nullNode.className = "null-node";
    nullNode.innerText = "NULL";

    container.appendChild(nullNode);

    document.getElementById("count").innerText =
        "Nodes : " + linkedList.length;
}

// ==========================
// RESULT
// ==========================

function updateOperation(text) {
    document.getElementById("operation").innerHTML =
        text;
}

function updateComplexity(text) {
    document.getElementById("complexity").innerHTML =
        text;
}

function addHistory(text) {

    const history =
        document.getElementById("history");

    if (history.innerHTML === "No operations yet") {
        history.innerHTML = "";
    }

    history.innerHTML =
        "• " + text + "<br>" +
        history.innerHTML;
}

// ==========================
// INSERT FIRST
// ==========================

function insertStart() {

    const value =
        parseInt(document.getElementById("valueInput").value);

    if (isNaN(value)) {
        updateOperation("Enter a valid value");
        return;
    }

    linkedList.unshift(value);

    renderList();

    updateOperation(
        value + " inserted at beginning"
    );

    updateComplexity("O(1)");

    addHistory("Inserted First : " + value);
}

// ==========================
// INSERT LAST
// ==========================

function insertEnd() {

    const value =
        parseInt(document.getElementById("valueInput").value);

    if (isNaN(value)) {
        updateOperation("Enter a valid value");
        return;
    }

    linkedList.push(value);

    renderList();

    updateOperation(
        value + " inserted at end"
    );

    updateComplexity("O(n)");

    addHistory("Inserted Last : " + value);
}

// ==========================
// INSERT POSITION
// ==========================

function insertPosition() {

    const value =
        parseInt(document.getElementById("valueInput").value);

    const pos =
        parseInt(document.getElementById("positionInput").value);

    if (isNaN(value) || isNaN(pos)) {
        updateOperation("Enter value and position");
        return;
    }

    if (pos < 0 || pos > linkedList.length) {
        updateOperation("Invalid Position");
        return;
    }

    linkedList.splice(pos, 0, value);

    renderList();

    updateOperation(
        value + " inserted at position " + pos
    );

    updateComplexity("O(n)");

    addHistory(
        "Inserted " + value +
        " at position " + pos
    );
}

// ==========================
// DELETE FIRST
// ==========================

function deleteStart() {

    if (linkedList.length === 0) {
        updateOperation("List Empty");
        return;
    }

    let deleted =
        linkedList.shift();

    renderList();

    updateOperation(
        deleted + " deleted from beginning"
    );

    updateComplexity("O(1)");

    addHistory(
        "Deleted First : " + deleted
    );
}

// ==========================
// DELETE LAST
// ==========================

function deleteEnd() {

    if (linkedList.length === 0) {
        updateOperation("List Empty");
        return;
    }

    let deleted =
        linkedList.pop();

    renderList();

    updateOperation(
        deleted + " deleted from end"
    );

    updateComplexity("O(n)");

    addHistory(
        "Deleted Last : " + deleted
    );
}

// ==========================
// DELETE POSITION
// ==========================

function deletePosition() {

    const pos =
        parseInt(document.getElementById("positionInput").value);

    if (isNaN(pos)) {
        updateOperation("Enter Position");
        return;
    }

    if (pos < 0 || pos >= linkedList.length) {
        updateOperation("Invalid Position");
        return;
    }

    let deleted =
        linkedList.splice(pos, 1)[0];

    renderList();

    updateOperation(
        deleted + " deleted from position " + pos
    );

    updateComplexity("O(n)");

    addHistory(
        "Deleted Position " +
        pos +
        " : " +
        deleted
    );
}

// ==========================
// SEARCH
// ==========================

function searchNode() {

    const value =
        parseInt(document.getElementById("valueInput").value);

    if (isNaN(value)) {
        updateOperation("Enter value");
        return;
    }

    const index =
        linkedList.indexOf(value);

    if (index !== -1) {

        updateOperation(
            value +
            " found at position " +
            index
        );

        addHistory(
            "Search Found : " + value
        );
    }
    else {

        updateOperation(
            value + " not found"
        );

        addHistory(
            "Search Failed : " + value
        );
    }

    updateComplexity("O(n)");
}

// ==========================
// REVERSE
// ==========================

function reverseList() {

    linkedList.reverse();

    renderList();

    updateOperation(
        "Linked List Reversed"
    );

    updateComplexity("O(n)");

    addHistory(
        "Reversed Linked List"
    );
}

// ==========================
// TRAVERSE
// ==========================

function traverseList() {

    if (linkedList.length === 0) {

        updateOperation(
            "List Empty"
        );

        return;
    }

    updateOperation(
        "Traversal : " +
        linkedList.join(" → ") +
        " → NULL"
    );

    updateComplexity("O(n)");

    addHistory(
        "Traversed List"
    );
}

// ==========================
// CLEAR LIST
// ==========================

function clearList() {

    linkedList = [];

    renderList();

    updateOperation(
        "Linked List Cleared"
    );

    updateComplexity("O(1)");

    addHistory(
        "Cleared List"
    );
}

// ==========================
// INITIAL LOAD
// ==========================

renderList();