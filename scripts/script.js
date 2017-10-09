$(document).ready(function(){
    var bl = true;
    $("#btnMenu").click(function(){
//                $(this).hide();
        console.log('hello');
        if(bl) {
            $("#menu").css("display", "inline-block");
            // $("section").css("width", "50%");
        } else {
            $("#menu").css("display", "none");
            // $("section").css("width", "100%");
        }
        bl = !bl;

    });

});