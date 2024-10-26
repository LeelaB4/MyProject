


/*
document.getElementById("buttonExec").disabled = true;
document.getElementById("buttonExec").style.display="none"; 
document.getElementById("buttonSave").disabled = true;
document.getElementById("buttonSave").style.display="none"; 
document.getElementById("modifysave").disabled = true;
document.getElementById("modifysave").style.display="none"; */



function createBTN(){

	// modifysaveElem.style.display="none";
   
	// fetchbtnElem.style.display="none";
    // document.getElementById("buttonExec").disabled = none;
	 document.getElementById("buttonExec").disabled = false;
	document.getElementById("imgLov").style.display="";
	document.getElementById("buttonExec").style.display="block"; 
	document.getElementById("buttonSave").style.display="none"; 
	document.getElementById("modifysave").style.display="none"; 
	document.getElementById("ModifyId").disabled = false;
	 document.getElementById("DeleteId").disabled = true;
	 document.getElementById("CloseId").disabled = true;
	 document.getElementById("ApprovalId").disabled = true;
	 document.getElementById("NewId").disabled = false;
	 }

     function createNew(){
     document.getElementById("modifysave").style.display="none"; 
	 document.getElementById("buttonExec").style.display="none"; 
	 document.getElementById("buttonSave").style.display="block";
	 document.getElementById("ModifyId").disabled = true;
	 document.getElementById("ModifyId").style.display="none"; 
	 document.getElementById("DeleteId").disabled = true;
	 document.getElementById("DeleteId").style.display="none"; 
	 document.getElementById("CloseId").disabled = true;
	 document.getElementById("CloseId").style.display="none"; 
	 document.getElementById("ApprovalId").disabled = true;
	 document.getElementById("ApprovalId").style.display="none"; 
	}
     
    function resetValues(){
    
        document.getElementById("cust_name").value="";
         document.getElementById("custid").value="";
         document.getElementById("cust_dob").value="";
         document.getElementById("cust_salary").value="";
         document.getElementById("cust_dept").value="";
         document.getElementById("cust_maker").value="";
         document.getElementById("cust_maker_dt_stamp").value="";
         document.getElementById("cust_Approver").value="";
         document.getElementById("cust_Aprovertime").value="";
         document.getElementById("cust_Status").value="";
         document.getElementById("cust_Approver_statement").value="";
         
    }
    function readOnlyf(){
        document.getElementById('custid').readOnly = false;
        document.getElementById('cust_name').readOnly = false;
        document.getElementById('cust_dob').readOnly = false;
        document.getElementById('cust_salary').readOnly = false;
        document.getElementById('cust_dept').readOnly = false;
        }
    
        function getDataFooter(){
            // document.getElementById("cust_maker").value=parent.document.getElementById("user").innerText.trim();
            // document.getElementById("cust_maker_dt_stamp").value=currentDate;
            document.getElementById("cust_Status").value="O";
            document.getElementById("cust_Approver_statement").value="U";
            // document.getElementById("cust_Once_Auth").value="N";            
        }
        
function mydate1() {
    d = new Date(document.getElementById("dt").value);
    dt = d.getDate();
    mn = d.getMonth();
    mn++;
    yy = d.getFullYear();
    document.getElementById("cust_dob").value = dt + "-" + mn + "-" + yy  
  }

        function modifybtnEnable(){
            document.getElementById("modifysave").style.display="block";

            // modifysaveElem.style.display="block";
             document.getElementById("buttonSave").style.display="none";
             document.getElementById("buttonExec").style.display="none";
        }
            function validateDelet(){
            var cust_Ap_st=document.getElementById("cust_Approver_statement").value;
            console.log("cust_Ap_st:",cust_Ap_st);
            var cust_Once_A=document.getElementById("cust_Once_Auth").value;
            console.log("cust_Once_A:",cust_Once_A);
            var userLogIn=parent.document.getElementById("user").innerText.trim();
            console.log("userLogIn:",userLogIn);
            
            var cust_mak=document.getElementById("cust_maker").value.trim();
            console.log("cust_mak:",cust_mak);
        
            var response = confirm("Are you sure you want to delete ?");
            console.log("response"+response);
           if (response == true) {
               //document.write("Delete Sucessfull");
               console.log("all condition is :::",cust_Ap_st === "U" &&  cust_Once_A === "N" && cust_mak === userLogIn)
               
               if(cust_Ap_st === "U" &&  cust_Once_A === "N" && cust_mak === userLogIn)
                {
                deleteData();
                alert("Delete Sucessfull");
                
                }
            else{
                alert("Cannot delete ");
                
            }
               
           }
        
        }
        function CloseAcc(){
	
            if(document.getElementById("cust_Status").value === "O" ||  document.getElementById("cust_Status").value === "H" || document.getElementById("cust_Status").value !== "C")
                {
            let cust_StatusE=document.getElementById("cust_Status").value="C";
            let custid=document.getElementById("custid").value;
            
            fetch(origin+"/Dynamic_Web_Menu_Page_new11/UserMaintenanceClose?custid="+custid+"&"+"cust_Status="+cust_StatusE);
            alert("Sucessfully Closed");
                }
            else{
                alert("Already Closed");
            }
        }
        
        function approveData(){
	
             if(document.getElementById("cust_maker").value !== parent.document.getElementById("user").innerText.trim() && document.getElementById("cust_Approver_statement").value === "U" && document.getElementById("cust_Once_Auth").value === "N"){
             let custId=document.getElementById("custid").value;
             document.getElementById("cust_Approver").value=parent.document.getElementById("user").innerText.trim();
             let cust_Once_AuthEle=document.getElementById("cust_Once_Auth").value="Y";
             console.log("cust_Once_AuthEle::"+cust_Once_AuthEle);
             let cust_ap_stmtElem=document.getElementById("cust_Approver_statement").value="A";
             console.log("cust_ap_stmtElem::"+cust_ap_stmtElem);
             let cust_StatusElem=document.getElementById("cust_Status").value;
             console.log("cust_StatusElem::"+cust_StatusElem);
             document.getElementById("cust_Aprovertime").value=currentDate;
             document.getElementById("cust_Once_Auth1").checked=true;
             
             
             
             fetch(origin+"/Dynamic_Web_Menu_Page_new11/UserMaintenanceApprove?custid="+custId+"&"+"cust_Once_Auth="
                     +cust_Once_AuthEle+"&"+"cust_Approver_statement="+cust_ap_stmtElem+"&"+"cust_Approver="+
                     parent.document.getElementById("user").innerText.trim());
             alert("Approved Sucess");
            }
            else{
                alert("Already Approved");
            }
            
            if(document.getElementById("cust_Approver_statement").value === "A" && document.getElementById("cust_Status").value === "O" && document.getElementById("cust_Once_Auth").value ==="Y"){
        
            document.getElementById("CloseId").disabled = false;
            }
        }
        
function getCustomerDetails (method) {
 	console.log(method)
/*  await swal("Wait", "Please wait while getting customer details", "success", {
       button: "Allright",
    });  */
 let custId = document.getElementById("custid").value;
 console.log("+++", custId);
}

function CustPost(method){
	let custId = document.getElementById("custid").value;
	let cust_name = document.getElementById("cust_name").value;
	let cust_dob = document.getElementById("cust_dob").value;
	let cust_salary = document.getElementById("cust_salary").value;
	let cust_dept = document.getElementById("cust_dept").value;
	/* let cust_maker = document.getElementById("cust_maker").value; */
	// let cust_maker = parent.document.getElementById("user").innerText;
	let cust_maker_dt_stamp = document.getElementById("cust_maker_dt_stamp").value;
	let cust_Approver = document.getElementById("cust_Approver").value;
	let cust_Aprovertime = document.getElementById("cust_Aprovertime").value;
	let cust_Status = document.getElementById("cust_Status").value;
	let cust_Approver_statement = document.getElementById("cust_Approver_statement").value;
	// let cust_Once_Auth=document.getElementById("cust_Once_Auth").value;
	
	if(method === "UserMaintenancePost")
		{
	
//  fetch(origin+"/Dynamic_Web_Menu_Page_new11/UserMaintenancePost?custid="+custId+"&"+"cust_name="+cust_name+"&"+
// 		 "cust_dob="+cust_dob+"&"+"cust_salary="+cust_salary+"&"+"cust_dept="+cust_dept+"&"+"cust_maker="+cust_maker+"&"+
// 		 "cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
// 		 "&"+"cust_Status="+cust_Status+"&"+"cust_Approver_statement="+cust_Approver_statement+"&"+"cust_Once_Auth="+cust_Once_Auth);
         if(custId === "" || custId === null)
        	 {
        	 alert("there is no data that you have entered");
        	 }
         else{
           alert("Sucessfully Save");
         }
		}
	
	
	if(document.getElementById("cust_maker").value.trim() === parent.document.getElementById("user").innerText.trim()){
	if(method === "UserMaintenanceUpdate")
		{
		
		 fetch(origin+"/Dynamic_Web_Menu_Page_new11/UserMaintenanceUpdate?custid="+custId+"&"+"cust_name="+cust_name+"&"+
				 "cust_dob="+cust_dob+"&"+"cust_salary="+cust_salary+"&"+"cust_dept="+cust_dept+"&"+"cust_maker="+cust_maker+"&"+
				 "cust_maker_dt_stamp="+cust_maker_dt_stamp+"&"+"cust_Approver="+cust_Approver+"&"+"cust_Aprovertime="+cust_Aprovertime+
				 "&"+"cust_Status="+cust_Status+"&"+"cust_Approver_statement="+cust_Approver_statement+"&"+"cust_Once_Auth="+cust_Once_Auth);
		 
		  if(custId === "" || custId === null)
     	 {
     	   alert("there is no data that you have entered");
     	 }
      else{
        alert("Sucessfully Modify");
      }
			}
	}
	else{
		alert("Cannot modify");
	}
}