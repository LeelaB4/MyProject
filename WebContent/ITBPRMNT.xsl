<?xml   version="1.0"   encoding="ISO-8859-1"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	version="1.0">
	<xsl:template match="/">
		<html>
			<head>
				<xsl:variable name="itemId" select="''" />
				<link href="ITBPRMNT.css" rel="stylesheet" type="text/css" />
				<script type="text/javascript" src="ITBPRMNT.js">
				</script>

			</head>
			<body>

			<p id="text"
					style="
    margin-right: -120px;
    position: absolute;
    left: 16px;
    top: -9px;
    /* opacity: 1.7; */
    z-index: 1;
    color:white;
">Project Maintenance</p>

				<table>
					<br />
					<div>
						<table id="header">
							<xsl:for-each select="div/header">
								<tr>
									<td>

									<button id="NewId" class="button" type="button" value="New"
											onclick=" enbFilds();createNew();resetValues();readOnlyf();getDataFooter();"
											onmousedown="">
											<xsl:value-of select="button1" />
										</button>

								    	<button id="Id" class="button" type="button" value="Query"
											onclick="createBTN(); resetValues() ;" onmousedown="">
											<xsl:value-of select="button2" />
										</button>

									<button id="ModifyId" class="button" type="button"
											value="Modify" name="ModifyName"
											onclick="modifybtnEnable(); enbFilds(); samebtnSave(); modifybtn();"
											onmousedown="">
											<xsl:value-of select="button3" />
										</button>

										<button id="DeleteId" class="button" type="button"
											value="Delete" name="DeleteName" onclick="validateDelet();"
											onmousedown="">
											<xsl:value-of select="button4" />
										</button>

										<button id="CloseId" class="button" type="button"
											value="Close" onclick="CloseAcc();" onmousedown="">
											<xsl:value-of select="button5" />
										</button>

										<button id="ApprovalId" class="button" type="button"
											value="Approval" onclick="approveData();" onmousedown="">
											<xsl:value-of select="button6" />
										</button>

										<button id="ReopenId" class="button" type="button"
											value="Reopen" onclick="reopenEnable(); reOpen();"
											onmousedown="">
											<xsl:value-of select="button7" />
										</button>

										<button id="buttonSave" type="button" class="button"
											value="buttonSave" onclick="CustPost('POST');" onmousedown="">
											<xsl:value-of select="button8" />
										</button>

										<button id="buttonExec" type="button" class="button"
											value="buttonExec" onclick="getCustomerDetails('GET');enableNew();"
											onmousedown="">
											<xsl:value-of select="button9" />
										</button>

									</td>
								</tr>
							</xsl:for-each>
						</table>
					</div>

					<br></br>
					<br></br>
					<table id="tbody">
						<xsl:for-each select="div/tbody">

							<tr>
<tr>
									<td id="LOVL" style="color: red;"><xsl:value-of select="field1"/> 
									</td> <td><input type="text" id="proj_code" autocomplete="off"></input> </td> 

								</tr>

								<div class="WNDtitlebar" id="WNDtitlebar">

									<b class="BTNicon">

										<span class="ICOflexcube"></span>

									</b>

									<h1 id="titleLOV" class="WNDtitletxt"></h1>

									<div class="WNDbuttons">

										<a class="WNDcls" href="#" id="WNDbuttons" title="Close"

											onclick="parent.closeIframe()">

											<span class="LBLinv">Close</span>

										</a>

										<a class="WNDmax" href="#" id="WNDmaxBTN" title="Maximize"

											onclick="parent.maximizeFrame(event)">

											<span class="LBLinv">Maximize</span>

										</a>

										<button id="min" type="button" onclick="parent.minimizeFrame(event)">

											<a class="WNDmin" href="#" title="Minimize"

												onclick="parent.minimizeFrame(event)">

												<span class="LBLinv">Min</span>

											</a>

										</button>

									</div>

								</div>

								<td>

									<img id="imgLov"
										onclick="frameinWin('LOV_ITBPRMNT','ITBPRMNT','List 
									of Values Customer No');insertData('proj_code','proj_name');"
										src="Img/searcher.png" width="20" height="20"
										style="position:fixed; margin-left:310px; margin-top:-25px;" />

								</td>

								<!-- <div id="fetchData_div"> <button id="fetchbtn" class="button" 
									type="button" onclick="getCustomerDetails('UserMaintenanceModify')" onmousedown=""></button> 
									</div> -->
								
								<tr>
									<td>
										<xsl:value-of select="field2" />
									</td>
									<td>
										<input type="text" id="proj_name" class="disabled-input"
											autocomplete="off"></input>
									</td>
								</tr>

								<tr>
									<td>
										<xsl:value-of select="field3" />
									</td>
									<td>
										<input type="text" id="app_name" class="disabled-input"
											autocomplete="off"></input>
									</td>
								</tr>

								<tr>
									<td>
										<xsl:value-of select="field4" />
									</td>
									<td>
										<input type="text" id="app_version" class="disabled-input"
											autocomplete="off"></input>
									</td>
								</tr>
								<tr>
									<td>
										<xsl:value-of select="field5" />
									</td>
									<td>
										<input type="text" id="app_type" class="disabled-input"
											autocomplete="off"></input>
									</td>


								</tr>

								<tr>
									<td>
										<xsl:value-of select="field6" />
									</td>
									<td>
										<input type="text" id="app_url" class="disabled-input"
											autocomplete="off"></input>
									</td>
								</tr>

<tr>
								<td>
									<xsl:value-of select="field7" />
								</td>
								<td>
									<xsl:value-of select="field8" />
								
									<input type="checkbox" id="Edge"  class="disabled-input"
										autocomplete="off"></input>
									<input type="hidden" id="Edge1" class="disabled-input"
										autocomplete="off"></input>

							
									<xsl:value-of select="field9" />
								
									<input type="checkbox" id="Chrome" class="disabled-input"
										autocomplete="off"></input>
									<input type="hidden" id="Chrome1" class="disabled-input"
										autocomplete="off"></input>

								</td>
                             
								<td>
									<xsl:value-of select="field10" />
								</td>

								<td>
									<input type="checkbox" id="Firefox"  class="disabled-input"
										autocomplete="off"></input>
									<input type="hidden" id="Firefox1" class="disabled-input"
										autocomplete="off"></input>

								</td>


<tr>
							<td></td>

								<td>
									<xsl:value-of select="field11" />
								
									<input type="checkbox" id="Safari" class="disabled-input"
										autocomplete="off"></input>
									<input type="hidden" id="Safari1" class="disabled-input"
										autocomplete="off"></input>

								
									<xsl:value-of select="field12" />
							
									<input type="checkbox" id="Opera"  class="disabled-input"
										autocomplete="off"></input>
									<input type="hidden" id="Opera1" class="disabled-input"
										autocomplete="off"></input>

								</td>

</tr>								
<td></td>

								<td>
									<xsl:value-of select="field13" />
								
									<input type="text" id="Others" class="disabled-input"
										autocomplete="off"></input>
								</td>

</tr>

								<div class="frame1">
									<iframe src="" id="f1" scrolling="off"></iframe>
									<div class="WNDtitlebar" id="WNDtitlebar">
										<b class="BTNicon">
											<span class="ICOflexcube"></span>
										</b>
										<h1 id="titleLOV" class="WNDtitletxt"></h1>



										<div class="WNDbuttons">
											<a class="WNDcls" href="#" id="WNDbuttons" title="Close"
												onclick="parent.closeIframe()">
												<span class="LBLinv">Close</span>
											</a>
											<a class="WNDmax" href="#" id="WNDmaxBTN" title="Maximize"
												onclick="parent.maximizeFrame(event)">
												<span class="LBLinv">Maximize</span>
											</a>
											<button id="min" type="button" onclick="parent.minimizeFrame(event)">
												<a class="WNDmin" href="#" title="Minimize"
													onclick="parent.minimizeFrame(event)">
													<span class="LBLinv">Min</span>
												</a>
											</button>

										</div>
									</div>
								</div>							
</tr>

						</xsl:for-each>
					</table>

					<br />
					<br />
					<br />
					<table id="footer">
						<xsl:for-each select="div/footer">
							<br />
							<br />

							<tr>

							<td class="LBLstd" id="maker" for="1">
									<xsl:value-of select="type1" />
									<input class="TXTstd1" name="-1" id="cust_maker" type="text"
										value="" readonly=""></input>
								</td>

                               <td class="LBLstd" id="makerDT" for="1">
									<xsl:value-of select="type2" />
									<input class="TXTstd1" name="-1" id="cust_maker_dt_stamp"
										type="text" value="" readonly=""></input>
								</td>



								<td class="LBLstd" id="Status" for="1">
									<xsl:value-of select="type3" />
									<input class="TXTstd1" name="-1" id="cust_Status" type="text"
										value="" readonly=""></input>
								</td>



								<td class="LBLstd" id="Once_auth" for="1">
									<xsl:value-of select="type4" />
									<input class="TXTstd1" name="-1" id="cust_Once_Auth1"
										type="checkbox"  onclick="return false" value="" readonly=""></input>
									<input class="TXTstd1" name="-1" id="cust_Once_Auth"
										type="hidden" value=""></input>

								</td>
							</tr>

							<tr>


                               <td class="LBLstd" id="Approver" for="1">
									<xsl:value-of select="type5" />
									<input class="TXTstd1" name="-1" id="cust_Approver" type="text"
										value="" readonly=""></input>
								</td>


								<td class="LBLstd" id="Aprovertime" for="1">
									<xsl:value-of select="type6" />
									<input class="TXTstd1" name="-1" id="cust_Aprovertime"
										type="text" value="" readonly=""></input>
								</td>
								
								<td class="LBLstd" id="Aprovertime" for="1">
									<xsl:value-of select="type7" />
									<input class="TXTstd1" name="-1" id="cust_Approver_statement"
										type="text" value="" readonly=""></input>
								</td>
								
								<td>
									<button id="cancel" class="cancel_button" type="button"
										onclick="window.location.reload();" onmousedown="">
										<xsl:value-of select="type8" />
								    </button>
								</td>
						</tr>
						</xsl:for-each>
					</table>
				</table>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
