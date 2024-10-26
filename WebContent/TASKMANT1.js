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
 document.getElementById("imgLov1").style.display="none"; 
document.getElementById('Once_Auth1').disabled = true;
/*
 * document.getElementById('button1').disabled = true;
 * document.getElementById('button2').disabled = true;
 */

enbFilds1();


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
	 document.getElementById("Id").disabled = true;
	 document.getElementById("Id").style.display="none";
     document.getElementById("imgLov").style.display="";
	 document.getElementById("buttonExec").disabled = false;
	document.getElementById("buttonExec").style.display="block"; 
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
	
	 document.getElementById('Once_Auth1').disabled = false;
	 document.getElementById('proj_id').disabled = false;
// document.getElementById('ReopenId').style.display="none";
// document.getElementById('proj_code').disabled = false;
	 

}

function createNew(){
	var modifysaveElem=document.getElementById("buttonSave");
	modifysaveElem.style.display="none";
	/*
	 * var fetchbtnElem=document.getElementById("fetchbtn");
	 * fetchbtnElem.style.display="none";
	 */
	document.getElementById("NewId").disabled = true;
	 document.getElementById("NewId").style.display="none";
	
	document.getElementById("buttonSave").disabled = false;
	document.getElementById("buttonSave").style.display="block"; 
	
	 document.getElementById("imgLov1").style.display="";
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
	 document.getElementById('proj_id').disabled = false;
 document.getElementById('button1').disabled = false;
 document.getElementById('button2').disabled = false;
	/* document.getElementById('countRow').disabled = false; */
/* document.getElementById('roleScreen').style.display=""; */
	 

	 /* document.getElementById("buttonSave").style.display=""; */
	 	
}


function enableNew(){
	
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
	 document.getElementById('proj_id').readOnly = false;
// document.getElementById("imgLov1").style.display="none";
}


function readOnlyt(){
	
	document.getElementById('proj_code').disabled = false;
	document.getElementById('proj_name').disabled = true;
	document.getElementById('app_name').disabled = true;
	document.getElementById('app_version').disabled = true;
	document.getElementById('app_type').disabled = true;
	document.getElementById('app_url').disabled = true;
	document.getElementById('Edge').disabled = true;
	document.getElementById('Chrome').disabled = true;
	document.getElementById('Firefox').disabled = true;
	document.getElementById('Safari').disabled = true;
	document.getElementById('Opera').disabled = true;
	document.getElementById('Others').disabled = true;
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

function insertData(id,id2,id3,id4,id5,id6,id7,id8,id9,id10,id11,id12,id13,id14,id15 ){
	console.log("calling Id::",id);
	arr[0]=id;
	arr[1]=id2;
	arr[2]=id3; 
	arr[3]=id4; 
	arr[4]=id5; 
	arr[5]=id6; 
	arr[6]=id7; 
	arr[7]=id8; 
	arr[8]=id9; 
	arr[9]=id10; 
	arr[10]=id11; 
	arr[11]=id12; 
	arr[12]=id13; 
	arr[13]=id14; 
	arr[14]=id15; 
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
	         
	         if (arr[6] !== "" ){
		 	        document.getElementById(arr[6]).value = message.data[6];
		 	         }
	         
	         if (arr[7] !== "" ){
		 	        document.getElementById(arr[7]).value = message.data[7];
		 	         }
	         
	         if (arr[8] !== "" ){
		 	        document.getElementById(arr[8]).value = message.data[8];
		 	         }
	         
	         if (arr[9] !== "" ){
		 	        document.getElementById(arr[9]).value = message.data[9];
		 	         }
	         
	         if (arr[10] !== "" ){
		 	        document.getElementById(arr[10]).value = message.data[10];
		 	         }
	         
	         if (arr[11] !== "" ){
		 	        document.getElementById(arr[11]).value = message.data[11];
		 	         }
	         
	         if (arr[12] !== "" ){
		 	        document.getElementById(arr[12]).value = message.data[12];
		 	         }
	         
	         if (arr[13] !== "" ){
		 	        document.getElementById(arr[13]).value = message.data[13];
		 	         }
	         
	         if (arr[14] !== "" ){
		 	        document.getElementById(arr[14]).value = message.data[14];
		 	         }
	         
	         if (arr[15] !== "" ){
		 	        document.getElementById(arr[15]).value = message.data[15];
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
	iframe.src=origin+"/Dynamic_Login_Page/LovServlet1?lov_id="+lov_id+"&"+"function_id="+function_id;
	

}


 function getCustomerDetails (method) {




		var cust_mak=document.getElementById("cust_maker").value.trim();

		console.log("cust_mak:",cust_mak);

		var userLogIn=parent.document.getElementById("user_id").innerText.trim();

		console.log("userLogIn:",userLogIn);



		console.log(method)

	/*
	 * await swal("Wait", "Please wait while getting customer details",
	 * "success", {
	 * 
	 * button: "Allright",
	 * 
	 * });
	 */

	let proj_code = document.getElementById("proj_code").value;

	console.log("+++", proj_code);



	fetch(origin+"/"+parent.getProjectName()+"/Screen?function_id=ITBPRMNT&method=GET&proj_code="+proj_code)  

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

		document.getElementById("proj_code").value="";
    throw new Error('Something went wrong.');

	})  

	.then(function(text) {                          // second then()

	   console.log('Request successful', text);  

	})  

	.catch(function(error) {                        // catch

	   console.log('Request failed', error);

	});


	fetch(origin+"/"+parent.getProjectName()+"/Screen?function_id=ITBPRMNT&method=GET&proj_code="+proj_code).then(data=> data.json())
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
	 * 
	 * document.getElementById(key).disabled=false;
	 */

	document.getElementById("CloseId").disabled=false;

	document.getElementById("DeleteId").disabled=false; 


	readOnlyt();


	/*
	 * document.getElementById('custid').readOnly = true;
	 * 
	 * document.getElementById('cust_name').readOnly = true;
	 * 
	 * document.getElementById('cust_password').readOnly = true;
	 * 
	 * document.getElementById('cust_dept').readOnly = true;
	 * 
	 * document.getElementById('cust_email').readOnly = true;
	 * 
	 * document.getElementById('cust_manager').readOnly = true;
	 * 
	 * document.getElementById('cust_ldap').readOnly = true;
	 * 
	 * document.getElementById('cust_phone').readOnly = true;
	 * 
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
	
	if(key==="Edge1"   && value === "Y")
		{
		 document.getElementById("Edge").checked = true;
		}


	 if(key==="Chrome1"  && value === "Y")
		{
		 document.getElementById("Chrome").checked = true;
		
		}
	 if(key==="Firefox1" && value === "Y")
	{
	 document.getElementById("Firefox").checked = true;
	
	}
	 if(key==="Safari1"   && value === "Y")
	{
	 document.getElementById("Safari").checked = true;
	
	}
	 
	if(key==="Opera1"   && value === "Y")
	{
	 document.getElementById("Opera").checked = true;
	
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
		 * userLogIndocument.getElementById("cust_Approver_statement").value ===
		 * "U" && document.getElementById("cust_Once_Auth").value ==="N" ){
		 * 
		 * document.getElementById("ModifyId").disabled = true;
		 * 
		 * document.getElementById("ModifyId").style.display="none";
		 */

		   /*
			 * document.getElementById("CloseId").disabled = true;
			 * 
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

	if(document.getElementById("Edge").checked==true){
		document.getElementById("Edge").disabled = false;
	}
	if(document.getElementById("Chrome").checked==true){
		document.getElementById("Chrome").disabled = false;
	}
	if(document.getElementById("Firefox").checked==true){
		document.getElementById("Firefox").disabled = false;
	}
	if(document.getElementById("Safari").checked==true){
		document.getElementById("Safari").disabled = false;
	}
	if(document.getElementById("Opera").checked==true){
		document.getElementById("Opera").disabled = false;
	}

	 

	  })
}



function resetValues(){
	


	
	 /*
		 * var fetchbtnElem=document.getElementById("fetchbtn");
		 * fetchbtnElem.style.display="none";
		 */
	 document.getElementById("proj_id").value="";
	 document.getElementById("proj_name").value="";
	 document.getElementById("stdate").value="";
	 document.getElementById("endate").value="";
	 document.getElementById("status").value="";
	 
	 document.getElementById("mproj_id").value="";
	 document.getElementById("mproj_name").value="";
	 document.getElementById("mstdate").value="";
	 document.getElementById("mendate").value="";
	 document.getElementById("mstatus").value="";
	 
	 document.getElementById("sproj_id").value="";
	 document.getElementById("sproj_name").value="";
	 document.getElementById("sstdate").value="";
	 document.getElementById("sendate").value="";
	 document.getElementById("sstatus").value="";
	 
	 document.getElementById("cust_maker").value="";
	 document.getElementById("cust_maker_dt_stamp").value="";
	 document.getElementById("cust_Approver").value="";
	 document.getElementById("cust_Aprovertime").value="";
	 document.getElementById("cust_Status").value="";
	 document.getElementById("cust_Approver_statement").value="";
	 document.getElementById("cust_Once_Auth1").checked=false;
	/*
	 * for(var index=0;index<document.getElementById('countRow').value;index++){
	 * var inputTD="sbox"+index;
	 * document.getElementById(inputTD).style.display="none"; }
	 */ 
}


function modifybtnEnable(){
	var modifysaveElem=document.getElementById("buttonSave");
	modifysaveElem.style.display="block";
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
	/*
	 * var fetchbtnElem=document.getElementById("fetchbtn");
	 * fetchbtnElem.style.display="none";
	 */
	
	
	 document.getElementById("DeleteId").disabled = false;
	 document.getElementById('proj_code').readOnly = false;
	 document.getElementById("cust_Approver_statement").value="Unauthorize";
	 document.getElementById("cust_Once_Auth").value="N";
	 document.getElementById("cust_Approver").value="";
	 document.getElementById("cust_Aprovertime").value="";
	 document.getElementById("cust_maker_dt_stamp").value="";
	 
	 

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
	var cust_mak=document.getElementById("maker").value.trim();
	console.log("cust_mak:",cust_mak);
	var userLogIn=parent.document.getElementById("user_id").innerText.trim();
	console.log("userLogIn:",userLogIn);
	
	let proj_id = document.getElementById("proj_id").value;
	let maker = parent.document.getElementById("user_id").innerText.trim();
	let maker_dt_stamp = document.getElementById("maker_dt_stamp").value=currentDate;
	let Approver = document.getElementById("Approver").value;
	let Aprovertime = document.getElementById("Aprovertime").value.trim();
	let Status = document.getElementById("Status").value;
	let Approver_statement = document.getElementById("Approver_statement").value;
	let Once_Auth=document.getElementById("Once_Auth").value;
	let countRow=document.getElementById("countRow").value;
	
	var url_send_data="";

	
	if(document.getElementById("maker").value.trim() === parent.document.getElementById("user_id").innerText.trim())
		
	{
		if(method === "POST")
		{
			url_send_data= origin+"/"+parent.getProjectName()+"/Screen?function_id=TASKMANT&method=POST&proj_id="+proj_id+"&"+ 			
	 		"maker="+cust_mak+"&"+"maker_dt_stamp="+maker_dt_stamp+"&"+"Approver="+Approver+"&"+"Aprovertime="+Aprovertime+
	 "&"+"Status="+Status+"&"+"Approver_statement="+Approver_statement+"&"+"Once_Auth="+Once_Auth+"&"+"countRow="+countRow;
		for(var index=0;index<document.getElementById('countRow').value;index++){




			  var parenttask="parenttask"+index;
			  var taskcode="taskcode"+index;
			  var taskname="taskname"+index;
			  var startdate="startdate"+index;
			  var enddate="enddate"+index;
			  var status="status"+index;

			  
			  url_send_data=url_send_data+"&parenttask"+index+"="+document.getElementById(parenttask).value.trim()+"&taskcode"+index+"="+document.getElementById(taskcode).value.trim()+"&taskname"+index+"="+document.getElementById(taskname).value.trim()+"&startdate"+index+"="+document.getElementById(startdate).value.trim()+

			  "&enddate"+index+"="+document.getElementById(enddate).value.trim()+"&status"+index+"="+document.getElementById(status).value.trim();
		    
			  

		  
		}
			
			
			
		  console.log("url_send_data:::"+url_send_data);
		  if(proj_id === "" || proj_id === null)
        	 {
        	 
        	 alert("Please enter mandatory fileds");
        	 document.getElementById("ModifyId").style.display="none";
          	 document.getElementById("DeleteId").style.display="none";
          	 document.getElementById("CloseId").style.display="none";
        	 
        	 }
		  else{
	        	 
			    
     		  console.log("url_send_data:::"+url_send_data);
         	 fetch(url_send_data);
        	 
        	/* document.getElementById('postFormId').submit(); */
             alert("Sucessfully Save");
             // document.getElementById("cust_maker_dt_stamp").value=currentDate;
           document.getElementById("ModifyId").style.display="";
      	 document.getElementById("DeleteId").style.display="";
      	document.getElementById("Id").style.display="";
      	document.getElementById("NewId").style.display="";
      	readOnlyt();
         }
     	
    	 document.getElementById("buttonSave").style.display="none"; 
    	 document.getElementById("ModifyId").disabled = false;
      	 document.getElementById("DeleteId").disabled = false; 
      	 document.getElementById("CloseId").disabled = false;
      	 document.getElementById("Id").disabled = false;
		}
	document.getElementById("maker_dt_stamp").value=currentDate;
	 
	
	}

	if(method === "UPDATE")
		
	{ 
	  if(clnt_mak !== userLogIn && document.getElementById("Approver_statement").value === "Unauthorize"  ){
			  console.log("modify meeeeeee");
			  /* alert("Checker cannot Modify "); */ 
			if (document.getElementById("Once_Auth").value="Y" && document.getElementById("Approver_statement").value === "Unauthorize")	   {
				 modifybtn();
		    	  Approver="";
		 		 Aprovertime="";
		 		 
		 		 
		 		url_send_data= origin+"/"+parent.getProjectName()+"/Screen?function_id=TASKMANT&method=UPDATE&proj_id="+proj_id+"&"+ 			
	 	 		"maker="+cust_mak+"&"+"maker_dt_stamp="+maker_dt_stamp+"&"+"Approver="+Approver+"&"+"Aprovertime="+Aprovertime+
	 	 "&"+"Status="+Status+"&"+"Approver_statement="+Approver_statement+"&"+"Once_Auth="+Once_Auth+"&"+"countRow="+countRow;

		 		for(var index=0;index<document.getElementById('countRow').value;index++){




		 			var parenttask="parenttask"+index;
					  var taskcode="taskcode"+index;
					  var taskname="taskname"+index;
					  var startdate="startdate"+index;
					  var enddate="enddate"+index;
					  var status="status"+index;
			


					  console.log("projectid::"+projectid);
					  console.log("projectname::"+projectname);
					  console.log("startdate::"+startdate);
					  console.log("enddate::"+enddate);
				      console.log("status::"+status);
					

				      url_send_data=url_send_data+"&parenttask"+index+"="+document.getElementById(parenttask).value.trim()+"&taskcode"+index+"="+document.getElementById(taskcode).value.trim()+"&taskname"+index+"="+document.getElementById(taskname).value.trim()+"&startdate"+index+"="+document.getElementById(startdate).value.trim()+

					  "&enddate"+index+"="+document.getElementById(enddate).value.trim()+"&status"+index+"="+document.getElementById(status).value.trim();
		 		}
				/*
				 * for(var index=0;index<document.getElementById('countRow').value;index++){
				 * var inputTD="inputid"+index; var inputDesc="inputdesc"+index;
				 * console.log("inputTD::"+inputTD);
				 * url_send_data=url_send_data+"&inputid"+index+"="+document.getElementById(inputTD).value.trim(); }
				 */
				  fetch(url_send_data);  
				  // console.log("url_send_data update :::"+url_send_data);
			}
		  }
  else{
	  console.log("Maker");
	  modifybtn();
	  Approver="";
		 Aprovertime="";
		
		 url_send_data= origin+"/"+parent.getProjectName()+"/Screen?function_id=TASKMANT&method=UPDATE&proj_id="+proj_id+"&"+ 			
	 		"maker="+cust_mak+"&"+"maker_dt_stamp="+maker_dt_stamp+"&"+"Approver="+Approver+"&"+"Aprovertime="+Aprovertime+
	 "&"+"Status="+Status+"&"+"Approver_statement="+Approver_statement+"&"+"Once_Auth="+Once_Auth+"&"+"countRow="+countRow;


		for(var index=0;index<document.getElementById('countRow').value;index++){




			var parenttask="parenttask"+index;
			  var taskcode="taskcode"+index;
			  var taskname="taskname"+index;
			  var startdate="startdate"+index;
			  var enddate="enddate"+index;
			  var status="status"+index;
	


			  console.log("projectid::"+projectid);
			  console.log("projectname::"+projectname);
			  console.log("startdate::"+startdate);
			  console.log("enddate::"+enddate);
		      console.log("status::"+status);
			

		      url_send_data=url_send_data+"&parenttask"+index+"="+document.getElementById(parenttask).value.trim()+"&taskcode"+index+"="+document.getElementById(taskcode).value.trim()+"&taskname"+index+"="+document.getElementById(taskname).value.trim()+"&startdate"+index+"="+document.getElementById(startdate).value.trim()+

			  "&enddate"+index+"="+document.getElementById(enddate).value.trim()+"&status"+index+"="+document.getElementById(status).value.trim();
		  
			
			
		}
		/*
		 * for(var index=0;index<document.getElementById('countRow').value;index++){
		 * var inputTD="inputid"+index; var inputDesc="inputdesc"+index;
		 * console.log("inputTD::"+inputTD);
		 * url_send_data=url_send_data+"&inputid"+index+"="+document.getElementById(inputTD).value.trim(); }
		 */
		  fetch(url_send_data);
		 // console.log("url_send_data:::"+url_send_data);
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
		
	  document.getElementById("maker_dt_stamp").value=currentDate;
	 
	  
	 /* document.getElementById("here").innerHTML.reload */
}



function deleteData(){
	let proj_code = document.getElementById("proj_code").value;
	console.log("deleteData:::",proj_code)
	fetch(origin+"/"+parent.getProjectName()+"/Screen?function_id=ITBPRMNT&method=DELETE&proj_code="+proj_code);
	
} 


function moddisable(){
	 document.getElementById("DeleteId").style.display="none";
	  document.getElementById("CloseId").style.display="none";
}



function readOnlyf(){
	document.getElementById('proj_code').readOnly = false;
	document.getElementById('proj_name').readOnly = false;
	document.getElementById('app_name').readOnly = false;
	document.getElementById('app_version').readOnly = false;
	document.getElementById('app_type').readOnly = false;
	document.getElementById('app_url').readOnly = false;
	document.getElementById('Edge').readOnly = false;
	document.getElementById('Chrome').readOnly = false;
	document.getElementById('Firefox').readOnly = false;
	document.getElementById('Safari').readOnly = false;
	document.getElementById('Opera').readOnly = false;
	document.getElementById('Others').readOnly = false;
	// document.getElementById('Opera').readOnly = false;
	
	}
	
function remove(){
	 document.getElementById("ModifyId").style.display="none";
  	 document.getElementById("DeleteId").style.display="none";
  	 document.getElementById("CloseId").style.display="none";
  	 document.getElementById("NewId").style.display="";	
}



function getDataFooter(){
	document.getElementById("maker").value=parent.document.getElementById("user_id").innerText;
	
	
	
/* document.getElementById("cust_maker_dt_stamp").value=currentDate; */
	document.getElementById("Status").value="Open";
	document.getElementById("Approver_statement").value="Unauthorize";
	document.getElementById("Once_Auth").value="N";
	
	
	
}

/*
 * function mydate1() { d = new Date(document.getElementById("dt").value); dt =
 * d.getDate(); mn = d.getMonth(); mn++; yy = d.getFullYear();
 * document.getElementById("cust_dob").value = dt + "-" + mn + "-" + yy }
 */

function readOnlyFooterField(){	
document.getElementById("maker").readOnly = true;
document.getElementById("Approver").readOnly = true;
document.getElementById("Status").readOnly = true;

document.getElementById("maker_dt_stamp").readOnly = true;
document.getElementById("Aprovertime").readOnly = true;
document.getElementById("Approver_statement").readOnly = true;
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
		
		
	
		 let custId=document.getElementById("proj_code").value;
		 
		 
		    var cust_mak=document.getElementById("cust_maker").value.trim();
			console.log("cust_mak:",cust_mak);
			var userLogIn=parent.document.getElementById("user_id").innerText.trim();
			console.log("userLogIn:",userLogIn);
			// let custId = document.getElementById("proj_code").value;
			let proj_code = document.getElementById("proj_code").value;
			let proj_name = document.getElementById("proj_name").value;
			let app_name = document.getElementById("app_name").value;
			let app_version = document.getElementById("app_version").value;
			let app_type = document.getElementById("app_type").value;
			/* let cust_maker = document.getElementById("cust_maker").value; */
			let app_url = document.getElementById("app_url").value;
			let Edge1=document.getElementById("Edge1").value.trim();
			let Chrome1=document.getElementById("Chrome1").value.trim();
			let Firefox1=document.getElementById("Firefox1").value.trim();
			let Safari1=document.getElementById("Safari1").value.trim();
			let Opera1=document.getElementById("Opera1").value.trim();
			let Others = document.getElementById("Others").value;
			let cust_maker = parent.document.getElementById("user_id").innerText.trim();
			let cust_maker_dt_stamp = document.getElementById("cust_maker_dt_stamp").value.trim();
			let cust_Approver =parent.document.getElementById("user_id").innerText.trim();
			let cust_Aprovertime = document.getElementById("cust_Aprovertime").value=currentDate;
			let cust_Status = document.getElementById("cust_Status").value;
			let cust_Approver_statement = document.getElementById("cust_Approver_statement").value;
			let cust_Once_Auth=document.getElementById("cust_Once_Auth").value;
			let countRow=document.getElementById("countRow").value;
			
			// let cust_Status = document.getElementById("cust_Status").value;
			// let cust_Approver_statement =
			// document.getElementById("cust_Approver_statement").value;
			// let
			// cust_Once_Auth=document.getElementById("cust_Once_Auth").value;
			// let countRow=document.getElementById("countRow").value;
		  
		 document.getElementById("cust_Approver").value=parent.document.getElementById("user_id").innerText.trim();
		 let cust_Once_AuthEle=document.getElementById("cust_Once_Auth").value="Y";
		 console.log("cust_Once_AuthEle::"+cust_Once_AuthEle);
		 let cust_ap_stmtElem=document.getElementById("cust_Approver_statement").value="Authorize";
		 console.log("cust_ap_stmtElem::"+cust_ap_stmtElem);
		 let cust_StatusElem=document.getElementById("cust_Status").value.trim();
		 console.log("cust_StatusElem::"+cust_StatusElem);
	
		 document.getElementById("cust_Aprovertime").value=currentDate;
		 document.getElementById("cust_Once_Auth1").checked=true;
		  
		 
		
		 
		 fetch(origin+"/"+parent.getProjectName()+"/Screen?function_id=ITBPRMNT&method=APPROVE&proj_code="+proj_code+"&"+"proj_name="+proj_name+"&"+
		 "app_name="+app_name+"&"+"app_version="+app_version+"&"+"app_type="+app_type+"&"+"app_url="+app_url+"&"+"Edge1="+Edge1+"&"+"Chrome1="+Chrome1+"&"+"Firefox1="+Firefox1+
		 "&"+"Safari1="+Safari1+"&"+"Opera1="+Opera1+"&"+"Others="+Others+"&"+"cust_maker="+cust_mak+"&"+
		 "cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
		 "&"+"cust_Status="+cust_StatusElem+"&"+"cust_Approver_statement="+cust_ap_stmtElem+"&"+"cust_Once_Auth="+cust_Once_AuthEle);   

		 
		 
		/*
		 * fetch(origin+"/"+parent.getProjectName()+"/Screen_Json?function_id=MODUSER&method=APPROVE&proj_code="+custId+"&"+"cust_Once_Auth="
		 * +cust_Once_AuthEle+"&"+"cust_Approver_statement="+cust_ap_stmtElem+"&"+"cust_Approver="+
		 * parent.document.getElementById("user_id").innerText.trim());
		 */
		 alert("Approved Sucess");
		  document.getElementById("ApprovalId").style.display="none";
		  document.getElementById('cust_Once_Auth1').disabled = false;
	}
	
	else if(document.getElementById("cust_Approver_statement").value === "Unauthorize" && document.getElementById("cust_Once_Auth").value === "Y"){
		let custId=document.getElementById("proj_code").value;
		 
		 
	    var cust_mak=document.getElementById("cust_maker").value.trim();
		console.log("cust_mak:",cust_mak);
		var userLogIn=parent.document.getElementById("user_id").innerText.trim();
		console.log("userLogIn:",userLogIn);
		// let custId = document.getElementById("proj_code").value;
		let proj_code = document.getElementById("proj_code").value;
		let proj_name = document.getElementById("proj_name").value;
		let app_name = document.getElementById("app_name").value;
		let app_version = document.getElementById("app_version").value;
		let app_type = document.getElementById("app_type").value;
		/* let cust_maker = document.getElementById("cust_maker").value; */
		let app_url = document.getElementById("app_url").value;
		let Edge1=document.getElementById("Edge1").value.trim();
		let Chrome1=document.getElementById("Chrome1").value.trim();
		let Firefox1=document.getElementById("Firefox1").value.trim();
		let Safari1=document.getElementById("Safari1").value.trim();
		let Opera1=document.getElementById("Opera1").value.trim();
		let Others = document.getElementById("Others").value;
		let cust_maker = parent.document.getElementById("user_id").innerText.trim();
		let cust_maker_dt_stamp = document.getElementById("cust_maker_dt_stamp").value.trim();
		let cust_Approver = document.getElementById("cust_Approver").value;
		let cust_Aprovertime = document.getElementById("cust_Aprovertime").value=currentDate;
		let cust_Status = document.getElementById("cust_Status").value;
		let cust_Approver_statement = document.getElementById("cust_Approver_statement").value;
		let cust_Once_Auth=document.getElementById("cust_Once_Auth").value;
		let countRow=document.getElementById("countRow").value;
		// let cust_Status = document.getElementById("cust_Status").value;
		// let cust_Approver_statement =
		// document.getElementById("cust_Approver_statement").value;
		// let
		// cust_Once_Auth=document.getElementById("cust_Once_Auth").value;
		// let countRow=document.getElementById("countRow").value;
	  
	 document.getElementById("cust_Approver").value=parent.document.getElementById("user_id").innerText.trim();
	 let cust_Once_AuthEle=document.getElementById("cust_Once_Auth").value="Y";
	 console.log("cust_Once_AuthEle::"+cust_Once_AuthEle);
	 let cust_ap_stmtElem=document.getElementById("cust_Approver_statement").value="Authorize";
	 console.log("cust_ap_stmtElem::"+cust_ap_stmtElem);
	 let cust_StatusElem=document.getElementById("cust_Status").value.trim();
	 console.log("cust_StatusElem::"+cust_StatusElem);

	 document.getElementById("cust_Aprovertime").value=currentDate;
	 document.getElementById("cust_Once_Auth1").checked=true;
	  
	 
	
	 
	 fetch(origin+"/"+parent.getProjectName()+"/Screen?function_id=ITBPRMNT&method=APPROVE&proj_code="+proj_code+"&"+"proj_name="+proj_name+"&"+
	 "app_name="+app_name+"&"+"app_version="+app_version+"&"+"app_type="+app_type+"&"+"app_url="+app_url+"&"+"Edge1="+Edge1+"&"+"Chrome1="+Chrome1+"&"+"Firefox1="+Firefox1+
	 "&"+"Safari1="+Safari1+"&"+"Opera1="+Opera1+"&"+"Others="+Others+"&"+"cust_maker="+cust_mak+"&"+
	 "cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
	 "&"+"cust_Status="+cust_StatusElem+"&"+"cust_Approver_statement="+cust_ap_stmtElem+"&"+"cust_Once_Auth="+cust_Once_AuthEle);   

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
		let proj_code = document.getElementById("proj_code").value;
		let proj_name = document.getElementById("proj_name").value;
		let app_name = document.getElementById("app_name").value;
		let app_version = document.getElementById("app_version").value;
		let app_type = document.getElementById("app_type").value;
		/* let cust_maker = document.getElementById("cust_maker").value; */
		let app_url = document.getElementById("app_url").value;
		let Edge1=document.getElementById("Edge1").value.trim();
		let Chrome1=document.getElementById("Chrome1").value.trim();
		let Firefox1=document.getElementById("Firefox1").value.trim();
		let Safari1=document.getElementById("Safari1").value.trim();
		let Opera1=document.getElementById("Opera1").value.trim();
		let Others = document.getElementById("Others").value;
		let cust_maker = parent.document.getElementById("user_id").innerText.trim();
		let cust_maker_dt_stamp = document.getElementById("cust_maker_dt_stamp").value=currentDate;
		let cust_Approver = document.getElementById("cust_Approver").value;
		let cust_Aprovertime = document.getElementById("cust_Aprovertime").value.trim();
		let cust_Status = document.getElementById("cust_Status").value;
		let cust_Approver_statement = document.getElementById("cust_Approver_statement").value;
		let cust_Once_Auth=document.getElementById("cust_Once_Auth").value;
		let countRow=document.getElementById("countRow").value;
	 
	
// let custId = document.getElementById("proj_code").value;
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
		 let custId=document.getElementById("proj_code").value;
		 
		 document.getElementById("cust_Approver").value=parent.document.getElementById("user_id").innerText;
		
		 let cust_ap_stmtElem=document.getElementById("cust_Approver_statement").value="Unauthorize";
		 console.log("cust_ap_stmtElem::"+cust_ap_stmtElem);

		 
		 cust_StatusE=document.getElementById("cust_Status").value="Open";
		 console.log("cust_StatusE::"+cust_StatusE);
		
		  
		 
		 cust_Approver="";
	 	cust_Aprovertime="";
	 	
		fetch(origin+"/"+parent.getProjectName()+"/Screen?function_id=ITBPRMNT&method=REOPEN&proj_code="+proj_code+"&"+"proj_name="+proj_name+"&"+
				 "app_name="+app_name+"&"+"app_version="+app_version+"&"+"app_type="+app_type+"&"+"app_url="+app_url+"&"+"Edge1="+Edge1+"&"+"Chrome1="+Chrome1+"&"+"Firefox1="+Firefox1+
				 "&"+"Safari1="+Safari1+"&"+"Opera1="+Opera1+"&"+"Others="+Others+"&"+"cust_maker="+cust_mak+"&"+
				 "cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
				 "&"+"cust_Status="+cust_StatusE+"&"+"cust_Approver_statement="+cust_Approver_statement+"&"+"cust_Once_Auth="+cust_Once_Auth);   

	 	
	 	
		/*
		 * fetch(origin+"/"+parent.getProjectName()+"/Screen_Json?function_id=MODUSER&method=REOPEN&proj_code="+custId+"&"+"cust_maker="+cust_maker+"&"+
		 * "cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
		 * "&"+"cust_Status="+cust_StatusE+"&"+"cust_Approver_statement="+cust_ap_stmtElem);
		 */
		 alert("Reopened Sucess");
		 reopenEnable();
		 document.getElementById("ReopenId").style.display="none";
		 
		 
		   
	}
	 document.getElementById("cust_maker_dt_stamp").value=currentDate;
	
}
function CloseAcc(){
	console.log("Close")
	let cust_StatusE=document.getElementById("cust_Status").value="Close"
		
		var cust_mak=document.getElementById("cust_maker").value.trim();
	console.log("cust_mak:",cust_mak);
	var userLogIn=parent.document.getElementById("user_id").innerText.trim();
	console.log("userLogIn:",userLogIn);
	let proj_code = document.getElementById("proj_code").value;
	let proj_name = document.getElementById("proj_name").value;
	let app_name = document.getElementById("app_name").value;
	let app_version = document.getElementById("app_version").value;
	let app_type = document.getElementById("app_type").value;
	/* let cust_maker = document.getElementById("cust_maker").value; */
	let app_url = document.getElementById("app_url").value;
	let Edge1=document.getElementById("Edge1").value.trim();
	let Chrome1=document.getElementById("Chrome1").value.trim();
	let Firefox1=document.getElementById("Firefox1").value.trim();
	let Safari1=document.getElementById("Safari1").value.trim();
	let Opera1=document.getElementById("Opera1").value.trim();
	let Others = document.getElementById("Others").value;
	let cust_maker = parent.document.getElementById("user_id").innerText.trim();
	let cust_maker_dt_stamp = document.getElementById("cust_maker_dt_stamp").value=currentDate;
	let cust_Approver = document.getElementById("cust_Approver").value;
	let cust_Aprovertime = document.getElementById("cust_Aprovertime").value.trim();
	let cust_Status = document.getElementById("cust_Status").value;
	let cust_Approver_statement = document.getElementById("cust_Approver_statement").value;
	let cust_Once_Auth=document.getElementById("cust_Once_Auth").value;
	let countRow=document.getElementById("countRow").value;
	if (cust_StatusE.value === "Close"){
		alert("Already Closed");
	}
	
	else if(document.getElementById("cust_Approver_statement").value === "Unauthorize"  /*
																						 * ||
																						 * document.getElementById("cust_Status").value
																						 * ===
																						 * "H" ||
																						 * document.getElementById("cust_Status").value
																						 * !==
																						 * "C"
																						 */)
		{

	alert("Cannot Closed");
		}
	
	else if(document.getElementById("cust_Approver_statement").value === "Authorize"  || cust_StatusE.value === "Open" ||  document.getElementById("cust_Status").value === "H" || document.getElementById("cust_Status").value !== "Close"){
		 cust_StatusE=document.getElementById("cust_Status").value="Close";
		let custid=document.getElementById("proj_code").value;
		
		fetch(origin+"/"+parent.getProjectName()+"/Screen?function_id=ITBPRMNT&method=CLOSE&proj_code="+proj_code+"&"+"proj_name="+proj_name+"&"+
		 "app_name="+app_name+"&"+"app_version="+app_version+"&"+"app_type="+app_type+"&"+"app_url="+app_url+"&"+"Edge1="+Edge1+"&"+"Chrome1="+Chrome1+"&"+"Firefox1="+Firefox1+
		 "&"+"Safari1="+Safari1+"&"+"Opera1="+Opera1+"&"+"Others="+Others+"&"+"cust_maker="+cust_mak+"&"+
		 "cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
		 "&"+"cust_Status="+cust_StatusE+"&"+"cust_Approver_statement="+cust_Approver_statement+"&"+"cust_Once_Auth="+cust_Once_Auth);  

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
	
	}


 function enbFilds(){
	/*
	 * var inputs = document.querySelectorAll('.disable-input'); for (var i = 0;
	 * i < inputs.length; i++) { inputs[i].disabled = false; // or true
	 * //inputs[i].style.display = 'none'; }
	 */
	 
	 /*
		 * document.getElementById("buttonSave").enabled = true;
		 * 
		 * document.getElementById("buttonSave").style.display="block";
		 */
	  /*
		 * document.getElementById("proj_code").style.enabled=true;
		 * document.getElementById('proj_code').disabled = true;
		 */
	  
	  const disabledInputs = document.querySelectorAll(".disabled-input");
		
		disabledInputs.forEach(input=>{
			input.removeAttribute('disabled');
		}); 
		
		/*
		 * if(document.getElementById("cust_Approver_statement").value === "U"){
		 * document.getElementById("cust_Approver").value ==""; }else
		 */
		
		
} 
 
 function enbFilds1(){
		
	  
	 document.getElementById('proj_id').disabled = true;
	 document.getElementById("proj_name").disabled = true;
	 document.getElementById("stdate").disabled = true;
	 document.getElementById('endate').disabled = true;
	 document.getElementById('status').disabled = true;
	 
	 document.getElementById('mproj_id').disabled = true;
	 document.getElementById('mproj_name').disabled = true;
	 document.getElementById('mstdate').disabled = true;
	 document.getElementById('mendate').disabled = true;
	 document.getElementById('mstatus').disabled = true;
	 
	 document.getElementById('sproj_id').disabled = true;
	 document.getElementById('sproj_name').disabled = true;
	 document.getElementById('sstdate').disabled = true;
	 document.getElementById('sendate').disabled = true;
	 document.getElementById('sstatus').disabled = true;
	 
	 document.getElementById('button1').disabled = true;
	 document.getElementById('button2').disabled = true;
		
			
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
    document.getElementById("proj_code").style.border = "thin solid black";
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



/*
 * function validateEmail() { var email =
 * document.getElementById("cust_email").value;
 *  // Regular expression for Gmail address validation var regex =
 * /^[a-zA-Z0-9._%+-]+@gmail.com$/;
 * 
 * if (regex.test(email) || email === null || email === "") { alert("Valid Gmail
 * address"); CustPost('POST'); } else { alert("Invalid Email"); } }
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
var url="http://localhost:8081/Dynamic_Login_Page/Searching";
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
var url=origin+"/Dynamic_Login_Page/Searching";
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

	element1 = document.createElement("input");
	 
	element1.type = "checkbox";

	element1.name = "chkbox[]";

	element1.id = "check" + c;

	cell1.appendChild(element1);

 

	var cell2 = row.insertCell(1);

	var element2 = document.createElement("input");

	element2.type = "text";

	element2.name = "parent_task" + c;

	element2.id = "parenttask" + c;

	element2.width="90";

	if(recivedArray.asset_no != undefined)

	{

	 element2.value=recivedArray.parent_task;

	}

	cell2.appendChild(element2);





	var cell3 = row.insertCell(2);

	var element3 = document.createElement("input");

	element3.type = "text";

	element3.name = "task_code" + c;

	element3.id = "taskcode" + c;

	if(recivedArray.project_name !=undefined){

		element3.value=recivedArray.task_code;

	}
	cell3.appendChild(element3);
	
	
	
	var cell4 = row.insertCell(3);

	var element4 = document.createElement("input");

	element4.type = "text";

	element4.name = "task_name" + c;

	element4.id = "taskname" + c;

	if(recivedArray.project_name !=undefined){

		element4.value=recivedArray.task_name;
	}
	cell4.appendChild(element4);
	








		  cell5 = row.insertCell(4);

		   var element5 = document.createElement("input");

			element5.type = "date";

			element5.name = "start_date" + c;

			element5.id = "startdate" + c;
			
			element5.style.width="100px"
			if(recivedArray.end_date != undefined)

				{

			 element5.value =recivedArray.start_date; 

				}


			cell5.appendChild(element5);



			  cell6 = row.insertCell(5);

			   var element6 = document.createElement("input");

				element6.type = "date";

				element6.name = "end_date" + c;

				element6.id = "enddate" + c;

				 element6.width="150px";

				if(recivedArray.stat_us != undefined)
					{
				 element6.value =recivedArray.end_date; 
					}
				cell6.appendChild(element6);

				
				
				
			 	var cell7 = row.insertCell(6);

			 	var element7 = document.createElement("input");

			 	element7.type = "text";

			 	element7.name = "stat_us" + c;

			 	element7.id = "status" + c;

					element7.style.width="130px"

			 	if(recivedArray.project_name !=undefined){

			 		element7.value=recivedArray.stat_us;

			 	}
			 	cell7.appendChild(element7);

			
 



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
}


/*
 * function modifySave(){ document.getElementById("NewId").style.display="";
 * document.getElementById("Id").style.display="";
 * document.getElementById("ModifyId").style.display="";
 * document.getElementById("DeleteId").style.display=""; }
 * 
 * var checkbox = document.getElementById("checkbox");
 * 
 * checkbox.addEventListener("click", function() { if (checkbox.checked) {
 * checkbox.value = "Y"; } else { checkbox.value = "N"; } });
 */





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
