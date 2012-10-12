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

        if (numOfSavings > 0) {

            for (var i = 1; i <= numOfSavings; i++) {
                var type = localStorage['saveType' + i];
                var date = localStorage['saveDate' + i];
                var notes = localStorage['saveNotes' + i];
                var newRow = "<tr>" +
                                "<td>" + i + "</td>" +
                                "<td>" + type + "</td>" +
                                "<td>" + date + "</td>" +
                                "<td>" + notes + "</td>"
                "</tr>";

                $('.MyTable').append(newRow);
            }
        }

    } else {
        alert('מכשיר לא נתמך');
    }
}

function deleteAll() {
    var numOfSavings = localStorage["numOfSavings"];

    for (var i = 1; i <= numOfSavings; i++) {
        localStorage.removeItem('saveType' + i);
        localStorage.removeItem('saveDate' + i);
        localStorage.removeItem('saveNotes' + i);
    }

    localStorage["numOfSavings"] = 0;

    location.reload();
}