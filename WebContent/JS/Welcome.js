var menuDataElem=document.getElementById('menuData');
menuDataElem.style.display="none";
var menuDataJson=JSON.parse(menuDataElem.innerText);
var manuBarListElem=document.getElementById("menuBarList");


var startTime = new Date().getTime(); // Get the current time in milliseconds

function updateTimer() {
    var currentTime = new Date().getTime(); // Get the current time in
											// milliseconds
    var timeDiff = currentTime - startTime; // Calculate the difference in time
    var hours = Math.floor(timeDiff / (1000 * 60 * 60)); // Convert
															// milliseconds to
															// hours
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)); // Convert
																			// milliseconds
																			// to
																			// minutes
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000); // Convert
																// milliseconds
																// to seconds

    // Add leading zeros if necessary
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    var timerElement = document.getElementById("timer");
    var time=hours + ":" + minutes + ":" + seconds
    
    timerElement.innerText = hours + ":" + minutes + ":" + seconds;
}
console.log(startTime);
// Update the timer every second
setInterval(updateTimer, 1000);





function fetchServerTime() {
    fetch(origin+"/"+getProjectName()+"/LoginServlet?action=timeData", { method: 'POST' })
        .then(response => response.text())
        .then(data => {
            
        // console.log("data::",data)
        	document.getElementById('time').textContent = data;
        })
        .catch(error => console.error('Error:', error));
}


fetchServerTime();


setInterval(fetchServerTime, 1000);



function getMenuData(){

	 if(document.getElementById('menuBarList').innerText.length > 0){
		 document.getElementById('menuBarList').style.display="";
		 document.getElementById('menuBarList').style.setProperty('left','22px');
	 }
	 else{
	document.getElementById('menuBarList').style.display="";
	document.getElementById('menuBarList').style.setProperty('left','22px');
	document.getElementById("menuBarList").style.setProperty('height','611px');
	for (const [key, value] of Object.entries(menuDataJson)) {
    
    li = document.createElement('li');
    span = document.createElement('span');
    span.className="span_0";
    span.innerHTML = key;
    manuBarListElem.appendChild(li);
    li.appendChild(span);
    for(const [key1,value1] of Object.entries(value)){
    	
    	let ul = document.createElement('ul');
    	
    	ul.className="nested";
    	li.appendChild(ul);
    	
    	let lisub1 = document.createElement('li');
    	lisub1.style.setProperty('list-style-type','none');
    	ul.appendChild(lisub1);
    	let spanSub1=document.createElement('span');
    	spanSub1.innerHTML=key1;
    	spanSub1.className="span_0";
    	lisub1.appendChild(spanSub1);
    	
    	 let ul2 = document.createElement('ul');
    	ul2.className="nested"; 
    	lisub1.appendChild(ul2);
    	
    	
    	for(const [key2,value2] of Object.entries(value1)){
	    	let liSub2=document.createElement('li');
	    	liSub2.innerHTML=key2;
	    	liSub2.setAttribute("onClick","Iframehref('"+value2+"')");
	    	liSub2.style.setProperty('cursor','pointer');
	    	liSub2.style.setProperty('list-style-type','square');
	    	 ul2.appendChild(liSub2); 
	    	
	    }
    }
    
    /*
	 * if(key === 'MAIN_MENU'){ for(var j=0;j<value.length;j++){ li =
	 * document.createElement('li'); span = document.createElement('span');
	 * span.className="span_0"; span.innerHTML = value[j]; console.log(j);
	 * span.setAttribute('style', ''); li.appendChild(span); // append li to ul.
	 * manuBarListElem.appendChild(li); } } if(key === 'SUB_MENU_1'){ for(var
	 * k=0;k<value.length;k++){
	 * 
	 * console.log("k::",k); var ulnest=document.createElement('ul');
	 * ulnest.className="nested"; ulnest.innerText=value[k];
	 * span.appendChild(ulnest); console.log(span); } }
	 */
   }
	 menuExpend(); 
	 }
  
} 


  

  function menuExpend(){
	  
	  var toggler = document.getElementsByClassName("span_0");
	  var i;
	  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",i);
	  for (i = 0; i < toggler.length; i++) {
	    console.log("in side menu togger::",i);
	  	toggler[i].addEventListener("click", function() {
	     console.log("calling function menu expend::")
	  	 this.parentElement.querySelector(".nested").classList.toggle("active");
	      this.classList.toggle("span_0-down");
	     
	    });
	  }
	  }
	function menuBar(x) {
		  x.classList.toggle("change");
		}
	let contElem;
	function closeMenu(){
		for(var i=0;i<document.getElementsByClassName('container').length;i++){
		contElem=document.getElementsByClassName('container')[i];
		contElem.setAttribute("onClick","menuBar(this);unexpendMenu()");
		}
	}
	function unexpendMenu(){
		document.getElementById('menuBarList').style.left="-202px";
		for(var i=0;i<document.getElementsByClassName('container').length;i++){
		document.getElementsByClassName('container')[i].setAttribute("onClick","menuBar(this);getMenuData();closeMenu()");
		}
	}	
	function closeFrame() {
		document.getElementById("loginFrame").style.display = "none";
	}
	
var spanTop=105;
var pTop=94;
var i=0;
var loginDataArr=["Last Login :","Current Time :"];

function loginInformation(){
	var iframe=document.getElementById('loginFrame');
	var ICOAlert_I_id=iframe.contentDocument.getElementById('ICOAlert_I');
	ICOAlert_I_id.remove();
	var loginDetailElem =document.getElementById('loginDetail');
	/* var loginDetailJsonObject=JSON.parse(loginDetailElem.innerText); */
	var loginDetailArr=document.getElementById('loginDetail').innerText.trim().split(',');
	/* for(const [key,value] of Object.entries(loginDetailJsonObject)){ */
	for(var i=0;i<loginDetailArr.length;i++){
		var wndtitleeElem=iframe.contentDocument.getElementById('wndtitle');
		var span_wndti=iframe.contentDocument.createElement('span');
		var p_wndti=iframe.contentDocument.createElement('p')
		span_wndti.className="ICOAlert_I";
		span_wndti.style.position="absolute";
		span_wndti.style.top=(spanTop+"px");
		span_wndti.style.left=("7px");
		span_wndti.title="Information Message";
		span_wndti.style.top=(spanTop+"px");
		span_wndti.style.left=("7px");
		
		p_wndti.style.position="absolute";
		p_wndti.style.top=(pTop+"px");
		p_wndti.style.left=("46px");
		p_wndti.innerText=loginDataArr[i]+loginDetailArr[i].trim();
		/* i++; */
		
		wndtitleeElem.appendChild(span_wndti);
		iframe.contentDocument.body.appendChild(p_wndti);
		spanTop=spanTop+35;
		pTop=pTop+36;
		
	}
	
}
var i=0;
function Iframehref(function_id){
	console.log("calling function id:",function_id);
	
	let iframe=document.createElement('iframe');
	iframe.style="scrolling='no'"
	let funid=function_id+".html";
	iframe.setAttribute("src",funid);
	iframe.className="iframe_dynamic";
	iframe.id="iframe_dynamic"+i;
	iframe.scrolling="off"
	iframe.style="position: absolute;width: 1165px;height: 585px;top: 71px;left: 294px;background: white;border: 1px solid;";
    let iframeElemDiv=document.getElementById('if');
    iframeElemDiv.appendChild(iframe);
    i++;
}


function Logout(){
	var user_id=document.getElementById('user_id').innerText.trim();
	   fetch(origin+"/"+getProjectName()+"/LoginServlet?userid="+user_id+"&action=Logout").then(data=> data.json())
	  .then((data) => {
	 
	  for (const [key, value] of Object.entries(data)) {
	    console.log("key:",key+"  "+"values:"+value)
	    
	    if(value === "successful")
	    	{
	    	   window.location.href=origin+"/"+getProjectName()+"/HostServlet";
	    	}
		 
	    
	   }
	 
	  
	  
	   })
}

function getProjectName(){
	var path=window.location.pathname;
    var projectName=path.split('/');
    
    return projectName[1];
}

function closeIframe(){
	for(var i=0;i<document.getElementsByClassName('iframe_dynamic').length; i++){
	let iframeClassElem=document.getElementsByClassName('iframe_dynamic')[i];
	iframeClassElem.remove();
	
	}
	i--;
}


function frameOpenSetting(){
	var userSetting_FrameElem=document.getElementById('userSetting_Frame');
	userSetting_FrameElem.style.display="block";
	userSetting_FrameElem.src="UserSetting.jsp";
}
function frameOpenSettingClose()
{
	document.getElementById('userSetting_Frame').style.display="none"
	}


var  date;
var m;
function dateFormat(input_D, format_D) {
    // input date parsed
     date = new Date(input_D);

    // extracting parts of date string
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();    

   
     m = ["January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"];
      var monString=m[date.getMonth()];
        // to replace month

        if(format_D.indexOf("MM")>-1)
        {
            format_D = format_D.replace("MM", month.toString().padStart(2,"0"));
        }
        else if(format_D.indexOf("MON")>-1)
        {
            format_D = format_D.replace("MON", monString);
        }
    
            
     // to replace year
    if (format_D.indexOf("YYYY") > -1) {
        format_D = format_D.replace("YYYY", year.toString());
    } else if (format_D.indexOf("YY") > -1) {
        format_D = format_D.replace("YY", year.toString().substr(2,2));
    }

    if(format_D.indexOf("MON")>-1)
    {
     console.log('inside MON:::');
    }

    // to replace day
    format_D = format_D.replace("DD", day.toString().padStart(2,"0"));
    
    return format_D;
}

var EventElem;
function dragFrame(event){

	console.log(event);
	
	EventElem=event;
	 console.log("Div:::"+event.target.parentElement.id);
	for(var i=0;i<document.getElementsByClassName('iframe_dynamic').length; i++){
		let iframeClassElem=document.getElementsByClassName('iframe_dynamic')[i];
		  console.log(i);
		  console.log(iframeClassElem.contentDocument.getElementById(EventElem.target.id));
		  console.log("Div:::"+event.target.parentElement.id);
		  
		   /*
			 * if(iframeClassElem.length == --i) {
			 * console.log(iframeClassElem.id); }
			 */
	/*
	 * dragElement(document.getElementById('if'));
	 * 
	 * function dragElement(elmnt) { var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	 * console.log(" elmnt.id:: "); console.log(elmnt) if
	 * (document.getElementById(elmnt.id + "WNDtitlebar")) { // present, the
	 * header is where you move the DIV from: document.getElementById(elmnt.id
	 * +"WNDtitlebar").onmousedown = dragMouseDown; } else { //otherwise, move
	 * the DIV from anywhere inside the DIV: elmnt.onmousedown = dragMouseDown; }
	 * 
	 * function dragMouseDown(e) {
	 * 
	 * console.log('calling dragMouseDown Function ::::'); e = e ||
	 * window.event; e.preventDefault(); // get the mouse cursor position at
	 * startup: pos3 = e.clientX; pos4 = e.clientY; document.onmouseup =
	 * closeDragElement; // call a function whenever the cursor moves:
	 * document.onmousemove = elementDrag; }
	 * 
	 * function elementDrag(e) { e = e || window.event; e.preventDefault(); //
	 * calculate the new cursor position: pos1 = pos3 - e.clientX; pos2 = pos4 -
	 * e.clientY; pos3 = e.clientX; pos4 = e.clientY; // set the element's new
	 * position: elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
	 * elmnt.style.left = (elmnt.offsetLeft - pos1) + "px"; }
	 * 
	 * function closeDragElement() { // stop moving when mouse button is
	 * released: document.onmouseup = null; document.onmousemove = null; } }
	 */
		  
		  var parentId=event.target.parentElement.id+"";
		  
		  dragElement(document.getElementById(parentId));

		  function dragElement(elmnt) {
		    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
		    if (document.getElementById(elmnt.id + "WNDtitlebar")) {
		      /* if present, the header is where you move the DIV from: */
		      document.getElementById(elmnt.id + "WNDtitlebar").onmousedown = dragMouseDown;
		    } else {
		      /* otherwise, move the DIV from anywhere inside the DIV: */
		      elmnt.onmousedown = dragMouseDown;
		    }

		    function dragMouseDown(e) {
		     
		  	  console.log("calling dragMouseDown function:::");
		  	  e = e || window.event;
		      e.preventDefault();
		      // get the mouse cursor position at startup:
		      pos3 = e.clientX;
		      pos4 = e.clientY;
		      document.onmouseup = closeDragElement;
		      // call a function whenever the cursor moves:
		      document.onmousemove = elementDrag;
		    }

		    function elementDrag(e) {
		     
		  	  console.log("calling elementDrag function:::");
		  	  
		  	  e = e || window.event;
		      e.preventDefault();
		      // calculate the new cursor position:
		      pos1 = pos3 - e.clientX;
		      pos2 = pos4 - e.clientY;
		      pos3 = e.clientX;
		      pos4 = e.clientY;
		      // set the element's new position:
		      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		    }

		    function closeDragElement() {
		      /* stop moving when mouse button is released: */
		      document.onmouseup = null;
		      document.onmousemove = null;
		    }
		  }
	}

	
}


function minimizeFrame(event){
	
	console.log(event.target.parentElement);
	var elm= document.getElementById("if");
    var frames=elm.getElementsByTagName("iframe");
    
    console.log("frames");
    console.log(frames[0].id);
    
	var frameElm=document.getElementById(frames[0].id);
	console.log("frameElm::"+frameElm);
	/* frameElm.contentDocument.getElementById("min").style.display="none"; */

	if(frameElm.contentDocument.getElementById('footer') === null)
		{
		frameElm.style.height="27px";
		frameElm.scrolling="off"
	    frameElm.style.width="203px";
		frameElm.style.top="";
		frameElm.style.bottom="1px";
		}else{
			frameElm.contentDocument.getElementById("footer").style.display="none";
			frameElm.style.height="27px";
			frameElm.scrolling="off"
		    frameElm.style.width="203px";
			frameElm.style.top="";
			frameElm.style.bottom="1px";
		}
	
}

function maximizeFrame(event){
	console.log("id:::"+event.target.parentElement.id);
	var elm= document.getElementById("if");
    var frames=elm.getElementsByTagName("iframe");
    
    console.log("frames");
    console.log(frames[0].id);
	var frameElm=document.getElementById(frames[0].id);
	
// frameElm.contentDocument.getElementById("min").style.display="none";
/* frameElm.contentDocument.getElementById("WNDbuttons").style.display="none"; */
	if(frameElm.contentDocument.getElementById('footer') === null)
	{
		frameElm.style.height="585px";
		frameElm.scrolling="off"
			frameElm.style.width="1165px";
		frameElm.style.top="71px";
		frameElm.style.bottom="";
	}else{
		frameElm.contentDocument.getElementById("footer").style.display="";
		frameElm.style.height="585px";
		frameElm.scrolling="off"
			frameElm.style.width="1165px";
		frameElm.style.top="71px";
		frameElm.style.bottom="";
	}
	
	
}

/*iframe.document.addEventListener('click', function(event) {
	clic(this.id);
	console.log("calling  add event "+this.id);}, false);*/

