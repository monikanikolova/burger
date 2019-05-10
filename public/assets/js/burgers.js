$(function() {
    $("#create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          name: $("#ca").val().trim(),
          devoured: false
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new post");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    });
    