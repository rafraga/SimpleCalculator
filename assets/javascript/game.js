var number_array = []
var expression_sign = 0
var x = 0
var y = 0

$("#button0").click("keydown", function( event ) {number_array.push("0");$("#keys").html("<h5><input id='whichkey' maxlength='20' size='20' value='" + number_array.join('') + "'></input></h5>");});
$("#button1").click("keydown", function( event ) {number_array.push("1");$("#keys").html("<h5><input id='whichkey' maxlength='20' size='20' value='" + number_array.join('') + "'></input></h5>");});
$("#button2").click("keydown", function( event ) {number_array.push("2");$("#keys").html("<h5><input id='whichkey' maxlength='20' size='20' value='" + number_array.join('') + "'></input></h5>");});
$("#button3").click("keydown", function( event ) {number_array.push("3");$("#keys").html("<h5><input id='whichkey' maxlength='20' size='20' value='" + number_array.join('') + "'></input></h5>");});
$("#button4").click("keydown", function( event ) {number_array.push("4");$("#keys").html("<h5><input id='whichkey' maxlength='20' size='20' value='" + number_array.join('') + "'></input></h5>");});
$("#button5").click("keydown", function( event ) {number_array.push("5");$("#keys").html("<h5><input id='whichkey' maxlength='20' size='20' value='" + number_array.join('') + "'></input></h5>");});
$("#button6").click("keydown", function( event ) {number_array.push("6");$("#keys").html("<h5><input id='whichkey' maxlength='20' size='20' value='" + number_array.join('') + "'></input></h5>");});
$("#button7").click("keydown", function( event ) {number_array.push("7");$("#keys").html("<h5><input id='whichkey' maxlength='20' size='20' value='" + number_array.join('') + "'></input></h5>");});
$("#button8").click("keydown", function( event ) {number_array.push("8");$("#keys").html("<h5><input id='whichkey' maxlength='20' size='20' value='" + number_array.join('') + "'></input></h5>");});
$("#button9").click("keydown", function( event ) {number_array.push("9");$("#keys").html("<h5><input id='whichkey' maxlength='20' size='20' value='" + number_array.join('') + "'></input></h5>");});
$("#buttondot").click("keydown", function( event ) {number_array.push(".");$("#keys").html("<h5><input id='whichkey' maxlength='20' size='20' value='" + number_array.join('') + "'></input></h5>");});
$("#button_add").click("keydown", function( event ) {expression_sign = "add";x = parseFloat(number_array.join(''));number_array = [];$("#keys").html("<h5><input id='whichkey' maxlength='20' size='20' value='+'></input></h5>");});
$("#button_sub").click("keydown", function( event ) {expression_sign = "sub";x = parseFloat(number_array.join(''));number_array = [];$("#keys").html("<h5><input id='whichkey' maxlength='20' size='20' value='-'></input></h5>");});
$("#button_mult").click("keydown", function( event ) {expression_sign = "mult";x = parseFloat(number_array.join(''));number_array = [];$("#keys").html("<h5><input id='whichkey' maxlength='20' size='20' value='*'></input></h5>");});
$("#button_div").click("keydown", function( event ) {expression_sign = "div";x = parseFloat(number_array.join(''));number_array = [];$("#keys").html("<h5><input id='whichkey' maxlength='20' size='20' value='/'></input></h5>");});

$("#button_equal").click("keydown", function( event ) {
    y = parseFloat(number_array.join(''));
    if (expression_sign == "add") {
        result = x + y
    };
    if (expression_sign == "sub") {
        result = x - y
    };
    if (expression_sign == "mult") {
        result = x * y
    };
    if (expression_sign == "div") {
        result = x / y
    };
    $("#keys").html("<h5><input id='whichkey' maxlength='20' size='20' value='" + result + "'></input></h5>");
    number_array = [];
});

$('#restart').click(function() {
    location.reload();
});

