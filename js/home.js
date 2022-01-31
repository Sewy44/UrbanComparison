$(document).ready(function () {

});

function compare() {
    searchFirstUA();
    searchSecondUA();
}

function searchFirstUA() {
    var firstSearchParam = $('#firstUASearch').val();

    $.ajax({
        type: "GET",
        url: "https://api.teleport.org/api/urban_areas/slug:" + firstSearchParam + "/scores/",
        success: function (data) {
            var urban1
        }
    })
}

function searchSecondUA() {
    var secondSearchParam = $('#secondUASearch').val();

    $.ajax({
        type: "GET",
        url: "https://api.teleport.org/api/urban_areas/slug:" + secondSearchParam + "/scores/",
        success: 
    })
}
