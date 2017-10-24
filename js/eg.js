$(function(){
	$('.jt').click(function() {
		var win_hei = -$(window).height();
        $('#dowebok').css({
            "transform":"translate3d(0px,"+win_hei+"px, 0px)"
        },500);
        $("#menu").find("li:eq(1)").addClass("active").siblings().removeClass("active");  
        $("#fp-nav li a").removeClass("active");
        $("#fp-nav").find("li:eq(1)").children("a").addClass("active")
        $("body").attr("class","fp-viewing-page2")
        return true;
    });
})