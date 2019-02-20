$(document).ready(function() {
    $("#blanks form").submit(function(event) {

        var formInputs = ["greeting", "years", "meet", "healing", "city", "dreaming", "fell", "feet","number","units","called", "call", "heart","tell"];
        formInputs.forEach(function(formInput){
          //var userInput = $("input#greeting").val();
          var userInput = $("input#"+formInput).val();
          $("."+formInput).text(userInput);
        });
        $("#story").show();
        event.preventDefault();

    });
    $("#reset").click(function(){
      $("#story").hide();

    });
});
