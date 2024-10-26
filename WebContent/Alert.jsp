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
		<h1 class="WNDtitletxt">Information Message</h1>
	</div>
	<br>
	<span class="ICOAlert_I" id="ICOAlert_I"  title="Information Message"></span>
	<p>Information Message</p>
	
	<p id="errMsg"></p>
	<p id="invdcred" style="color: red;"></p>
    <footer id="footer">
	<button class="button" id="alertBtn"type="submit" onclick="clearData();parent.closeFrame();window.location.reload();"
		style="position: absolute; left: 483px;">Ok</button>
		</footer>

	
	
<script type="text/javascript" src="JS/Alert.js"></script>	
</body>
</html>