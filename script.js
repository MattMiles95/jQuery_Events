$(document).ready(function() {

    $("#stream1_btn").on(function() {
        $(".stream1").hide(); // can also be done with 'show'
        $(".stream2").hide('slow');
        $(".stream3").hide('medium');
        $(".stream1").hide('fast');
        $(".stream1").hide(1000);
   });
   $("#stream2_btn").click(function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
}); 