$(document).ready(function(){
	$(".box p").hide();

	$(".box h4").click(function(e){
		e.preventDefault();
		
		var $this = $(this).parent().find("p");
		
		$(".box p").not($this).hide("slow");

		$this.slideToggle("slow");
	});
});




