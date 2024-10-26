<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>



<%-- 
 <%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>  --%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Customer</title>
<style type="text/css">
#f1 {
	height: auto;
	width: auto;
	border: 0px FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	font-size: 100%;
	visibility: visible;
	margin: 0px;
	padding: 0px;
	BACKGROUND: #fff;
	border: 0px;
	width: 97%;
	height: 59%;
	display: none;
	position: absolute;
	top: 32%;
}

#dbData {
	height: auto;
	width: auto;
	border: 0px FONT-FAMILY: Arial, Tahoma, Verdana, Helvetica, sans-serif;
	font-size: 100%;
	visibility: visible;
	margin: 0px;
	padding: 0px;
	BACKGROUND: #fff;
	border: 1px solid #557176;
	width: 650px;
	height: 330px;
	scroll: none;
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
	display: block;
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
	right: 279px;
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
	width: 71%;
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
	position: absolute;
	left: 119px;
	top: 46px;
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

table {
	border-collapse: collapse;
	text-indent: initial;
	border-spacing: 2px;
}

td {
	border-spacing: 2px;
	border: white;
	border-bottom: 1px solid;
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
}

#Role_master_div_id {
	display: none;
}

#LovQuery {
	display: none;
}
</style>
</head>
<body>




	<%@page  import="com.fcub.lov.*"%>
	<div id="Role_master_div_id">
		<%
			out.println(request.getAttribute("dbData"));
		%>
	</div>

	<div id="tablenameDb">

		<%
			
		%>
	</div>


	<div id="LovQuery">

		<%
			out.println(request.getAttribute("LovQuery"));
		%>
	</div>










	<!-- Customer Role Id :
	<input type="text" id="custid" /> -->
	<!-- <img onclick="frameinWin();"
		src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/800px-Search_Icon.svg.png"
		width="20" height="20" /> -->

	<div class="WNDcontainer" id="DIVWNDContainer" style="width: auto;">
		<div class="WNDtitlebar" id="WNDtitlebar"
			style="width: 71%; top: -8px;">
			<b class="BTNicon"><span class="ICOflexcube"></span></b>
			<h1 class="WNDtitletxt" id="WNDtitletxt">
				List of Values
				<%
				
			%>
			</h1>
			<div class="WNDbuttons">
				<a class="WNDcls" href="#" id="WNDbuttons" title="Close"
					onclick="parent.closeFrame()"> <span class="LBLinv">Close</span>
				</a> <a class="WNDmax" href="#" id="WNDmaxBTN" title="Maximize"
					onclick="fnMaximizeLov()"> <span class="LBLinv">Maximize</span>
				</a>
				<!-- BUG 19619967 fixes end -->
			</div>
		</div>
		<div class="WNDcontentmodal lovwin" id="DIVScrContainer">
			<input type="Hidden" name="X-CSRFTOKEN"
				value="5AEC415DC4A7438EDEA1B9861F44D7A74C0053081EE05E897821FFC6EBE1E5D6">
			<input type="Hidden" name="LOVCALL" id="LOVCALL" value="I">
			<!-- External Lov Changes -->
			<div class="DIVTwoColLyt" id="LOVCharInfo" style="display: none;">
				<!-- LOV index field change start -->
				<div class="DIVTwoColSectionContainer" id="divLovPgHead"
					style="width: 99.99%;">
					<!--change for bug id : 19619967 -->


				</div>
			</div>
			<!-- LOV index field change end -->

			<div class="DIVTwoColLyt" id="LOVPageHead">
				<div class="DIVTwoColSectionContainer" style="width: 99.99%">
					<fieldset class="FSTdlg">

						<legend>Case Sensitive</legend>

						<div class="DIVColumnSingle" style="width: 49%">
							<div id="fields" class="DIVText">
								<div id="field">

									<label class="LBLstd" id="roleid111" for="1"> </label> <input
										id="searchLov" class="TXTstd" name="-1" id="-1" type="hidden"
										value="%">
								</div>
								<span class="DIVText"> <label class="LBLstd" for="Fetch"></label>
									<button class="BTNtext" onmouseover="this.className='BTNtext'"
										onfocus="this.className='BTNtext'"
										onmouseout="this.className='BTNtext'"
										onblur="this.className='BTNtext'"
										onclick="setPages();getLovResults();lovGet();filterData()">Fetch</button>

								</span>

							</div>


						</div>


						<legend>Search Result</legend>
				</div>
			</div>


			</fieldset>

		</div>
	</div>







	<div class="card" id="div1">

		<div id="DataSend"></div>


		<table class="table table-hover table-striped">

			<div id="table_css">
				<table class="table table-hover table-striped" id="dataTable"
					style="position: absolute; top: 99px;" width="450px" border="1">
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
			</div>
			<!--  <input type="hidden" value="[return value from product function]"> -->




			</div>

			<iframe src="" id="f1"> </iframe>



			<script type="text/javascript">
	
			var tablenameDbElem=document.getElementById("tablenameDb");
			console.log("tablenameDbElem:::",tablenameDbElem.innerText);
			tablenameDbElem.style.display="none";
	
	
	document.getElementById('dataTable').style.display="none";
	
	var DIVWNDContainerElem=document.getElementById("DIVWNDContainer");
	DIVWNDContainerElem.style.display="";
	var frameClElem=document.getElementById("frameCl");
	
	function frameinWin(){
		
		
		DIVWNDContainerElem.style.display="";
		
		
	}
	
	function closeFrame(){
		
		
		document.getElementById('WNDbuttons').style.display="none";
		
		document.getElementById('dataTable').style.display="none";
	  /* document.getElementById('f1').style.display="none"; */
		 DIVWNDContainerElem.style.display="none";
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
				
            /*        row1.addEventListener('click', (event) => {
					
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
										
						
						 parent.postMessage(rowObjectData, "*"); 
						 console.log("rowObjectData::",rowObjectData);
						
					        
					       
					    
					}); */
                   
				
				}
			
			
		}
		
		/* var roleid111Elem = document.getElementById('roleid111'); */
		/* roleid111Elem.innerText=nameArray[0].id; */
		/* var fieldsElem = document.getElementById("fields");
		
		 for(var z=0;z<2;z++)
			{
			var label = document.createElement("label");
			  label.innerTEXT=nameArray[z].id+"mahesh111111111";
			  document.body.appendChild(label);
			} */
		
		var recivedArray=[];
	/* 	 window.addEventListener("message", function(message) {
			 console.log("Message received from the parent: " + message.data); // Message received from parent
		        recivedArray[0]= message.data.role_id;
		       console.log("Message received from the parent: " + message.data);
		       
	
		       
		         document.getElementById("custid").value = message.data.ROLE_ID; 
		         var dta111=nameArray[1].id; 
		        var dta111=String(nameArray[1].id);
		       var mahesh11="ROLE_ID";
		       		        
		        console.log(":"+dta111+":"+mahesh11)
		        
		         console.log("dta111::",dta111)
		         console.log("Message received from the parent:",message.data.ROLE_ID);
		         document.getElementById("custid").value = message.data.ROLE_ID;
		         
		         closeFrame(); 
		        document.getElementById("inputtd10").value = message.data.role_desc;   
		      }); 
		 */
		
		 function setPages(){
			
			
			document.getElementById('dataTable').style.display="none";
		}

		
		
		
		
		function getLovResults(){
			
			document.getElementById("f1").style.display="block";
			
			var dataSend=document.getElementById("1");
			
			/* var tableDataE=tablenameDbElem.innerText+"/"+nameArray[1].id+"/"+dataSend.value;
			  console.log(tableDataE)
		     var ifrm = document.createElement("iframe");
			  var urlDb="http://localhost:8080/LOV/LovServlet2?"+tableDataE;
		        ifrm.setAttribute("src", urlDb);
		     
		        ifrm.id="frameDBdata";
		         document.body.appendChild(ifrm);  */
			
			
			
			var f1Elem=document.getElementById("f1");
			  
			
			/* f1Elem.src="http://localhost:8080/LOV/LovServlet1?"+dataSend.value; */
			  
		}
		
		
		
		
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
								
				
				 parent.postMessage(rowObjectData, "*"); 
				 console.log("rowObjectData::",rowObjectData);
				
			          /*  parent.window.close();     */
			       
			    
			});
	    
	    let dropDwnSelectElem=document.createElement('select');
        
	    for(var i=0;i<Object.keys(JSON.parse(Role_master_div_id.innerText.trim())).length;i++) {
            let labelfield = document.createElement("label");
            //let divSearch=document.createElement('div');
            
            
            if(i==0)
            	{
            	labelfield.style="margin-left: -96px;"
            	labelfield.id="searchElem";
            	
            	
            	dropDwnSelectElem.id="myList";
            	dropDwnSelectElem.style="margin-left: -94px;";
            	dropDwnSelectElem.setAttribute('onchange','selectorSearchList()');
            	
            	
            	}
           //labelfield.innerHTML=nameArray[i].id;
           
           labelfield.class='LBLstd';
           
           //divSearch.appendChild(dropDwnOptionsElem);
            //document.getElementById('fields').appendChild(labelfield);
          let dropDwnOptionsElem=document.createElement('option');
             dropDwnOptionsElem.innerHTML=nameArray[i].id;
            dropDwnSelectElem.appendChild(dropDwnOptionsElem)
             
        	
            
            console.log("dropDwnOptionsElem::"+nameArray[i].id);
            
        	//labelfield.appendChild(dropDwnOptionsElem);
        	if(i==0)
            	{
                var textfield = document.createElement("input");
                textfield.type = "text";
               /*  textfield.value = "%"; */
                textfield.class='TXTstd';
                textfield.id=i;
                /* textfield.onClick="setPages();getLovResults();lovGet();filterData()"; */
                textfield.style="margin-top: 0px;margin-inline: 0px;margin-bottom: 0px;";
     
                document.getElementById('fields').appendChild(textfield);
               
                //document.getElementById('fields').appendChild(divSearch);
            	}
                
            }
	    document.getElementById('fields').appendChild(dropDwnSelectElem);
	    document.getElementById("LovQuery").style.display="none";
	    var colFieldData=[];
	    function lovGet(){
	    	colFieldData=[];
	    	  var ifrm = document.getElementById("f1");
	    	  
	    	  
	    	  for(var m=0;m<1;m++)
	      	{
	  	    	var idinput=m.toString();
	  	          
	  	    	colFieldData.push(document.getElementById(idinput).value);
	  	    	console.log("colFieldData::::",idinput,colFieldData)
	      	     
	      	     
	      	     var ifrmmmm = document.getElementById("f1");
	  	    	
	      	     
	      	     
	      	}
	    	  
	    	  
	    	/*    String.prototype.insert = function(index, string) {
	    		   if (index > 0)
	    		   {
	    		     return this.substring(0, index) + string + this.substring(index, this.length);
	    		   }
	
	    		   return string + this;
	    		 };
	    	   */
	    	   
	    	   
	    	   String.prototype.splice = function(idx, rem, str) {
	    		    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
	    		};

	    	  
	    	   var modul="%";
	    	var lovQu=LovQuery.innerText.trim().split('WHERE')[0].trim()+" WHERE "+searchLov.value.trim()+" like '%'";
	    	 /*  var lovQu=document.getElementById("LovQuery").innerText; */
	    	  var newlovQu=lovQu;
	    	  var k1=0;
	    	 
	    	  for(var i=0;i<=lovQu.length;i++)
	          {
	            if(lovQu.charAt(i) ==  '%')
	            {
	                      
	            	/*  newlovQu=lovQu.replace(/%/g, colFieldData[k1]);
	            	console.log("ArrayInputFields::::::::::",colFieldData[k1]) 
	            	
	            	lovQu.charAt(i).concat(colFieldData[k1])
	            	
	            	 */
	            	/*  newlovQu=newlovQu.insert(i,colFieldData[k1]); */
	            	
	            	newlovQu=newlovQu.splice(i,0,colFieldData[k1]);
	            	
	            	console.log("insert::",i);
	            	
	            	k1++;
	            	break;
	            	
	            	
	            	
	            	
	                  
	            }
	            else
	            {

	              //console.log("inside else part:",A.charAt(i),"   ----  ",aks);
	                  // aks +=  A.charAt(i);
	            }
	          }  
	          
	    	  
	    	  
	    	  
	    	  
	     	    var lovArr=[newlovQu];
	     	    
	     	    console.log("lovArr::",lovArr);
	    	  
	    	 
		        ifrm.src=origin+"/"+parent.parent.getProjectName()+"/LovServlet1?getLogField=filterData&"+lovArr; 
		        ifrm.style.width = "flex";
		        ifrm.style.height = "flex"; 
		        
		        ifrm.scrolling="";
		         /* document.body.appendChild(ifrm);  */
		         
		        
	    }
	   
	   
	    function filterData(){
	    	
	    	
	    
	   
	    }
	    
	    
	    document.getElementById('0').addEventListener("keyup", () =>{
		setPages();getLovResults();lovGet();filterData();
	    });
	    document.getElementById("searchLov").value = document.getElementById('myList').options[document.getElementById('myList').selectedIndex].text;	    
function selectorSearchList(){
    console.log("selectorSearchList()  calling:::");
    
    var mylist = document.getElementById("myList");
	document.getElementById("searchLov").value = document.getElementById('myList').options[document.getElementById('myList').selectedIndex].text;
	//document.getElementById('dateFormat').value=mylist.options[mylist.selectedIndex].text;
}	    
	    

	</script>
</body>
</html>