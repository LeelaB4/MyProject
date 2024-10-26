<?xml   version="1.0"   encoding="ISO-8859-1"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	version="1.0">
	<xsl:template match="/">
		<html>
			<head>
				<xsl:variable name="itemId" select="''" />
				<link href="TMPRACTTASK.css" rel="stylesheet" type="text/css" />
				<script type="text/javascript" src="TMPRACTTASK.js">
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
"> Practitioner Company Asset</p>


				<div class="WNDtitlebar" id="WNDtitlebar" >
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
										onclick="createNew();getDataFooter(); resetValues();"
										onmousedown="">
										<!-- enbFilds();readOnlyf(); -->
										<xsl:value-of select="button1" />
									</button>

									<button id="Id" class="button" type="button" value="Query"
										onclick="createBTN();readOnlyt(); resetValues();" onmousedown="">
										<!-- resetValues(); readOnlyt(); -->
										<xsl:value-of select="button2" />
									</button>

									<button id="ModifyId" class="button" type="button"
										value="Modify" name="ModifyName"
										onclick="modifybtnEnable(); enbFilds(); samebtnSave(); modifybtn(); ;"
										onmousedown="">
										<!-- getFrontEndData('getFrontEndData') -->
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
						<table style="position: fixed;top: 86px;left: 58px;">
							<xsl:for-each select="div/tbody">


								<tr>
									<td id="LOVL" style="color: red;">
										<xsl:value-of select="field1" />
									</td>
									<td>
										<input type="text" id="pract_id" autocomplete="off"></input>
									</td>
								</tr>


								<tr>
									<td>
										<xsl:value-of select="field2" />
									</td>
									<td>
										<input type="text" id="pract_name" class="disabled-input"
											autocomplete="off"></input>
									</td>
								</tr>

								<img id="imgLov"
									onclick="frameinWin('LOV_TMPRACTTASK','TMPRACTTASK','List 
									of Values Practional id');insertData('pract_id','pract_name','pract_cont','pract_email','join_date')"
									src="Img/searcher.png" width="20" height="20"
									style="position: absolute;margin-left: 390px;margin-top: 27px;" />


								<img id="imgLov1"
									onclick="frameinWin('LOV_TMPRACTTASK1','TMPRACTTASK','List 
									of Values Practional id');insertData('pract_id','pract_name')"
									src="Img/searcher.png" width="20" height="20"
									style="position: absolute;margin-left: 390px;margin-top: 27px;" />
									
									
									<img id="imgLov2"
									onclick="frameinWin('LOV_TMPRACTTASK2','TMPRACTTASK','List 
									of Values Practional id');insertData('projectid','project_name','master_project_id','master_project_name','parent_project_id','parent_project_name')"
									src="Img/searcher.png" width="20" height="20"
									style="position: absolute;margin-left: 901px;margin-top: 35px;" />
									


								<div id="fetchData_div">
									<button id="fetchbtn" class="button" type="button"
										onclick="getCustomerDetails('UserMaintenanceModify')"
										onmousedown="">Fetch
										Data</button>
								</div>


								<tr>
									<td>
										<xsl:value-of select="field3" />
									</td>

									<td>
										<input type="text" id="pract_cont" class="disabled-input"
											autocomplete="off"></input>
									</td>
								</tr>


								<tr>
									<td>
										<xsl:value-of select="field4" />
									</td>
									<td>
										<input type="text" id="pract_email" class="disabled-input"
											autocomplete="off"></input>
									</td>
								</tr>
								<tr>
									<td>
										<xsl:value-of select="field5" />

									</td>
									<td>
										<input type="text" id="join_date" class="disabled-input"
											autocomplete="off"></input>
									</td>
								</tr>







								<td>
									<input type="hidden" id="countRow"
										style="position: absolute;left: 320px;top: -80px;"></input>
								</td>




								<!-- <iframe id="frameCl"></iframe> -->
							</xsl:for-each>
						</table>
					</form>
					<br />
					<br />
					<br />

					<table id="second_ids" style="position: fixed;left: 540px;top: 92px;">
						<xsl:for-each select="div/footer1">
							<tr>
								<td>
									<xsl:value-of select="fieldl6" />
								</td>
								<td>
									<input type="text" id="projectid" class="disabled-input"
										autocomplete="off"></input>
								</td>
							</tr>
							
							<tr>
								<td>
									<xsl:value-of select="fieldl7" />
								</td>
								<td>
									<input type="text" id="project_name" class="disabled-input"
										autocomplete="off"></input>
								</td>
							</tr>
							<tr>
								<td>
									<xsl:value-of select="fieldl8" />

								</td>
								<td>
									<input type="text" id="master_project_id" class="disabled-input"
										autocomplete="off"></input>
								</td>
							</tr>
							<tr>
								<td>
									<xsl:value-of select="fieldl9" />
								</td>
								<td>
									<input type="text" id="master_project_name" class="disabled-input"
										autocomplete="off"></input>
								</td>
							</tr>

							<tr>
								<td>
									<xsl:value-of select="fieldl10" />
								</td>
								<td>
									<input type="text" id="parent_project_id" class="disabled-input"
										autocomplete="off"></input>
								</td>
							</tr>

							<tr>
								<td>
									<xsl:value-of select="fieldl11" />
								</td>
								<td>
									<input type="text" id="parent_project_name" class="disabled-input"
										autocomplete="off"></input>
								</td>
							</tr>

						</xsl:for-each>
					</table>


					<table id="footer">
						<xsl:for-each select="div/footer">

							<br />
							<br />

							<tr>


								<td class="LBLstd" id="maker" for="1">
									<xsl:value-of select="type1" />
								</td>
								<td>
									<input class="TXTstd1" name="-1" id="cust_maker" type="text"
										value="" readonly=""></input>
								</td>

								<td class="LBLstd" id="Approver" for="1">
									<xsl:value-of select="type2" />
								</td>
								<td>
									<input class="TXTstd1" name="-1" id="cust_Approver" type="text"
										value="" readonly=""></input>
								</td>


								<td class="LBLstd" id="Status" for="1">
									<xsl:value-of select="type3" />
								</td>
								<td>
									<input class="TXTstd1" name="-1" id="cust_Status" type="text"
										value="" readonly=""></input>
								</td>

								<td class="LBLstd" id="Once_auth" for="1">
									<xsl:value-of select="type4" />
								</td>
								<td>
									<input class="TXTstd1" name="-1" id="cust_Once_Auth1"
										type="checkbox" value="" onclick="return false" readonly=""></input>
									<input class="TXTstd1" name="-1" id="cust_Once_Auth"
										type="hidden" value=""></input>


								</td>
							</tr>

							<tr>

								<td class="LBLstd" id="makerDT" for="1">
									<xsl:value-of select="type5" />
								</td>
								<td>
									<input class="TXTstd1" name="-1" id="cust_maker_dt_stamp"
										type="text" value="" readonly=""></input>
								</td>

								<td class="LBLstd" id="Aprovertime" for="1">
									<xsl:value-of select="type6" />
								</td>
								<td>
									<input class="TXTstd1" name="-1" id="cust_Aprovertime"
										type="text" value="" readonly=""></input>
								</td>

								<td class="LBLstd" id="Aprovertime" for="1">
									<xsl:value-of select="type7" />
								</td>
								<td>
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

				<table>
					<xsl:for-each select="div/header">


						<div id="roleScreen">
							<div id="rolepluse">

								<input id="button1" type="button" value="+"
									onclick="addRow('dataTable');" title="Add Row"></input>
								<input id="button2" type="button" value="-"
									onclick="deleteRow('dataTable');" title="Delete Row"></input>
							</div>
							<div id="roletable">
								<table id="dataTable" class="table-bordered table-hover table-striped table">
									<thead id="table_css">
										<th style="font-size: 16px;">Check</th>
										<th style=" width: 139px;font-size: 
					14px ">PARENT TASK</th>
										<th></th>
										<th style="width: 153px;font-size: 14px">TASK</th>
										<th></th>
										<th style=" width: 169px;font-size: 14px ">SUB-TASK</th>
										<th
											style="position: 
					absolute;width: 128px;/* position: initial; */font-size: 14px">STARTDATE</th>
										<th style="width: 407px;position: absolute;font-size: 14px">ENDDATE</th>
										<th style="position: absolute;width: 729px;font-size: 14px">STATUS</th>

										<tbody id="roletable"
											style="position: fixed;top: 308px;right: 166px;border: none;overflow-y:       scroll;scroll-behavior: smooth;height: 212px;margin-left: 1128px;"></tbody>


									</thead>
									<tbody id="tab"></tbody>
								</table>
							</div>
						</div>
					</xsl:for-each>
				</table>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>

 