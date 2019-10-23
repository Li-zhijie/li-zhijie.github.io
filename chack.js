	var start = document.getElementById("start");
		var one = document.getElementById("one");
		var two = document.getElementById("two");
		var three = document.getElementById("three");
		var mark = 0;
		start.onclick = function(){
			if( mark == 0){
				one.style.marginLeft = "300px";
				one.style.boxShadow = "0 5px 10px #000"
				three.style.boxShadow = "0 5px 10px #000"
				three.style.marginRight = "300px";
				mark = 1;
			}
			else{
				one.style.margin = "100px auto";
				one.style.boxShadow = "none"
				three.style.boxShadow = "none"
				three.style.margin = "100px auto";
				mark = 0; 
			}
		}
		
		var get1 = document.getElementsByClassName("get1")[0];
		var first = document.getElementsByClassName("first")[0];
		var question2 = document.getElementsByClassName("question2")[0];
		var second = document.getElementsByClassName("second")[0];
		var tip2 = document.getElementsByClassName("tip2")[0];
		var get2 = document.getElementsByClassName("get2")[0];
		var question3 = document.getElementsByClassName("question3")[0];
		var third = document.getElementsByClassName("third")[0];
		var tip3 = document.getElementsByClassName("tip3")[0];
		var get3 = document.getElementsByClassName("get3")[0];
		get1.addEventListener('click',function(){
			first = first.value;
			if( first == "六中分校"){
				alert('下一道题');
					one.style.margin = "100px auto";
					question2.style.opacity = "1";
					second.style.opacity = "1";
					tip2.style.opacity = "1";
					get2.style.opacity = "1";
				}
				else{
					alert('不对 请刷新页面');
				}
			
		});
		get2.addEventListener('click',function(){
			second = second.value;
			if( second == "六班"){
				alert('最后一题');
				three.style.margin = "100 auto";
					question3.style.opacity = "1";
					third.style.opacity = "1";
					tip3.style.opacity = "1";
					get3.style.opacity = "1";
				}
				else{
					alert('不对 请刷新页面');
				}
			
		});
		var tit = document.getElementsByClassName("tit")[0];
		get3.addEventListener('click',function(){
			third = third.value;
			if( third == "贾博然"){
				tit.innerText = "多谢相遇！";
				tit.style.color = "orange";
				tit.style.fontSize = "50px";
			}
			else{
					alert('不对 请刷新页面');
				}
			
		});	
		var jiantou = document.getElementsByClassName("icon-jiantou")[0];
			jiantou.onclick = function(){
				window.history.go(-1);
			}