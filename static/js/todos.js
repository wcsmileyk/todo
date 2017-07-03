
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
   if(event.which === 13){
       var newToDo = $(this).val();
       $(this).val("");
       $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + newToDo + "</li>");
   }
});

$("#inputToggle").click(function(){
    $(this).toggleClass('fa fa-plus');
    $(this).toggleClass('fa fa-minus');
    $("input[type='text']").fadeToggle();
});

