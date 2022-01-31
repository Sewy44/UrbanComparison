$(document).ready(function () {

});

function searchFirstUA() {
    var firstSearchParam = $('#firstUASearch').val();

    $.ajax({
        type: "GET",
        url: "https://api.teleport.org/api/cities/?search=" + firstSearchParam,
        success: 
    })
}

function searchSecondUA() {
    var secondSearchParam = $('#secondUASearch').val();

    $.ajax({
        type: "GET",
        url: "https://api.teleport.org/api/cities/?search=" + secondSearchParam,
        success: 
    })
}
