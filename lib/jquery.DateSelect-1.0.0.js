(function($){
var html = 
$.fn.extend({
	DateSelect: function(){
		return this.each(function() {
			//
    	}).html(html).dateclick();	
	},
	dateclick: function(){
		$("#year").change(function() {
			var days = Get_Days($("#year").val(), $("#month").val());
		});
	}
});



})(jQuery);
function Get_Init_Html(year){
	var year = "<select name=\"year\" id=\"year\"></select>";
	var month = "<select name=\"month\" id=\"month\"></select>";
	var day = "<select name=\"date\" id=\"date\"></select>";
	for(var i = year, i < Date().getFullYear(); i++){
		year.append('<option value=\"" + i + "\">" + i + "</option>');
	}
	
}

function Get_Number(start, end, select) {
    var selected = "selected=\"selected\"";
    var html = "<option value=\"\" " + (select == 0 ? selected : "") + ">請選擇</option>";
    for (var i = start; i <= end; i++) {
        html += "<option value=\"" + i + "\" " + (select == i ? selected : "") + ">" + i + "</option>";
    }
    return html;
}

function Get_Days(y, m) {
    if (y % 4 == 0 && m == 2) {
        return 29;
    }
    if (m == 2) {
        return 28;
    }
    if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
        return 31;
    }
    if (m == 4 || m == 6 || m == 9 || m == 11) {
        return 30;
    }
    return 0;
}