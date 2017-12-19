$(document).ready(function(){

    function updateFromFile(){
        $.get('../../Print.md', function(data) {
            $("p").text(data)

            $("html, body").animate({
                scrollTop: $(document).height()
            }, 1);

        }, "text");
    }

    updateFromFile()

    $(".updateButton").click(function(){
        $(this).prop('disabled', true);
        updateFromFile()
        $(this).prop('disabled', false);
    })

});
