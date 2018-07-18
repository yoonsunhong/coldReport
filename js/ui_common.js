
/*
$(window).scroll(function(){
    var $this = $(this);
    $('#banArea,#header').css('left', 0 - $this.scrollLeft());
});
*/
/*
var cntSize = function() {
	if (($(window).width()-220) > 990) {
		$('.frame2_cnt, .frame4_cnt').width($(window).width()-222);
		$('.frame3_cnt').width($(window).width()-444);
	} else {
		$('.frame2_cnt, .frame4_cnt').width(1058);
		$('.frame3_cnt').width(836);
	}	
}
$(document).ready(cntSize)
$(window).resize(cntSize)*/

// 왼쪽 배너 여닫기
function fordingLeft() {
	$('#wrap').toggleClass('folded');

	if ( btnFold ) {
		alert();

		if ($(".grid_area").length != 0) {
			reSizefn();
		}
		
	} else {


		if ($(".grid_area").length != 0) {
			reSizefn();
		}
	}
}



    