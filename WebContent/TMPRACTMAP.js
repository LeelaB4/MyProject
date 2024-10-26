var currentdate = new Date();
 var currentDate =currentdate.getDate() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getFullYear() + "  "  
            
                +  currentdate.getHours()+ ":" 
                +  currentdate.getMinutes()+ ":" 
                +  currentdate.getSeconds(); 
                
console.log(currentDate); 
var currentDate = new Date();
var dd = String(currentDate.getDate()).padStart(2, '0');
var mm = String(currentDate.getMonth() + 1).padStart(2, '0'); // January is 0!
var yyyy = currentDate.getFullYear();
var hh = currentDate.getHours();
var mi = currentDate.getMinutes();
var ss = String(currentDate.getSeconds()).padStart(2, '0');
var ampm = hh >= 12 ? 'PM' : 'AM';

// Convert hours to 12-hour format
hh = hh % 12 || 12;

currentDate = dd + '-' + mm + '-' + yyyy + ' ' + hh + ':' + mi + ':' + ss + ' ' + ampm;
console.log(currentDate);





document.addEventListener("DOMContentLoaded", function(event) {
document.getElementById("ApprovalId").disabled = true;
document.getElementById("ApprovalId").style.display="none";

document.getElementById("ReopenId").disabled = false;
document.getElementById("ReopenId").style.display="none";


document.getElementById("CloseId").disabled = true;
document.getElementById("CloseId").style.display="none"; 
document.getElementById("ModifyId").disabled = true;
document.getElementById("ModifyId").style.display="none";
document.getElementById("DeleteId").disabled = true;
document.getElementById("DeleteId").style.display="none";
document.getElementById("buttonExec").style.display="none"; 
document.getElementById("buttonSave").style.display="none"; 
/* document.getElementById("imgLov").style.display="none"; */
document.getElementById('cust_Once_Auth1').disabled = true;
/*
 * document.getElementById('button1').disabled = true;
 * document.getElementById('button2').disabled = true;
 */

enbFilds1();
/*
 * document.getElementById('cust_id').disabled = true;
 * document.getElementById('cust_name').disabled = true;
 * document.getElementById('cust_password').disabled = true;
 * document.getElementById('cust_dept').disabled = true;
 * document.getElementById('cust_email').disabled = true;
 * document.getElementById('cust_manager').disabled = true;
 * document.getElementById('cust_ldap').disabled = true;
 * document.getElementById('cust_phone').disabled = true;
 */



/* document.getElementById('roleScreen').style.display="none"; */




/*
 * var modifysaveElem=document.getElementById("Id");
 * modifysaveElem.style.display="none";
 */ 

var modifysaveElem=document.getElementById("buttonSave");
modifysaveElem.style.display="none";

/*
 * var fetchbtnElem=document.getElementById("fetchbtn");
 * fetchbtnElem.style.display="none";
 */

var frameElem=document.getElementById("f1");
frameElem.style.display="none";
var WNDtitlebarElem =document.getElementById("WNDtitlebar");
WNDtitlebarElem.style.display="none";
}
);




function createBTN(){
	var modifysaveElem=document.getElementById("buttonSave");
	modifysaveElem.style.display="none";
	
/*
 * var fetchbtnElem=document.getElementById("fetchbtn");
 * fetchbtnElem.style.display="";
 */
	
	 
/*
 * document.getElementById("imgLov").style.display="";
 * document.getElementById("buttonExec").disabled = false;
 * document.getElementById("buttonExec").style.display="block";
 * document.getElementById("buttonSave").style.display="none";
 * document.getElementById("ModifyId").disabled = true;
 * document.getElementById("ModifyId").style.display="none";
 * document.getElementById("DeleteId").disabled = true;
 * document.getElementById("DeleteId").style.display="none";
 * document.getElementById("CloseId").disabled = true;
 * document.getElementById("CloseId").style.display="none";
 * document.getElementById("ApprovalId").disabled = true;
 * document.getElementById("ApprovalId").style.display="none";
 * document.getElementById("NewId").disabled = false;
 * document.getElementById("NewId").style.display="none";
 * document.getElementById('cust_id').disabled = false;
 * document.getElementById('cust_Once_Auth1').disabled = false;
 * document.getElementById('ReopenId').style.display="none";
 * document.getElementById('cust_id').disabled = false;
 */
	
	
	
	 document.getElementById("imgLov").style.display="";
		document.getElementById("buttonExec").disabled = false;
		document.getElementById("buttonExec").style.display=""; 
		/* document.getElementById("buttonSave").style.display="none"; */
		document.getElementById("ModifyId").disabled = true;
		document.getElementById("ModifyId").style.display="none"; 
		 document.getElementById("DeleteId").disabled = true;
		 document.getElementById("DeleteId").style.display="none"; 
		 document.getElementById("CloseId").disabled = true;
		 document.getElementById("CloseId").style.display="none"; 
		 document.getElementById("ApprovalId").disabled = true;
		 document.getElementById("ApprovalId").style.display="none"; 
		 document.getElementById("NewId").disabled = true;
		 document.getElementById("NewId").style.display="none";
		 document.getElementById('pract_id').disabled = false;
		 document.getElementById("Id").style.display="none";  

		 // document.getElementById('PROJECTID').readOnly = false;

}

function createNew(){

	 var modifysaveElem=document.getElementById("buttonSave");
	 modifysaveElem.style.display="none";
	
	document.getElementById("buttonSave").style.display="";
	 document.getElementById("Id").style.display="none";  
	 document.getElementById("NewId").style.display="none"; 
	 document.getElementById("ModifyId").disabled = true;
	 document.getElementById("ModifyId").style.display="none"; 
	 document.getElementById("DeleteId").disabled = true;
	 document.getElementById("DeleteId").style.display="none"; 
	 document.getElementById("CloseId").disabled = true;
	 document.getElementById("CloseId").style.display="none"; 
	 document.getElementById("ApprovalId").disabled = true;
	 document.getElementById("ApprovalId").style.display="none"; 

/*
 * var fetchbtnElem=document.getElementById("fetchbtn");
 * fetchbtnElem.style.display="";
 */
	
	
	// document.getElementById("buttonSave").disabled = false;
	
	 
	
	  document.getElementById("imgLov").style.display=""; 
	 document.getElementById("buttonExec").style.display="none"; 
	 document.getElementById("Id").disabled = true;
	 document.getElementById('pract_id').disabled = false;

/*
 * document.getElementById('cust_id').disabled = false;
 * document.getElementById('button1').disabled = false;
 * document.getElementById('button2').disabled = false;
 */
/*
 * document.getElementById('button1').disabled = false;
 * document.getElementById('button2').disabled = false;
 */
	/* document.getElementById('countRow').disabled = false; */
/* document.getElementById('roleScreen').style.display=""; */
	 

	 /* document.getElementById("buttonSave").style.display=""; */
	 	
}

 /*
	 * function newEnable(){ document.getElementById("ModifyId").enabled = true;
	 * document.getElementById("ModifyId").style.display="";
	 * document.getElementById("DeleteId").enabled = true;
	 * document.getElementById("DeleteId").style.display="";
	 * document.getElementById("CloseId").enabled = true;
	 * document.getElementById("CloseId").style.display="";
	 * document.getElementById("ApprovalId").enabled = true;
	 * document.getElementById("ApprovalId").style.display="";
	 * document.getElementById("buttonExec").disabled = true;
	 * document.getElementById("buttonExec").style.display="none"; }
	 */
function enableNew(){
	/*
	 * var userLogIn=parent.document.getElementById("user").innerText.trim();
	 * console.log("userLogIn:",userLogIn);
	 * 
	 * var cust_mak=document.getElementById("cust_maker").value.trim();
	 * console.log("cust_mak:",cust_mak);
	 * 
	 * if(document.getElementById("cust_Once_Auth").value === "Y" ){
	 * document.getElementById("DeleteId").enabled = true;
	 * document.getElementById("DeleteId").style.display=""; }
	 */
	 document.getElementById("ModifyId").enabled = true;
	 document.getElementById("ModifyId").style.display="";  
	 document.getElementById("DeleteId").enabled = true;
	 document.getElementById("DeleteId").style.display=""; 
	 /*
		 * document.getElementById("CloseId").enabled = true;
		 * document.getElementById("CloseId").style.display="";
		 */
	 document.getElementById("ApprovalId").enabled = true;
	 document.getElementById("ApprovalId").style.display=""; 
	 document.getElementById("buttonExec").disabled = true;
	 document.getElementById("buttonExec").style.display="none";
	 document.getElementById('pract_id').readOnly = false;
	/* document.getElementById("imgLov").style.display="none"; */
}

 
 




/*
 * function readOnlyf(){ document.getElementById('PROJECTID').readOnly = false;
 * document.getElementById('cust_name').readOnly = false;
 * document.getElementById('cust_password').readOnly = false;
 * document.getElementById('cust_dept').readOnly = false;
 * document.getElementById('cust_email').readOnly = false;
 * document.getElementById('cust_manager').readOnly = false;
 * document.getElementById('cust_ldap').readOnly = false;
 * document.getElementById('cust_phone').readOnly = false; }
 */
function readOnlyt(){
	document.getElementById('pract_id').disabled = false;
	document.getElementById('pract_name').disabled = true;
	document.getElementById('pract_cont').disabled = true;
	document.getElementById('pract_email').disabled = true;
	document.getElementById('join_date').disabled = true;
	/*
	 * document.getElementById('owner').disabled = true;
	 * document.getElementById('ownerEmail').disabled = true;
	 * document.getElementById('ProjectManager').disabled = true;
	 * document.getElementById('ProjectManagerEmail').disabled = true;
	 * document.getElementById('Projectadmin').disabled = true;
	 * document.getElementById('Projectadminmail').disabled = true;
	 */	
}

function readOnlyRoleData(){
	for(var index=0;index<document.getElementById('countRow').value;index++){
		  var inputTD="inputid"+index;
		  var inputDesc="inputdesc"+index;
		  var searcher ="searcher"+index;
		  var checkbox="check"+index;
		  document.getElementById(inputTD).disabled = true;
		  document.getElementById(inputDesc).disabled = true;
		  document.getElementById(searcher).enabled = false;
		  document.getElementById(checkbox).disabled = true;
	  }
}
var arr=[];

function insertData(id,id2,id3,id4,id5 ){
	console.log("calling Id::",id);
	arr[0]=id;
	arr[1]=id2;
	arr[2]=id3; 
	arr[3]=id4; 
	arr[4]=id5;
}


window.addEventListener("message", function(message) {

	
	        if(typeof arr[1] === "undefined" )
	        {
	        arr[1]="";
	        }
	         console.log("Message received from the parent:",message.data);
	         /* document.getElementById(arr[0]).value = message.data[0]; */
	          console.log("arrrrr:::::::::::::::::::::::",arr);
	         
	          try {
	          if(arr[0] !== ""){
	        document.getElementById(arr[0]).value = message.data[0];
	         if (arr[1] !== "" ){
	        document.getElementById(arr[1]).value = message.data[1];
	         }
	        
	         if (arr[2] !== "" ){
	 	        document.getElementById(arr[2]).value = message.data[2];
	 	         }
	         
	         if (arr[3] !== "" ){
	 	        document.getElementById(arr[3]).value = message.data[3];
	 	         }
	         
	         if (arr[4] !== "" ){
		 	        document.getElementById(arr[4]).value = message.data[4];
		 	         }
	         if (arr[5] !== "" ){
		 	        document.getElementById(arr[5]).value = message.data[5];
		 	         }
	         }
	          }
	          catch(err)
	          {
	        	  
	          }
	       
	      closeFrame();
	       /*
			 * document.getElementById("inputtd10").value =
			 * message.data.role_desc.trim();
			 */
	      }); 



function frameinWin(lov_id, function_id,title){
	framecss();
	console.log("Name::",lov_id,function_id,title);
	var frameElem=document.getElementById("f1");
	frameElem.style.display="block";
	document.getElementById("WNDmaxBTN").style.display="none";
	var WNDtitlebarElem =document.getElementById("WNDtitlebar");
	 WNDtitlebarElem.style.display="none";
	frameElem.style.display="block"; 
	
	
	var titleLOVElem = document.getElementById("titleLOV");
	
	
	
	titleLOVElem.innerText=title;
	
/*
 * document.getElementsByClassName("WNDbuttons").style.visibility = "hidden";
 */			  
      
            
                   var arr=[lov_id,function_id];
                   console.log("Arr:",arr);
                   
                  /*
					 * const map = '{"name":"John", "age":30, "city":"New
					 * York"}'; const obj = JSON.parse(map);
					 */

                   frameElem.src=origin+"/"+parent.getProjectName()+"/LovServlet1?getLogField=Field&lov_id="+lov_id+"&"+"function_id="+function_id;
	       
	        
	       /*
			 * ifrm.style.width = "800px"; ifrm.style.height = "800px";
			 */
	       
	      
	          
	         
	         var LOVL=document.getElementById('LOVL').innerText;
}
function closeFrame(){
	
	var frameElem=document.getElementById("f1");
	frameElem.style.display="none";
	document.getElementById("WNDtitlebar").style.display="none";
	var iframe=document.getElementById("f1");
	var lov_id="";
	var function_id="";
	// iframe.src=origin+"/"+parent.getProjectName()+"/LovServlet1?lov_id="+lov_id+"&"+"function_id="+function_id;
	iframe.src=origin+"/"+parent.getProjectName()+"/LovServlet1?lov_id="+lov_id+"&"+"function_id="+function_id;


}


 function getCustomerDetails (method) {
	 
	var cust_mak=document.getElementById("cust_maker").value.trim();
	console.log("cust_mak:",cust_mak);
	var userLogIn=parent.document.getElementById("user_id").innerText.trim();
	console.log("userLogIn:",userLogIn);
	
	
	console.log(method)
/*
 * await swal("Wait", "Please wait while getting customer details", "success", {
 * button: "Allright", });
 */
 let pract_id = document.getElementById("pract_id").value;
 console.log("+++", pract_id);
 
 
 fetch(origin+"/"+parent.getProjectName()+"/Screen?function_id=TMPRACTMAP&method=GET&pract_id="+pract_id)  
.then(function(response) {    
	// first then()
	
     if(response.ok)
     {
       return response.text();         
     }
     
   
     alert("there is no data");
     

     document.getElementById("NewId").disabled = false;
	 document.getElementById("NewId").style.display="";
     document.getElementById("ModifyId").disabled = true;
	 document.getElementById("ModifyId").style.display="none"; 
	 document.getElementById("DeleteId").disabled = true;
	 document.getElementById("DeleteId").style.display="none"; 
	 document.getElementById("CloseId").disabled = true;
	 document.getElementById("CloseId").style.display="none"; 
	 document.getElementById("ApprovalId").disabled = true;
	 document.getElementById("ApprovalId").style.display="none"; 
	 document.getElementById("buttonExec").disabled = true;
	 document.getElementById("buttonExec").style.display="none";
	 
	 
	 // Refresh PROJECTID
	document.getElementById("pract_id").value="";
		 
		 
     
     throw new Error('Something went wrong.');
 })  
 .then(function(text) {                          // second then()
   console.log('Request successful', text);  
 })  
 .catch(function(error) {                        // catch
   console.log('Request failed', error);
 });
 
 
 
  fetch(origin+"/"+parent.getProjectName()+"/Screen?function_id=TMPRACTMAP&method=GET&pract_id="+pract_id).then(data=> data.json())
 .then((data) => {
	 console.log(data.json);
	 
	 
 if(method === "GET" || method === "UserMaintenanceModify" ) {
	 
	 
	 var cust_mak=document.getElementById("cust_maker").value.trim();
		console.log("cust_mak:",cust_mak);
		var userLogIn=parent.document.getElementById("user_id").innerText.trim();
		console.log("userLogIn:",userLogIn);
		

 for(const [key, value] of Object.entries(data)) {
	 
	
	 
	 if(key === "cust_Status" && value === "Close" )
	 {
	   document.getElementById("ModifyId").style.display="";
	 }
  if(document.getElementById("cust_maker").value.trim() === parent.document.getElementById("user_id").innerText)
	 {
	 document.getElementById("ModifyId").style.display="";
	 }
  else{
	  document.getElementById("ModifyId").style.display="";
  }
 
	 
	 
	 if(method === "GET"){
		 
	 
/*
 * document.getElementById(key).readOnly =false;
 * document.getElementById(key).disabled=false;
 */
 document.getElementById("CloseId").disabled=false;
 document.getElementById("DeleteId").disabled=false; 
 
 readOnlyt();
 
 /*
	 * document.getElementById('custid').readOnly = true;
	 * document.getElementById('cust_name').readOnly = true;
	 * document.getElementById('cust_password').readOnly = true;
	 * document.getElementById('cust_dept').readOnly = true;
	 * document.getElementById('cust_email').readOnly = true;
	 * document.getElementById('cust_manager').readOnly = true;
	 * document.getElementById('cust_ldap').readOnly = true;
	 * document.getElementById('cust_phone').readOnly = true;
	 */
 
 document.getElementById("cust_maker").readOnly = true;
 document.getElementById("cust_Approver").readOnly = true;
 document.getElementById("cust_Status").readOnly = true;

 document.getElementById("cust_maker_dt_stamp").readOnly = true;
 document.getElementById("cust_Aprovertime").readOnly = true;
 document.getElementById("cust_Approver_statement").readOnly = true;
 
 if(key === "cust_Once_Auth" && value === "Y")
	 {
	 document.getElementById("cust_Once_Auth1").checked = true;
	
	 }
	}
	 
	 if(method === "UserMaintenanceModify"){
		 document.getElementById(key).readOnly = false;
		
			 }
	 
	  if(value === 'null'){
			 value.replace('null',' ');
			  
		  }
	  
	  else{
		  
	  console.log("key:::",key,"   ","value::",value);
   
	  
	 if(key === 'countRow')
		  {
		  
		  for(var addrow=1;addrow<=value;addrow++)
			  {
		  addRow('dataTable');
			  }
		  }else{
	  
	  document.getElementById(key).value = value;
		  }
	  
	  
   if(cust_mak !== userLogIn && document.getElementById("cust_Approver_statement").value === "Authorize" && document.getElementById("cust_Once_Auth").value ==="Y"){

		console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
		
	   document.getElementById("ModifyId").style.display=""; 
	   
	   document.getElementById("CloseId").style.display=""; 
	   
	   if(key === "countRow")
		 {
		 for(var count_row=1;count_row<=value;count_row++){
			 addRow('dataTable');
			 console.log("calling func at row====");
		 }
		 }
	  
}
   
   else if(document.getElementById("cust_Status").value === "Close" && cust_mak !== userLogIn && document.getElementById("cust_Approver_statement").value === "Authorize"){
	   
	   console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
	   document.getElementById("CloseId").style.display="none"; 
		  
	   
   }
   /*
	 * else if(cust_mak !==
	 * userLogIndocument.getElementById("cust_Approver_statement").value === "U" &&
	 * document.getElementById("cust_Once_Auth").value ==="N" ){
	 * document.getElementById("ModifyId").disabled = true;
	 * document.getElementById("ModifyId").style.display="none";
	 */
	   /*
		 * document.getElementById("CloseId").disabled = true;
		 * document.getElementById("CloseId").style.display="";
		 */
	 
		
   
	  }
  }
  } else {
  
  for (const [key, value] of Object.entries(data)) {
	 
	 
  document.getElementById(key).value = value;
  
	  
  
  }
  
  }
 
 ApproveBtnEnableCheck();
 document.getElementById("buttonExec").disabled = true;
 
 document.getElementById("NewId").disabled = false;

 document.getElementById("ModifyId").disabled = false;
 document.getElementById("Id").style.display="";  



  })
}

 
 
 


 function resetValues(){
		/*
		 * var fetchbtnElem=document.getElementById("fetchbtn");
		 * fetchbtnElem.style.display="none";
		 */
		 document.getElementById("pract_id").value="";    // true
		 document.getElementById("pract_id").value="";
		 document.getElementById("pract_name").value="";
		 document.getElementById("pract_cont").value="";
		 document.getElementById("pract_email").value="";
		 document.getElementById("join_date").value="";
		 
		 
		 for(var index=0;index<document.getElementById('countRow').value;index++){
			 var inputTD="sbox"+index;
			  document.getElementById(inputTD).style.display="none";
		  }	 
	}


function modifybtnEnable(){
	

	 document.getElementById("ModifyId").style.display="none";
	 document.getElementById("buttonSave").style.display="";
	 document.getElementById("buttonExec").style.display="none";
	 document.getElementById("ReopenId").style.display="none";
	 document.getElementById("cust_maker").value=parent.document.getElementById("user_id").innerText;
	 document.getElementById("NewId").style.display="none";
	 document.getElementById("CloseId").style.display="none";
	 document.getElementById("Id").style.display="none";
	 document.getElementById("ApprovalId").style.display="none";
	 document.getElementById("DeleteId").style.display="none";
}

function modifybtn(){
	/*var fetchbtnElem=document.getElementById("fetchbtn");
	fetchbtnElem.style.display="none";*/
	
	 document.getElementById("ModifyId").style.display="none";
	 document.getElementById("DeleteId").disabled = false;
	 document.getElementById('pract_id').readOnly = false;
	 document.getElementById("cust_Approver_statement").value="Unauthorize";
	 document.getElementById("cust_Once_Auth").value="N";
	 document.getElementById("cust_Approver").value="";
	 document.getElementById("cust_Aprovertime").value="";
	 document.getElementById("cust_maker_dt_stamp").value="";

}

function readOnlyRoleData(){
	for(var index=0;index<document.getElementById('countRow').value;index++){
		var projectid="projectid"+index;
		var projectname="projectname"+index;
		var startdate="startdate"+index;
		var enddate="enddate"+index;
		var status="status"+index;

		  var searcher ="searcher"+index;
		  var checkbox="check"+index;
		  document.getElementById(projectid).disabled = true;
		  document.getElementById(projectname).disabled = true;
		  document.getElementById(startdate).disabled = true;
		  document.getElementById(enddate).disabled = true;
		  document.getElementById(status).disabled = true;
		


		  document.getElementById(checkbox).disabled = true;
	  }
}
function readOnlyRoleData1(){
	for(var index=0;index<document.getElementById('countRow').value;index++){
		var projectid="projectid"+index;
		var projectname="projectname"+index;
		var startdate="startdate"+index;
		var enddate="enddate"+index;
		var status="status"+index;

		  var searcher ="searcher"+index;
		  var checkbox="check"+index;
		  document.getElementById(projectid).disabled = false;
		  document.getElementById(projectname).disabled = false;
		  document.getElementById(startdate).disabled = false;
		  document.getElementById(enddate).disabled = false;
		  document.getElementById(status).disabled = false;
		  document.getElementById(checkbox).disabled = false;
	  }
}

function reopenEnable(){
	 document.getElementById("cust_maker").value=parent.document.getElementById("user_id").innerText;
	  document.getElementById("cust_Approver_statement").value="Unauthorize";
		document.getElementById("cust_Status").value="Open";
		 document.getElementById("cust_Approver").value="";
		 document.getElementById("cust_Aprovertime").value="";
		 document.getElementById("cust_maker_dt_stamp").value="";
	}


function CustPost(method){
	var cust_mak=document.getElementById("cust_maker").value.trim();
	console.log("cust_mak:",cust_mak);
	var userLogIn=parent.document.getElementById("user_id").innerText.trim();
	console.log("userLogIn:",userLogIn);
	
	
	let pract_id = document.getElementById("pract_id").value;
	
	/*
	 * let StartDate = document.getElementById("start-date").value; let
	 * ProjectManagerEmail =
	 * document.getElementById("ProjectManagerEmail").value; let EndDate =
	 * document.getElementById("end-date").value; let Projectadmin =
	 * document.getElementById("Projectadmin").value; let Projectadminmail =
	 * document.getElementById("Projectadminmail").value;
	 */
	/* let cust_maker = document.getElementById("cust_maker").value; */
	let cust_maker = parent.document.getElementById("user_id").innerText;
	let cust_maker_dt_stamp = document.getElementById("cust_maker_dt_stamp").value=currentDate;
	let cust_Approver = document.getElementById("cust_Approver").value;
	let cust_Aprovertime = document.getElementById("cust_Aprovertime").value;
	let cust_Status = document.getElementById("cust_Status").value;
	let cust_Approver_statement = document.getElementById("cust_Approver_statement").value;
	let cust_Once_Auth=document.getElementById("cust_Once_Auth").value;	
	let countRow=document.getElementById("countRow").value;
	var url_send_data="";
	
		if(document.getElementById("cust_maker").value.trim() === parent.document.getElementById("user_id").innerText.trim())
			
		{
	if(method === "POST")
		{
	
	/*
	 * url_send_data=
	 * origin+"/"+parent.getProjectName()+"/Screen?TMPRACTMAP=TMPRACTMAP&method=POST&pract_id="+pract_id+"&"+"pract_name="+pract_name+"&"+"pract_cont="+pract_cont+"&"+"pract_email="+pract_email+"&"+"join_date="+join_date+"&"+
	 * "cust_maker="+cust_mak+"&"+"cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
	 * "&"+"cust_Status="+cust_Status+"&"+"cust_Approver_statement="+cust_Approver_statement+"&"+"cust_Once_Auth="+cust_Once_Auth+"&"+"countRow="+countRow;
	 */
		
		
		url_send_data= origin+"/"+parent.getProjectName()+"/Screen?function_id=TMPRACTMAP&method=POST&pract_id="+pract_id+"&"+ 			
	 		"cust_maker="+cust_mak+"&"+"cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
	 "&"+"cust_Status="+cust_Status+"&"+"cust_Approver_statement="+cust_Approver_statement+"&"+"cust_Once_Auth="+cust_Once_Auth+"&"+"countRow="+countRow;


		for(var index=0;index<document.getElementById('countRow').value;index++){



					  var projectid="projectid"+index;
					  var projectname="projectname"+index;
					  var startdate="startdate"+index;
					  var enddate="enddate"+index;
					  var status="status"+index;
			


					  console.log("projectid::"+projectid);
					  console.log("projectname::"+projectname);
					  console.log("startdate::"+startdate);
					  console.log("enddate::"+enddate);
				      console.log("status::"+status);
					

					  url_send_data=url_send_data+"&projectid"+index+"="+document.getElementById(projectid).value.trim()+"&projectname"+index+"="+document.getElementById(projectname).value.trim()+"&startdate"+index+"="+document.getElementById(startdate).value.trim()+

					  "&enddate"+index+"="+document.getElementById(enddate).value.trim()+"&status"+index+"="+document.getElementById(status).value.trim();
				    
					  

				  }

				  console.log("url_send_data:::"+url_send_data);
				  if(pract_id === "" || pract_id === null)

		        	 {

		        	 alert("Please enter mandatory fileds");
		        	 document.getElementById("Id").style.display="";
		     		document.getElementById("NewId").style.display="";
		        	 document.getElementById("ModifyId").style.display="none";
                 	 document.getElementById("DeleteId").style.display="none";
		          	 document.getElementById("CloseId").style.display="none";
		        	 }
         
         
         else{
        	 
        	 fetch(url_send_data);
        	 console.log("url_send_data:",url_send_data);
        	 
           alert("Sucessfully Save");
          
           document.getElementById("NewId").style.display="";
           document.getElementById("ModifyId").style.display="";
      	 document.getElementById("DeleteId").style.display="";
      	 document.getElementById("CloseId").style.display="none";
      	document.getElementById("Id").style.display="";
      	readOnlyt();
      	 
         }
         
        
     
    	 document.getElementById("buttonSave").style.display="none"; 
    	 document.getElementById("ModifyId").disabled = false;
      	
      	 document.getElementById("DeleteId").disabled = false;
      	 
      	 document.getElementById("CloseId").disabled = false;
      	 document.getElementById("Id").disabled = false;
       	
		}
	
	document.getElementById("cust_maker_dt_stamp").value=currentDate;
	 
	
	}

if(method === "UPDATE")
		
	{ 
	  if(cust_mak !== userLogIn && document.getElementById("cust_Approver_statement").value === "Unauthorize"  ){
			  console.log("modify meeeeeee");
			  /* alert("Checker cannot Modify "); */ 
			if (document.getElementById("cust_Once_Auth").value="Y" && document.getElementById("cust_Approver_statement").value === "Unauthorize")	   {
				 modifybtn();
		    	  cust_Approver="";
		 		 cust_Aprovertime="";
		 /*
			 * var time = today. getHours() + ":" + today. getMinutes() + ":" +
			 * today
			 */
		 		 
		 		 

		 		/*
				 * url_send_data=
				 * origin+"/"+parent.getProjectName()+"/Screen?function_id=TMPRACTMAP&method=UPDATE&PROJECTID="+PROJECTID+"&"+"ProjectName="+ProjectName+"&"+"ownerEmail="+ownerEmail+"&"+"owner="+owner+"&"+"department="+department+"&"+
				 * "ProjectManager="+ProjectManager+"&"+"start-date="+StartDate+"&"+"ProjectManagerEmail="+ProjectManagerEmail+"&"+"end-date="+EndDate+"&"+"Projectadmin="+Projectadmin+"&"+"Projectadminmail="+Projectadminmail+"&"+"cust_maker="+cust_mak+"&"+"cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
				 * "&"+"cust_Status="+cust_Status+"&"+"cust_Approver_statement="+cust_Approver_statement+"&"+"cust_Once_Auth="+cust_Once_Auth;
				 */

		 		url_send_data= origin+"/"+parent.getProjectName()+"/Screen?function_id=TMPRACTMAP&method=UPDATE&pract_id="+pract_id+"&"+ 			
		 	 		"cust_maker="+cust_mak+"&"+"cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
		 	 "&"+"cust_Status="+cust_Status+"&"+"cust_Approver_statement="+cust_Approver_statement+"&"+"cust_Once_Auth="+cust_Once_Auth+"&"+"countRow="+countRow;


		 		for(var index=0;index<document.getElementById('countRow').value;index++){



		 					  var projectid="projectid"+index;
		 					  var projectname="projectname"+index;
		 					  var startdate="startdate"+index;
		 					  var enddate="enddate"+index;
		 					  var status="status"+index;
		 			


		 					  console.log("projectid::"+projectid);
		 					  console.log("projectname::"+projectname);
		 					  console.log("startdate::"+startdate);
		 					  console.log("enddate::"+enddate);
		 				      console.log("status::"+status);
		 					

		 					  url_send_data=url_send_data+"&projectid"+index+"="+document.getElementById(projectid).value.trim()+"&projectname"+index+"="+document.getElementById(projectname).value.trim()+"&startdate"+index+"="+document.getElementById(startdate).value.trim()+

		 					  "&enddate"+index+"="+document.getElementById(enddate).value.trim()+"&status"+index+"="+document.getElementById(status).value.trim();
		 				    
		 					  

		 				  }


				  fetch(url_send_data);  
				  console.log("url_send_data update :::"+url_send_data);
			}
		  }
  else{
	  console.log("Maker");
	  modifybtn();
	  cust_Approver="";
		 cust_Aprovertime="";
		

			url_send_data= origin+"/"+parent.getProjectName()+"/Screen?function_id=TMPRACTMAP&method=UPDATE&pract_id="+pract_id+"&"+ 			
		 		"cust_maker="+cust_mak+"&"+"cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
		 "&"+"cust_Status="+cust_Status+"&"+"cust_Approver_statement="+cust_Approver_statement+"&"+"cust_Once_Auth="+cust_Once_Auth+"&"+"countRow="+countRow;


			for(var index=0;index<document.getElementById('countRow').value;index++){



						  var projectid="projectid"+index;
						  var projectname="projectname"+index;
						  var startdate="startdate"+index;
						  var enddate="enddate"+index;
						  var status="status"+index;
				


						  console.log("projectid::"+projectid);
						  console.log("projectname::"+projectname);
						  console.log("startdate::"+startdate);
						  console.log("enddate::"+enddate);
					      console.log("status::"+status);
						

						  url_send_data=url_send_data+"&projectid"+index+"="+document.getElementById(projectid).value.trim()+"&projectname"+index+"="+document.getElementById(projectname).value.trim()+"&startdate"+index+"="+document.getElementById(startdate).value.trim()+

						  "&enddate"+index+"="+document.getElementById(enddate).value.trim()+"&status"+index+"="+document.getElementById(status).value.trim();
	
					  }

	  //fetch(url_send_data);
			fetch(url_send_data);
	console.log("url_send_data:::"+url_send_data);
		 console.log("Maker1");
		 alert("Successfully Modify");
         document.getElementById("NewId").style.display="";
	   	 document.getElementById("Id").style.display="";
	   	 document.getElementById("ModifyId").style.display="";
	   	document.getElementById("DeleteId").style.display="";
      }
     	 
     	   document.getElementById("buttonSave").style.display="none";
		  document.getElementById("NewId").disabled = false;
	
		   // Disabling AprovalButton for maker
		   document.getElementById("ApprovalId").style.display="none"; 
     	}
	  document.getElementById("cust_maker_dt_stamp").value=currentDate;
	
	  
	 /* document.getElementById("here").innerHTML.reload */
}


function deleteData(){
	let pract_id = document.getElementById("pract_id").value;
	console.log("deleteData:::",pract_id)
	// fetch(origin+"/"+parent.getProjectName()+"/Screen_Json1?function_id=TMPRACTMAP&method=DELETE&PROJECTID="+PROJECTID);
	fetch(origin+"/"+parent.getProjectName()+"/Screen?function_id=TMPRACTMAP&method=DELETE&pract_id="+pract_id)
	
} 


function moddisable(){
	 document.getElementById("DeleteId").style.display="none";
	  document.getElementById("CloseId").style.display="none";
}




function readOnlyf(){
	document.getElementById('pract_id').disabled = false;
	document.getElementById('ProjectName').disabled = false;
	document.getElementById('department').disabled = false;
	document.getElementById('start-date').disabled = false;
	document.getElementById('end-date').disabled = false;
	document.getElementById('owner').disabled = false;
	document.getElementById('ownerEmail').disabled = false;
	document.getElementById('ProjectManager').disabled = false;
	document.getElementById('ProjectManagerEmail').disabled = false;
	document.getElementById('Projectadmin').disabled = false;
	document.getElementById('Projectadminmail').disabled = false;
	
	document.getElementById('department-1').disabled = false;
	document.getElementById('department-2').disabled = false;
	document.getElementById('department-3').disabled = false;
	document.getElementById('department-4').disabled = false;
	
	
	}
	
function remove(){
	 document.getElementById("ModifyId").style.display="none";
  	 document.getElementById("DeleteId").style.display="none";
  	 document.getElementById("CloseId").style.display="none";
  	 document.getElementById("NewId").style.display="";	
}



function getDataFooter(){
	document.getElementById("cust_maker").value=parent.document.getElementById("user_id").innerText;
	
	
	
/* document.getElementById("cust_maker_dt_stamp").value=currentDate; */
	document.getElementById("cust_Status").value="Open";
	document.getElementById("cust_Approver_statement").value="Unauthorize";
	document.getElementById("cust_Once_Auth").value="N";
	
}



function readOnlyFooterField(){	
document.getElementById("cust_maker").readOnly = true;
document.getElementById("cust_Approver").readOnly = true;
document.getElementById("cust_Status").readOnly = true;

document.getElementById("cust_maker_dt_stamp").readOnly = true;
document.getElementById("cust_Aprovertime").readOnly = true;
document.getElementById("cust_Approver_statement").readOnly = true;
}

/* readOnlyFooterField(); */






function validateDelet(){


    var cust_Ap_st=document.getElementById("cust_Approver_statement").value;
    console.log("cust_Ap_st:",cust_Ap_st);
    var cust_Once_A=document.getElementById("cust_Once_Auth").value;
    console.log("cust_Once_A:",cust_Once_A);
    var userLogIn=parent.document.getElementById("user_id").innerText.trim();
    console.log("userLogIn:",userLogIn);

    var cust_mak=document.getElementById("cust_maker").value.trim();
    console.log("cust_mak:",cust_mak);

 

    var response = confirm("Are you sure you want to delete ?");
    console.log("response"+response);
   if (response == true) {
       // document.write("Delete Sucessfull");
       console.log("all condition is :::",cust_Ap_st === "Unauthorize" &&  cust_Once_A === "N" && cust_mak === userLogIn)


       /*
		 * if(cust_Ap_st === "U" && cust_Once_A === "N" && cust_mak !==
		 * userLogIn) { alert(" Approver Cannot delete"); }
		 */
       if(cust_Ap_st === "Unauthorize" &&  cust_Once_A === "N" && cust_mak === userLogIn)
        {
         deleteData();
        alert("Delete Sucessfull");
        resetValues();
        remove();
        }
    else{
        alert("Cannot delete ");

    }

   }
}


function ApproveBtnEnableCheck(){
	
	
	
	console.log("Inside funcion ApproveBtnEnableCheck():::");
	
	var cust_Ap_st=document.getElementById("cust_Approver_statement").value;
	console.log("cust_Ap_st:",cust_Ap_st);
	var cust_Once_A=document.getElementById("cust_Once_Auth").value;
	console.log("cust_Once_A:",cust_Once_A);
	var userLogIn=parent.document.getElementById("user_id").innerText.trim();
	console.log("userLogIn:",userLogIn);
	
	var cust_mak=document.getElementById("cust_maker").value.trim();
	console.log("cust_mak:",cust_mak);
	
	var cust_Ap_st=document.getElementById("cust_Approver_statement").value;
	console.log("cust_Ap_st:",cust_Ap_st);
	let cust_makerE=document.getElementById("cust_maker").value.trim();
	console.log("userLogIn:",cust_makerE);
	let cust_Once_AuthE=document.getElementById("cust_Once_Auth").value;
	let parent_cust_makerElem = parent.document.getElementById("user_id").innerText.trim();
	console.log("cust_makerElem::"+cust_makerE +"parent_cust_makerElem::"+ parent_cust_makerElem);
	console.log("condition ::"+cust_makerE === parent_cust_makerElem);
	if( cust_makerE === parent_cust_makerElem)
		{
		
		   document.getElementById("ApprovalId").disabled = true; 
		   // Disabling AprovalButton for maker
		   document.getElementById("ApprovalId").style.display="none";
		   document.getElementById("ReopenId").style.display="none";
		   
		   if(cust_makerE === parent_cust_makerElem && document.getElementById("cust_Status").value === "Close" )
				document.getElementById("CloseId").style.display="none"; 
		   document.getElementById("DeleteId").style.display=""; 
		   document.getElementById("NewId").style.display=""; 
		
		   if(cust_makerE === parent_cust_makerElem && document.getElementById("cust_Approver_statement").value === "Unauthorize")
				 document.getElementById("DeleteId").style.display=""; 
			if(cust_makerE === parent_cust_makerElem /*
														 * &&
														 * document.getElementById("cust_Status").value
														 * === "Close" ||
														 * document.getElementById("cust_Status").value
														 * === "Open"
														 */  && document.getElementById("cust_Once_Auth").value === "Y")
				   document.getElementById("DeleteId").style.display="none"; 
		}
	
		   /* document.getElementById("CloseId").style.display="none"; */
		   
		   else if(cust_makerE !== parent_cust_makerElem && cust_Ap_st === "Unauthorize" ){
			   
			   console.log("Inside else if ");
			   document.getElementById("ModifyId").disabled = true;
			   document.getElementById("ModifyId").style.display="none";
			   document.getElementById("DeleteId").disabled = true;
			   document.getElementById("DeleteId").style.display="none"
				   document.getElementById("ApprovalId").disabled = false; 
			   // Disabling AprovalButton for maker
			 
		   } 
	
		   else if(cust_makerE !== parent_cust_makerElem && cust_Ap_st === "Authorize"){
			   document.getElementById("DeleteId").style.display="none";
				   document.getElementById("ApprovalId").style.display="none";
				   document.getElementById("NewId").style.display=""; 
if(cust_makerE !== parent_cust_makerElem && document.getElementById("cust_Status").value === "Close" )
	document.getElementById("CloseId").style.display="none"; 
if(cust_makerE !== parent_cust_makerElem && document.getElementById("cust_Approver_statement").value === "Authorize" && document.getElementById("cust_Once_Auth").value ==="Y" && document.getElementById("cust_Status").value === "Close"){
	   document.getElementById("ReopenId").style.display=""; 
	   document.getElementById("ModifyId").style.display="none"; 
	   document.getElementById("ApprovalId").disabled = false;
}	   
}
		
	else{
			document.getElementById("ApprovalId").disabled = false;
		/* document.getElementById("ApprovalId").style.display="block"; */
			document.getElementById("DeleteId").disabled = true;
			   document.getElementById("DeleteId").style.display="none"; 
			   /*
				 * document.getElementById("NewId").disabled = false;
				 * document.getElementById("NewId").style.display="";
				 */
			   document.getElementById("ModifyId").style.display="none"; 
	}
}




function approveData(){



	if(document.getElementById("cust_maker").value !== parent.document.getElementById("user_id").innerText.trim() && document.getElementById("cust_Approver_statement").value === "Unauthorize" && document.getElementById("cust_Once_Auth").value === "N"){




		 let pract_id=document.getElementById("pract_id").value;



		    var cust_mak=document.getElementById("cust_maker").value.trim();
			console.log("cust_mak:",cust_mak);
			var userLogIn=parent.document.getElementById("user_id").innerText.trim();
			console.log("userLogIn:",userLogIn);
		

			
	/*		
			let owner = document.getElementById("owner").value;
			let ProjectName = document.getElementById("ProjectName").value;
			let ownerEmail = document.getElementById("ownerEmail").value;
			let department = document.getElementById("department").value;
			let ProjectManager = document.getElementById("ProjectManager").value;
			let StartDate = document.getElementById("start-date").value;
			let ProjectManagerEmail = document.getElementById("ProjectManagerEmail").value;
			let EndDate = document.getElementById("end-date").value;
			let Projectadmin = document.getElementById("Projectadmin").value;
			let Projectadminmail = document.getElementById("Projectadminmail").value;*/
			
			/* let cust_maker = document.getElementById("cust_maker").value; */
			let cust_maker = parent.document.getElementById("user_id").innerText;
			let cust_maker_dt_stamp = document.getElementById("cust_maker_dt_stamp").value;
			let cust_Approver =  parent.document.getElementById("user_id").innerText.trim();
			let cust_Aprovertime = document.getElementById("cust_Aprovertime").value=currentDate;
			let cust_Status = document.getElementById("cust_Status").value;
			let cust_Approver_statement = document.getElementById("cust_Approver_statement").value;
			let cust_Once_Auth=document.getElementById("cust_Once_Auth").value;
			let countRow=document.getElementById("countRow").value;

		 document.getElementById("cust_Approver").value=parent.document.getElementById("user_id").innerText.trim();
		 let cust_Once_AuthEle=document.getElementById("cust_Once_Auth").value="Y";
		 console.log("cust_Once_AuthEle::"+cust_Once_AuthEle);
		 let cust_ap_stmtElem=document.getElementById("cust_Approver_statement").value="Authorize";
		 console.log("cust_ap_stmtElem::"+cust_ap_stmtElem);
		 let cust_StatusElem=document.getElementById("cust_Status").value.trim();
		 console.log("cust_StatusElem::"+cust_StatusElem);
		 document.getElementById("cust_Aprovertime").value=currentDate;
		 document.getElementById("cust_Once_Auth1").checked=true;

/*
		fetch(origin+"/"+parent.getProjectName()+"/Screen?function_id=TMPRACTMAP&method=APPROVE&pract_id="+pract_id+"&"+"ProjectName="+ProjectName+"&"+"ownerEmail="+ownerEmail+"&"+"owner="+owner+"&"+"department="+department+"&"+
		 "ProjectManager="+ProjectManager+"&"+"start-date="+StartDate+"&"+"ProjectManagerEmail="+ProjectManagerEmail+"&"+"end-date="+EndDate+"&"+"Projectadmin="+Projectadmin+"&"+"" +
		 		"Projectadminmail="+Projectadminmail+"&"+"cust_maker="+cust_mak+"&"+"cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
		 "&"+"cust_Status="+cust_StatusElem+"&"+"cust_Approver_statement="+cust_ap_stmtElem+"&"+"cust_Once_Auth="+cust_Once_AuthEle);*/

		
		fetch(origin+"/"+parent.getProjectName()+"/Screen?function_id=TMPRACTMAP&method=APPROVE&pract_id="+pract_id+"&"+ 			
 		"cust_maker="+cust_mak+"&"+"cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
 "&"+"cust_Status="+cust_StatusElem+"&"+"cust_Approver_statement="+cust_ap_stmtElem+"&"+"cust_Once_Auth="+cust_Once_AuthEle+"&"+"countRow="+countRow);
 

		 alert("Approved Sucess");

		  document.getElementById("ApprovalId").style.display="none";

		  document.getElementById('cust_Once_Auth1').disabled = false;

	}


	else if(document.getElementById("cust_Approver_statement").value === "Unauthorize" && document.getElementById("cust_Once_Auth").value === "Y"){
		
		let pract_id=document.getElementById("pract_id").value;


	    var cust_mak=document.getElementById("cust_maker").value.trim();
		console.log("cust_mak:",cust_mak);
		var userLogIn=parent.document.getElementById("user_id").innerText.trim();
		console.log("userLogIn:",userLogIn);

		// let custId = document.getElementById("proj_code").value;

/*		let owner = document.getElementById("owner").value;
		let ProjectName = document.getElementById("ProjectName").value;
		let ownerEmail = document.getElementById("ownerEmail").value;
		let department = document.getElementById("department").value;
		let ProjectManager = document.getElementById("ProjectManager").value;
		let StartDate = document.getElementById("start-date").value;
		let ProjectManagerEmail = document.getElementById("ProjectManagerEmail").value;
		let EndDate = document.getElementById("end-date").value;
		let Projectadmin = document.getElementById("Projectadmin").value;
		let Projectadminmail = document.getElementById("Projectadminmail").value;*/
		
		/* let cust_maker = document.getElementById("cust_maker").value; */
		let cust_maker = parent.document.getElementById("user_id").innerText;
		let cust_maker_dt_stamp = document.getElementById("cust_maker_dt_stamp").value;
		let cust_Approver = document.getElementById("cust_Approver").value;
		let cust_Aprovertime = document.getElementById("cust_Aprovertime").value=currentDate;
		let cust_Status = document.getElementById("cust_Status").value;
		let cust_Approver_statement = document.getElementById("cust_Approver_statement").value;
		let cust_Once_Auth=document.getElementById("cust_Once_Auth").value;
		let countRow=document.getElementById("countRow").value;



	 document.getElementById("cust_Approver").value=parent.document.getElementById("user_id").innerText.trim();
	 let cust_Once_AuthEle=document.getElementById("cust_Once_Auth").value="Y";
	 console.log("cust_Once_AuthEle::"+cust_Once_AuthEle);
	 let cust_ap_stmtElem=document.getElementById("cust_Approver_statement").value="Authorize";
	 console.log("cust_ap_stmtElem::"+cust_ap_stmtElem);
	 let cust_StatusElem=document.getElementById("cust_Status").value.trim();
	 console.log("cust_StatusElem::"+cust_StatusElem);

 

	 document.getElementById("cust_Aprovertime").value=currentDate;

	 document.getElementById("cust_Once_Auth1").checked=true;


/*	fetch(origin+"/"+parent.getProjectName()+"/Screen?function_id=TMPRACTMAP&method=APPROVE&pract_id="+pract_id+"&"+"ProjectName="+ProjectName+"&"+"ownerEmail="+ownerEmail+"&"+"owner="+owner+"&"+"department="+department+"&"+
	 "ProjectManager="+ProjectManager+"&"+"start-date="+StartDate+"&"+"ProjectManagerEmail="+ProjectManagerEmail+"&"+"end-date="+EndDate+"&"+"Projectadmin="+Projectadmin+"&"+"" +
	 		"Projectadminmail="+Projectadminmail+"&"+"cust_maker="+cust_mak+"&"+"cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
	 "&"+"cust_Status="+cust_StatusElem+"&"+"cust_Approver_statement="+cust_ap_stmtElem+"&"+"cust_Once_Auth="+cust_Once_AuthEle);*/
	 
		fetch(origin+"/"+parent.getProjectName()+"/Screen?function_id=TMPRACTMAP&method=APPROVE&pract_id="+pract_id+"&"+ 			
		 		"cust_maker="+cust_mak+"&"+"cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
		 "&"+"cust_Status="+cust_StatusElem+"&"+"cust_Approver_statement="+cust_ap_stmtElem+"&"+"cust_Once_Auth="+cust_Once_AuthEle+"&"+"countRow="+countRow);

 

	 alert("Approved Sucess");
	  document.getElementById("ApprovalId").style.display="none";
	  document.getElementById('cust_Once_Auth1').disabled = false;


	}

	else{

		alert("Already Approved");

	}


	if(document.getElementById("cust_Status").value === "Close"){

		console.log("helloooooooo============")

		document.getElementById("CloseId").style.display="none";

		   document.getElementById("NewId").disabled = false;

		   document.getElementById("NewId").style.display="";

		   document.getElementById("ModifyId").disabled = false;

		   document.getElementById("ModifyId").style.display=""; 

	}

	else{

	document.getElementById("ModifyId").disabled = false;

	   document.getElementById("ModifyId").style.display=""; 

	   document.getElementById("CloseId").disabled = false;

	   document.getElementById("CloseId").style.display="";

	   document.getElementById("NewId").disabled = false;

	   document.getElementById("NewId").style.display="";

	   document.getElementById("ApprovalId").style.display="none";

	}



}

function reOpen(){
	
	 console.log("reopen====+++");
	 
	 var cust_mak=document.getElementById("cust_maker").value.trim();
		console.log("cust_mak:",cust_mak);
		var userLogIn=parent.document.getElementById("user_id").innerText.trim();
		console.log("userLogIn:",userLogIn);
		let pract_id = document.getElementById("pract_id").value;
/*		let owner = document.getElementById("owner").value;
		let ProjectName = document.getElementById("ProjectName").value;
		let ownerEmail = document.getElementById("ownerEmail").value;
		let department = document.getElementById("department").value;
		let ProjectManager = document.getElementById("ProjectManager").value;
		let StartDate = document.getElementById("start-date").value;
		let ProjectManagerEmail = document.getElementById("ProjectManagerEmail").value;
		let EndDate = document.getElementById("end-date").value;
		let Projectadmin = document.getElementById("Projectadmin").value;
		let Projectadminmail = document.getElementById("Projectadminmail").value;*/
		
		/* let cust_maker = document.getElementById("cust_maker").value; */
		let cust_maker = parent.document.getElementById("user_id").innerText;
		let cust_maker_dt_stamp = document.getElementById("cust_maker_dt_stamp").value=currentDate;
		let cust_Approver = document.getElementById("cust_Approver").value;
		let cust_Aprovertime = document.getElementById("cust_Aprovertime").value;
		let cust_Status = document.getElementById("cust_Status").value;
		let cust_Approver_statement = document.getElementById("cust_Approver_statement").value;
		let cust_Once_Auth=document.getElementById("cust_Once_Auth").value;
		let countRow=document.getElementById("countRow").value;
	
// let custId = document.getElementById("cust_id").value;
// let cust_maker = parent.document.getElementById("user_id").innerText;
// let cust_maker_dt_stamp =
// document.getElementById("cust_maker_dt_stamp").value;
// let cust_Approver = document.getElementById("cust_Approver").value;
// let cust_Aprovertime = document.getElementById("cust_Aprovertime").value;
	/*
	 * let cust_Approver_statement =
	 * document.getElementById("cust_Approver_statement").value;
	 */
	let cust_StatusE=document.getElementById("cust_Status").value="Open";

	if(document.getElementById("cust_maker").value !== parent.document.getElementById("user_id").innerText 
			|| document.getElementById("cust_Once_Auth").value === "Y" /*
																		 * ||
																		 * document.getElementById("cust_Approver_statement").value
																		 * ===
																		 * "Unathorize" ||
																		 * cust_StatusE.value
																		 * ===
																		 * "Open"
																		 */){
		
	console.log("reopen====");
		 let pract_id=document.getElementById("pract_id").value.trim();
		 
		 document.getElementById("cust_Approver").value=parent.document.getElementById("user_id").innerText;
		
		 let cust_ap_stmtElem=document.getElementById("cust_Approver_statement").value="Unauthorize";
		 console.log("cust_ap_stmtElem::"+cust_ap_stmtElem);

		 
		 cust_StatusE=document.getElementById("cust_Status").value="Open";
		 console.log("cust_StatusE::"+cust_StatusE);
		
		  
		 
		 cust_Approver="";
	 	cust_Aprovertime="";
	 	
	 	
		fetch(origin+"/"+parent.getProjectName()+"/Screen?function_id=TMPRACTMAP&method=REOPEN&pract_id="+pract_id
				+"&"+"cust_maker="+cust_mak+"&"+"cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
		 "&"+"cust_Status="+cust_StatusE+"&"+"cust_Approver_statement="+cust_ap_stmtElem+"&"+"cust_Once_Auth="+cust_Once_Auth+"&"+"countRow="+countRow);
	 	
	 	
		 alert("Reopened Sucess");
		 reopenEnable();
		 document.getElementById("ReopenId").style.display="none";
		   document.getElementById("ModifyId").style.display="none";
		 
		   
	}
	 document.getElementById("cust_maker_dt_stamp").value=currentDate;
	
}

function CloseAcc(){
	
	console.log("Closeeeee");
	
	 
	var cust_mak=document.getElementById("cust_maker").value.trim();
	console.log("cust_mak:",cust_mak);
	var userLogIn=parent.document.getElementById("user_id").innerText.trim();
	console.log("userLogIn:",userLogIn);
	
	
	let pract_id = document.getElementById("pract_id").value;
	let cust_maker = parent.document.getElementById("user_id").innerText;
	let cust_maker_dt_stamp = document.getElementById("cust_maker_dt_stamp").value;
	let cust_Approver = document.getElementById("cust_Approver").value;
	let cust_Aprovertime = document.getElementById("cust_Aprovertime").value;
	let cust_Status = document.getElementById("cust_Status").value;
	let cust_Approver_statement = document.getElementById("cust_Approver_statement").value;
	let cust_Once_Auth=document.getElementById("cust_Once_Auth").value;	
	let countRow=document.getElementById("countRow").value;
	
	
	if (document.getElementById("cust_Status").value === "Close"){
		alert("Already Closed");
	}
	
	else if(document.getElementById("cust_Approver_statement").value === "Unauthorize"  )
		{ 
	alert("Cannot Closed");
		}
	
	else if(document.getElementById("cust_Approver_statement").value === "Authorize"  || document.getElementById("cust_Status").value === "Open" ||  document.getElementById("cust_Status").value === "H" || document.getElementById("cust_Status").value !== "Close"){
		let cust_StatusE=document.getElementById("cust_Status").value="Close";
		let pract_id=document.getElementById("pract_id").value;
		
		// fetch(origin+"/"+parent.getProjectName()+"/UserMaintenanceClose1?PROJECTID="+PROJECTID+"&"+"cust_Status="+cust_StatusE);
		fetch(origin+"/"+parent.getProjectName()+"/Screen?function_id=TMPRACTMAP&method=CLOSE&pract_id="+pract_id+"&"+ 			
		 		"cust_maker="+cust_mak+"&"+"cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
		 "&"+"cust_Status="+cust_StatusE+"&"+"cust_Approver_statement="+cust_Approver_statement+"&"+"cust_Once_Auth="+cust_Once_Auth+"&"+"countRow="+countRow);
		
		alert("Successfully Closed");

		 document.getElementById("CloseId").style.display="none";
		  document.getElementById("ReopenId").style.display=""; 
		   document.getElementById("ModifyId").style.display="none";
	}
	else{
		alert("Already Closed");
	}
	
	}

 function enbFilds(){
	
	  const disabledInputs = document.querySelectorAll(".disabled-input");
	  document.getElementById('button1').disabled = false;
		 document.getElementById('button2').disabled = false;
		disabledInputs.forEach(input=>{
			input.removeAttribute('disabled');
		}); 
		
		/*
		 * if(document.getElementById("cust_Approver_statement").value === "U"){
		 * document.getElementById("cust_Approver").value ==""; }else
		 */
		
		
} 
 
 function enbFilds1(){
	
		  
	 document.getElementById('pract_id').disabled = true;
	 document.getElementById("imgLov").style.display="none";
	 document.getElementById('pract_name').disabled = true;
	 document.getElementById('pract_cont').disabled = true;
	 document.getElementById('pract_email').disabled = true;
	 document.getElementById('join_date').disabled = true;
	 document.getElementById('button1').disabled = true;
	 document.getElementById('button2').disabled = true;
		
			
	} 
 
 function addMyDate(dateType) {

		if (dateType === "start_date") {
			d = new Date(document.getElementById("stDT").value);
			dt = d.getDate();
			mn = d.getMonth();
			mn++;
			yy = d.getFullYear();
			document.getElementById("start-date").value = dt + "-"
					+ mn + "-" + yy;
		} else if (dateType === "end_date") {
			d = new Date(document.getElementById("edDT").value);
			dt = d.getDate();
			mn = d.getMonth();
			mn++;
			yy = d.getFullYear();
			document.getElementById("end-date").value = dt + "-"
					+ mn + "-" + yy;

		}

	}
	 
 
 function  Lov(){

     console.log("calling function maximizeLov()::");
     let iframe=document.querySelector('#f1');
     console.log(iframe);
     console.log(iframe.contentDocument);
  /* document.querySelector('#f1').style.setProperty('width','1156px'); */
     document.querySelector('.WNDtitlebar').style.setProperty('width','1156px');
     document.querySelector('.thead').style.setProperty('width','100%');
     document.querySelector('.BTNtext').style.setProperty('width','750px');
     /*
		 * iframe.contentDocument.querySelector('.FSTdlg').style.setProperty('width','181%');
		 * iframe.contentDocument.querySelector('.DIVText').style.setProperty('margin-left','-116px');
		 */
 /* document.getElementById("WNDmaxBTN").style.display="none"; */
      /*
		 * iframe.contentDocument.querySelector('#0').style.setProperty('margin-top','-4px');
		 * iframe.contentDocument.querySelector('#0').style.setProperty('margin-inline','8px');
		 * iframe.contentDocument.querySelector('#0').style.setProperty('position','absolute');
		 * iframe.contentDocument.querySelector('#0').style.setProperty('left','114px');
		 */

     iframe.contentDocument.querySelector('#f1').style.setProperty('width','1156px'); 
     document.getElementById("f1").style.setProperty('width','1156px');
 }

 function framecss(){
	 document.querySelector('#f1').style.setProperty('width','680px');
	 document.querySelector('.WNDtitlebar').style.setProperty('width','682px');
}
 
/*
 * function check() {
 * 
 * var mobile = document.getElementById('cust_phone');
 * 
 * 
 * var message = document.getElementById('message');
 * 
 * 
 * 
 * if(mobile.value.length!=10){
 * 
 * 
 * message.innerHTML = "required 10 digits, match requested format!" }}
 */
function samebtnSave(){
	document.getElementById("buttonSave").style.display="";
	let element=document.getElementById("buttonSave");
	 element.setAttribute( "onClick", "CustPost('UPDATE');" );
	
}


function disableDC(){
	
	var cust_mak=document.getElementById("cust_maker").value.trim();
	console.log("cust_mak:",cust_mak);
	var userLogIn=parent.document.getElementById("user_id").innerText;
	console.log("userLogIn:",userLogIn);
	if(cust_mak === userLogIn && document.getElementById("cust_Approver_statement").value === "Authorize"  )
	{
		
		   document.getElementById("ModifyId").disabled = false;
		   document.getElementById("ModifyId").style.display=""; 
		   document.getElementById("CloseId").disabled = false;
		   document.getElementById("CloseId").style.display=""; 
		
	}
}


 
 
const ids = new Set(); // create a Set to store unique IDs

/*
 * function checkDuplicate() { const idField =
 * document.getElementById("id-field"); const id = idField.value.trim(); // get
 * the ID entered by the user
 * 
 * if (ids.has(id)) { // check if the ID already exists in the Set
 * alert("Duplicate ID! Please enter a unique ID."); // show an alert message if
 * a duplicate is found idField.value = ""; // clear the input field return; }
 * 
 * ids.add(id); // add the ID to the Set if it's unique idField.value = ""; //
 * clear the input field }
 */



/*
 * function validateEmail() { var email =
 * document.getElementById("ownerEmail").value; var email1 =
 * document.getElementById("ProjectManagerEmail").value; var email2 =
 * document.getElementById("Projectadminmail").value;
 *  // Regular expression for Gmail address validation var regex =
 * /^[a-zA-Z0-9._%+-]+@gmail.com$/;
 * 
 * if (regex.test(email) || email === null || email === "") { alert("Valid Gmail
 * address"); CustPost('POST'); } else { alert("Invalid Gmail address"); } if
 * (regex.test(email1) || email1 === null || email1 === "") { alert("Valid Gmail
 * address"); CustPost('POST'); } else { alert("Invalid Gmail address"); } if
 * (regex.test(email2) || email2 === null || email2 ===""){ CustPost('POST');
 * }else{ alert("Invalid Gmail address"); } }
 */

function validateEmail() {
    var email = document.getElementById("pract_email").value;

    // Regular expression for Gmail address validation
    var regex = /^[a-zA-Z0-9._%+-]+@gmail.com$/;

    if (regex.test(email) || email === null || email === "") {
        /* alert("Valid Gmail address"); */
    	CustPost('POST');  
    }  else {
        alert("Invalid Email");
    } 
}



function disableCheckbox(checkbox) {
	checkbox.disabled = true;

	checkbox.classList.add("blue-checkbox");
  }
  

function displayAlert() {
  alert("Invalid User ID! This user ID already exists.");
}


 function closeFrame1(){
	 document.getElementById("frameCl").style.display="none";
} 

	
/*
 * var recivedArray; window.addEventListener('message', function(event) {
 * console.log("Message received from the parent: " + event.data); // Message
 * received from parent recivedArray=event.data;
 * document.getElementById("inputtd0").value = recivedArray.role_id;
 * document.getElementById("inputtd10").value = recivedArray.role_desc;
 * 
 * });
 */

var recivedArray={};
var inputArray=[];
/*
 * window.addEventListener("message", function(message) { console.log("Message
 * received from the parent: " + message.data.role_id); // Message received from
 * parent recivedArray[0]= message.data[0].trim(); console.log("Message received
 * from the parent: " + message.data.role_desc);
 * 
 * recivedArray[1] = message.data[1].trim(); console.log(message.data[0]);
 * console.log(message.data[1]); document.getElementById("inputtd0").value =
 * message.data[0].trim(); document.getElementById("inputtd10").value =
 * message.data[1].trim(); closeFrame1();
 * 
 * });
 */
 

var Msg =document.querySelector("#messege");
var url="http://localhost:8081/Dynamic_Login_Page_updated/Searching";
 /*
	 * window.addEventListener('message', function (event) {
	 * console.log(`Received message: ${event}`); });
	 */


var myWindow;

/*
 * var ifrem=document.getElementById("f1");
 * 
 * ifrem.style.display="none";
 */
var url=origin+"/Dynamic_Login_Page_updated/Searching";
// var myWindow = window.open("", "", "width=600,height=500");


/*
 * const iframeDouc=doucment.getElementById('iframeChild'); console.log("Iframe
 * Data:::",iframeDouc);
 */

function frameinWin1(lov_id,function_id,title){
	
	console.log("Name::",lov_id,function_id,title);
	framecss();
	let frameElem=document.getElementById("f1");
	frameElem.style.display="block";
	document.getElementById("WNDmaxBTN").style.display="none";
	var WNDtitlebarElem =document.getElementById("WNDtitlebar");
	 WNDtitlebarElem.style.display="none";
	frameElem.style.display="block"; 
	
	
	var titleLOVElem = document.getElementById("titleLOV");
	
	
	
	titleLOVElem.innerText=title;
	
/*
 * document.getElementsByClassName("WNDbuttons").style.visibility = "hidden";
 */			  
      
            
                   var arr=[lov_id,function_id];
                   console.log("Arr:",arr);
                   
                  /*
					 * const map = '{"name":"John", "age":30, "city":"New
					 * York"}'; const obj = JSON.parse(map);
					 */

                   frameElem.src=origin+"/"+parent.getProjectName()+"/LovServlet1?getLogField=Field&lov_id="+lov_id+"&"+"function_id="+function_id;
	       
	        
	       /*
			 * ifrm.style.width = "800px"; ifrm.style.height = "800px";
			 */
	       
	      
	          
	         
	         var LOVL=document.getElementById('LOVL').innerText;
	/*
	 * myWindow = window.open(url, "popupWin", "width=600,height=500");
	 * myWindow.focus();
	 */
	
	
	
	
	
	/*
	 * myWindow = window.open(url, "", "width=600,height=500");
	 * myWindow.document.write('<iframe name="SearchFrameId" id="iframeChild"
	 * height="500px" allowTransparency="true" frameborder="0" scrolling="yes"
	 * style="width:100%;" src="'+ifrem.src+'" type= "text/javascript"></iframe>');
	 * var _url="http://localhost:8080/Dynamic_Web_Menu_Page_new11/Searching";
	 */
     
	// window.open(_url, "");
	// myWindow.open(_url);
 
	  
}

/*
 * var rowIds = []; //Inside the JavaScript code that creates the table rows var
 * table = document.getElementById('myTable'); var rowCount =
 * document.getElementById('countRow').value = table.tBodies[0].rows.length; for
 * (var i = 0; i < rowCount; i++) { var row = document.createElement('tr'); var
 * rowId = 'inputid' + i; // Generate the row ID dynamically
 * 
 * row.setAttribute('id', rowId); rowIds.push(rowId); // Store the row ID in the
 * array // Create the row cells and content dynamically // ... }
 * 
 * //Access the stored row IDs for (var i = 0; i < rowIds.length; i++) { var
 * rowId = rowIds[i]; // Do something with the row ID } console.log(rowId);
 */



/*
 * var c = 0; var element1; var t=0; var table =
 * document.getElementById("dataTable"); var cell4=0; var row=0;
 * 
 * var inputdesc; var inputid; document.getElementById('countRow').value
 * =document.getElementById("dataTable").tBodies[0].rows.length; function
 * addRow(tableID)
 */{/*
	 * var table = document.getElementById(tableID);
	 * 
	 * var rowCount =
	 * document.getElementById("dataTable").tBodies[0].rows.length; row =
	 * document.getElementById("dataTable").tBodies[0].insertRow(rowCount);
	 * 
	 * row.setAttribute('id',"sbox"+c);
	 * document.getElementById('countRow').value =
	 * document.getElementById("dataTable").tBodies[0].rows.length;
	 * 
	 * var cell1 = row.insertCell(0); for (let i=0; i<=row ; i++){ row++; }
	 * element1 = document.createElement("input"); element1.type = "checkbox";
	 * element1.name = "chkbox[]"; element1.id = "check" + c;
	 * 
	 * cell1.appendChild(element1);
	 * 
	 * var cell2 = row.insertCell(1); var element2 =
	 * document.createElement("input"); element2.type = "text"; element2.name =
	 * "role_id" + c; element2.id = "inputid" + c; if(recivedArray.role_id !=
	 * undefined) { element2.value=recivedArray.role_id; element2.readOnly=true; }
	 * cell2.appendChild(element2);
	 * 
	 * element2.value=jsarray[t]; row.insertCell(0);
	 * 
	 * 
	 * 
	 * var cell3 = row.insertCell(2); var element3 =
	 * document.createElement("img"); element3.src = src="Img/lov_search.png";
	 * element3.id = "searcher" + c; element3.width="20"; element3.height="20";
	 * 
	 * 
	 * for(var index=0;index<document.getElementById('countRow').value;index++){
	 * var inputTD="inputtd"; var inputTD1="inputtd1";
	 * 
	 * console.log("inputTD::"+inputTD); console.log("inputTD1::"+inputTD1); /*
	 * inputdesc="inputdesc"+c; inputid="inputid"+c; var
	 * frameinVar="frameinWin1('LOV_MODUSER_ROLE','MODUSER','List of Values
	 * ROLES');insertData('"+inputdesc+"','"+inputid+"')";
	 * element3.setAttribute('onclick',
	 * "frameinWin1('LOV_PROMAIN','PROMAIN','List of Values
	 * ROLES');insertData('"+inputid+"','"+inputdesc+"')"); inputdesc
	 * //element3.setAttribute('onclick',
	 * "frameinWin1('LOV_MODUSER_ROLE','MODUSER','List of Values
	 * ROLES');insertData('inputid0','inputdesc0')");
	 * element3.setAttribute('onclick',
	 * "frameinWin1('LOV_MODUSER_ROLE','MODUSER','List of Values
	 * ROLES');insertData(inputTD,inputtd1)");
	 * 
	 * cell3.appendChild(element3);
	 * 
	 * 
	 * var copycel = document.getElementById('sBox0').innerHTML; var element4 =
	 * document.createElement("TD"); cell4.innerHTML=copycel;
	 * 
	 * 
	 * 
	 * cell4 = row.insertCell(3); var element4 =
	 * document.createElement("input"); element4.type = "text"; element4.name =
	 * "role_desc" + c; element4.id = "inputdesc" + c; if(recivedArray.role_desc !=
	 * undefined) { element4.value =recivedArray.role_desc; }
	 * 
	 * cell4.appendChild(element4);
	 * 
	 * 
	 * cell4.setAttribute('id',"sbox"+c); var element3 =
	 * document.createElement("input"); element3.type = "button"; element3.name =
	 * "role_desc" + c; element3.style ="margin:auto;max-width:300px"; /*
	 * element3.value = jsarray[t+1];
	 * 
	 * cell3.appendChild(element3);
	 * 
	 * 
	 * 
	 * c++; console.log("insert rows::", c);
	 * document.getElementById('countRow').value = product(t); t++; t++;
	 * 
	 * row.addEventListener('click', (event) => {
	 * 
	 * 
	 * let currentRow = Array.from(event.currentTarget.children);
	 * 
	 * console.log("event.target1::",currentRow[1].childNodes[0].id);
	 * console.log("event.target3::",currentRow[3].childNodes[0].id);
	 * 
	 * arr[0]=currentRow[1].childNodes[0].id;
	 * arr[1]=currentRow[3].childNodes[0].id; });
	 * 
	 */}



/* window.location.href+"?count="+count1; */

/* fetch("http://localhost:8080/Dynamic_Web_Menu_Page_new11/UserID_Role_Creation.jsp?count=+"count1); */

/*
 * function deleteRow(tableID) { try { var table =
 * document.getElementById(tableID); var rowCount = table.rows.length;
 * 
 * for(var i=0; i<rowCount; i++) { var row = table.rows[i]; var chkbox =
 * row.cells[0].childNodes[0]; if(null != chkbox && true == chkbox.checked) {
 * if(rowCount <=1) { alert("Cannot delete all the rows."); break; }
 * table.deleteRow(i); rowCount--; i--; } } }catch(e) { alert(e); } }
 */
 
 
 
/*
 * var projectid="projectid"+index; var projectname="projectname"+index; var
 * startdate="startdate"+index; var enddate="enddate"+index; var
 * status="status"+index;
 */


 var c = 0; 

 var element1;

 var t=0;

 var table = document.getElementById("dataTable");

 var cell4=0;

 var row=0;

  

 var projectid;

 var projectname;

  

 function addRow(tableID){

 	/* var table = document.getElementById(tableID); */

  

 	var rowCount = document.getElementById("dataTable").tBodies[0].rows.length;

 	 row = document.getElementById("dataTable").tBodies[0].insertRow(rowCount);


 	 row.setAttribute('id',"sbox"+c); 

 	document.getElementById('countRow').value = document.getElementById("dataTable").tBodies[0].rows.length;


 	var cell1 = row.insertCell(0);

 	/*
	 * 
	 * for (let i=0; i<=row ; i++){ row++; }
	 * 
	 */

 	 element1 = document.createElement("input");

 	element1.type = "checkbox";

 	element1.name = "chkbox[]";

 	element1.id = "check" + c;


 	cell1.appendChild(element1);

  

 	var cell2 = row.insertCell(1);

 	var element2 = document.createElement("input");

 	element2.type = "text";

 	element2.name = "project_id" + c;

 	element2.id = "projectid" + c;

 	element2.width="90";

 	if(recivedArray.asset_no != undefined)

 	{

 	 element2.value=recivedArray.asset_no;

 	/* element2.readOnly=true; */

 	}

 	cell2.appendChild(element2);


 	/* element2.value=jsarray[t]; */

 	/* row.insertCell(0); */


 	var cell3 = row.insertCell(2);

 	 var element3 = document.createElement("img");

 	   element3.src = src="Img/lov_search.png";

 	   element3.id = "searcher" + c;

 		element3.width="20";

 		element3.height="20";
 		
 		element3.setAttribute('onclick', "frameinWin1('LOV_TMPRACTMAP3','TMPRACTMAP','List of Values');insertData('"+projectid+"','"+projectname+"')"); 


 	cell3.appendChild(element3);
 	
 	
 	



 	var cell4 = row.insertCell(3);

 	var element4 = document.createElement("input");

 	element4.type = "text";

 	element4.name = "project_name" + c;

 	element4.id = "projectname" + c;

 	if(recivedArray.project_name !=undefined){

 		element4.value=recivedArray.project_name;

 	}


 	cell3.appendChild(element4)





 		/*
		 * 
		 * for(var index=0;index<document.getElementById('countRow').value;index++){
		 * 
		 * var inputTD="inputtd"; var inputTD1="inputtd1";
		 * 
		 * 
		 * 
		 * console.log("inputTD::"+inputTD); console.log("inputTD1::"+inputTD1); /*
		 * 
		 * inputdesc="inputdesc"+c; inputid="inputid"+c;
		 * 
		 */

 		  /*
			 * 
			 * var frameinVar="frameinWin1('LOV_MODUSER_ROLE','MODUSER','List of
			 * 
			 * Values ROLES');insertData('"+inputdesc+"','"+inputid+"')";
			 * 
			 */

 		 // element3.setAttribute('onclick',

 			// "frameinWin1('LOV_MODUSER_ROLE','MODUSER','List of Values

 			// ROLES');insertData('"+inputid+"','"+inputdesc+"')");

 		 // inputdesc

 		  // element3.setAttribute('onclick',

 			// "frameinWin1('LOV_MODUSER_ROLE','MODUSER','List of Values

 			// ROLES');insertData('inputid0','inputdesc0')");

 		  /*
			 * 
			 * element3.setAttribute('onclick',
			 * 
			 * "frameinWin1('LOV_MODUSER_ROLE','MODUSER','List of Values
			 * 
			 * ROLES');insertData(inputTD,inputtd1)");
			 * 
			 */


 		// cell3.appendChild(element3);


   	/*
	 * 
	 * var copycel = document.getElementById('sBox0').innerHTML; var element4 =
	 * 
	 * document.createElement("TD"); cell4.innerHTML=copycel;
	 * 
	 */



 	   cell5 = row.insertCell(4);

 	   var element5 = document.createElement("input");

 		element5.type = "date";

 		element5.name = "start_date" + c;

 		element5.id = "startdate" + c;


 		if(recivedArray.start_date != undefined)

 			{

 		 element5.value =recivedArray.start_date; 

 			}


 		cell4.appendChild(element5);




 		  cell6 = row.insertCell(5);

 		   var element6 = document.createElement("input");

 			element6.type = "date";

 			element6.name = "end_date" + c;

 			element6.id = "enddate" + c;

 			if(recivedArray.end_date != undefined)

 				{

 			 element6.value =recivedArray.end_date; 

 				}


 			cell6.appendChild(element6);



 			  cell7 = row.insertCell(6);

 			   var element7 = document.createElement("input");

 				element7.type = "text";

 				element7.name = "stat_us" + c;

 				element7.id = "status" + c;

 				// element6.width="129px";

 				if(recivedArray.stat_us != undefined)

 					{

 				 element7.value =recivedArray.stat_us; 

 					}


 				cell7.appendChild(element7);


 			/*
			 * 
			 * cell7 = row.insertCell(6); var element7 =
			 * 
			 * document.createElement("input"); element7.type = "date";
			 * 
			 * element7.name = "asset_enddate" + c; element7.id = "assetenddate" +
			 * 
			 * c; //element7.width="190px"; if(recivedArray.asset_enddate !=
			 * 
			 * undefined) { element7.value =recivedArray.asset_enddate; }
			 * 
			 * 
			 * 
			 * cell7.appendChild(element7);
			 * 
			 * 
			 * 
			 * 
			 * 
			 * cell8 = row.insertCell(7); var element8 =
			 * 
			 * document.createElement("input"); element8.type = "text";
			 * 
			 * element8.name = "stat_us" + c; element8.id = "status" + c;
			 * 
			 * //element7.width="190px"; if(recivedArray.stat_us != undefined) {
			 * 
			 * element8.value =recivedArray.stat_us; }
			 * 
			 * 
			 * 
			 * cell8.appendChild(element8);
			 * 
			 */

  



 c++;

 	console.log("insert rows::", c);

 	console.log("element1.id::" ,element1.id);

 	console.log("element2.id::" ,element2.id);

 	console.log("element3.id::" ,element3.id);

 	console.log("element4.id::" ,element4.id);

 	console.log("element5.id::" ,element5.id);

 	console.log("element6.id::" ,element6.id);

 	console.log("element7.id::" ,element7.id);

 	/* document.getElementById('countRow').value = product(t); */

 	t++;

 	t++;



 	row.addEventListener('click', (event) => {
		
		
        let currentRow	= Array.from(event.currentTarget.children);
		
		console.log("event.target1::",currentRow[1].childNodes[0].id);
		console.log("event.target3::",currentRow[3].childNodes[0].id);
		
		arr[0]=currentRow[1].childNodes[0].id; 
		arr[1]=currentRow[3].childNodes[0].id;
});
	
}



 /* window.location.href+"?count="+count1; */

 /* fetch("http://localhost:8080/Dynamic_Web_Menu_Page_new11/UserID_Role_Creation.jsp?count=+"count1); */
 /*
	 * function deleteRow(tableID) { try { var table =
	 * document.getElementById(tableID); var rowCount = table.rows.length;
	 * 
	 * for(var i=0; i<rowCount; i++) { var row = table.rows[i]; var chkbox =
	 * row.cells[0].childNodes[0]; if(null != chkbox && true == chkbox.checked) {
	 * if(rowCount <=1) { alert("Cannot delete all the rows."); break; }
	 * table.deleteRow(i); rowCount--; i--; } } }catch(e) { alert(e); } }
	 */


 function deleteRow(tableID)  {
 	// document.getElementById('countRow').value =
	// document.getElementById("dataTable").tBodies[0].rows.length;
     var table = document.getElementById(tableID);
     var row = table.rows.length;
     var counter = 0;
     if (table.rows.length > 1) {
         for (var i = 0; i < table.rows.length; i++) {
         	
             var chk = table.rows[i].cells[0].childNodes[0];
             if (chk.checked) {
                 table.deleteRow(i);
                 row--;
                 i--;
                 counter = counter + 1;
             }
         }
         if (counter == 0) {
             alert("Please select the row that you want to delete.");
         }
     } else {
         alert("There are no rows being added");
     }
 }
 

	  
	 


function modifySave(){
	 document.getElementById("NewId").style.display="";
	 document.getElementById("Id").style.display="";
	 document.getElementById("ModifyId").style.display="";
	 document.getElementById("DeleteId").style.display="";
}



/*
 * const fieldMap = {}; const nameInput =
 * document.getElementById("jsonFrontEnd"); fieldMap["jsonFrontEnd"] =
 * nameInput.value;
 * 
 * const dataArray = [];
 * 
 * for (const fieldName in fieldMap) { if (fieldMap.hasOwnProperty(fields)) {
 * const fieldValue = fieldMap[column]; // Create an object and push it to the
 * dataArray const dataObject = { fields, column }; dataArray.push(dataObject); } }
 * 
 * //Now, dataArray contains objects with field names and their corresponding
 * values. console.log(dataArray);
 */
