// ==UserScript==
// @name           Tally Classfinder Enrolled
// @namespace      https://admin.wwu.edu/pls/wwis/wwsktime.ListClass
// @description    Tally Classfinder Enrolled
// @include        https://admin.wwu.edu/pls/wwis/wwsktime.ListClass*
// ==/UserScript==
var total = new Array();
total[0] = total[1] = total[2] = 0;
// Find all font items inside a bold item inside a td with the rowspan set
// to 2 (these are the class counts)
var counts = document.evaluate( "//td[@rowspan='2']/b/font", document,null,
   XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null );
// iterate through the results
for ( var i = 0; i < counts.snapshotLength; i++ ) {
   // get the proper result
   thisJavascript = counts.snapshotItem( i );
   // split the linear result set into  a table with 3 columns
   total[i%3] = total[i%3] + parseInt( thisJavascript.innerHTML );
}
// display the statistics/
alert( "Total Seats:\t\t" + total[0] +
   "\nOccupied Seats:\t" + total[1] +
   "\nAvailable Seats:\t" +total[2] +
   "\nOccupancy %:\t\t" + (100*total[1]/total[0]).toFixed(2));
