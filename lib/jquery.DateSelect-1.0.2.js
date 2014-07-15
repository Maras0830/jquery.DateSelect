/*! Copyright (c) 2014 
 *
 * Version: 1.0.2
 *
 * Author: Maras Chen (陳俊仁) 
 *
 * 2014.07.15
 */

(function($){
var html = Get_Init_Html();
$.fn.extend({
	DateSelect: function(options){
        var d = new Date();
        var defaults = {
                year: 1970,
                month: -1,
                date: -1,
                StartYear: 1970,
                EndYear: d.getFullYear()
            };

            options = $.extend(defaults, options);

		return this.each(function() {
            html = Get_Init_Html(options.year,options.month,options.date,options.StartYear,options.EndYear);
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

function Get_Init_Html(year, month, date, StartYear, EndYear){
    var default_year = 1970;
    var default_month = -1;
    var default_date = -1;

    if(year != null && year != '' && year != 0)
        default_year = year;
    if(month != null && month != '' && month != 0)
        default_month = month;
    if(date != null && date != '' && date != 0)
        default_date = date;
    
    
    
    var result = "";
	var years = "<select name=\"year\" id=\"year\">";
	var months = "<select name=\"month\" id=\"month\">";
	var dates = "<select name=\"date\" id=\"date\">";
	for(var i = StartYear; i <= EndYear; i++){
        if(default_year != -1 & i == default_year)
            years = years.concat('<option value=' + i + ' selected>' + i + '</option>');
        else if(default_year == -1 & i == 1)
            years = years.concat('<option value="-1">Choose</option>');
        else
            years = years.concat('<option value=' + i + '>' + i + '</option>');

	}
    years = years.concat('</select>');

    for(var i = 1; i <= 12; i++){
        if(default_month == -1 & i == 1)
            months = months.concat('<option value="-1">Choose</option>');
        if(default_month != -1 & i == default_month)
            months = months.concat('<option value=' + i + ' selected>' + i + '</option>');
        else
            months = months.concat('<option value=' + i + '>' + i + '</option>');
    }
    months = months.concat('</select>');

    if(default_month == -1)
        default_month = 1;
    
    for(var i = 1; i <= Get_Days(default_year, default_month); i++){
        if(default_date == -1 & i == 1)
            dates = dates.concat('<option value="-1">Choose</option>');

        if(default_date != -1){
            if(default_date == i){
                dates = dates.concat('<option value=' + i + ' selected>' + i + '</option>');
            }else{
            dates = dates.concat('<option value=' + i + '>' + i + '</option>');
            }
        }
    }
    dates = dates.concat('</select>');
	return result.concat(years).concat(months).concat(dates);
}


//If year change event
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

//If year or month change event
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

//Get days
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