var path=window.location.pathname;
    var projectName=path.split('/');
    console.log(projectName[1]);
		var iframe = document.getElementById("loginFrame");
		iframe.style.display = "none";
		
		function validateData() {
			let useridElem = document.getElementById("userid").value.toUpperCase();
			document.getElementById("userid").value=document.getElementById("userid").value.toUpperCase();
			let userpassElem = document.getElementById("userpass").value;
			
			if(useridElem === "" || userpassElem === ""){

			if (useridElem === null || useridElem === "")

			{
				iframe.contentDocument.getElementById("errMsg").innerText = "User Id Cannot be Blank";
				iframe.style.display = "block";
				
			}

			else if (userpassElem === null || userpassElem === "") {

				iframe.contentDocument.getElementById("errMsg").innerText = "Password Can Not Be Blank";
				iframe.style.display = "block";
				
			} 
			}
			else{
				/* document.getElementById("loginForm").submit(); */
				LoginPost(); 
				
			}

		}

		function closeFrame() {
			document.getElementById("loginFrame").style.display = "none";
		}
		
		
	function LoginPost(){
		
		var responseClone; // 1

		/*
		 * fetch(origin+"/Flexcube_Login_Page/LoginServlet?userid="+document.getElementById("userid").value.toUpperCase()+"&userpass="+document.getElementById("userpass").value, { //
		 * Adding method type method: "POST",
		 * 
		 *  // Adding headers to the request headers: { 'Accept':
		 * 'application/json', 'Content-Type': 'application/json' } })
		 * .then(function (response) { responseClone = response.clone(); // 2
		 * return response.json(); }) .then(function (data) { // Do something
		 * with data }, function (rejectionReason) { // 3 console.log('Error
		 * parsing JSON from response:', rejectionReason, responseClone); // 4
		 * responseClone.text() // 5 .then(function (bodyText) {
		 * 
		 * 
		 * console.log("Invalid Credential");// 6 }); });
		 */
    	
			
		
		fetch(origin+"/"+projectName[1]+"/LoginServlet?action=LoginDetails&userid="+document.getElementById("userid").value.toUpperCase()+"&userpass="+document.getElementById("userpass").value, {
		     
		    // Adding method type
		    method: "POST",
			    // Adding headers to the request
		    headers: {
		    	 'Accept': 'application/json',
		         'Content-Type': 'application/json'
		    },
		    
		    // Adding body or contents to send
		  /*
			 * body: JSON.stringify({ "userid": "mahesh", "userpass": "ppp" })
			 */
		})
		 
		// Converting to JSON
		.then(data => data.json()).then(data => {
           console.log(data);
           var DataErr="";
		  for(const [key,value] of Object.entries(data)){
			/* DataErr=DataErr+" "+value; */
		     console.log("inside the loop::");
		   if(key === "status" && value === "ok")
       	  {
			   document.getElementById("action_id").value="Login";
			   document.getElementById("loginForm").submit();
			  
			  
       	  }
		   
		   else if(key === "status" && value === "Invalid_Pass"){   
			     console.log("inside invalid password");
	        	 iframe.contentDocument.getElementById("invdcred").innerText = "Invalid Password";
	 			iframe.style.display = "block";
	 			break;
	         }
		   else if(key === "DESC")
       	 {
			  console.log("inside else if ::"+"key:"+key+"value:"+value);
			   
			   /*
				 * iframe.contentDocument.getElementById("invdcred").innerText =
				 * DataErr ;
				 */
			   DataErr=value+"       "+DataErr;
			   console.log("DESC"+DataErr);
			/* iframe.style.display = "block"; */
			   iframe.contentDocument.getElementById("invdcred").innerText = value;
			   
				iframe.style.display = "block";
				
       	  
         }
		   else if(key === "ERROR")
	       	 {
				  console.log("inside else if ::"+"key:"+key+"value:"+value);
				  DataErr=DataErr+"       "+value;
				  console.log("ERROR"+DataErr)
				  iframe.contentDocument.getElementById("errMsg").innerText=value;
				  
				  iframe.contentDocument.getElementById("errMsg").style.left="438px";
				 
	       	  
	         }
		  
        
            }
		
		}
		
		
		
		
		)
		 .catch(err => {
			/*
			 * iframe.contentDocument.getElementById("invdcred").innerText =
			 * "Check Internet Connection"; iframe.style.display = "block";
			 */
			 document.getElementById("action_id").value="Login";
			 console.log("err:::",err);
			 document.getElementById("loginForm").submit();
			 
    
}); 
	
	}	
	
	
function resetUserData(){
	document.getElementById("userid").value="";
}	
function resetPassData(){
	
	document.getElementById("userpass").value="";
}	

function lableuser(){
	
	console.log("calling function lableuser()");
	document.querySelector('.overlabel-apply').style.setProperty('left','2px');
	document.querySelector('.overlabel-apply').style.setProperty('top','-16px');
	
	
}

function lablepass(){
	
	document.querySelector('.overlabel-apply1').style.setProperty('left','2px');
	document.querySelector('.overlabel-apply1').style.setProperty('top','-16px');
}



function scrollbackuser(){
	 document.querySelector('.overlabel-apply').style.setProperty('left','53px');
	  	document.querySelector('.overlabel-apply').style.setProperty('top','17px');
}

function scrollbackpass(){
	 document.querySelector('.overlabel-apply1').style.setProperty('left','53px');
	  	document.querySelector('.overlabel-apply1').style.setProperty('top','17px');
}



var bodyidElem=document.getElementById('bodyid');
bodyidElem.addEventListener("keypress", function(event) {
	  if (event.key === "Enter") {
	    event.preventDefault();
	    document.getElementById("signBtn").click();
	  }
	});


userid.addEventListener('keyup', function(event) {
	  if (event.keyCode == 9) {
		  lableuser();
	  }
	});

userpass.addEventListener('keyup', function(event) {
	  if (event.keyCode == 9) {
		  lablepass();
	  }
	});
loginFrame.contentDocument.getElementById('alertBtn').addEventListener('keypress', function(event) {
	  if (event.key === "Enter") {
		  console.log("oginFrame.contentDocument.getElementById('alertBtn')::");
		  clearData();closeFrame();window.location.reload();
	  }
	});
