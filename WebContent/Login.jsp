<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Login Page</title>
<link rel="stylesheet" href="Css/style.css">
</head>
<body id="bodyid">

<%@page import="com.fcub.login.*"%>
<%@page import="com.fcub.*"%>

	
	<div id="bg"></div>
	<div class="redPatch"><span></span>
        
                <span class="lshadow"></span>
                <span class="rshadow"></span>
                
                <div id="logo">
         <%
            out.println(request.getAttribute("logoScreen"));
        %>
</div>
            </div>
	<div id="login">
	
		<form id="loginForm" action="LoginServlet" method="post">
		
		
		
			<div class="form-field">
				<input onclick="lableuser();" id="userid" type="text" placeholder="" name="userid"
					required />
					<label class="overlabel-apply" onclick="lableuser();">User ID</label>
			</div>
        
			<div class="form-field">
				<input onclick="lablepass();" id="userpass" type="password" placeholder=""
					name="userpass" required />
					<label class="overlabel-apply1" onclick="lablepass();">Password</label>
			</div>

			<div class="form-field">
				<button class="btn" id="signBtn" type="button" onclick="validateData();">Sign
					in</button>
			</div>
			<input  id="action_id" type="hidden"
					name="action"  />
		</form>
		<iframe id="loginFrame" src="Alert.jsp" scrolling="no"></iframe>
	</div>
	
	
	
	<script src="JS/Login.js"></script>
</body>
</html>