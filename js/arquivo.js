$(document).ready(function(){
	
	$(function(){
		$(".more-box").slice(0, 4).show(); 
		$("#load-more").click(function(e){ 
			e.preventDefault();
			$("#btn-load-more").attr("clicked", false);
			$(".more-box:hidden").slice(0, 4).show(); 
			if($(".more-box:hidden").length == 0){ 
				$("#load-more").hide(); 
			}
		});
	});
});