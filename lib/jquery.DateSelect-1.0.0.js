(function($){
var html = Get_Init_Html(1992);
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
    var d = new Date();
	var years = "<select name=\"year\" id=\"year\">";
	var months = "<select name=\"month\" id=\"month\">";
	var days = "<select name=\"date\" id=\"date\">";
	for(var i = year; i <= d.getFullYear(); i++){
		years = years.concat('<option value=' + i + '>' + i + '</option>');
	}
	return years.concat('</select>');
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