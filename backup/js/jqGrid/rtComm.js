
/**폼의 텍스트박스의 name명으로 값을 바인딩 시켜준다*/
$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }

    });

    $(':disabled[name]', this).each(function () {
        o[this.name] = $(this).val();
    });

    return o;
};

// 권한 그룹의  SELECT BOX 리스트를 생성한다.
// id: 셀렉트 박스 아이디
// code: 권한그룹 Group
function getCompanyList(id) {
    jQuery.ajax({
        type: "POST",
        url: "/Common/getCompanyList",
        dataType: "JSON", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
        //data: loadData,
        success: function (data) {
            $.each(data.rows, function (key, value) {

                $('#' + id).append('<option value="' + this.cell[0] + '">' + this.cell[1] + '</option>');
            });
        },
        complete: function (data) {
            // 통신이 실패했어도 완료가 되었을 때 이 함수를 타게 된다.
            // TODO
        },
        error: function (xhr, status, error) {
            //	          alert("에러발생111");
        }
    });
}