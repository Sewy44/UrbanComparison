$(document).ready(function () {
    $('#search1Div').hide();
    $('#search2Div').hide();
});

function compare() {
    $('#errorMessages').empty();
    $('#search1Table').empty();
    $('#search2Table').empty();
    searchFirstUA();
    searchSecondUA();
}

function validate() {
    var firstUrbanArea = $('#firstUASearch').val();
    var secondUrbanArea = $('#secondUASearch').val();

    $('.error').remove();
    if (firstUrbanArea.length < 1) {
        $('#firstUALabel').after('<span class="error">  This field is required.</span>')
    }
    else if (secondUrbanArea.length < 1) {
        $('#secondUALabel').after('<span class="error">  This field is required.</span>')
    }
    else {
        compare();
    }
}

function searchFirstUA() {

    var firstSearchParam = $('#firstUASearch').val().toLowerCase();
    var searchOne = $('#search1Table');

    $.ajax({
        type: "GET",
        url: "https://api.teleport.org/api/urban_areas/slug:" + firstSearchParam + "/scores/",
        success: function (dataArray) {
            $('#search1Div').show();
            var content = '<tr><td>' + dataArray.categories[1].name + '</td><td>' + dataArray.categories[1].score_out_of_10.toFixed(2) + '</td></tr>' +
                '<tr><td>' + dataArray.categories[7].name + '</td><td>' + dataArray.categories[7].score_out_of_10.toFixed(2) + '</td></tr>' +
                '<tr><td>' + dataArray.categories[8].name + '</td><td>' + dataArray.categories[8].score_out_of_10.toFixed(2) + '</td></tr>' +
                '<tr><td>' + dataArray.categories[10].name + '</td><td>' + dataArray.categories[10].score_out_of_10.toFixed(2) + '</td></tr>' +
                '<tr><td>' + dataArray.categories[15].name + '</td><td>' + dataArray.categories[15].score_out_of_10.toFixed(2) + '</td></tr>'

            searchOne.append(content);
        }, error: function () {
            $('#errorMessages')
                .append($('<li>')
                    .attr({ class: 'list-group-item list-group-item-danger' })
                    .text('Error calling web service. Please try again later.'));
        }
    })
}

function searchSecondUA() {
    var secondSearchParam = $('#secondUASearch').val().toLowerCase();
    var searchTwo = $('#search2Table');

    $.ajax({
        type: "GET",
        url: "https://api.teleport.org/api/urban_areas/slug:" + secondSearchParam + "/scores/",
        success: function (dataArray) {
            $('#search2Div').show();
            var content = '<tr><td>' + dataArray.categories[1].name + '</td><td>' + dataArray.categories[1].score_out_of_10.toFixed(2) + '</td></tr>' +
                '<tr><td>' + dataArray.categories[7].name + '</td><td>' + dataArray.categories[7].score_out_of_10.toFixed(2) + '</td></tr>' +
                '<tr><td>' + dataArray.categories[8].name + '</td><td>' + dataArray.categories[8].score_out_of_10.toFixed(2) + '</td></tr>' +
                '<tr><td>' + dataArray.categories[10].name + '</td><td>' + dataArray.categories[10].score_out_of_10.toFixed(2) + '</td></tr>' +
                '<tr><td>' + dataArray.categories[15].name + '</td><td>' + dataArray.categories[15].score_out_of_10.toFixed(2) + '</td></tr>'

            searchTwo.append(content);
        }, error: function () {
            $('#errorMessages')
                .append($('<li>')
                    .attr({ class: 'list-group-item list-group-item-danger' })
                    .text('Error calling web service. Please try again later.'));
        }
    })
}

