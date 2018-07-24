
/*
$(window).scroll(function(){
    var $this = $(this);
    $('#snb,#header').css('left', 0 - $this.scrollLeft());
});
*/

var cntSize = function() {

	if (($(window).width()-220) > 990) {
		$('.frame2_cnt, .frame4_cnt').width($(window).width()-230);
		$('.frame3_cnt').width($(window).width()-221);
		$('.frame2_cnt, .frame4_cnt, .frame1_cnt').height($(window).height()-45);
		$('.frame3_cnt').height($(window).height()-29);
	} else {
		$('.frame2_cnt, .frame4_cnt').width(1050);
		$('.frame3_cnt').width(820);
		$('.frame2_cnt, .frame4_cnt, .frame1_cnt').height($(window).height()-45);
		$('.frame3_cnt').height($(window).height()-29);
	}
	
}

$(document).ready(cntSize)
$(window).resize(cntSize)

//레프트 폴딩 쇼.하이드
function fordingLeft() {
	$('#content').toggleClass('folded');
	var btnFold = $("#wrap").hasClass("folded");
	var borBg = $(".bor_bg").outerWidth();
	var subCnt = $("#subCnt").outerWidth();
	var timberPlot = "";
			
	if ( btnFold ) {
	    $("#snb").hide();

			$(".frame3_cnt .cnt_area").width( subCnt - 283 );
			$(".cnt41 .list1, .cnt41 .bor_bg").width( subCnt-70 );
			$(".cnt41 .grid_area, .cnt41 .grid_area .ui-jqgrid, .cnt41 .grid_area .ui-jqgrid-bdiv, .cnt41 .grid_area .ui-corner-bottom, .cnt41 .grid_area .ui-jqgrid-htable, .cnt41 .grid_area .ui-jqgrid-labels, .cnt41 .grid_area .ui-jqgrid-hbox, .cnt41 .grid_area .ui-jqgrid-view, .cnt41 .grid_area .ui-jqgrid-hdiv, .cnt41 .grid_area .ui-jqgrid-htable thead, .cnt41 .ui-jqgrid-btable, .cnt41 #ajaxProwed1").width( $(".cnt41 .list1").width()-290 );
			$(".cnt42 .scroll_box").width(subCnt - 287);
			$(".cnt51 .enroll_area").width( subCnt-352 );

			$(".cnt21 .cnt_area").width( subCnt-64 )
			$(".cnt22 .map_area").width ( subCnt-345 )
			$(".cnt34 .list1, .cnt34 .list1 .map_area").width( subCnt-382 )
			$(".cnt35 .map_area").width( subCnt-724 )
			$(".cnt43 .truck_txt div").width( subCnt-378 )

			$(".graph").width ( subCnt-15 )
			$(".graph_area").width ( subCnt-50 )
			$(".graph_tit").width ( subCnt-30 )

			if ($(".grid_area").length != 0) {
				reSizefn();
			}

		
	} else {
		$("#snb").show();

			$(".frame3_cnt .cnt_area").width( subCnt - 283 );
			$(".cnt41 .list1, .cnt41 .bor_bg").width( subCnt-68 );
			$(".cnt41 .grid_area, .cnt41 .grid_area .ui-jqgrid, .cnt41 .grid_area .ui-jqgrid-bdiv, .cnt41 .grid_area .ui-corner-bottom, .cnt41 .grid_area .ui-jqgrid-htable, .cnt41 .grid_area .ui-jqgrid-labels, .cnt41 .grid_area .ui-jqgrid-hbox, .cnt41 .grid_area .ui-jqgrid-view, .cnt41 .grid_area .ui-jqgrid-hdiv, .cnt41 .grid_area .ui-jqgrid-htable thead, .cnt41 .ui-jqgrid-btable, .cnt41 #ajaxProwed1").width( $(".cnt41 .list1").width()-290 );
			$(".cnt42 .scroll_box").width(subCnt - 287);
			$(".cnt51 .enroll_area").width( subCnt-352 );

			$(".cnt21 .cnt_area").width( subCnt-64 )
			$(".cnt22 .map_area").width ( subCnt-345 )
			$(".cnt34 .list1, .cnt34 .list1 .map_area").width( subCnt-382 )
			$(".cnt35 .map_area").width( subCnt-724 )
			$(".cnt43 .truck_txt div").width( subCnt-378 )

			$(".graph").width ( subCnt-15 )
			$(".graph_area").width ( subCnt-50 )
			$(".graph_tit").width ( subCnt-30 )

			if ($(".grid_area").length != 0) {
				reSizefn();
			}

	}
}
