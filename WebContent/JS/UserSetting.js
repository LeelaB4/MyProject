// date function

function selectorDate() {
	var mylist = document.getElementById("myList");
	document.getElementById("dateFormat").value = mylist.options[mylist.selectedIndex].text;
	parent.document.getElementById('dateFormat').value=mylist.options[mylist.selectedIndex].text;
	}
var  date;
var m;
function dateFormat(input_D, format_D) {
    // input date parsed
     date = new Date(input_D);

    //extracting parts of date string
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();    

   
     m = ["January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"];
      var monString=m[date.getMonth() + 1]+"";
        //to replace month

        if(format_D.indexOf("MM")>-1)
        {
            format_D = format_D.replace("MM", month.toString().padStart(2,"0"));
        }
        else if(format_D.indexOf("MON")>-1)
        {
            format_D = format_D.replace("MON", monString);
        }
    
            
     //to replace year
    if (format_D.indexOf("YYYY") > -1) {
        format_D = format_D.replace("YYYY", year.toString());
    } else if (format_D.indexOf("YY") > -1) {
        format_D = format_D.replace("YY", year.toString().substr(2,2));
    }

    if(format_D.indexOf("MON")>-1)
    {
     console.log('inside MON:::');
    }

    //to replace day
    format_D = format_D.replace("DD", day.toString().padStart(2,"0"));
    
    return format_D;
}

function saveDateFormat(){
	
	
	fetch(origin+"/"+parent.getProjectName()+"/LoginServlet?action=DateFormatChange&userid="+parent.document.getElementById('user_id').innerText.trim()+"&dateFormat="+parent.document.getElementById("dateFormat").value, {
	     
	    // Adding method type
	    method: "POST",
		    // Adding headers to the request
	    headers: {
	    	 'Accept': 'application/json',
	         'Content-Type': 'application/json'
	    },})
	 // Converting to JSON
	.then(data => data).then(data => {
		console.log(data);
	});

	
	
	
}
