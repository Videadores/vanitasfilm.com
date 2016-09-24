$(function() {
    $('#menu ul > li').hover(
        function () {
            var $this = $(this);
            $('a',$this).stop(true,true).animate({
                    'line-height':'25px'
                }, 300);
        },
        function () {
            var $this = $(this);
            $('a',$this).stop(true,true).animate({
                    'line-height':'35px'
                }, 300);
        }
    );

	$("#trailertab").click(function(){
		$(".spot").hide()
		$(".trailer").show()
		$("#trailertab").addClass("current")
		$("#spottab").removeClass("current")
		return false;
	})
	$("#spottab").click(function(){
		$(".trailer").hide()
		$(".spot").show()
		$("#spottab").addClass("current")
		$("#trailertab").removeClass("current")
		return false;
	})
});


function removeCurrent(){
	$("#menu a.current").removeClass("current")
	$("#submenu a.current").removeClass("current")
}

function hashController(){
	removeCurrent();
	var h = location.hash;
	var sub = h.split("/");
	 
	if (h != ""){
		if (sub[1]!=""){
			$(".module").fadeOut(0,
				function(){
					$("div"+sub[0]).fadeIn(0);
				}
			);
			$(".submodule").fadeOut(0);
			$("div#"+sub[1]).fadeIn(200);
			$("a"+sub[0]+"link").addClass("current");
			$("a#"+sub[1]+"link").addClass("current");
		
		} else {
			$(".module").fadeOut(100,
				function(){
					$("div"+h).fadeIn(200);
				}
			);
			$("a"+h+"link").addClass("current");
		}
		
		
	} else {
		$(".module").fadeOut(300,
			function(){
				$("div#trailer").fadeIn(200);
			}
		);
		
	}
	
	return false;
}
$(window).bind('hashchange', function(e) { hashController() });
