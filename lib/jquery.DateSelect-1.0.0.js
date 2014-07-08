/*! Copyright (c) 2014 
 *
 * Version: 1.0.0
 *
 * Author: Maras Chen (陳俊仁) 
 *
 * 2014.07.08 
 */

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
            $("#month").empty().html(Reset_Month());
            $("#date").empty().html(Reset_Date( $("#year").val(), $("#month").val()));
		});
        $("#month").change(function() {
            $("#date").empty().html(Reset_Date( $("#year").val(), $("#month").val()));
        });
	}
});



})(jQuery);
function Get_Init_Html(year){
    var result = "";
    var d = new Date();
	var years = "<select name=\"year\" id=\"year\">";
	var months = "<select name=\"month\" id=\"month\">";
	var dates = "<select name=\"date\" id=\"date\">";
	for(var i = year; i <= d.getFullYear(); i++){
		years = years.concat('<option value=' + i + '>' + i + '</option>');
	}
    years = years.concat('</select>');

    for(var i = 1; i <= 12; i++){
        if(i == 1){
            months = months.concat('<option value="-1">Choose</option>');
        }
        months = months.concat('<option value=' + i + '>' + i + '</option>');
    }
    months = months.concat('</select>');

    for(var i = 1; i <= Get_Days(year, 1); i++){
        if(i == 1){
            dates = dates.concat('<option value="-1">Choose</option>');
        }
        //dates = dates.concat('<option value=' + i + '>' + i + '</option>');
    }
    dates = dates.concat('</select>');
	return result.concat(years).concat(months).concat(dates);
}
/*
function Get_Number(start, end, select) {
    var selected = "selected=\"selected\"";
    var html = "<option value=\"\" " + (select == 0 ? selected : "") + ">請選擇</option>";
    for (var i = start; i <= end; i++) {
        html += "<option value=\"" + i + "\" " + (select == i ? selected : "") + ">" + i + "</option>";
    }
    return html;
}
*/
function Reset_Month() {
    var result = "";
    var months = "<select name=\"month\" id=\"month\">";
    for(var i = 1; i <= 12; i++){
        if(i == 1){
            months = months.concat('<option value="-1">Choose</option>');
        }
        months = months.concat('<option value=' + i + '>' + i + '</option>');
    }
    months = months.concat('</select>');

    return result.concat(months);
}
function Reset_Date(y, m) {
    var result = "";
    var dates = "<select name=\"date\" id=\"date\">";
    if(!(y < 0 || m < 0)){
        for(var i = 1; i <= Get_Days(y, m); i++){
            if(i == 1){
                dates = dates.concat('<option value="-1">Choose</option>');
            }
            dates = dates.concat('<option value=' + i + '>' + i + '</option>');
        }
        dates = dates.concat('</select>');
        return result.concat(dates);
    }
    return dates.concat('<option value="-1">Choose</option></select>');
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