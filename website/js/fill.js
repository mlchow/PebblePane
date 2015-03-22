$("#1").hide();
$("#2").hide();
$("#3").hide();
$("#4").hide();
$("#drop-target-one").hide();
$("#drop-target-two").hide();
$("#drop-target-three").hide();
$("#drop-target-four").hide();

var numChoices = function() {
	var value = $('#numApps input:checked').val();
	console.log(value);
	$("#3").hide();
	$("#4").hide();
	$("#drop-target-three").hide();
	$("#drop-target-four").hide();

	if (value == 2)	 {
	}

	if (value == 3)	 {
		if ($("#C").val() != "") {
			$("#drop-target-three").show();
			$("#3").show();
		}
	}

	if (value == 4)	 {
		if ($("#C").val() != "") {
			$("#drop-target-three").show();
			$("#3").show();
		}
		if ($("#D").val() != "") {
			$("#drop-target-four").show();
			$("#4").show();
		}
		
	}
};

$("input[type=radio]").on("click", numChoices);


$("#A").focusout(function() {
	$("#1").show(); 
	$("#1").text($("#A").val());
	$("#drop-target-one").show();
	if ($("#A").val() == "") {
		$("#1").hide();
		$("#drop-target-one").hide();
	}
});

$("#B").focusout(function() {
	$("#2").show();
	$("#2").text($("#B").val());
	$("#drop-target-two").show();	
	if ($("#B").val() == "") {
		$("#2").hide();
		$("#drop-target-two").hide();	
	}
});

$("#C").focusout(function() {
	$("#3").show();
	$("#3").text($("#C").val());
	$("#drop-target-three").show();
	if ($("#C").val() == "") {
		$("#3").hide();
		$("#drop-target-three").hide();
	}
});

$("#D").focusout(function() {
	$("#4").show();
	$("#4").text($("#D").val());
	$("#drop-target-four").show();
	if ($("#D").val() == "") {
		$("#4").hide();
		$("#drop-target-four").hide();
	}
});