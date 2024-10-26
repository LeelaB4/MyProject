<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>


<%-- <%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%> --%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Customer</title>
<style type="text/css">
#f1 {
	font-size: 100%;
    position: absolute;
    visibility: visible;
    margin: 0px;
    padding: 0px;
    BACKGROUND: #fff;
    border: 0px;
    width: 100%;
    top: 22%;
    height: 100%;
    display: none;
  
}

.ChildWin {
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	font-size: 100%;
	margin: 0px;
	padding: 0px;
	position: absolute;
	visibility: visible;
	display: block;
	width: 650px;
	height: 330px;
	top: 28px;
	left: 4px;
}

.frames {
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	font-size: 100%;
	visibility: visible;
	margin: 0px;
	padding: 0px;
	BACKGROUND: #fff;
	border: 1px solid #557176;
	width: 650px;
	height: 330px;
}

#LovHTML {
	-webkit-locale: "en";
	margin: 0px;
	padding: 0px;
	OVERFLOW: hidden;
}

.BDYform {
	PADDING-BOTTOM: 0px;
	BORDER-RIGHT-WIDTH: 0px;
	MARGIN: 0px;
	PADDING-LEFT: 0px;
	PADDING-RIGHT: 0px;
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	BORDER-TOP-WIDTH: 0px;
	BORDER-BOTTOM-WIDTH: 0px;
	BORDER-LEFT-WIDTH: 0px;
	PADDING-TOP: 0px;
	font-size: 100%;
}

.WNDcontainer {
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	font-size: 100%;
	margin: 0px;
	padding: 0px;
	POSITION: absolute;
	TEXT-ALIGN: left;
	LEFT: 0px;
	width: 650px;
}

.WNDtitlebar {
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	font-size: 100%;
	TEXT-ALIGN: left;
	PADDING-BOTTOM: 0px;
	BORDER-RIGHT-STYLE: none;
	MARGIN: 0px;
	PADDING-LEFT: 0px;
	PADDING-RIGHT: 0px;
	BORDER-TOP-STYLE: none;
	CLEAR: both;
	BORDER-LEFT-STYLE: none;
	PADDING-TOP: 0px;
	background: #557176;
	border-bottom: 1px solid #7a9498;
	cursor: move;
	HEIGHT: 1.7em;
	position: relative;
}

.BTNicon {
	TEXT-ALIGN: left;
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	COLOR: #000;
	FONT-SIZE: 0.74em;
	FONT-WEIGHT: normal;
	BORDER-BOTTOM-STYLE: none;
	BORDER-RIGHT-STYLE: none;
	WIDTH: 22px;
	BORDER-TOP-STYLE: none;
	BACKGROUND: none transparent scroll repeat 0% 0%;
	HEIGHT: 22px;
	VERTICAL-ALIGN: middle;
	BORDER-LEFT-STYLE: none;
	CURSOR: default;
	padding: 0px !important;
	margin: 0px !important;
	display: none;
	float: left;
}

.ICOflexcube {
	TEXT-ALIGN: left;
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	COLOR: #000;
	FONT-SIZE: 0.74em;
	FONT-WEIGHT: normal;
	MARGIN: 0px;
	CURSOR: auto;
	float: left;
	BACKGROUND:
		url("data:image/gif;base64,R0lGODlhFgAWAPcAAC1tnIyNkvz9/hA0Zd7e4IWeu5m62BQwT7fL7ODm8Cc8ZxQvZgEvaxxRgIiu0/r7+6fD3srU6r7c6gM8df///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABUALAAAAAAWABYARwiBACsIHEiwoEGDEgRQWMjQwISHEwAcJChhIYEBASZqlAAxokaBFRmKtKigwMeTKAkCkJgSpEIKHCGyRPhyZEOIJg+GFEngQMaWFTACHXoSwMOZKSsi6Ih0ooQHIiEwdVpzpEOIDQrutMnQAYOcCLlSSCD05FYCC362lBChLNG3QwMCADs=")
		no-repeat;
	PADDING-BOTTOM: 0px;
	TEXT-INDENT: -5em;
	PADDING-LEFT: 0px;
	PADDING-RIGHT: 0px;
	PADDING-TOP: 0px;
	MARGIN-LEFT: 1px;
	width: 22px;
	height: 21px;
	display: none;
}

.WNDtitletxt {
	TEXT-ALIGN: left;
	cursor: move;
	padding: 0px;
	MARGIN: 0px;
	WIDTH: 70%;
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	WHITE-SPACE: nowrap;
	FLOAT: left;
	COLOR: #fff;
	OVERFLOW: hidden;
	PADDING-TOP: 0.3em;
	font-size: .9em;
	font-weight: normal;
	padding-left: 5px;
}

.WNDbuttons {
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	font-size: 100%;
	TEXT-ALIGN: left;
	cursor: move;
	PADDING-BOTTOM: 0px;
	MARGIN: 0px;
	PADDING-LEFT: 0px;
	WIDTH: 60px;
	PADDING-RIGHT: 0px;
	DISPLAY: block;
	FLOAT: right;
	HEIGHT: 1.5em;
	PADDING-TOP: 0px;
}

.WNDcls {
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	font-size: 100%;
	TEXT-ALIGN: left;
	margin: 0px;
	padding: 0px;
	background:
		url("data:image/gif;base64,R0lGODlhEQARAPAAAP///////yH5BAEAAAEALAAAAAARABEAQAIjjI+pB70PmUMNqJpw3NLqh33cSAbWBU6mulRsKl5qzLSlUgAAOw==")
		no-repeat 50% 50%;
	BORDER-BOTTOM-STYLE: none;
	BORDER-RIGHT-STYLE: none;
	DISPLAY: block;
	BACKGROUND-REPEAT: no-repeat;
	BORDER-TOP-STYLE: none;
	FLOAT: right;
	BORDER-LEFT-STYLE: none;
	WIDTH: 28px;
	HEIGHT: 26px;
}

.LBLinv {
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	TEXT-ALIGN: left;
	margin: 0px;
	padding: 0px;
	margin-left: -3px;
	POSITION: absolute;
	BACKGROUND: #fff;
	COLOR: #000;
	TOP: 0px;
	OPACITY: 0;
	HEIGHT: 0px;
	WIDTH: 0px;
	font-size: 0px;
	z-index: -1;
	LEFT: -300px;
}

.WNDmax {
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	font-size: 100%;
	TEXT-ALIGN: left;
	margin: 0px;
	padding: 0px;
	background:
		url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAJklEQVR42mP4//8/A6WYgZqGUAKGuyGkBOioIUPSkIFPbANfFAAACy/VVcwia0gAAAAASUVORK5CYII=")
		no-repeat 50% 50%;
	BORDER-BOTTOM-STYLE: none;
	BORDER-RIGHT-STYLE: none;
	DISPLAY: block;
	BACKGROUND-REPEAT: no-repeat;
	BORDER-TOP-STYLE: none;
	FLOAT: right;
	BORDER-LEFT-STYLE: none;
	WIDTH: 28px;
	HEIGHT: 26px;
}

.WNDcontentmodal {
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	font-size: 100%;
	TEXT-ALIGN: left;
	BORDER-BOTTOM-STYLE: none;
	PADDING-BOTTOM: 5px;
	BORDER-RIGHT-STYLE: none;
	MARGIN: 0px;
	PADDING-LEFT: 5px;
	PADDING-RIGHT: 15px;
	DISPLAY: block;
	BORDER-TOP-STYLE: none;
	FLOAT: left;
	CLEAR: both;
	BORDER-LEFT-STYLE: none;
	PADDING-TOP: 5px;
	WIDTH: 40em;
	background: #fff;
}

.DIVTwoColLyt {
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	font-size: 100%;
	TEXT-ALIGN: left;
	margin: 0px;
	padding: 0px;
}

.DIVTwoColSelectionContainer {
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	font-size: 100%;
	TEXT-ALIGN: left;
	margin: 0px;
	padding: 0px;
	DISPLAY: block;
	float: left;
	clear: both;
	width: 99.99%;
}

.BTNtext, .BTNtext:focus {
	background: #0f7ca8;
	color: #fff;
	padding: 3px 9px;
	margin-left: 0px;
	height: auto;
	cursor: pointer;
	border: #0f7ca8 1px solid;
	position: absolute;
	top: 47px;
	right: 287px;
}

.FSTdlg {
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	font-size: 100%;
	TEXT-ALIGN: left;
	BORDER-BOTTOM: #c5d8eb 1px solid;
	BORDER-LEFT: #c5d8eb 1px solid;
	PADDING-BOTTOM: 3px;
	PADDING-LEFT: 3px;
	PADDING-RIGHT: 3px;
	BORDER-TOP: #c5d8eb 1px solid;
	BORDER-RIGHT: #c5d8eb 1px solid;
	PADDING-TOP: 3px;
	BACKGROUND-COLOR: #FFF;
	margin: 4px;
	margin-bottom: 0px;
	TEXT-ALIGN: left;
	margin: 0px;
	padding: 0px;
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	FONT-WEIGHT: bold;
	color: #000;
}

legend {
	TEXT-ALIGN: left;
	margin: 0px;
	padding: 0px;
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	FONT-WEIGHT: bold;
	color: #000;
	font-size: .8em;
}

.DIVCOlumnSingle {
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	font-size: 100%;
	TEXT-ALIGN: left;
	margin: 0px;
	padding: 0px;
	float: left;
	margin-right: .25em;
	width: 49%;
}

.DIVText {
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	font-size: 100%;
	TEXT-ALIGN: left;
	margin: 0px;
	padding: 0px;
	BORDER-BOTTOM-STYLE: none;
	BORDER-RIGHT-STYLE: none;
	BORDER-TOP-STYLE: none;
	BORDER-LEFT-STYLE: none;
	margin-bottom: 3px;
	clear: left;
}

.LBLstd {
	margin: 0px;
	FONT-WEIGHT: normal;
	PADDING-BOTTOM: 0px;
	DISPLAY: block;
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	WHITE-SPACE: normal;
	padding-top: 4px;
	color: #000;
	font-size: .8em;
	float: left;
	clear: left;
	text-align: right;
	padding-left: 1px;
	padding-right: 12px;
	word-wrap: break-word;
	width: 40%;
}

.DIVtblbox1 .hh4 {
	POSITION: absolute;
	PADDING-BOTTOM: 0px;
	MARGIN-TOP: -3em;
	PADDING-LEFT: 3px;
	PADDING-RIGHT: 3px;
	CLEAR: both;
	PADDING-TOP: 0px;
	font-size: .8em
}

input {
	border: 1px solid #d9d9d9;
	background: none;
	color: #000;
	padding: 3px;
	BORDER-BOTTOM: #d7d7d7 1px solid;
	BORDER-LEFT: none;
	BORDER-RIGHT: none;
	BORDER-TOP: none;
	MARGIN: 0px;
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	VERTICAL-ALIGN: top;
	box-shadow: none;
	box-sizing: border-box;
	font-size: .8em;
	max-width: 246.746666666667px;
}

.TBLoneTH {
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	font-size: 100%;
	TEXT-ALIGN: left;
	BORDER-COLLAPSE: collapse;
	margin: 0px;
	BORDER-LEFT: #d1d1d1 1px solid;
	FONT-WEIGHT: normal;
	white-space: nowrap;
	background: #cfdfe2;
	border-right: 1px solid #a3bcc1;
	VERTICAL-ALIGN: top;
	border-top: #dee5f6 1px solid;
	color: #000;
	PADDING: 2px 6px;
	border-bottom: none;
}

.Astd {
	TEXT-ALIGN: left;
	BORDER-COLLAPSE: collapse;
	white-space: nowrap;
	margin: 0px;
	padding: 0px;
	TEXT-DECORATION: none;
	FONT-FAMILY: Arial, Helvetica, sans-serif;
	FONT-WEIGHT: normal;
	color: #000;
	font-size: .8em;
}

.SPNup {
	TEXT-ALIGN: left;
	BORDER-COLLAPSE: collapse;
	white-space: nowrap;
	FONT-FAMILY: Arial, Helvetica, sans-serif;
	FONT-WEIGHT: normal;
	color: #000;
	font-size: .8em;
	margin: 0px;
	padding: 0px;
	margin-left: -3px;
	BACKGROUND:
		url("data:image/gif;base64,R0lGODlhCQAMAPEAAP///wAAAP///wAAACH5BAEAAAIALAAAAAAJAAwAQQIXlI8CwYDbknqsRlWd3EsbmH0g4I0J6RUAOw==")
		no-repeat;
	VISIBILITY: hidden;
}

.THLOV {
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	font-size: 100%;
	BORDER-COLLAPSE: collapse;
	width: 1%;
	margin: 0px;
	text-align: left;
	border: none;
	BORDER-RIGHT: #f6ca1b 0px solid;
	BORDER-TOP: #f6ca1b 0px solid;
	BORDER-BOTTOM: #f6ca1b 0px solid;
	BORDER-LEFT: #f6ca1b 0px solid;
	FONT-WEIGHT: normal;
	background: #fff;
	padding: 5px;
	color: #000;
}

.LovAlert {
	float: left;
	width: 19px;
	height: 19px;
	background-repeat: no-repeat;
	background-image:
		url(data:image/gif;base64,R0lGODlhEwATAMQAANvb2+jkq+bjr+rq6urmp2ZjMCIhEBEQCODf1dzaxt7c0ffwiu7u7vj4+OLi4uzs7PLslURCIPrzg93d3dra2v/3edXV1QAAAP/////3eAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAATABMAAAWXICZizeNQVko5TzO+zAQEkFRJUJBMzIsNFsEiQyxmFgLLYMSwECrGaIVg6TUmCGjxwjVWBJMSYGg8XA7RBcCkiGYMF4M7cIK44fIoBCVxRy4RbhIpWkZ/gVIpfVEFFwWCFhR2jI5uew5tbpoZdA9jUYdpa1dZhoBeYC5NT5sZU1UjQEKaSEo+MTM1Nzk7PT4kJigqLC4jIQA7);
	background: #ffd944
		url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAw0lEQVR42mP4//8/w0BghqFosQEQC9DbYof/EDCfnhaDfPr+PwIU0Mvi9f8xgcJA+LiennGcALV0/0Ck6oSBSNUjrwBxgMYvXeO4HilF081iAbT8SzeLEwbK4vsDYXEClqKS5hYLYPEtXSzuR7JoP70sDkCyyICAxQpQMQNqWGwADeYEKB+fxeeh4v20KEBwWTwfKnaemMqDUothlsAsfU9MMFOzBUKSpeRaXIDF0vukWEquxQLQigKWtQpGGwKjFmPDAAxP3ho+Gko6AAAAAElFTkSuQmCC)
		no-repeat 50% 50%;
	background-size: 20px;
}

.LBLstdLOV {
	PADDING-BOTTOM: 0px;
	DISPLAY: block;
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	WHITE-SPACE: normal;
	COLOR: #000;
	PADDING-TOP: 2px;
	font-size: .8em;
}

.WNDtitletext {
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	TEXT-ALIGN: left;
	margin: 0px;
	padding: 0px;
	FONT-SIZE: 0.74em;
}

#frameCl {
	
}

#frameClose {
	margin-top: -170px;
	z-index: 10;
	margin-left: 502px;
	height: 20px;
	background: red;
	color: white;
	border: 2px black;
	border-radius: 5px;
}

input {
	border: 1px solid #d9d9d9;
	background: none;
	color: #000;
	padding: 3px;
	BORDER-BOTTOM: #d7d7d7 1px solid;
	BORDER-LEFT: none;
	BORDER-RIGHT: none;
	BORDER-TOP: none;
	MARGIN: 0px;
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	VERTICAL-ALIGN: top;
	box-shadow: none;
	box-sizing: border-box;
	font-size: .8em;
	max-width: 246.746666666667px;
}

FONT-FAMILY








:




 




Arial
,
Tahoma
,
Verdana
,
Helvetica
,
sans-serif








;
font-size








:




 




100%;
visibility








:




 




visible








;
margin








:




 




0
px








;
padding








:




 




0
px








;
BACKGROUND








:




 




#fff








;
border








:




 




1
px




 




solid




 




#557176








;
width








:




 




650
px








;
height








:




 




330
px








;
}
.ChildWin {
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	font-size: 100%;
	margin: 0px;
	padding: 0px;
	position: absolute;
	visibility: visible;
	display: block;
	width: 650px;
	height: 330px;
	top: 28px;
	left: 4px;
}

.frames {
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	font-size: 100%;
	visibility: visible;
	margin: 0px;
	padding: 0px;
	BACKGROUND: #fff;
	border: 1px solid #557176;
	width: 650px;
	height: 330px;
}

legend {
	TEXT-ALIGN: left;
	margin: 0px;
	padding: 0px;
	FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	FONT-WEIGHT: solid;
	color: #998;
	font-size: 0.9em;
}

/* table {
	border-collapse: collapse;
	text-indent: initial;
	border-spacing: 2px;
}

td {
	border-spacing: 2px;
	border: white;
	border-bottom: 1px solid;
	width: 1px;
}

td:hover {
	background-color: lightgrey;
}

tr {
	display: table-row;
	vertical-align: inherit;
	border-color: inherit;
}

th {
	border-right: black;
	color: gray;
	width: 1px;
} */


table {
        overflow-y: auto; /* make the table scrollable if height is more than 200 px  */
        height: 200px; /* gives an initial height of 200px to the table */
      }
      table thead th {
        position: sticky; /* make the table heads sticky */
        top: 0px; /* table head will be placed from the top of the table and sticks to it */
      }
      table {
        border-collapse: collapse; /* make the table borders collapse to each other */
        width: 100%;
        height: auto;
      }
      th,
      td {
        padding: 8px 16px;
        border: 1px solid #ccc;
      }
      td:hover {
	background-color: lightgrey;
}
      th {
        background: #eee;
      }
      
/* #Role_master_div_id{
display:none;
}
#LovQuery{
display:none;
} */
</style>
</head>
<body>




	<%@page  import="com.fcub.lov.*"%>
	<div id="Role_master_div_id">
		<%
			out.println(request.getAttribute("dbData"));
		%>
	</div>





	<div class="card" id="div1">

		<div id="DataSend"></div>


		

			<div id="table_css">
				<table class="table table-hover table-striped" id="dataTable"
					 border="1">
					<thead id="thead_id">
					<thead id="thead_id">
						<!-- <th><legend>Role Id</legend></th>
							<th><legend>Role Desc</legend></th> -->
					</thead>
					<!-- <TR id="InputBox">

							<TD><INPUT type="text" name="role_id0" onclick="a()" /></TD>
							<TD><INPUT type="text" name="role_desc0" /></TD>
						</TR> -->

					<input type="hidden" name="countRow1" id="countRow1">
				</TABLE>
			
			<!--  <input type="hidden" value="[return value from product function]"> -->




			</div>



			<script type="text/javascript">
	
	
	
	
	var frameClElem=document.getElementById("frameCl");
	
	function frameinWin(){
		
		
		DIVWNDContainerElem.style.display="";
		
	}
	
	function closeFrame(){
		
		document.getElementById('dataTable').style.display="none";
	
		 DIVWNDContainerElem.style.display="none";
	}
	
	
	function setPages(){
		
		document.getElementById('dataTable').style.display="";
	}

	
	
	
	
	function getLovResults(){
		var dataSend=document.getElementById("1");
		var f1Elem=document.getElementById("f1");
		/* f1Elem.src="http://localhost:8080/LOV/LovServlet1?"+dataSend.value; */
	}
	
	
	
	function a(){
		console.log("called function a");
	}
	

	var Role_masterElem=document.getElementById("Role_master_div_id");
	var roleDetails=JSON.parse(Role_masterElem.innerText);
	console.log("JSON:::"+roleDetails.ROLE_DESC);
	let objectCount=0;
	
	
	
	let nameArray = [];
	for(let [key,value] of Object.entries(roleDetails)){
		console.log("Index::",key+" : "+value);
		
		let objectRole={
				id:key,
				value:value
		};
		nameArray.push(objectRole);
	}
	/* roleDetails.map(function(value,key) {
	
		if (index%2 !== 1 ) {
			let objectRole={
					role_id:each,
					role_desc:roleDetails[index+1]
			};
			nameArray.push(objectRole);
			console.log("In Side if::",objectRole,roleDetails[index+1]);
		}
		
		
	}); */
	let rowObjectData;
	console.log(nameArray);		
	let sendArray=["mahesh"]; 
	console.log("nameArray",nameArray);
	console.log("sendArray",sendArray);
	
	Role_masterElem.style.display="none";
	var c = 0; 	
	document.getElementById('countRow1').value =0;
    var t=0;
    var url = origin+'/LOV/LOV.jsp';
    var theadidElem = document.getElementById("thead_id");
	
		var table = document.getElementById("dataTable");
		
		var columnCount=Object.keys(roleDetails).length;
		console.log("columnCount::",columnCount);
	
		let columnArray=[];
		for(let j=0;j<columnCount;j++){
			var tableHead= document.createElement("th");
			tableHead.innerText=nameArray[j]["id"];
			theadidElem.appendChild(tableHead);
			columnArray.push(nameArray[j]["id"]);
		}
		
		
		var rowCount = table.rows.length;
		var row = table.insertRow(rowCount);
		console.log("rows::::",table.rows+"  ",rowCount);

		
		console.log("tableHead:::",tableHead);
		
		if(Array.isArray(nameArray[0]["value"])){
			
			let noOfRows =nameArray[0]["value"].length;
			console.log("noOfRows",noOfRows);
			var InputBoxEle=document.getElementById("InputBox");
			let dataArrayRow=[];
			for(var r=0;r<noOfRows;r++)
				{
				var row1 = table.insertRow(r);
			
				let dataArrayRow=[];
				for(let c=0;c<columnCount;c++){
					dataArrayRow.push(nameArray[c]["value"][r]);
					var element1 =row1.insertCell(c);
				element1.innerHTML=nameArray[c]["value"][r];
				element1.id="input_"+r;
				}
				
				console.log("dataArrayRow::",dataArrayRow);
				
				row1.addEventListener('click', (event) => {
					
					let currentRow	= Array.from(event.currentTarget.children);
					
					console.log("event.target::",currentRow);
					let selectedData=[];
					
					currentRow.forEach(function (each,index){
						
						selectedData.push(each.innerText);
						
					});
					
					 rowObjectData={};
					selectedData.forEach(function (each,index){
						 rowObjectData[columnArray[index]]=each;
		                console.log("Data   ::",each,columnArray[index],columnArray);
					});
					console.log("selectedData::",selectedData,rowObjectData);
										
						
					parent.parent.postMessage(selectedData, "*"); 
						 console.log("rowObjectData::",rowObjectData);
						
					          /*  parent.window.close();     */
					       
					    
					});
				
				}
			
			
		}
		
		
		
		var recivedArray=[];
	
	
	
	</script>
</body>
</html>