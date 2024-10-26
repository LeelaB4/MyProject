<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="stylesheet" href="Css/style.css">
<title>
<%
        out.println(request.getAttribute("USER_NAME"));
    %>
</title>
</head>
<body style="display: contents;">
<%@page import="com.fcub.login.*"%>
<%@page import="com.fcub.*"%>
<div id="menuData">
<%
            out.println(request.getAttribute("menu_data"));
        %>
</div>
<div id="frameDiv" onmousedown="">
<div id="frameDiv2"></div>
<iframe id="loginFrame" src="Alert.jsp" scrolling="no"
            style="left: 35%; top: 34%;"></iframe>
</div>
<%-- <div id="time">
	<%out.println(request.getAttribute("formattedTime")); %>
</div> --%>


<div id="loginDetail">
<%

            out.println(request.getAttribute("infologin0")+",");
            out.println(request.getAttribute("infologin1"));
        %>
</div>
<%-- <div id="Lang">
<% 
out.println(request.getAttribute("lang_code"));
%>
</div> --%>

 

    <div id="user_id">
<%
            out.println(request.getAttribute("user_id"));
        %>
</div>
<iframe id="userSetting_Frame" scrolling="off" src=""></iframe>
<div class="container1">
<div class="nav1">
  
  <div>
  <span class="LogoModus" style="display:block" title="null"></span>
  </div>
  
  <div class="item">
  
  <label>Login duration:  <span id="timer">00:00:00</span></label>
  <span id="Lang"><% 
out.println(request.getAttribute("lang_code"));
%></span>
  <label>Current Time:<span id="time"></span></label>
  <div class="dropdown">
  <span  id="abc" class="abc" ><%out.println(request.getAttribute("USER_NAME"));%></span>
     <div class="dropdown-content">
    <a href="#" onclick="frameOpenSetting();">User Setting</a>
   
    </div>
  
  </div>
  <button id="logout" type="button" onclick="Logout();">Logout</button>
  
  </div>

<input type="hidden"  id="dateFormat" value="<%out.println(request.getAttribute("date_Format"));%>" ></input>


</div>
<h1 style="position: absolute; z-index: -1; top: 50%; left: 50%;">Welcome</h1>




    <div id="menuContainer">
<div class="container"
            onclick="menuBar(this);getMenuData();closeMenu();">
<div class="bar1"></div>
<div class="bar2"></div>
<div class="bar3"></div>
</div>
<ul id='menuBarList'>

 

        </ul>
</div>
<div id="if" style="height: 100%; width: 100%;"></div>

</div>

 
    <script src="JS/Welcome.js"></script>

 

 

</body>
</html>