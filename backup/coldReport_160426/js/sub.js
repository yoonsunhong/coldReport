$(document).ready(function (){
	// 기본 탭
	var $tab = $(".tab .tab_btn");
	$tab.on("click",function  () {
		$(this).closest(".tab").find("> aside").removeClass("on").find("> ul").hide();
		$(this).closest(".tab").find("> aside").removeClass("on").find("> div").hide();	// 4_1
		$(this).siblings().show().parent().addClass("on");
		return false;
	});

	//  Location Allocation 가이드 팝업창
	/* 첫 화면에서는 숨김 */
	$(".cnt42 .guide").hide();

	/* 가이드 팝업창 열 때 */
	$(".cnt42 .menu_tit .ko_guide, .cnt42 .menu_tit .en_guide").on("click",function  () {
		$(".cnt42 .guide").show()
	});

	/* 가이드 팝업창 닫을 때 */
	$(".cnt42 .guide_area .btn_type, .cnt42 .guide_area .close_btn").on("click",function  () {
		$(".cnt42 .guide").hide()
	});

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

	$(function(e){
			/* 클릭 클릭시 클릭을 클릭한 위치 근처에 레이어가 나타난다. */
		$('.imgSelect').click(function(e) {
			var imgSelect = $(".imgSelect");

			var sWidth = window.innerWidth;
			var sHeight = window.innerHeight;

			var oWidth = $('.popupLayer').outerWidth();
			var oHeight = $('.popupLayer').outerHeight();
			//console.log(oWidth, oHeight);

			// 레이어가 나타날 위치를 셋팅한다.
			var divLeft = parseInt( $(this).css('left') ) + 40
			var divTop = parseInt( $(this).css('top') )
			//console.log(divLeft, divTop);

			var scrollT = $('#subCnt').scrollTop();
			var scrollL = $('#subCnt').scrollLeft();
			//console.log(scrollT,scrollL);


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



	// 배경색 변경
	/*
	var $active = $(".treeview li a");
	$active.on("click", function  () {
		$(this).addClass("active");
		return false;
	});			
	*/

		

/*

	


1 둘 다 css
$(".sub_cnt").css({left:0, width:w-54});
$(".sub_cnt").css({left:bannerWid,width:w-bannerWid-54})

2 둘 다 animate
$(".sub_cnt").animate({left:0}).animate({width:w-54});
$(".sub_cnt").animate({left:bannerWid}).animate({width:w-bannerWid-54});

2 left만 css
$(".sub_cnt").css({left:0}).animate({width:w-54});
$(".sub_cnt").css({left:bannerWid}).animate({width:w-bannerWid-54});

3 width만 css
$(".sub_cnt").animate({left:0}).css({width:w-54});
$(".sub_cnt").animate({left:bannerWid}).css({width:w-bannerWid-54});
*/	
});
