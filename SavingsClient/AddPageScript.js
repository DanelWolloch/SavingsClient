function load() {
    var val = getCurrSave();

    if (val != '') {
        $('#saveType').val(localStorage['saveType' + val]);
        $('#saveDate').val(localStorage['saveDate' + val]);
        $('#saveNotes').val(localStorage['saveNotes' + val]);

        $('#btnSave').text('ערוך');
    }
}

function getCurrSave() {
    var query = window.location.search.substring(1);
    if (query != '') {
        var parms = query.split('&');
        for (var i = 0; i < parms.length; i++) {
            var pos = parms[i].indexOf('=');
            if (pos > 0) {
                var key = parms[i].substring(0, pos);
                var val = parms[i].substring(pos + 1);
            }
        }
        return val;
    } else {
        return "";
    }
}

function addSave() {
    if (supports_html5_storage()) {

        if ($('#btnSave').text() == 'ערוך') {
            saveToLocalStorage(getCurrSave());
        } else {
            var numOfSavings = localStorage["numOfSavings"];

            // Check if this is the first save
            if (numOfSavings == null) {
                numOfSavings = 0;
            }

            ++numOfSavings;
            localStorage["numOfSavings"] = numOfSavings;
            saveToLocalStorage(numOfSavings);
        }

        $('.label-success').show();

    } else {
        alert('מכשיר לא נתמך');
    }
}

function saveToLocalStorage(num) {

    var type = $('#saveType').val();
    var date = $('#saveDate').val();
    var notes = $('#saveNotes').val();

    
    localStorage['saveType' + num] = type;
    localStorage['saveDate' + num] = date;
    localStorage['saveNotes' + num] = notes;
}

function supports_html5_storage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}