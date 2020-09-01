$(document).ready(function(){
  $("#btn").click(function(){
   	if ($("#slt").val()==0) {
   		alert("Enter a value");
   	}
   	else if ($("#slt").val()==1) {
   		var x=(Number($("#num1").val()))+Number($("#num2").val());
   		$("p").html("Answer : "+x);
   	}
   	else if ($("#slt").val()==2) {
   		var x=(Number($("#num1").val()))-Number($("#num2").val());
   		$("p").html("Answer : "+x);
   	}
   	else if ($("#slt").val()==3) {
   		var x=(Number($("#num1").val()))*Number($("#num2").val());
   		$("p").html("Answer : "+x);
   	}
   	else if ($("#slt").val()==4) {
   		var x=(Number($("#num1").val()))/Number($("#num2").val());
   		$("p").html("Answer : "+x);
   	}
   	else{
   		document.write("Enter a numerical value");
   	}
  });
});