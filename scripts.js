$(document).ready(function(){
    $("#image").hover(function(){
        $(this).attr("src", "images/placeholder.png"); //the image that appears when you hover over it
        }, function(){
        $(this).attr("src", "images/dark-mode.png"); //the image that appears when youre done hovering over. doesnt have to be the same as the original
    });
    });
function darkMode() {
    var darkBody = document.body;
    var darkNavLeft = document.querySelector(".vertical-menu-left");
    var darkSearch = document.querySelector(".search-bar");
    var darkGrid = document.querySelectorAll(".grid-item");
    var darkNavRight = document.querySelector(".vertical-menu-right");
    var darkLabel = document.querySelectorAll(".label");
    var darkContent = document.querySelector(".content")
    darkBody.classList.toggle("dark-mode");
    darkNavLeft.classList.toggle("dark-mode");
    darkNavRight.classList.toggle("dark-mode");
    darkSearch.classList.toggle("dark-mode");
    darkContent.classList.toggle("dark-mode");
    darkLabel.forEach(function(item) {
        item.classList.toggle("dark-mode");
    });
    darkGrid.forEach(function(item) {
        item.classList.toggle("dark-mode");
    });
}
$(document).ready(function() {
$('#resizing_select').change(function() {
    $("#width_tmp_option").html($('#resizing_select option:selected').text());
    $(this).width($("#width_tmp_select").width());
});
});
