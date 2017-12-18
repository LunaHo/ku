$(function(){
	
	var ul=document.getElementById("main_ul");
	var li=ul.getElementsByTagName("li");
	for(var i=0;i<li.length;i++){
		li[i].style.cssText="animation-delay:"+i/10+"s";
	}
			
	var sev_ul=document.getElementById("sev_ul");
	var sev_li=sev_ul.getElementsByTagName("li");
	for(var i=0;i<sev_li.length;i++){
		sev_li[i].style.cssText="animation-delay:"+i/10+"s";
	}
	
	var ach_ul=document.getElementById("ach_ul");
	var ach_img=ach_ul.getElementsByTagName("img");
	
	window.onload=window.onscroll=function(){
		var  scr=document.documentElement.scrollTop||document.body.scrollTop;
		var  cli=document.documentElement.clientHeight;
		if(scr>ul.offsetTop-cli&&scr<ul.offsetTop+cli){
			ul.className="lo";
		}else{
			ul.className="";
		}
		
		if(scr>sev_ul.offsetTop-cli&&scr<sev_ul.offsetTop+cli){
			sev_ul.className="loo";
		}else{
			sev_ul.className="";
		}
		
		if(scr>ach_ul.offsetTop-cli&&scr<ach_ul.offsetTop+cli){
			for(var i=0;i<ach_img.length;i++){
			ach_img[i].className="ac_img";
			}
		}else{
			for(var i=0;i<ach_img.length;i++){
			ach_img[i].className="";
			}
		}

	}

})