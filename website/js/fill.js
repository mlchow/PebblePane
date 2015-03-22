
var num = 2;

$("#1").hide();
$("#2").hide();
$("#3").hide();
$("#4").hide();
$("#3_pic").hide();
$("#4_pic").hide();
$("#drop-target-three").hide();
$("#drop-target-four").hide();
$("#drop-target-one").css("height", "530px").css("font-size","40px");
$("#drop-target-one").css("top","110px").css("left","400px");
$("#drop-target-two").css("height", "530px").css("font-size","40px");
$("#drop-target-two").css("top", "110px").css("left", "840px");

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
		console.log(num);
		$("#2_pic").show();
		$("#3_pic").hide();
		$("#4_pic").hide();
		$("#drop-target-one").css("height", "530px").css("font-size","40px");
		$("#drop-target-one").css("top","110px").css("left","400px");
		$("#drop-target-two").css("height", "530px").css("font-size","40px");
		$("#drop-target-two").css("top", "110px").css("left", "840px");
	}

	else if (num == 3)	 {
		console.log(num);
		$("#2_pic").hide();
		$("#3_pic").show();
		$("#4_pic").hide();
		$("#drop-target-three").show();
		$("#drop-target-one").css("top","110px").css("left","400px");
		$("#drop-target-one").css("height", "353px").css("font-size","30px");
		$("#drop-target-two").css("top","463px").css("left","400px").css("height","177px").css("font-size","15px");
		$("#drop-target-three").css("height", "530px").css("width","440").css("font-size","40px");
		$("#drop-target-three").css("top", "110px").css("left","840px");
		if ($("#C").val() != "") {
			$("#3").show();
		}
	}

	else	 {
		console.log(num);
		$("#2_pic").hide();
		$("#3_pic").hide();
		$("#4_pic").show();
		$("#drop-target-four").show();
		$("#drop-target-three").show();
		$("#drop-target-one").css("top","110px").css("left","400px").css("font-size","20px");
		$("#drop-target-one").css("height", "353px");
		$("#drop-target-two").css("top","463px").css("left","400px").css("height","177px").css("font-size","15px");
		$("#drop-target-three").css("height", "260px");
		$("#drop-target-three").css("top", "110px").css("left","835px").css("font-size","20px");
		$("#drop-target-four").css("height","275px").css("font-size","20px");
		$("#drop-target-four").css("top","365px").css("left","835px");


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