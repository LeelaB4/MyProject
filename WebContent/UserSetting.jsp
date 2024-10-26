<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="Css/LOVStyle.css">
</head>
<body>
	<div style="width: 543px;" class="WNDtitlebar" id="wndtitle"
		onmousedown="">
		<b class="BTNicon"><span class="ICOalert2"></span></b>
		<h1 class="WNDtitletxt">User Setting</h1>
	</div>
	<br>
	
	<div id="dateSelector">
<br>
    <form>
        <b> Select you date format  using dropdown list </b>
        <select id = "myList" onchange = "selectorDate()" >
        <option> ---Choose date format--- </option>
        <option> MM/DD/YYYY </option>
        <option> DD/MM/YYYY </option>
        <option> YYYY-MM-DD </option>
        <option> DD-MON-YYYY </option>
        <option> DD.MM.YYYY </option>
         <option> DD-MM-YYYY </option>
        </select>
        <p> Your selected date format is: 
        <input type = "text" id = "dateFormat" size = "20" /></p>
        </form>
 
</div>
	
	
    <footer id="footer">
	<button class="button" type="submit" onclick="saveDateFormat();parent.frameOpenSettingClose();"
		style="position: absolute; left: 483px;">Ok</button>
		</footer>

	
	
<script type="text/javascript" src="JS/UserSetting.js"></script>	
</body>
</html>