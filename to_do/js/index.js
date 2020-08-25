var items = [];
var hidden = true;

$(document).ready(function() {

    $('#btn-add').click(function() {
        var addedValue = $('#add-item').val();

        if (addedValue.length === 0) {
            alert("Please enter some text")
        } else {
            items.push( addedValue );

            renderElements();
        }
    });

    $('.remove-btn').click(function() {
        var addedValue = $('#add-item').val();
        items.push( addedValue );

        renderElements();
    });

    function renderElements() {
        var result = "";

        for (var i = 0; i < items.length; i++) {
            var id = "item-" + i;
            result += "<li>"
                + items[i] + "<button id='" + id + "' class='remove-btn'>X</button>"
                + "</li>"
        }

        $('#list').html(result);
    }
});

