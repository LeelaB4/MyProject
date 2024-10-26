<?xml   version="1.0"   encoding="ISO-8859-1"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	version="1.0">
	<xsl:template match="/">
		<html>
			<head>
				<xsl:variable name="itemId" select="''" />
				<link href="TMPRACTM.css" rel="stylesheet" type="text/css" />
				<script type="text/javascript" src="TMPRACTM.js">
				</script>


			</head>
			<body>

				<p id="text"
					style="
    margin-right: -120px;
    position: absolute;
    left: 16px;
    color: white;
    top: -9px;
    /* opacity: 1.7; */
    z-index: 1;
"> Practitioner Maintenance</p>


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
						<button id="min" type="button" onclick="parent.minimizeFrame(event);"
							style="margin-top: 10px;">
							<a class="WNDmin" href="#" title="Minimize" onclick="parent.minimizeFrame(event)">
								<span class="LBLinv">Min</span>
							</a>
						</button>

					</div>
				</div>
				<table>
					<br />

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
										onclick="createBTN(); resetValues(); readOnlyt();"
										onmousedown="">
										<xsl:value-of select="button2" />
									</button>

									<button id="ModifyId" class="button" type="button"
										value="Modify" name="ModifyName"
										onclick="modifybtnEnable(); enbFilds(); samebtnSave(); modifybtn(); "
										onmousedown="">
										<xsl:value-of select="button3" />
									</button>

									<button id="DeleteId" class="button" type="button"
										value="Delete" name="DeleteName" onclick="validateDelet();"
										onmousedown="">
										<xsl:value-of select="button4" />
									</button>

									<button id="CloseId" class="button" type="button" value="Close"
										onclick="CloseAcc();" onmousedown="">
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
										value="buttonSave" onclick="validateEmail(); " onmousedown="">
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


					<form class="formpage">
						<br></br>
						<br></br>
						<table
							style="
    position: fixed;
    top: 119px;
    left: 58px;
">
							<xsl:for-each select="div/tbody">


								<tr>
									<td id="LOVL" style="color: red;">
										<xsl:value-of select="field1" />
									</td>
									<td>
										<input type="text" id="pract_empid" autocomplete="off"></input>
									</td>

								</tr>
								 <img id="imgLov" onclick="frameinWin('LOV_TMPRACTM','TMPRACTM','List 
									of Values ');insertData('pract_empid','pract_name')" src="Img/searcher.png" width="20" 
									height="20" style="position: absolute;margin-left: 350px;margin-top: 60px ;" 
									/> 

								<div id="fetchData_div"> <button id="fetchbtn" class="button" 
									type="button" onclick="getCustomerDetails('UserMaintenanceModify')" onmousedown="">Fetch 
									Data</button> </div> 


								<tr>
									<td>
										<xsl:value-of select="field2" />
									</td>
									<td>
										<input type="text" id="pract_name" class="disabled-input"
											autocomplete="off"></input>
									</td>
								</tr>


								<tr>
									<td>
										<xsl:value-of select="field3" />
									</td>
									<input type="hidden" id="sel" class="disabled-input"
										autocomplete="off"></input>
									<td>

										<select id="pract_type"
											style=" position: fixed;  width: 140px;left: 193px; height: 18px; top: 176px;">
											<option></option>
											<option type="text" value="type 1" id="type-1">type 1
											</option>
											<option type="text" value="type 2" id="type-1">type 2
											</option>
											<option type="text" value="type 3" id="type-1">type 3
											</option>

										</select>



									</td>



								</tr>

								<tr>
									<td>
										<xsl:value-of select="field4" />
									</td>
									<td>
										<input type="text" id="pract_org" class="disabled-input"
											autocomplete="off"></input>
									</td>
								</tr>


								<tr>
									<td>
										<xsl:value-of select="field5" />
									</td>
									<td>
										<input type="text" id="pract_email" class="disabled-input"
											autocomplete="off"></input>
									</td>
								</tr>


								<tr>
									<td>
										<xsl:value-of select="field6" />
									</td>
									<td>
										<input type="text" id="pract_mob" class="disabled-input"
											maxlength="10" minlength="10" title="Please enter exactly 10 digits"
											autocomplete="off"></input>
									</td>
								</tr>


								<tr>
									<td>
										<xsl:value-of select="field7" />
									</td>
									<td>
										<input type="text" id="pract_mgr" class="disabled-input"
											autocomplete="off"></input>
									</td>
								</tr>

								<!-- <tr> <td> <xsl:value-of select="field8" /> </td> <td> <input 
									type="text" id="pract_joiningdate" class="disabled-input" autocomplete="off" 
									onchange="addMyDate('start_date')"></input> </td> </tr> -->


								<tr>
									<td>
										<xsl:value-of select="field8" />
									</td>
									<td>
										<input type="text" id="pract_joiningdate" class="disabled-input"
											autocomplete="off"></input>
									</td>

									<td>
										<input type="date" style="width: 23px;" id="start-date"
											onchange="addMyDate('start_date')" class="disabled-input"
											autocomplete="off" />
									</td>
								</tr>



								<tr>
									<td>
										<xsl:value-of select="field9" />
									</td>
									<td>
										<input type="text" id="pract_exitdate" class="disabled-input"
											autocomplete="off"></input>
									</td>
									<td>
										<input type="date" style="width: 23px;" id="end-date"
											onchange="addMyDate('end_date')" class="disabled-input"
											autocomplete="off" />
									</td>
								</tr>

								<tr>
									<td>
										<xsl:value-of select="field10" />
									</td>
									<td>
										<input type="text" id="pract_innotice" class="disabled-input"
											autocomplete="off"></input>
									</td>
								</tr>
								<br></br>

								<td>
									<input type="hidden" id="countRow"></input>
								</td>




								<!-- <iframe id="frameCl"></iframe> -->
							</xsl:for-each>
						</table>
					</form>
					<br />
					<br />
					<br />





					<table id="footer">
						<xsl:for-each select="div/footer">

							<br />
							<br />

							<tr>


								<td class="LBLstd" id="lbl_maker" for="1">
									<xsl:value-of select="type1" />
								</td>
								<td>
									<input class="TXTstd1" name="-1" id="maker" type="text"
										value="" readonly=""></input>
								</td>

								<td class="LBLstd" id="lbl_Approver" for="1">
									<xsl:value-of select="type2" />
								</td>
								<td>
									<input class="TXTstd1" name="-1" id="Approver" type="text"
										value="" readonly=""></input>
								</td>


								<td class="LBLstd" id="lbl_Status" for="1">
									<xsl:value-of select="type3" />
								</td>
								<td>
									<input class="TXTstd1" name="-1" id="Status" type="text"
										value="" readonly=""></input>
								</td>

								<td class="LBLstd" id="lbl_Once_auth" for="1">
									<xsl:value-of select="type4" />
								</td>
								<td>
									<input class="TXTstd1" name="-1" id="Once_Auth1" type="checkbox"
										value="" onclick="return false" readonly=""></input>
									<input class="TXTstd1" name="-1" id="Once_Auth" type="hidden"
										value=""></input>


								</td>
							</tr>

							<tr>

								<td class="LBLstd" id="lbl_makerDT" for="1">
									<xsl:value-of select="type5" />
								</td>
								<td>
									<input class="TXTstd1" name="-1" id="maker_dt_stamp"
										type="text" value="" readonly=""></input>
								</td>

								<td class="LBLstd" id="lbl_Aprovertime" for="1">
									<xsl:value-of select="type6" />
								</td>
								<td>
									<input class="TXTstd1" name="-1" id="Aprovertime" type="text"
										value="" readonly=""></input>
								</td>

								<td class="LBLstd" id="lbl_Approver_statement" for="1">
									<xsl:value-of select="type7" />
								</td>
								<td>
									<input class="TXTstd1" name="-1" id="Approver_statement"
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

				<!-- <table> <xsl:for-each select="div/header"> <div id="roleScreen"> 
					<h3>User Role Mapping</h3> <div id="rolepluse"> <input id="button1" type="button" 
					value="+" onclick="addRow('dataTable');" title="Add Row"></input> <input 
					id="button2" type="button" value="-" onclick="deleteRow('dataTable');" title="Delete 
					Row"></input> </div> <div id="roletable"> <table id="dataTable" style="position: 
					fixed;right: 260px;width: 428px;top: 215px; overflow:scroll; overflow-x:hidden;"> 
					<thead id="table_css"> <th>Check</th> <th style=" width: 136px; ">Role Id</th> 
					<th></th> <th style=" width: 232px; ">Role Desc</th> </thead> <tbody id="roleScreen" 
					style="position: fixed;margin-left: -4px;top: 169px;overflow-y: scroll;scroll-behavior: 
					smooth;height: 264px;top: 267px;"></tbody> </table> </div> </div> </xsl:for-each> 
					</table> -->
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>

 