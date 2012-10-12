function loadTable() {
    if (supports_html5_storage()) {

        var numOfSavings = localStorage["numOfSavings"];

        if (numOfSavings != null) {

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

function supports_html5_storage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}