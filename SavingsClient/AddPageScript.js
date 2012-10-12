function addSave() {
    if (supports_html5_storage()) {
        var numOfSavings = localStorage["numOfSavings"];

        // Check if this is the first save
        if (numOfSavings == null) {
            numOfSavings = 0;
        }

        ++numOfSavings;

        var type = $('#saveType').val();
        var date = $('#saveDate').val();
        var notes = $('#saveNotes').val();

        localStorage["numOfSavings"] = numOfSavings;
        localStorage['saveType' + numOfSavings] = type;
        localStorage['saveDate' + numOfSavings] = date;
        localStorage['saveNotes' + numOfSavings] = notes;

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