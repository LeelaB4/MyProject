<?xml   version="1.0"   encoding="ISO-8859-1"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	version="1.0">
	<xsl:template match="/">
		<html>
			<head>
				<xsl:variable name="itemId" select="''" />
				<link href="TASKMANT.css" rel="stylesheet" type="text/css" />
				<script type="text/javascript" src="TASKMANT1.js">
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
"> Project Tasks Maintenance</p>


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
										onclick="enbFilds(); createNew(); getDataFooter(); resetValues();"
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
										value="buttonSave" onclick="CustPost('POST'); " onmousedown="">
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
							style="position: fixed; top: 100px; left: 40px;">
							<xsl:for-each select="div/tbody">


								<tr>
									<td id="LOVL" style="color: red;">
										<xsl:value-of select="field1" />
									</td>
									<td>
										<input type="text" id="proj_id" class="disabled-input"
											autocomplete="off"></input>
									</td>
								<tr>
								<img id="imgLov1"
									onclick="frameinWin('LOV_TASKMANT','TASKMANT','List 
									of Values Practional id');insertData('proj_id','proj_name','stdate','endate','status','mproj_id','mproj_name','mstdate','mendate','mstatus','sproj_id','sproj_name','sstdate','sendate','sstatus')"
									src="Img/searcher.png" width="20" height="20"
									style="position: absolute;margin-left: 304px; margin-top:42px;" />
									</tr>
                                 </tr>

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
										<input type="text" id="stdate" class="disabled-input"
											autocomplete="off"></input>
									</td>
								</tr>
								<tr>
									<td>
										<xsl:value-of select="field4" />

									</td>
									<td>
										<input type="text" id="endate" class="disabled-input"
											autocomplete="off"></input>
									</td>
								</tr>
								
								<tr>
									<td>
										<xsl:value-of select="field5" />

									</td>
									<td>
										<input type="text" id="status" class="disabled-input"
											autocomplete="off"></input>
									</td>
									<td>
									<input type="hidden" id="countRow"
										style="position: absolute;left: 320px;top: -80px;"></input>
								</td>
								</tr>
								
								
								
								
							</xsl:for-each>
						</table>
						
						<table
							style="position: fixed; top: 100px; left: 350px;">
							<xsl:for-each select="div/tbody">


								<tr>
									<td id="LOVL" style="color: red;">
										<xsl:value-of select="field6" />
									</td>
									<td>
										<input type="text" id="mproj_id" class="disabled-input"
											autocomplete="off"></input>
									</td>
								
								
                                 </tr>

								<tr>
									<td>
										<xsl:value-of select="field7" />
									</td>
									<td>
										<input type="text" id="mproj_name" class="disabled-input"
											autocomplete="off"></input>
									</td>
								</tr>


								<tr>
									<td>
										<xsl:value-of select="field8" />
									</td>
									<td>
										<input type="text" id="mstdate" class="disabled-input"
											autocomplete="off"></input>
									</td>
								</tr>
								<tr>
									<td>
										<xsl:value-of select="field9" />

									</td>
									<td>
										<input type="text" id="mendate" class="disabled-input"
											autocomplete="off"></input>
									</td>
								</tr>
								
								<tr>
									<td>
										<xsl:value-of select="field10" />

									</td>
									<td>
										<input type="text" id="mstatus" class="disabled-input"
											autocomplete="off"></input>
									</td>
									
									<td>
									<input type="hidden" id="countRow"
										style="position: absolute;left: 320px;top: -80px;"></input>
								</td>
								</tr>
								
								
								
								
							</xsl:for-each>
						</table>
						
						
						
						<table
							style="position: fixed; top: 100px; left: 692px;">
							<xsl:for-each select="div/tbody">


								<tr>
									<td id="LOVL" style="color: red;">
										<xsl:value-of select="field11" />
									</td>
									<td>
										<input type="text" id="sproj_id" class="disabled-input"
											autocomplete="off"></input>
									</td>
								
								<!-- <img id="imgLov1"
									onclick="frameinWin('LOV_TMPRACTMAP','TMPRACTMAP','List 
									of Values Practional id');insertData('pract_id','pract_name','pract_cont','pract_email','join_date')"
									src="Img/searcher.png" width="20" height="20"
									style="position: absolute;margin-left: 728px; margin-top:40px;" />
									 -->
                                 </tr>

								<tr>
									<td>
										<xsl:value-of select="field12" />
									</td>
									<td>
										<input type="text" id="sproj_name" class="disabled-input"
											autocomplete="off"></input>
									</td>
								</tr>


								<tr>
									<td>
										<xsl:value-of select="field13" />
									</td>
									<td>
										<input type="text" id="sstdate" class="disabled-input"
											autocomplete="off"></input>
									</td>
								</tr>
								<tr>
									<td>
										<xsl:value-of select="field14" />

									</td>
									<td>
										<input type="text" id="sendate" class="disabled-input"
											autocomplete="off"></input>
									</td>
								</tr>
								
								<tr>
									<td>
										<xsl:value-of select="field15" />

									</td>
									<td>
										<input type="text" id="sstatus" class="disabled-input"
											autocomplete="off"></input>
									</td>
									
									<td>
									<input type="hidden" id="countRow"
										style="position: absolute;left: 320px;top: -80px;"></input>
								</td>
								</tr>
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
									<input class="TXTstd1" name="-1" id="maker" type="text"
										value="" readonly=""></input>
								</td>



								<td class="LBLstd" id="lbl_Approver" for="1">
									<xsl:value-of select="type2" />
									<input class="TXTstd1" name="-1" id="Approver" type="text"
										value="" readonly=""></input>
								</td>

								<td class="LBLstd" id="lbl_Status" for="1">
									<xsl:value-of select="type3" />
									<input class="TXTstd1" name="-1" id="Status" type="text"
										value="" readonly=""></input>
								</td>



								<td class="LBLstd" id="lbl_Once_auth" for="1">
									<xsl:value-of select="type4" />
									<input class="TXTstd1" name="-1" id="Once_Auth1"
										type="checkbox" onclick="return false" value="" readonly=""></input>
									<input class="TXTstd1" name="-1" id="Once_Auth"
										type="hidden" value=""></input>

								</td>
							</tr>


							<tr>

								<td class="LBLstd" id="lbl_makerDT" for="1">
									<xsl:value-of select="type5" />
									<input class="TXTstd1" name="-1" id="maker_dt_stamp"
										type="text" value="" readonly=""></input>
								</td>



								<td class="LBLstd" id="lbl_Aprovertime" for="1">
									<xsl:value-of select="type6" />
									<input class="TXTstd1" name="-1" id="Aprovertime"
										type="text" value="" readonly=""></input>
								</td>



								<td class="LBLstd" id="lbl_Approver_statement" for="1">
									<xsl:value-of select="type7" />
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
										<th style=" width: 188px;font-size: 14px ">PARENT TASK</th>
										
										<th style=" width: 139px;font-size: 14px ">TASK CODE</th>										
										<th style=" width: 169px; font-size: 14px">TASK NAME</th>
										<th style=" width: 116px;font-size: 14px ">START DATE</th>
										<th style=" width: 144px;font-size: 14px ">END DATE</th>
										<th style=" width: 160px;font-size: 14px ">STATUS</th>


										<tbody id="roletable"
											style="position: fixed;top: 296px;width: 952px;right: 202px;border: none;overflow-y: scroll;scroll-behavior: smooth;height: 226px;margin-left: 1128px;"></tbody>

										<!-- style="position: fixed;left: 42px;top: 248px;overflow-y: scroll;scroll-behavior: 
											smooth;height: 281px; right: 121px;b" -->
										<!-- style="position: fixed; overflow-y: scroll; scroll-behavior: 
											smooth; height: 287px;top: 240px;right: 53px;" -->




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

 