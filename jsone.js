	var tabtitle=document.getElementsByTagName('span');
	var contlist=document.getElementsByTagName('li');
	for (var i = 0; i < tabtitle.length; i++) {
		tabtitle[i].onclick=function () {
			for (var j = 0; j < tabtitle.length; j++) {
				if (tabtitle[j]==this) {
					tabtitle[j].className='select';
					contlist[j].className='block';
				} else{
					tabtitle[j].className='';
					contlist[j].className='';
				};
			};
		}
	};