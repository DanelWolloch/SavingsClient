function supports_html5_storage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

function loadTable() {
    if (supports_html5_storage()) {

        var numOfSavings = localStorage["numOfSavings"];

        if (numOfSavings != null && isNaN(numOfSavings) && numOfSavings > 0) {

            var type = localStorage['saveType' + numOfSavings];
            var date = localStorage['saveDate' + numOfSavings];
            var notes = localStorage['saveNotes' + numOfSavings];



            var newRow = "<tr>" +
                            "<td>" + numOfSavings + "</td>" +
                            "<td>" + type + "</td>" +
                            "<td>" + date + "</td>" +
                            "<td>" + notes + "</td>"
            "</tr>";

            $('.MyTable').append(newRow);
        }

    } else {
        alert('מכשיר לא נתמך');
    }
}

function deleteAll() {
    var numOfSavings = localStorage["numOfSavings"];

    for (var i = 1; i < numOfSavings + 1; i++) {
        localStorage.removeItem('saveType' + i);
        localStorage.removeItem('saveDate' + i);
        localStorage.removeItem('saveNotes' + i);
    }

    localStorage["numOfSavings"] = 0;
}