
var num = 2;

$("#1").hide();
$("#2").hide();
$("#3").hide();
$("#4").hide();
$("#3_pic").hide();
$("#4_pic").hide();
$("#drop-target-three").hide();
$("#drop-target-four").hide();

$('#formid').on("keyup keypress", function(e) {
  var code = e.keyCode || e.which; 
  if (code  == 13) {               
    e.preventDefault();
    return false;
  }
});

var numChoices = function() {
	num = $('#numApps input:checked').val();
	
	
	$("#3").hide();
	$("#4").hide();
	$("#drop-target-three").hide();
	$("#drop-target-four").hide();

	if (num == 2)	 {
		$("#2_pic").show();
		$("#3_pic").hide();
		$("#4_pic").hide();
	}

	if (num == 3)	 {
		$("#2_pic").hide();
		$("#3_pic").show();
		$("#4_pic").hide();
		$("#drop-target-three").show();
		if ($("#C").val() != "") {
			$("#3").show();
		}
	}

	else	 {
		$("#2_pic").hide();
		$("#3_pic").hide();
		$("#4_pic").show();
		$("#drop-target-four").show();
		$("#drop-target-three").show();
		if ($("#C").val() != "") {
			$("#3").show();
		}
		if ($("#D").val() != "") {
			$("#4").show();
		}
		
	}
};

$("input[type=radio]").on("click", numChoices);


$("#A").focusout(function() {
	$("#1").show(); 
	$("#1").text($("#A").val());
	
	if ($("#A").val() == "") {
		$("#1").hide();
	
	}
});

$("#B").focusout(function() {
	$("#2").show();
	$("#2").text($("#B").val());
	
	if ($("#B").val() == "") {
		$("#2").hide();
	
	}
});

$("#C").focusout(function() {
	$("#3").show();
	$("#3").text($("#C").val());
	
	if ($("#C").val() == "") {
		$("#3").hide();
	
	}
});

$("#D").focusout(function() {
	$("#4").show();
	$("#4").text($("#D").val());
	
	if ($("#D").val() == "") {
		$("#4").hide();
	
	}
});