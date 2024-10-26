<?xml   version="1.0"   encoding="ISO-8859-1"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
 <html>
    <head>
        <xsl:variable name="itemId" select="''" />
        <link href="ICCHSPCN.css" rel="stylesheet" type="text/css"/>
<script type="text/javascript"  src="ICCHSPCN.js">
</script>

</head>
      <body>
  <table >
<br/>
<table id="header" >

    <xsl:for-each select="div/header">
    <tr>
    <td  >

   <button id="NewId" class="button" onclick="createNew();resetValues();readOnlyf();getDataFooter();"
	 onmousedown="" ><xsl:value-of  select="button1"/> </button>
    <button id="Id" class="button" onclick="createBTN(); resetValues();" onmousedown=""  ><xsl:value-of   select="button2"/></button>
      <button id="ModifyId" class="button" onclick="modifybtnEnable();" onmousedown=""  ><xsl:value-of select="button3"/></button>
      <button  id="DeleteId" class="button" 	onclick="validateDelet();" onmousedown="" ><xsl:value-of select="button4"/></button>
      <button  id="CloseId" class="button" onclick="CloseAcc();" onmousedown="" ><xsl:value-of select="button5"/></button>
     <button  id="ApprovalId" class="button" onclick="approveData()" onmousedown=""  ><xsl:value-of select="button6"/></button>
      <br/>
   <button id="buttonSave" class="button"	value="buttonSave" onclick=" CustPost('UserMaintenancePost')" onmousedown=""> <xsl:value-of select="button7"/>   </button>
       <button id="buttonExec" class="button" type="button"
				value="buttonExec" onclick="getCustomerDetails('UserMaintenanceGet'); " onmousedown=""> <xsl:value-of select="button8"/>   </button>
  <button id="modifysave" class="button" onclick="modifybtn();CustPost('UserMaintenanceUpdate'); " onmousedown="" ><xsl:value-of  select="button9"/></button>
    </td> 
 </tr>
 </xsl:for-each>
</table>


<br/>
<form class="formpage" >
<br/>
<table>
 <xsl:for-each select="div/tbody">
 <br/><br/>
 
    <tr><td id="LOVL" style="color: red;"><xsl:value-of select="field1"/> </td>  
    <td><input type="text" id="custid"></input>
     <img id="imgLov"
			onclick="frameinWin('LOV_CUSTID','STDCID','List of Values Customer No');insertData('custid')"
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/800px-Search_Icon.svg.png"
			width="20" height="20"/>
 </td>
  </tr>  
    <tr><td> <xsl:value-of select="field2"/> </td>
<td><input  type="text" id="cust_name"></input></td></tr>
<tr> <td> <xsl:value-of select="field3"/></td>  
        <td><input type="text" id="cust_dob" onclick="">
        </input> <input type="date" id="dt" onchange="mydate1();"></input></td></tr>
           <tr><td> <xsl:value-of select="field4"/> </td>
           <td><input type="text" id="cust_salary"></input></td></tr> 
           <tr><td> <xsl:value-of select="field5"/> </td>
    <td><input type="text" id="cust_dept"></input></td> </tr> 
     
       <!-- <td><xsl:value-of select="field3"/></td>
       <br/>
       <td> <xsl:value-of select="field4"/></td>
       <br/>
       <td><xsl:value-of select="field5"/></td>
       <br/>
      -->
 </xsl:for-each>
</table>
</form>
<br/><br/><br/>

<table  >
 <xsl:for-each select="div/body1">
 <tr>
 <td  >
<button id="cancel" class="cancel_button" type="button" onclick="window.location.reload();" onmousedown="">Cancel</button>
    </td>
 </tr>
 </xsl:for-each>
</table>

<table id="footer">
<xsl:for-each select="div/footer">
 <br/><br/>


 
    <tr><td   class="LBLstd" id="maker" for="1"><xsl:value-of select="type1"/></td>
    <td><input class="TXTstd1" name="-1" id="cust_maker" type="text" value="" readonly=""></input></td>
    <td> <xsl:value-of select="type2"/> </td>
<td><input class="TXTstd1" name="-1" id="cust_Approver" type="text" value="" readonly=""></input></td>
<td><xsl:value-of select="type3"/></td>  
        <td><input class="TXTstd1" name="-1" id="cust_Status" type="text" value="" readonly=""></input></td>
           <td class="LBLstd" id="Once_auth" for="1"> <xsl:value-of select="type4"/> </td>
           <td><input class="TXTstd1" name="-1" id="cust_Once_Auth1" type="checkbox" value="" ></input>
           </td>
           </tr>
           <tr>
           <td class="LBLstd" id="makerDT" for="1"> <xsl:value-of select="type5"/> </td>
    <td><input class="TXTstd" name="-1" id="cust_maker_dt_stamp" type="text" value="" /></td> 
            <td class="LBLstd" id="Aprovertime" for="1"> <xsl:value-of select="type6"/> </td>
    <td><input class="TXTstd1" name="-1" id="cust_Aprovertime" type="text" value="" readonly=""></input></td> 
            <td class="LBLstd" id="Aprovertime" for="1"> <xsl:value-of select="type7"/> </td>
    <td><input class="TXTstd1" name="-1" id="cust_Approver_statement" type="text" value="" readonly=""></input></td> </tr> 

 </xsl:for-each>

</table>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>





   
    
