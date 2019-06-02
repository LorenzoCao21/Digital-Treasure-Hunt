$("#step1").hide();
$("#no").hide();
$("#Check").hide();
$("#step2").hide();
$("#step3").hide();
$("#step4").hide();
$("#step5").hide();
$("#endding").hide();
$("#treasure").hide();

$("#start").click(function() {
    $("#hide").hide();
    $("#step1").show("#step1");
});

$(".X").click(function() {
    $("#hide").hide();
    $("#step1").hide();
    $("#no").show();
    $("h1").hide();
});

$(".Yes").click(function() {
    $("#hide").hide();
    $("#step1").hide();
    $("#Check").show();
    $("#step2").show();
});

$("#step2").dblclick(function() {
    $("#Check").hide();
    $("#step2").hide();
    $("#step3").show();
});

$("h1").click(function() {
    $("#step3").hide();
    $("body").css("background-color","aqua");
    $("#step4").show();
});

$("#key").mouseenter(function() {
    $("#key").hide();
});

$("#chest").click(function() {
    $("#step4").hide();
    $("#step5").show();
});

$("#openchest").click(function() {
    $("body").css("background-color","red");
    $("#end").text("Hahahahah, there is nothing left for you.");
    $("#endding").show();
    $("#openchest").hide();
});

$("#endding").dblclick(function() {
    $("body").css("background-color","aqua");
    $("#end").text("Fine, but this is all you get");
    $("#treasure").show();
    $("#endding").hide();
});
