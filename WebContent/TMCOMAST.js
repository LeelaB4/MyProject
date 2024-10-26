var currentdate = new Date();
/*
 * var currentDate =currentdate.getDate() + "-" + (currentdate.getMonth()+1) +
 * "-" + currentdate.getFullYear() + " "
 *  + currentdate.getHours()+ ":" + currentdate.getMinutes()+ ":" +
 * currentdate.getSeconds();
 * 
 * console.log(currentDate);
 */

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







/*
 * const currentDate = new Date(); const day =
 * String(currentDate.getDate()).padStart(2, '0'); const month =
 * String(currentDate.getMonth() + 1).padStart(2, '0'); const year =
 * String(currentDate.getFullYear()); const formattedDate =
 * '[${day}-${month}-${year}]
 */

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
document.getElementById("imgLov").style.display="none";
document.getElementById("imgLov1").style.display="none";
document.getElementById('cust_Once_Auth1').disabled = true;
document.getElementById('button1').disabled = true;
document.getElementById('button2').disabled = true;
enbFilds1();
document.getElementById("cust_Once_Auth").value="N";
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

 var fetchbtnElem=document.getElementById("fetchbtn");
 fetchbtnElem.style.display="none";
 

var frameElem=document.getElementById("f1");
frameElem.style.display="none";
var WNDtitlebarElem =document.getElementById("WNDtitlebar");
WNDtitlebarElem.style.display="none";
}
);






/*
 * function enableFields() {
 *  // const disabledInputs = document.querySelectorAll("input[disabled]");
 * const disabledInputs = document.querySelectorAll(".disabled-input");
 * 
 * disabledInputs.forEach(input=>{ input.removeAttribute('disabled'); });
 * //document.getElementsByName("Department")[0].disabled=false;
 * 
 * console.log("Fields enabled");
 * 
 * document.getElementById("cancelButton").style.display = "inline-block";
 * document.getElementById("buttonSave").style.display = "inline-block";
 * 
 *  }
 */


function createBTN(){
	var modifysaveElem=document.getElementById("buttonSave");
	modifysaveElem.style.display="none";
	/*
	 * var fetchbtnElem=document.getElementById("fetchbtn");
	 * fetchbtnElem.style.display="none";
	 */
	 document.getElementById("Id").style.display="none";
	 document.getElementById("pract_id").disabled=false;
    document.getElementById("imgLov").style.display="none";
   // document.getElementById("imgLov").disabled = false;
    document.getElementById("imgLov1").style.display="";
    
    document.getElementById("imgLov1").disabled = false;
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
	 document.getElementById("NewId").disabled = false;
	 document.getElementById("NewId").style.display="none";
	 // document.getElementById('cust_id').disabled = false;
	 document.getElementById('cust_Once_Auth1').disabled = false;
	 document.getElementById('ReopenId').style.display="none";
	// document.getElementById('cust_id').disabled = false;
	 

}

function createNew(){
	var modifysaveElem=document.getElementById("buttonSave");
	modifysaveElem.style.display="none";
	
	 var fetchbtnElem=document.getElementById("fetchbtn");
	 fetchbtnElem.style.display="none";
	 
	 document.getElementById("NewId").style.display="none";
	
	document.getElementById("buttonSave").disabled = false;
	document.getElementById("buttonSave").style.display=""; 
	
	document.getElementById("imgLov").style.display="";
	///document.getElementById("imgLov1").style.display="";
	 document.getElementById("buttonExec").style.display="none"; 
 	 document.getElementById("Id").disabled = true;
	 document.getElementById("Id").style.display="none";  
	 document.getElementById("ModifyId").disabled = true;
	 document.getElementById("ModifyId").style.display="none"; 
	 document.getElementById("DeleteId").disabled = true;
	 document.getElementById("DeleteId").style.display="none"; 
	 document.getElementById("CloseId").disabled = true;
	 document.getElementById("CloseId").style.display="none"; 
	 document.getElementById("ApprovalId").disabled = true;
	 document.getElementById("ApprovalId").style.display="none"; 
	// document.getElementById('cust_id').disabled = false;
	 document.getElementById('button1').disabled = false;
	 document.getElementById('button2').disabled = false;
	 document.getElementById("pract_id").disabled=true;
	 document.getElementById("pract_name").disabled=true;
	
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
	 * document.getElementById("buttonExec").style.display="none";
	 *  }
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
	 //document.getElementById('pract_id').readOnly = false;
	 document.getElementById("imgLov").style.display="none";
	 //document.getElementById("imgLov1").style.display="none";
}

 
 




function readOnlyf(){
	document.getElementById('cust_id').readOnly = false;
	document.getElementById('cust_name').readOnly = false;
	document.getElementById('cust_password').readOnly = false;
	document.getElementById('cust_dept').readOnly = false;
	document.getElementById('cust_email').readOnly = false;
	document.getElementById('cust_manager').readOnly = false;
	document.getElementById('cust_ldap').readOnly = false;
	document.getElementById('cust_phone').readOnly = false;
	
}
function readOnlyt(){
	
	/*
	 * document.getElementById('cust_name').disabled = true;
	 * document.getElementById('cust_password').disabled = true;
	 * document.getElementById('cust_dept').disabled = true;
	 * document.getElementById('cust_email').disabled = true;
	 * document.getElementById('cust_manager').disabled = true;
	 * document.getElementById('cust_ldap').disabled = true;
	 * document.getElementById('cust_phone').disabled = true;
	 */
	
	document.getElementById('button1').disabled = true;
	document.getElementById('button2').disabled = true;
}
/*
 * function readOnlyRoleData(){ for(var index=0;index<document.getElementById('countRow').value;index++){
 * var inputTD="inputid"+index; var inputDesc="inputdesc"+index; var searcher
 * ="searcher"+index; var checkbox="check"+index;
 * document.getElementById(inputTD).disabled = true;
 * document.getElementById(inputDesc).disabled = true;
 * document.getElementById(searcher).enabled = false;
 * document.getElementById(checkbox).disabled = true; } }
 */
var arr=[];

function insertData(id,id2,id3,id4 ){
	console.log("calling Id::",id);
	arr[0]=id;
	arr[1]=id2;
	arr[2]=id3; 
	arr[3]=id4; 
	
}


window.addEventListener("message", function(message) {
	/*
	 * console.log("Message received from the parent: " + message.data.role_id); //
	 * Message received from parent recivedArray[0]=
	 * message.data.role_id.trim(); console.log("Message received from the
	 * parent: " + message.data.role_desc);
	 * 
	 * recivedArray[1] = message.data.role_desc.trim();
	 * 
	 * document.getElementById("custid").value = message.data.role_id.trim();
	 */
	        /* var dta111=nameArray[1].id; */
	
	
	
	        if(typeof arr[1] === "undefined" )
	        {
	        arr[1]="";
	        }
	         console.log("Message received from the parent:",message.data);
	         /* document.getElementById(arr[0]).value = message.data[0]; */
	          console.log("arr:::::::::::::::::::::::",arr);
	         
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






/*window.addEventListener("message", function(message) {
	

	
	
	
	        if(typeof arr1[1] === "undefined" )
	        {
	        	arr1[1]="";
	        }
	         console.log("Message received from the parent:",message.data);
	          document.getElementById(arr[0]).value = message.data[0]; 
	          console.log("arr:::::::::::::::::::::::",arr);
	         if(arr1[0] !== ""){
	        document.getElementById(arr1[0]).value = message.data[0];
	         if (arr1[1] !== "" ){
	        document.getElementById(arr1[1]).value = message.data[1];
	         }
	         
	         }
	         
	       
	      closeFrame();
	       
			 
	      }); */






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
	iframe.src=origin+"/Dynamic_Web_Menu_Page_new12/LovServlet1?lov_id="+lov_id+"&"+"function_id="+function_id;


}


 function getCustomerDetails (method) {
	 
	 
	// getFrontEndData('getFrontEndData');
	 
	var cust_mak=document.getElementById("cust_maker").value.trim();
	console.log("cust_mak:",cust_mak);
	var userLogIn=parent.document.getElementById("user_id").innerText;
	console.log("userLogIn:",userLogIn);
	
	
	console.log(method)
/*
 * await swal("Wait", "Please wait while getting customer details", "success", {
 * button: "Allright", });
 */
 let pract_id = document.getElementById("pract_id").value;
 console.log("+++", pract_id);
 
 
 fetch(origin+"/"+parent.getProjectName()+"/Screen?function_id=TMCOMAST&method=GET&pract_id="+pract_id)  
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
	 
	 
	 // Refresh Cust_id
	document.getElementById("pract_id").value="";
		 
		 
     
     throw new Error('Something went wrong.');
 })  
 .then(function(text) {                          // second then()
   console.log('Request successful', text);  
 })  
 .catch(function(error) {                        // catch
   console.log('Request failed', error);
 });
 
 
 
  fetch(origin+"/"+parent.getProjectName()+"/Screen?function_id=TMCOMAST&method=GET&pract_id="+pract_id).then(data=> data.json())
 .then((data) => {
	 console.log(data.json);
	 
	 
 if(method === "GET" || method === "UserMaintenanceModify" ) {
	 
	 
	 var cust_mak=document.getElementById("cust_maker").value.trim();
		console.log("cust_mak:",cust_mak);
		var userLogIn=parent.document.getElementById("user_id").innerText;
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
		 
	 
/* document.getElementById(key).readOnly =false; 
 document.getElementById(key).disabled=false;*/
 document.getElementById("CloseId").disabled=false;
 document.getElementById("DeleteId").disabled=false; 
 readOnlyRoleData();
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
 document.getElementById("Id").style.display="";  
 document.getElementById("NewId").disabled = false;
 //document.getElementById("NewId").style.display="";
 document.getElementById("ModifyId").disabled = false;
 document.getElementById("cust_id").disabled=true;
 document.getElementById("imgLov").style.display="none"; 



  })
}



function resetValues(){
/*
 * var fetchbtnElem=document.getElementById("fetchbtn");
 * fetchbtnElem.style.display="none";
 */
	/*
	 * document.getElementById("cust_name").value="";
	 * document.getElementById("cust_id").value="";
	 * document.getElementById("cust_password").value="";
	 * document.getElementById("cust_dept").value="";
	 * document.getElementById("cust_email").value="";
	 * document.getElementById("cust_manager").value="";
	 * document.getElementById("cust_ldap").value="";
	 * document.getElementById("cust_phone").value="";
	 * document.getElementById("cust_maker").value="";
	 * document.getElementById("cust_maker_dt_stamp").value="";
	 * document.getElementById("cust_Approver").value="";
	 * document.getElementById("cust_Aprovertime").value="";
	 * document.getElementById("cust_Status").value="";
	 * document.getElementById("cust_Approver_statement").value="";
	 * document.getElementById("cust_Once_Auth1").checked=false; for(var
	 * index=0;index<document.getElementById('countRow').value;index++){ var
	 * inputTD="sbox"+index;
	 * document.getElementById(inputTD).style.display="none"; }
	 */
	
	document.getElementById("pract_id").value=""
		document.getElementById("pract_name").value=""
	 for(var index=0;index<document.getElementById('countRow').value;index++){
		 var inputTD="sbox"+index;
		 
		  document.getElementById(inputTD).style.display="none";
	  }	 
}


function modifybtnEnable(){
	var modifysaveElem=document.getElementById("buttonSave");
	modifysaveElem.style.display="block";
	 document.getElementById("buttonSave").style.display="";
	 document.getElementById("ModifyId").style.display="none";
	 document.getElementById("buttonExec").style.display="none";
	 document.getElementById("ReopenId").style.display="none";
	 document.getElementById("cust_maker").value=parent.document.getElementById("user_id").innerText;
	 document.getElementById("NewId").style.display="none";
	 document.getElementById("CloseId").style.display="none";
	 document.getElementById("Id").style.display="none";
	 document.getElementById("ApprovalId").style.display="none";
	 document.getElementById("DeleteId").style.display="none";
	 readOnlyRoleData1();
}

function modifybtn(){
	var fetchbtnElem=document.getElementById("fetchbtn");
	fetchbtnElem.style.display="none";
	
	
	 document.getElementById("DeleteId").disabled = false;
	 document.getElementById('pract_id').readOnly = false;
	 document.getElementById("cust_Approver_statement").value="Unauthorize";
	// document.getElementById("cust_Once_Auth").value="N";
	 document.getElementById("cust_Approver").value="";
	 document.getElementById("cust_Aprovertime").value="";
	 document.getElementById("cust_maker_dt_stamp").value="";
	 
	 

}
function readOnlyRoleData(){
	for(var index=0;index<document.getElementById('countRow').value;index++){
		  var assetno="assetno"+index;
		  var assetname="assetname"+index;
		  var assettype="assettype"+index;
		  var serialno="serialno"+index;
		  var assetstartdate="assetstartdate"+index;
		  var assetenddate="assetenddate"+index;
		  var status="status"+index;
		  
		  var searcher ="searcher"+index;
		  var checkbox="check"+index;
		  document.getElementById(assetno).disabled = true;
		  document.getElementById(assetname).disabled = true;
		  document.getElementById(assettype).disabled = true;
		  document.getElementById(serialno).disabled = true;
		  document.getElementById(assetstartdate).disabled = true;
		  document.getElementById(assetenddate).disabled = true;
		  document.getElementById(status).disabled = true;
		
		
		  document.getElementById(checkbox).disabled = true;
	  }
}
function readOnlyRoleData1(){
	for(var index=0;index<document.getElementById('countRow').value;index++){
		  var assetno="assetno"+index;
		  var assetname="assetname"+index;
		  var assettype="assettype"+index;
		  var serialno="serialno"+index;
		  var assetstartdate="assetstartdate"+index;
		  var assetenddate="assetenddate"+index;
		  var status="status"+index;
		  
		  var searcher ="searcher"+index;
		  var checkbox="check"+index;
		  document.getElementById(assetno).disabled = false;
		  document.getElementById(assetname).disabled = false;
		  document.getElementById(assettype).disabled = false;
		  document.getElementById(serialno).disabled = false;
		  document.getElementById(assetstartdate).disabled = false;
		  document.getElementById(assetenddate).disabled = false;
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
	//let pract_name = document.getElementById("pract_name").value;
	/*
	 * let cust_name = document.getElementById("cust_name").value; let cust_pass =
	 * document.getElementById("cust_password").value; let cust_dept =
	 * document.getElementById("cust_dept").value; let cust_email =
	 * document.getElementById("cust_email").value; let cust_maker =
	 * document.getElementById("cust_maker").value; let cust_manager =
	 * document.getElementById("cust_manager").value; let cust_ladp =
	 * document.getElementById("cust_ldap").value; let cust_phone =
	 * document.getElementById("cust_phone").value;
	 */
	let cust_maker = parent.document.getElementById("user_id").innerText.trim();
	let cust_maker_dt_stamp = document.getElementById("cust_maker_dt_stamp").value=currentDate;
	let cust_Approver = document.getElementById("cust_Approver").value;
	let cust_Aprovertime = document.getElementById("cust_Aprovertime").value.trim();
	let cust_Status = document.getElementById("cust_Status").value;
	let cust_Approver_statement = document.getElementById("cust_Approver_statement").value;
	let cust_Once_Auth=document.getElementById("cust_Once_Auth").value;
	let countRow=document.getElementById("countRow").value;
	var url_send_data="";

	
	if(document.getElementById("cust_maker").value.trim() === parent.document.getElementById("user_id").innerText.trim())
		
	{
		if(method === "POST")
		{
		   url_send_data=origin+"/"+parent.getProjectName()+"/Screen?function_id=TMCOMAST&method=POST&pract_id="+pract_id+"&"+"cust_maker="+cust_mak+"&"+
		 "cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
		 "&"+"cust_Status="+cust_Status+"&"+"cust_Approver_statement="+cust_Approver_statement+"&"+"cust_Once_Auth="+cust_Once_Auth+"&"+"countRow="+countRow; 
         
		  for(var index=0;index<document.getElementById('countRow').value;index++){
			
			 
			  var assetno="assetno"+index;
			  var assetname="assetname"+index;
			  var assettype="assettype"+index;
			  var serialno="serialno"+index;
			  var assetstartdate="assetstartdate"+index;
			  var assetenddate="assetenddate"+index;
			  var status="status"+index;
			  
			  console.log("assetno::"+assetno);
			  console.log("assetname::"+assetname);
			  console.log("assettype::"+assettype);
			  console.log("serialno::"+serialno);
			  console.log("assetstartdate::"+assetstartdate);
			  console.log("assetenddate::"+assetenddate);
			  console.log("status::"+status);
			  url_send_data=url_send_data+"&assetno"+index+"="+document.getElementById(assetno).value.trim()+"&assetname"+index+"="+document.getElementById(assetname).value.trim()+"&assettype"+index+"="+document.getElementById(assettype).value.trim()+
			  "&serialno"+index+"="+document.getElementById(serialno).value.trim()+"&assetstartdate"+index+"="+document.getElementById(assetstartdate).value.trim()+"&assetenddate"+index+"="+document.getElementById(assetenddate).value.trim()+
			  "&status"+index+"="+document.getElementById(status).value.trim();
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
        	  fetch( url_send_data);
        	 
        	/* document.getElementById('postFormId').submit(); */
             alert("Sucessfully Save");
             // document.getElementById("cust_maker_dt_stamp").value=currentDate;
             document.getElementById("NewId").style.display="";
           document.getElementById("ModifyId").style.display="";
      	 document.getElementById("DeleteId").style.display="";
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
		 		 
		 		 
		 		 url_send_data=origin+"/"+parent.getProjectName()+"/Screen?function_id=TMCOMAST&method=UPDATE&pract_id="+pract_id+"&"+"cust_maker="+cust_mak+"&"+
				 "cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
				 "&"+"cust_Status="+cust_Status+"&"+"cust_Approver_statement="+cust_Approver_statement+"&"+"cust_Once_Auth="+cust_Once_Auth+"&"+"countRow="+countRow; 
		 		  
		 		  for(var index=0;index<document.getElementById('countRow').value;index++){
		 				
		 			 
					  var assetno="assetno"+index;
					  var assetname="assetname"+index;
					  var assettype="assettype"+index;
					  var serialno="serialno"+index;
					  var assetstartdate="assetstartdate"+index;
					  var assetenddate="assetenddate"+index;
					  var status="status"+index;
					  
					  console.log("assetno::"+assetno);
					  console.log("assetname::"+assetname);
					  console.log("assettype::"+assettype);
					  console.log("serialno::"+serialno);
					  console.log("assetstartdate::"+assetstartdate);
					  console.log("assetenddate::"+assetenddate);
					  console.log("status::"+status);
					  url_send_data=url_send_data+"&assetno"+index+"="+document.getElementById(assetno).value.trim()+"&assetname"+index+"="+document.getElementById(assetname).value.trim()+"&assettype"+index+"="+document.getElementById(assettype).value.trim()+
					  "&serialno"+index+"="+document.getElementById(serialno).value.trim()+"&assetstartdate"+index+"="+document.getElementById(assetstartdate).value.trim()+"&assetenddate"+index+"="+document.getElementById(assetenddate).value.trim()+
					  "&status"+index+"="+document.getElementById(status).value.trim();
				  }
				  fetch(url_send_data);  
				  // console.log("url_send_data update :::"+url_send_data);
			}
		  }
  else{
	  console.log("Maker");
	  modifybtn();
	  cust_Approver="";
		 cust_Aprovertime="";
		
		 url_send_data=origin+"/"+parent.getProjectName()+"/Screen?function_id=TMCOMAST&method=UPDATE&pract_id="+pract_id+"&"+"cust_maker="+cust_mak+"&"+
		 "cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
		 "&"+"cust_Status="+cust_Status+"&"+"cust_Approver_statement="+cust_Approver_statement+"&"+"cust_Once_Auth="+cust_Once_Auth+"&"+"countRow="+countRow; 
         
		  for(var index=0;index<document.getElementById('countRow').value;index++){
				
				 
			  var assetno="assetno"+index;
			  var assetname="assetname"+index;
			  var assettype="assettype"+index;
			  var serialno="serialno"+index;
			  var assetstartdate="assetstartdate"+index;
			  var assetenddate="assetenddate"+index;
			  var status="status"+index;
			  
			  console.log("assetno::"+assetno);
			  console.log("assetname::"+assetname);
			  console.log("assettype::"+assettype);
			  console.log("serialno::"+serialno);
			  console.log("assetstartdate::"+assetstartdate);
			  console.log("assetenddate::"+assetenddate);
			  console.log("status::"+status);
			  url_send_data=url_send_data+"&assetno"+index+"="+document.getElementById(assetno).value.trim()+"&assetname"+index+"="+document.getElementById(assetname).value.trim()+"&assettype"+index+"="+document.getElementById(assettype).value.trim()+
			  "&serialno"+index+"="+document.getElementById(serialno).value.trim()+"&assetstartdate"+index+"="+document.getElementById(assetstartdate).value.trim()+"&assetenddate"+index+"="+document.getElementById(assetenddate).value.trim()+
			  "&status"+index+"="+document.getElementById(status).value.trim();
		  }
		  
		  fetch(url_send_data);
		 // console.log("url_send_data:::"+url_send_data);
		 console.log("Maker1");
		 alert("Successfully Modify");
         document.getElementById("NewId").style.display="";
	   	 document.getElementById("Id").style.display="";
	   	 document.getElementById("ModifyId").style.display="";
	   	 if( document.getElementById("cust_maker").value.trim() === parent.document.getElementById("user_id").innerText.trim()
	     		&& document.getElementById("cust_Once_Auth").value.trim() === "Y" ){
	 			 console.log("hiiiiiiiiiiiiiiiii");
	 				document.getElementById("DeleteId").style.display="none";
	 		}
	     else{
	 	 document.getElementById("DeleteId").style.display="";
	        }
      }
     	 
     	   document.getElementById("buttonSave").style.display="none";
		  document.getElementById("NewId").disabled = false;
	
		   // Disabling AprovalButton for maker
		   document.getElementById("ApprovalId").style.display="none"; 
     	}
		
	  document.getElementById("cust_maker_dt_stamp").value=currentDate;
	 
	  
	 /* document.getElementById("here").innerHTML.reload */
}


/*
 * function getFrontEndData(method){
 * 
 * console.log("getFrontEndData Inside")
 * 
 * var cust_mak=document.getElementById("cust_maker").value.trim();
 * console.log("cust_mak:",cust_mak); var
 * userLogIn=parent.document.getElementById("user_id").innerText.trim();
 * console.log("userLogIn:",userLogIn); let custId =
 * document.getElementById("cust_id").value.trim(); console.log(custId); let
 * cust_name = document.getElementById("cust_name").value.trim();
 * console.log(cust_name); let cust_pass =
 * document.getElementById("cust_password").value.trim();
 * console.log(cust_pass); let cust_dept =
 * document.getElementById("cust_dept").value.trim(); console.log(cust_dept);
 * let cust_email = document.getElementById("cust_email").value.trim();
 * console.log(cust_email); let cust_maker =
 * document.getElementById("cust_maker").value; let cust_manager =
 * document.getElementById("cust_manager").value.trim();
 * console.log(cust_manager); let cust_ladp =
 * document.getElementById("cust_ldap").value.trim(); console.log(cust_ladp);
 * let cust_phone = document.getElementById("cust_phone").value.trim();
 * console.log(cust_phone); let cust_maker =
 * parent.document.getElementById("user_id").innerText.trim();
 * console.log(cust_maker); let cust_maker_dt_stamp =
 * document.getElementById("cust_maker_dt_stamp").value.trim();
 * console.log(cust_maker_dt_stamp); let cust_Approver =
 * document.getElementById("cust_Approver").value.trim();
 * console.log(cust_Approver); let cust_Aprovertime =
 * document.getElementById("cust_Aprovertime").value.trim();
 * console.log(cust_Aprovertime); let cust_Status =
 * document.getElementById("cust_Status").value.trim();
 * console.log(cust_Status); let cust_Approver_statement =
 * document.getElementById("cust_Approver_statement").value.trim();
 * console.log(cust_Approver_statement); let
 * cust_Once_Auth=document.getElementById("cust_Once_Auth").value.trim();
 * console.log(cust_Once_Auth); let
 * countRow=document.getElementById("countRow").value.trim();
 * console.log(countRow);
 * 
 * 
 * if(method === "getFrontEndData"){
 * url_send_data=origin+"/"+parent.getProjectName()+"/Screen?function_id=MODUSER&method=getFrontEndData&cust_id="+custId+"&"+"cust_name="+cust_name+"&"+
 * "cust_password="+cust_pass+"&"+"cust_dept="+cust_dept+"&"+"cust_email="+cust_email+"&"+"cust_manager="+cust_manager+"&"+"cust_ldap="+cust_ladp+"&"+"cust_phone="+cust_phone+"&"+"cust_maker="+cust_maker+"&"+
 * "cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
 * "&"+"cust_Status="+cust_Status+"&"+"cust_Approver_statement="+cust_Approver_statement+"&"+"cust_Once_Auth="+cust_Once_Auth+"&"+"countRow="+countRow;
 * 
 * fetch(url_send_data);
 *  } }
 */

function deleteData(){
	let pract_id = document.getElementById("pract_id").value;
	console.log("deleteData:::",pract_id)
	fetch(origin+"/"+parent.getProjectName()+"/Screen?function_id=TMCOMAST&method=DELETE&pract_id="+pract_id);
	
} 


function moddisable(){
	 document.getElementById("DeleteId").style.display="none";
	  document.getElementById("CloseId").style.display="none";
}



function readOnlyf(){
	document.getElementById('cust_id').readOnly = false;
	document.getElementById('cust_name').readOnly = false;
	document.getElementById('cust_password').readOnly = false;
	document.getElementById('cust_dept').readOnly = false;
	document.getElementById('cust_email').readOnly = false;
	document.getElementById('cust_manager').readOnly = false;
	document.getElementById('cust_ldap').readOnly = false;
	document.getElementById('cust_phone').readOnly = false;
	
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

/*
 * function mydate1() { d = new Date(document.getElementById("dt").value); dt =
 * d.getDate(); mn = d.getMonth(); mn++; yy = d.getFullYear();
 * document.getElementById("cust_dob").value = dt + "-" + mn + "-" + yy }
 */

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
		
		
	
		
		 
		 
		    var cust_mak=document.getElementById("cust_maker").value.trim();
			console.log("cust_mak:",cust_mak);
			var userLogIn=parent.document.getElementById("user_id").innerText.trim();
			console.log("userLogIn:",userLogIn);
			//let custId = document.getElementById("cust_id").value;
			let pract_id = document.getElementById("pract_id").value;
			let cust_maker = parent.document.getElementById("user_id").innerText.trim();
			let cust_maker_dt_stamp = document.getElementById("cust_maker_dt_stamp").value.trim();
			let cust_Approver = parent.document.getElementById("user_id").innerText.trim();
			let cust_Aprovertime = document.getElementById("cust_Aprovertime").value=currentDate;
			//let cust_Status = document.getElementById("cust_Status").value;
			//let cust_Approver_statement = document.getElementById("cust_Approver_statement").value;
			//let cust_Once_Auth=document.getElementById("cust_Once_Auth").value;
			let countRow=document.getElementById("countRow").value;
		  
		 document.getElementById("cust_Approver").value=parent.document.getElementById("user_id").innerText.trim();
		 let cust_Once_AuthEle=document.getElementById("cust_Once_Auth").value="Y";
		 console.log("cust_Once_AuthEle::"+cust_Once_AuthEle);
		 let cust_ap_stmtElem=document.getElementById("cust_Approver_statement").value="Authorize";
		 console.log("cust_ap_stmtElem::"+cust_ap_stmtElem);
		 let cust_StatusElem=document.getElementById("cust_Status").value.trim();
		 console.log("cust_StatusElem::"+cust_StatusElem);
		 let cust
		 document.getElementById("cust_Aprovertime").value=currentDate;
		 document.getElementById("cust_Once_Auth1").checked=true;
		  
		 
		
		 
		 fetch(origin+"/"+parent.getProjectName()+"/Screen?function_id=TMCOMAST&method=APPROVE&pract_id="+pract_id+"&"+"cust_maker="+cust_mak+"&"+
		 "cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+ cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
		 "&"+"cust_Status="+cust_StatusElem+"&"+"cust_Approver_statement="+cust_ap_stmtElem+"&"+"cust_Once_Auth="+cust_Once_AuthEle+"&"+"countRow="+countRow);
		 
		/* fetch(origin+"/"+parent.getProjectName()+"/Screen_Json?function_id=MODUSER&method=APPROVE&cust_id="+custId+"&"+"cust_Once_Auth="
				 +cust_Once_AuthEle+"&"+"cust_Approver_statement="+cust_ap_stmtElem+"&"+"cust_Approver="+
				 parent.document.getElementById("user_id").innerText.trim());*/
		 alert("Approved Sucess");
		  document.getElementById("ApprovalId").style.display="none";
		  document.getElementById('cust_Once_Auth1').disabled = false;
	}
	
	else if(document.getElementById("cust_Approver_statement").value === "Unauthorize" && document.getElementById("cust_Once_Auth").value === "Y"){
		 
	    var cust_mak=document.getElementById("cust_maker").value.trim();
		console.log("cust_mak:",cust_mak);
		var userLogIn=parent.document.getElementById("user_id").innerText.trim();
		console.log("userLogIn:",userLogIn);
		//let custId = document.getElementById("cust_id").value;
		let pract_id = document.getElementById("pract_id").value;
		let cust_maker = parent.document.getElementById("user_id").innerText.trim();
		let cust_maker_dt_stamp = document.getElementById("cust_maker_dt_stamp").value.trim();
		let cust_Approver = parent.document.getElementById("user_id").innerText.trim();
		let cust_Aprovertime = document.getElementById("cust_Aprovertime").value=currentDate;
		//let cust_Status = document.getElementById("cust_Status").value;
		//let cust_Approver_statement = document.getElementById("cust_Approver_statement").value;
		//let cust_Once_Auth=document.getElementById("cust_Once_Auth").value;
		let countRow=document.getElementById("countRow").value;
	  
	 document.getElementById("cust_Approver").value=parent.document.getElementById("user_id").innerText.trim();
	 let cust_Once_AuthEle=document.getElementById("cust_Once_Auth").value="Y";
	 console.log("cust_Once_AuthEle::"+cust_Once_AuthEle);
	 let cust_ap_stmtElem=document.getElementById("cust_Approver_statement").value="Authorize";
	 console.log("cust_ap_stmtElem::"+cust_ap_stmtElem);
	 let cust_StatusElem=document.getElementById("cust_Status").value.trim();
	 console.log("cust_StatusElem::"+cust_StatusElem);
	 let cust
	 document.getElementById("cust_Aprovertime").value=currentDate;
	 document.getElementById("cust_Once_Auth1").checked=true;
	  
	 
	  
	 
	 
	/* fetch(origin+"/"+parent.getProjectName()+"/Screen_Json?function_id=MODUSER&method=APPROVE&cust_id="+custId+"&"+"cust_Once_Auth="
			 +cust_Once_AuthEle+"&"+"cust_Approver_statement="+cust_ap_stmtElem+"&"+"cust_Approver="+
			 parent.document.getElementById("user_id").innerText);*/
	 
	 
	 fetch(origin+"/"+parent.getProjectName()+"/Screen?function_id=TMCOMAST&method=APPROVE&pract_id="+pract_id+"&"+"cust_maker="+cust_mak+"&"+
			 "cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+ cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
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
	// document.getElementById("cust_Aprovertime").value=currentDate;
	
}

function reOpen(){
	
	 console.log("reopen====+++");
	 
	 var cust_mak=document.getElementById("cust_maker").value.trim();
		console.log("cust_mak:",cust_mak);
		var userLogIn=parent.document.getElementById("user_id").innerText.trim();
		console.log("userLogIn:",userLogIn);
		let pract_id = document.getElementById("pract_id").value;
		let cust_maker = parent.document.getElementById("user_id").innerText.trim();
		let cust_maker_dt_stamp = document.getElementById("cust_maker_dt_stamp").value=currentDate;
		let cust_Approver = document.getElementById("cust_Approver").value;
		let cust_Aprovertime = document.getElementById("cust_Aprovertime").value.trim();
		//let cust_Status = document.getElementById("cust_Status").value;
		let cust_Approver_statement = document.getElementById("cust_Approver_statement").value;
		let cust_Once_Auth=document.getElementById("cust_Once_Auth").value;
		let countRow=document.getElementById("countRow").value;
	 
	
//	let custId = document.getElementById("cust_id").value;
//	let cust_maker = parent.document.getElementById("user_id").innerText;
//	let cust_maker_dt_stamp = document.getElementById("cust_maker_dt_stamp").value;
//	let cust_Approver = document.getElementById("cust_Approver").value;
//	let cust_Aprovertime = document.getElementById("cust_Aprovertime").value;
	/* let cust_Approver_statement = document.getElementById("cust_Approver_statement").value; */
	let cust_StatusE=document.getElementById("cust_Status").value="Open";

	if(document.getElementById("cust_maker").value !== parent.document.getElementById("user_id").innerText 
			|| document.getElementById("cust_Once_Auth").value === "Y" /* || document.getElementById("cust_Approver_statement").value === "Unathorize" 
			|| cust_StatusE.value === "Open" */){
		
	console.log("reopen====");
	let pract_id = document.getElementById("pract_id").value;
		 
		 document.getElementById("cust_Approver").value=parent.document.getElementById("user_id").innerText;
		
		 let cust_ap_stmtElem=document.getElementById("cust_Approver_statement").value="Unauthorize";
		 console.log("cust_ap_stmtElem::"+cust_ap_stmtElem);

		 
		 cust_StatusE=document.getElementById("cust_Status").value="Open";
		 console.log("cust_StatusE::"+cust_StatusE);
		
		  
		 
		 cust_Approver="";
	 	cust_Aprovertime="";
	 	
	 	fetch(origin+"/"+parent.getProjectName()+"/Screen?function_id=TMCOMAST&method=REOPEN&pract_id="+pract_id+"&"+"cust_maker="+cust_mak+"&"+
		 "cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
		 "&"+"cust_Status="+cust_StatusE+"&"+"cust_Approver_statement="+cust_Approver_statement+"&"+"cust_Once_Auth="+cust_Once_Auth+"&"+"countRow="+countRow);
	 	
	 	
		/* fetch(origin+"/"+parent.getProjectName()+"/Screen_Json?function_id=MODUSER&method=REOPEN&cust_id="+custId+"&"+"cust_maker="+cust_maker+"&"+
				 "cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
				 "&"+"cust_Status="+cust_StatusE+"&"+"cust_Approver_statement="+cust_ap_stmtElem);*/
		 alert("Reopened Sucess");
		 reopenEnable();
		 document.getElementById("ReopenId").style.display="none";
		 
		 
		   
	}
	 //document.getElementById("cust_maker_dt_stamp").value=currentDate;
	
}
function CloseAcc(){
	console.log("Close")
	let cust_StatusE=document.getElementById("cust_Status").value="Close"
		
		
		var cust_mak=document.getElementById("cust_maker").value.trim();
	console.log("cust_mak:",cust_mak);
	var userLogIn=parent.document.getElementById("user_id").innerText.trim();
	console.log("userLogIn:",userLogIn);
	
	let cust_maker = parent.document.getElementById("user_id").innerText.trim();
	let cust_maker_dt_stamp = document.getElementById("cust_maker_dt_stamp").value.trim();
	let cust_Approver = document.getElementById("cust_Approver").value;
	let cust_Aprovertime = document.getElementById("cust_Aprovertime").value.trim();
	//let cust_Status = document.getElementById("cust_Status").value;
	let cust_Approver_statement = document.getElementById("cust_Approver_statement").value;
	let cust_Once_Auth=document.getElementById("cust_Once_Auth").value;
	let countRow=document.getElementById("countRow").value;
	if (cust_StatusE.value === "Close"){
		alert("Already Closed");
	}
	
	else if(document.getElementById("cust_Approver_statement").value === "Unauthorize"  /* ||  document.getElementById("cust_Status").value === "H" || document.getElementById("cust_Status").value !== "C" */)
		{
	/* let cust_StatusE=document.getElementById("cust_Status").value="C";
	let custid=document.getElementById("custid").value;
	
	fetch(origin+"/Dynamic_Web_Menu_Page_new12/UserMaintenanceClose?custid="+custid+"&"+"cust_Status="+cust_StatusE); */
	alert("Cannot Closed");
		}
	
	else if(document.getElementById("cust_Approver_statement").value === "Authorize"  || cust_StatusE.value === "Open" ||  document.getElementById("cust_Status").value === "H" || document.getElementById("cust_Status").value !== "Close"){
		 cust_StatusE=document.getElementById("cust_Status").value="Close";
		 let pract_id = document.getElementById("pract_id").value;
		 
		fetch(origin+"/"+parent.getProjectName()+"/Screen?function_id=TMCOMAST&method=CLOSE&pract_id="+pract_id+"&"+"&"+"cust_maker="+cust_mak+"&"+
				 "cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
				 "&"+"cust_Status="+cust_StatusE+"&"+"cust_Approver_statement="+cust_Approver_statement+"&"+"cust_Once_Auth="+cust_Once_Auth+"&"+"countRow="+countRow);
		alert("Successfully Closed");
		  document.getElementById("CloseId").style.display="none";
		  document.getElementById("ReopenId").style.display=""; 
		   document.getElementById("ModifyId").style.display="none";
	}
	
	else{
		alert("Already Closed");
	}
	/* 
 */
	 //document.getElementById("cust_Aprovertime").value=currentDate;
	}

function enbFilds(){
	
	  
		document.getElementById("pract_id").style.enabled=true;
		document.getElementById('pract_id').disabled = true;
	  
	  const disabledInputs = document.querySelectorAll(".disabled-input");
		
		disabledInputs.forEach(input=>{
			input.removeAttribute('disabled');
		}); 
} 
 
 function enbFilds1(){
	
		  
			document.getElementById("pract_id").disabled=true;
			document.getElementById('pract_name').disabled = true;
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
function highletFields() {

    /* document.getElementById('custid').style.bordercolor = "red"; */
    document.getElementById("cust_id").style.border = "thin solid black";
     document.getElementById('cust_name').style.border = "thin solid black";
     document.getElementById('cust_password').style.border = "thin solid black";
     document.getElementById('cust_dept').style.border = "thin solid black";
     document.getElementById('cust_email').style.border  = "thin solid black";
     document.getElementById('cust_manager').style.border  = "thin solid black";
     document.getElementById('cust_ldap').style.border  = "thin solid black";
     document.getElementById('cust_phone').style.border  = "thin solid black";    
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



function validateEmail() {
   

    // Regular expression for Gmail address validation
  
        /* alert("Valid Gmail address"); */
    	CustPost('POST');  
   
}

/*
function validateEmail() {
    var email = document.getElementById("cust_email").value;
    
    

    // Regular expression for Gmail address validation
    var regex = /^[a-zA-Z0-9._%+-]+@gmail.com$/;

    if (regex.test(email) || email === null || email === "") {
         alert("Valid Gmail address"); 
    	CustPost('POST');  
    }  else {
        alert("Invalid Email");
    } 
}
*/

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
var url="http://localhost:8081/Dynamic_Web_Menu_Page_new12/Searching";
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
var url=origin+"/Dynamic_Web_Menu_Page_new12/Searching";
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
 * array
 *  // Create the row cells and content dynamically // ...
 *  }
 * 
 * //Access the stored row IDs for (var i = 0; i < rowIds.length; i++) { var
 * rowId = rowIds[i]; // Do something with the row ID } console.log(rowId);
 */
/*row.addEventListener('click', (event) => {
	  
	 
	  let currentrow = Array.from(event.currentTarget.children);
	 
	 console.log("event.target1::",currentrow[1].childNodes[0].id);
	  console.log("event.target3::",currentrow[2].childNodes[0].id);
		
	  
	  arr[0]=currentrow[1].childNodes[0].id;
	  arr[1]=currentrow[2].childNodes[0].id;
	
	  
	  arr[2]=currentRow[4].childNodes[0].id;
	  arr[3]=currentRow[5].childNodes[0].id;
	  
	  });*/


var c = 0; 
var element1;
var t=0;
var table = document.getElementById("dataTable");
var cell4=0;
var row=0;

var assetno;
var assetname;
var assettype;
var serialno;

function addRow(tableID){
	/* var table = document.getElementById(tableID); */

	var rowCount = document.getElementById("dataTable").tBodies[0].rows.length;
	 row = document.getElementById("dataTable").tBodies[0].insertRow(rowCount);
	 
	 row.setAttribute('id',"sbox"+c); 
	document.getElementById('countRow').value = document.getElementById("dataTable").tBodies[0].rows.length;
	
	var cell1 = row.insertCell(0);
	/*
	 * for (let i=0; i<=row ; i++){ row++; }
	 */
	 element1 = document.createElement("input");
	element1.type = "checkbox";
	element1.name = "chkbox[]";
	element1.id = "check" + c;
	
	cell1.appendChild(element1);

	var cell2 = row.insertCell(1);
	var element2 = document.createElement("input");
	element2.type = "text";
	element2.name = "asset_no" + c;
	element2.id = "assetno" + c;
	element2.style.width="143px"
		element2.autocomplete="off";
	//element2.width="100";
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
	   element3.src = src="Img/searcher.png";
	   element3.id = "searcher" + c;
		element3.width="20";
		element3.height="20";
		/*element3.style.position="relative";
		element3.style.left=" -5px";*/
	
		
		  //element3.setAttribute('onclick', "frameinWin1('LOV_MODUSER_ROLE','MODUSER','List of Values ROLES');insertData('"+inputid+"','"+inputdesc+"')"); 
	
  element3.setAttribute('onclick', "frameinWin1('LOV_TMCOMAST3','TMCOMAST','List of Values');insertData('"+assetno+"','"+assetname+"','"+assettype+"','"+serialno+"')"); 
		  
		  
		 
		cell3.appendChild(element3);
	
	
	
	
	
	
	var cell4 = row.insertCell(3);
	var element4 = document.createElement("input");
	element4.type = "text";
	element4.name = "asset_name" + c;
	element4.id = "assetname" + c;
	element4.style.width="143px"
		element4.autocomplete="off";
	
	if(recivedArray.asset_name !=undefined){
		element3.value=recivedArray.asset_name;
	}
	
	cell4.appendChild(element4)
	
	
		
		
		/*
		 * for(var index=0;index<document.getElementById('countRow').value;index++){
		 * var inputTD="inputtd"; var inputTD1="inputtd1";
		 * 
		 * console.log("inputTD::"+inputTD); console.log("inputTD1::"+inputTD1); /*
		 * inputdesc="inputdesc"+c; inputid="inputid"+c;
		 */
		  /*
			 * var frameinVar="frameinWin1('LOV_MODUSER_ROLE','MODUSER','List of
			 * Values ROLES');insertData('"+inputdesc+"','"+inputid+"')";
			 */
		 // element3.setAttribute('onclick',
			// "frameinWin1('LOV_MODUSER_ROLE','MODUSER','List of Values
			// ROLES');insertData('"+inputid+"','"+inputdesc+"')");
		 // inputdesc
		  // element3.setAttribute('onclick',
			// "frameinWin1('LOV_MODUSER_ROLE','MODUSER','List of Values
			// ROLES');insertData('inputid0','inputdesc0')");
		  /*
			 * element3.setAttribute('onclick',
			 * "frameinWin1('LOV_MODUSER_ROLE','MODUSER','List of Values
			 * ROLES');insertData(inputTD,inputtd1)");
			 */
		
		// cell3.appendChild(element3);
 	 
 	/*
	 * var copycel = document.getElementById('sBox0').innerHTML; var element4 =
	 * document.createElement("TD"); cell4.innerHTML=copycel;
	 */
	   
	   
	   cell5 = row.insertCell(4);
	   var element5 = document.createElement("input");
		element5.type = "text";
		element5.name = "asset_type" + c;
		element5.id = "assettype" + c;
		element5.style.width="143px"
			element5.autocomplete="off";
		
		if(recivedArray.role_desc != undefined)
			{
		 element5.value =recivedArray.asset_type; 
			}
		
		cell5.appendChild(element5);
		
		
		
		  cell6 = row.insertCell(5);
		   var element6 = document.createElement("input");
			element6.type = "text";
			element6.name = "serial_no" + c;
			element6.id = "serialno" + c;
			element6.style.width="143px"
				element6.autocomplete="off";
			if(recivedArray.serial_no != undefined)
				{
			 element6.value =recivedArray.serial_no; 
				}
			
			cell6.appendChild(element6);
			
			
			  cell7 = row.insertCell(6);
			   var element7 = document.createElement("input");
				element7.type = "date";
				element7.name = "asset_startdate" + c;
				element7.id = "assetstartdate" + c;
				element7.style.width="140px"
					element7.autocomplete="off";
				//element6.width="129px";
				if(recivedArray.asset_startdate != undefined)
					{
				 element7.value =recivedArray.asset_startdate; 
					}
				
				cell7.appendChild(element7);
				 
				
				   cell8 = row.insertCell(7);
				   var element8 = document.createElement("input");
				   element8.type = "date";
				   element8.name = "asset_enddate" + c;
				   element8.id = "assetenddate" + c;
					element8.style.width="140px"
						element8.autocomplete="off";
					//element7.width="190px";
					if(recivedArray.asset_enddate != undefined)
						{
						element8.value =recivedArray.asset_enddate; 
						}
					
					cell8.appendChild(element8);
			
			
					  cell9 = row.insertCell(8);
					   var element9 = document.createElement("input");
					   element9.type = "text";
					   element9.name = "stat_us" + c;
					   element9.id = "status" + c;
						element9.style.width="143px"
							element9.autocomplete="off";
						//element7.width="190px";
						if(recivedArray.stat_us != undefined)
							{
							element9.value =recivedArray.stat_us; 
							}
						
						cell9.appendChild(element9);
					

		
		
		
		
		
		
		
		
		
		
	  
	  
	  /* cell4.setAttribute('id',"sbox"+c); */
	/*
	 * var element3 = document.createElement("input"); element3.type = "button";
	 * element3.name = "role_desc" + c; element3.style
	 * ="margin:auto;max-width:300px";
	 *  /* element3.value = jsarray[t+1];
	 */
	 
 	/* cell3.appendChild(element3); */
	

	
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
	  
	 
	  let currentRow = Array.from(event.currentTarget.children);
	 
	 console.log("event.target1::",currentRow[1].childNodes[0].id);
	  console.log("event.target3::",currentRow[3].childNodes[0].id);
		 console.log("event.target4::",currentRow[4].childNodes[0].id);
		  console.log("event.target5::",currentRow[5].childNodes[0].id);
	  
	  arr[0]=currentRow[1].childNodes[0].id;
	  arr[1]=currentRow[3].childNodes[0].id;
	  arr[2]=currentRow[4].childNodes[0].id;
	  arr[3]=currentRow[5].childNodes[0].id;
	  
	  /*arr[2]=currentRow[4].childNodes[0].id;
	  arr[3]=currentRow[5].childNodes[0].id;*/
	  
	  });
	  
	  
	  
	 
		
}






/* window.location.href+"?count="+count1; */

/* fetch("http://localhost:8080/Dynamic_Web_Menu_Page_new11/UserID_Role_Creation.jsp?count=+"count1); */
/*
function deleteRow(tableID) {
	try {
	var table = document.getElementById(tableID);
	var rowCount = table.rows.length;

	for(var i=0; i<rowCount; i++) {
		var row = table.rows[i];
		var chkbox = row.cells[0].childNodes[0];
		if(null != chkbox && true == chkbox.checked) {
			if(rowCount <=1) {
				alert("Cannot delete all the rows.");
				break;
			}
			table.deleteRow(i);
			rowCount--;
			i--;
		}
	}
	}catch(e) {
		alert(e);
	}
}*/


function deleteRow(tableID)  {
	//document.getElementById('countRow').value =  document.getElementById("dataTable").tBodies[0].rows.length;
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