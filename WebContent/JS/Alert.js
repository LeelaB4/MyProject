function clearData(){
	 console.log("calling functon clearData::");
	 
	 if(document.getElementById("invdcred").innerText === "Invalid User"){
		 parent.resetUserData();
	 }
	 else if(document.getElementById("invdcred").innerText === "Invalid Password"){
		 parent.resetPassData();
	 }
}
parent.loginInformation();



document.getElementById('alertBtn').addEventListener('keypress', function(event) {
	  if (event.key === "Enter") {
		  clearData();parent.closeFrame();window.location.reload();
	  }
	});