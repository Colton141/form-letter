$(document).ready(function(){
  $("#form-letter").submit(function(event){
    var personInput = $("input#person").val();

    $(".person").text(personInput);

    $("#letter").show();

    event.preventDefault();
  });
});
