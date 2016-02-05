$('.wc-time').each(function(){ $('#login_lablec').html($('#login_lablec').html() + $( this ).attr('ttip')); });
$('.wc-time').each(function(){ console.log($( this ).attr('ttip')); });

var szoveg = 'Subject,Start Date,Start Time,End Date, End Time,Description,Location<br>';
var ido;
var datum;
var sdate;
var str1='';
var str2='';
var ssdate='';
$('.d_list').each(function() {

	//console.log(
	ido='';
	datum='';
	ido=$( this ).find('tr:nth-child(3) td:nth-child(2)').html().replace('Szombat,','').replace('Péntek,','').split('-'); //ido
	datum_c = $( this ).find('tr:nth-child(7) td:nth-child(2)').html().replace('szorgalmi időszak:','');
	datum = datum_c.split(',');
	sdate = datum[0].split('.');

	str1 = $( this ).find('tr:nth-child(1) td:nth-child(2)').html() + ' ('+$( this ).find('tr:nth-child(2) td:nth-child(2)').html() + ')' ;// targy
	//$( this ).find('tr:nth-child(7) td:nth-child(2)').html().replace('szorgalmi idoszak:','') + ',' +//startdate
	//ido[0] + ','+ido[1]+','+//ido
	str2=$( this ).find('tr:nth-child(4) td:nth-child(2)').html().replace(',',';') + ',' + //description
	$( this ).find('tr:nth-child(5) td:nth-child(2)').html().replace(/"/g,'') + '<br>' ;//location
	//)
	str = str1+','+sdate[2].replace(' ','')+'/'+sdate[1].replace(' ','')+'/'+sdate[0].replace(' ','')+','+ ido[0] + ','+sdate[2].replace(' ','')+'/'+sdate[1]+'/'+sdate[0].replace(' ','') +','+ ido[1]+','+str2;
	szoveg = szoveg+str;
	for(i=1;i<datum.length;i++)
	{
		ssdate=datum[i].split('.');
		str = str1+','+ssdate[1].replace(' ','')+'/'+ssdate[0].replace(' ','')+'/'+sdate[0].replace(' ','')+','+ ido[0] +','+ ssdate[1].replace(' ','')+'/'+ssdate[0].replace(' ','')+'/'+sdate[0].replace(' ','') +','+ ido[1]+','+str2;
		szoveg = szoveg+str;
	}
});
$('#login_lablec').append('<div id=text_to_file></div>');
$('#text_to_file').hide();
szoveg = szoveg.replace(/<br>/g,'%0D%0A');
szoveg = szoveg.replace(/<b>/g,'');
szoveg = szoveg.replace(/<\/b>/g,'');
$('#text_to_file').html(szoveg);
$('.d_list').hide();
var a = document.body.appendChild(
        document.createElement("a")
    );
a.download = "export.csv";
a.href = "data:text/html," + document.getElementById("text_to_file").innerHTML;
a.click();
