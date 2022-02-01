$(document).ready(function () {

});

function compare() {
    $('#errorMessages').empty();
    $('#search1Table').empty();
    $('#search2Table').empty();
    searchFirstUA();
    searchSecondUA();
}

function searchFirstUA() {

    var firstSearchParam = $('#firstUASearch').val();
    var searchOne = $('#search1Table');

    $.ajax({
        type: "GET",
        url: "https://api.teleport.org/api/urban_areas/slug:" + firstSearchParam + "/scores/",
        success: function (dataArray) {
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
    var firstSearchParam = $('#secondUASearch').val();
    var searchOne = $('#search2Table');

    $.ajax({
        type: "GET",
        url: "https://api.teleport.org/api/urban_areas/slug:" + firstSearchParam + "/scores/",
        success: function (dataArray) {
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

