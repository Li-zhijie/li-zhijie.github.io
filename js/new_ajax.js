function ajax(url , fnSucc , fnFaild){
	var fnSucc;
	var oAjax = new XMLHttpRequest();
		oAjax.open('GET' , url+"?="+ new Date().getTime(), true);
//		oAjax.open('GET' , 'a.txt?='+ new Date().getTime() , true);
		oAjax.send();
		oAjax.onreadystatechange = function(){
			if(oAjax.readyState==4){
				if(oAjax.status == 200){
					fnSucc(oAjax.responseText);
				}
				else{
					if(fnFaild)
					{
						fnFaild(oAjax.status);
					}
				}
			}
		}
	}