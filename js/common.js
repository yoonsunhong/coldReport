$(document).ready(function (){

		var w = $(window).width();
		var h = $(window).height();
		var subCnt = $(".sub_cnt").outerWidth();
		var subCntH = $(".sub_cnt").outerHeight();
		var sectionCntH = $("#content").outerHeight();

		var headerHei = $("#header").outerHeight();
		var bannerWid = $(".ban_l").innerWidth();
		var footerHei = $("#footer").outerHeight();
		var titHei = $(".title").outerHeight();
		var graphHei = $(".graph").outerHeight();

		$('.frame3_cnt > div').height($('.frame3_cnt').prop('scrollHeight'));
		//$('.ban_l').height($('.frame4_cnt').prop('scrollHeight'));
		//$('.frame4_cnt  .ban_l').height($('.frame4_cnt').prop('scrollHeight'));

		
		//$(".cnt41 .grid_area").width( subCnt-359 );

	var agent = navigator.userAgent.toLowerCase();
	if (agent.indexOf("safari") != -1) $('body').addClass('safari');	// 사파리 브라우저일 때 

	$(window).on('resize',function  () {
	});
	$(window).trigger('resize');		

	// 기본 탭
	var $tab = $(".tab .tab_btn");
	$tab.on("click",function  () {
		$(this).closest(".tab").find("> div").removeClass("on").find("> ul").hide();
		$(this).closest(".tab").find("> div").removeClass("on").find("> div").hide();	// 4_1
		$(this).siblings().show().parent().addClass("on");
		return false;
	});

	// 트리 a 링크 제거
	$('.tree_cnt a, .cnt81 #tabTree1 li a').removeAttr("href");

	// 파일명 가지고 오기
	var uploadFile = $("input[type='file']");
	uploadFile.on('change', function(){
		if(window.FileReader){
			var filename = $(this)[0].files[0].name;
		} else {
			var filename = $(this).val().split('/').pop().split('\\').pop();
		}
		$(this).parent().prev().val(filename);
		console.log(filename)
	});

	//  Location Allocation 가이드 팝업창
	/* 첫 화면에서는 숨김 */
	$(".cnt42 .guide").hide();

	/* 가이드 팝업창 열 때 */
	$(".cnt42 .menu_tit .ko_guide, .cnt42 .menu_tit .en_guide").on("click",function (){ $(".cnt42 .guide").show(); });

	/* 가이드 팝업창 닫을 때 */
	$(".cnt42 .guide_area .btn_type, .cnt42 .guide_area .close_btn").on("click",function (){ $(".cnt42 .guide").hide(); });

	// 레이어 팝업창
	function setLayerPopup ( openBtn, layerId, closeBtn ) {
		$(openBtn).on("click",function  () {
			$(layerId).before('<div id="popupMask"></div>');
			centerPosition();
			function centerPosition () {
		
				var topPos=( $(".sub_cnt").outerHeight()-$(layerId).outerHeight() )/ 2 ;
				var leftPos=( $(".sub_cnt").outerWidth()-$(layerId).outerWidth() )/ 2 ;
				$(layerId).css({ top:topPos , left:leftPos });
			}

			$("#popupMask, "+layerId).fadeIn("fast").attr("tabIndex",0);

			$(window).on("resize",centerPosition);

			$(closeBtn).on("click",function  () {
				$("#popupMask, "+layerId).fadeOut("fast",function  () {
					$(this).removeAttr("tabIndex");
				})
				$("#popupMask").remove();

				$(openBtn).focus();

				return false;
			});

			$("#popupMask").on("click",function  () {
				$(closeBtn).click();
			});				


			return false;
		});
	}

	//setLayerPopup("모달열어줄버튼","열려질모달","닫아줄버튼")
	setLayerPopup("#openBtn1","#popupLayer1","#popupLayer1 .close_btn"); // 8_2
	setLayerPopup("#openBtn2","#popupLayer2","#popupLayer2 .close_btn");	// 2_1

 	function closeLayer( obj ) { $(obj).parent().parent().hide();}

	// 센서 타입 토글 팝업 설정
	$(function(e){
		/* 클릭시 위치 근처에 레이어가 나타난다. */
		$('.imgSelect').click(function(e) {
			var imgSelect = $(".imgSelect");

			var sWidth = window.innerWidth;
			var sHeight = window.innerHeight;

			var oWidth = $('.popupLayer').outerWidth();
			var oHeight = $('.popupLayer').outerHeight();

			// 레이어가 나타날 위치를 셋팅한다.
			var divLeft = parseInt( $(this).css('left') ) + 40
			var divTop = parseInt( $(this).css('top') )
			//console.log(divLeft, divTop);

			var scrollT = $('#subCnt').scrollTop();
			var scrollL = $('#subCnt').scrollLeft();

			// 레이어가 화면 크기를 벗어나면 위치를 바꾸어 배치한다.
			if( divLeft + oWidth > sWidth ) divLeft -= oWidth;
			if( divTop + oHeight > sHeight ) divTop -= oHeight;

			// 레이어 위치를 바꾸었더니 상단기준점(0,0) 밖으로 벗어난다면 상단기준점(0,0)에 배치하자.
			if( divLeft < 0 ) divLeft = 0;
			if( divTop < 0 ) divTop = 0;

			$('.popupLayer').css({
				"top": divTop,
				"left": divLeft,
				"position": "absolute"
			}).show();

			$(".close_btn").on("click",function  () {
				$(this).closest(".popupLayer").hide();
				return false;
			});

			//포커스온일때 레이어 쇼
			$(".imgSelect").focusin(function () {
				$('.popupLayer').show();
			});
			//포커스 빠질때 레이어 아웃
			$(".imgSelect").focusout(function () {
				$('.popupLayer').hide();
				return false;
			});
		});
	});
});

// 배너 여닫기
var fordingLeft = function() {
	$('body').toggleClass('folded');
	var btnFold = $('body').hasClass('folded');

	if ( btnFold ){
		$('.btn_fold').text('배너 열기');
		$(document).ready(bannerCloseSize);
		$(window).resize(bannerCloseSize);
		if ($(".grid_area").length != 0) {		// 그리드에 콘텐츠가 있을 때
			reSizefn();
		}
	} 
	else {
		$('.btn_fold').text('배너 닫기');
		$(document).ready(bannerOpenSize);
		$(window).resize(bannerOpenSize);
		if ($(".grid_area").length != 0) {		// 그리드에 콘텐츠가 있을 때
			reSizefn();
		}
	}
}

// calc가 적용되지 않는 사파리 브라우저를 위한 소스
var cntSize = function() {
	$('.safari .frame1_cnt, .safari .frame2_cnt, .frame3_cnt .sub_cnt, .safari .frame4_cnt, .ban_l, .ban_r').height($(window).height()-165);
	$('.safari .cnt42 .scroll_box').height($(window).height()-219);

	$('.tree_area > div').height($(window).height()-166);
	$('.tree_area > div > div').height($(window).height()-146);
	$('.ban_l .tree_cnt, .tree_area > div > div').height($(window).height()-210).css('minHeight','200px');
	$('.ban_r .tit_bg + div').height( ($(window).height()/2)-110 );
	$('.ban_r .tree_cnt').height( ($(window).height()/2)- 130 );
	$(' .ban_r .tree_area > div').height( ($(window).height()/2)- 130 );


	if ( ($(window).width()-238) > 990 ) $('.safari .frame4_cnt .cnt_r, .safari .frame2_cnt .sub_cnt').width($(window).width()-$('.safari .ban_l').width());
	else $('.safari .frame4_cnt .cnt_r, .safari .frame2_cnt .sub_cnt').width(1059);

	$('.safari .cnt22 .map_area').width($('.safari .frame4_cnt .cnt_r').width()-333);
	$('.safari .cnt34 .list1').width($('.safari .frame2_cnt .sub_cnt').width()-337);
	$('.safari .cnt35 .map_area').width($('.safari .frame4_cnt .cnt_r').width()-641);
	$('.safari .frame3_cnt .sub_cnt').width( $('.safari .frame3_cnt').width() - 443);
	$('.safari .cnt51 .enroll_area').width( $('.safari .frame2_cnt .sub_cnt').width() - 305);
	$('.safari .menu_right').width( $('.safari .frame1_cnt').width() - 351);

	$('.cnt41 .list1').width( $('.frame2_cnt .sub_cnt').width() - 17);
	$('.cnt41 > div > div > div.f_l').width( $('.frame2_cnt .sub_cnt').width() - 302);
	$('.cnt41 .grid_area').width( $('.frame2_cnt .sub_cnt').width() - 300);
}
$(document).ready(cntSize);
$(window).resize(cntSize);

var bannerOpenSize = function() {			// 배너가 열릴 때 콘텐츠의 높이와 너비
	if ( ($(window).width()-238) > 990 ) $('.safari .frame4_cnt .cnt_r, .safari .frame2_cnt .sub_cnt').width($(window).width()-$('.safari .ban_l').width());
	else $('.safari .frame4_cnt .cnt_r, .safari .frame2_cnt .sub_cnt').width(1059);

	$('.safari .cnt22 .map_area').width($('.safari .frame4_cnt .cnt_r').width()-333);
	$('.safari .cnt34 .list1').width($('.safari .frame2_cnt .sub_cnt').width()-337);
	$('.safari .cnt35 .map_area').width($('.safari .frame4_cnt .cnt_r').width()-641);
	$('.safari .frame3_cnt .sub_cnt').width( $('.safari .frame3_cnt').width() - 443);
	$('.safari .cnt51 .enroll_area').width( $('.safari .frame2_cnt .sub_cnt').width() - 305);
	$('.safari .menu_right').width( $('.safari .frame1_cnt').width() - 351);

	$('.cnt41 .list1').width( $('.frame2_cnt .sub_cnt').width() - 17);
	$('.cnt41 > div > div > div.f_l').width( $('.frame2_cnt .sub_cnt').width() - 302);
	$('.cnt41 .grid_area').width( $('.frame2_cnt .sub_cnt').width() - 300);
}

var bannerCloseSize = function() {			// 배너가 닫힐 때 콘텐츠의 높이와 너비
	if ( ($(window).width()-238) > 990 ) $('.safari .frame4_cnt .cnt_r, .safari .frame2_cnt .sub_cnt').width('100%');
	else $('.safari .frame4_cnt .cnt_r, .safari .frame2_cnt .sub_cnt').width('100%');	

	$('.safari .cnt22 .map_area').width($('.safari .frame4_cnt .cnt_r').width()-333);
	$('.safari .cnt34 .list1').width($('.safari .frame2_cnt .sub_cnt').width()-337);
	$('.safari .cnt35 .map_area').width($('.safari .frame4_cnt .cnt_r').width()-641);
	$('.safari .frame3_cnt .sub_cnt').width( $('.safari .frame3_cnt').width() - 443);
	$('.safari .cnt51 .enroll_area').width( $('.safari .frame2_cnt .sub_cnt').width() - 305);
	$('.safari .menu_right').width( $('.safari .frame1_cnt').width() - 351);

	$('.cnt41 .list1').width( $('.frame2_cnt .sub_cnt').width() - 17);
	$('.cnt41 > div > div > div.f_l').width( $('.frame2_cnt .sub_cnt').width() - 302);
	$('.cnt41 .grid_area').width( $('.frame2_cnt .sub_cnt').width() - 300);
}