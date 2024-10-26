<?xml   version="1.0"   encoding="ISO-8859-1"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	version="1.0">
	<xsl:template match="/">
		<html>
			<head>
				<xsl:variable name="itemId" select="''" />
				<link href="CLMANT.css" rel="stylesheet" type="text/css" />
				<script type="text/javascript" src="CLMANT.js">
				</script>
			</head>
			<body>

				<p id="text"
					style=" margin-right: -120px; position: absolute; left: 16px; top: -9px; z-index: 1;color:white;">Client Maintenance</p>

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
									<td id="LOVL" style="color: red;">
										<xsl:value-of select="field1" />
									</td>
									<td>
										<input type="text" id="clnt_id" autocomplete="off"
											class="disabled-input"></input>
									</td>
				

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
									  <td> <img id="imgLov" class="disabled-input" onclick="frameinWin('LOV_CLMANT','CLMANT','List 
										of Values Customer No');insertData('clnt_id','clnt_name');" src="Img/searcher.png" 
										width="20" height="20" style="position:fixed; ;margin-left: -117px;margin-top: -11px;" 
										/> </td>


									

									<td style="margin-left: -128px;position: absolute;">
										<xsl:value-of select="field2" />

										<input type="text" id="clnt_name" class="disabled-input"
											autocomplete="off" style="margin-top: -6px;margin-left: 43px;"></input>
									</td>
								</tr>
                                    




								<tr>
									<td>
										<xsl:value-of select="field3" />
									</td>
									<input type="hidden" id="sel1" class="disabled-input"
										autocomplete="off"></input>
									<td>
										<select id="clttype" class="disabled-input"
											style="margin-inline: 9px; width: 163px;">
											<option></option>
											<option type="text" id="type-1">type - 1   </option>
											<option type="text" id="type-2">type - 2   </option>
											<option type="text" id="type-3">type - 3   </option>
											<option type="text" id="type-4">type - 4   </option>
										</select>

									</td>

									<td>
										<xsl:value-of select="field4" />
									</td>
									<input type="hidden" id="sel2" class="disabled-input"
										autocomplete="off"></input>
									<td>
										<select id="cltcat" class="disabled-input"
											style="margin-inline: 9px; width: 163px;">
											<option></option>
											<option type="text" id="sector-1">Public Sector</option>
											<option type="text" id="sector-2">Private Sector</option>
											<option type="text" id="sector-3">Govt Sector</option>
										</select>

									</td>
								</tr>





								<tr>
									<td>
										<xsl:value-of select="field5" />
									</td>
									<input type="hidden" id="sel3" class="disabled-input"
										autocomplete="off"></input>
									<td>
										<select id="cltdmn" class="disabled-input"
											style="margin-inline: 9px; width: 163px;">
											<option></option>
											<option type="text" id="cltdmn-1">Bank</option>
											<option type="text" id="cltdmn-2">Bank 1</option>
											<option type="text" id="cltdmn-3">Bank 2</option>
										</select>

									</td>

									<td>
										<xsl:value-of select="field6" />
									</td>
									<input type="hidden" id="sel4" class="disabled-input"
										autocomplete="off"></input>
									<td>
										<select id="cltsbdmn" class="disabled-input"
											style="margin-inline: 9px; width: 163px;">
											<option></option>
											<option type="text" id="cltsbdmn-1">Bank</option>
											<option type="text" id="cltsbdmn-2">Co-Operative</option>
											<option type="text" id="cltsbdmn-3">Small Funds</option>
											<option type="text" id="cltsbdmn-4">Micro Finance</option>
										</select>

									</td>
								</tr>
								<tr>
									<td>
										<xsl:value-of select="field7" />
									</td>
									<td>
										<input type="text" id="add1" class="disabled-input"
											autocomplete="off"></input>
									</td>

									<td>
										<xsl:value-of select="field8" />
									</td>
									<td>
										<input type="text" id="add2" class="disabled-input"
											autocomplete="off"></input>
									</td>
								</tr>
								<tr>
									<td>
										<xsl:value-of select="field9" />
									</td>
									<td>
										<input type="text" id="add3" class="disabled-input"
											autocomplete="off"></input>
									</td>
								</tr>
								<tr>
									<td></td>
								</tr>
								<tr>
									<td></td>
								</tr>
								<tr>
									<td></td>
								</tr>
								<tr>
									<td></td>
								</tr>
								<tr>
									<td></td>
								</tr>
								<tr>
									<td></td>
								</tr>
								<tr>
									<td>
										<xsl:value-of select="field10" />
									</td>
									<td>
										<input type="text" id="contry" class="disabled-input"
											autocomplete="off"></input>
									</td>

									<td>
										<img id="imgLov1"
											onclick="frameinWin('LOV_CLMANT1','CLMANT','List 
									of Values Customer No');insertData('contry');"
											src="Img/searcher.png" width="20" height="20"
											style="position: fixed; margin-left: -111px; margin-top: -8px;" />

									</td>
									<td style="position: absolute;margin-top: 5px;margin-left: -128px;">
									
										<xsl:value-of select="field11" />

										<input type="text" id="territ" class="disabled-input" autocomplete="off" style="position: absolute;margin-top: -3px;
										margin-left: 71px;" disabled=""></input>
									</td>
									<td>
										<img id="imgLov2"
											onclick="frameinWin('LOV_CLMANT2','CLMANT','List 
									of Values Customer No');insertData('territ');"
											src="Img/searcher.png" width="20" height="20"
											style="position: fixed;margin-left: -21px;margin-top: -6px;" />

									</td>



								</tr>
								<tr>
									<td>
										<xsl:value-of select="field12" />
									</td>
									<td>
										<input type="text" id="stat" class="disabled-input"
											autocomplete="off"></input>
									</td>
									<td>
										<img id="imgLov3"
											onclick="frameinWin('LOV_CLMANT3','CLMANT','List 
									of Values Customer No');insertData('stat');"
											src="Img/searcher.png" width="20" height="20"
											style="position: fixed; margin-left: -111px; margin-top: -1px;" />

									
										<xsl:value-of select="field13" />
									</td>
									<td style="
    position: fixed;
    margin-left: -2px;
">
										<input type="text" id="city" class="disabled-input"
											autocomplete="off"></input>
									</td>
									<td>
										<img id="imgLov4"
											onclick="frameinWin('LOV_CLMANT4','CLMANT','List 
									of Values Customer No');insertData('city');"
											src="Img/searcher.png" width="20" height="20"
											style="position: fixed; margin-left: -21px; margin-top: -8px;" />

									</td>
									<tr>
										<td>
											<xsl:value-of select="field14" />
										</td>
										<td>
											<input type="text" id="zcode" class="disabled-input"
												autocomplete="off"></input>
										</td>

										<td>
											<xsl:value-of select="field15" />
										</td>
										<td>
											<input type="text" id="contno" class="disabled-input"
												autocomplete="off"></input>
										</td>
									</tr>
									<td>
										<xsl:value-of select="field16" />
									</td>
									<td>
										<input type="text" id="contmail" class="disabled-input"
											autocomplete="off"></input>
									</td>
								</tr>
								<tr>
									<td></td>
								</tr>
								<tr>
									<td></td>
								</tr>
								<tr>
									<td></td>
								</tr>
								<tr>
									<td></td>
								</tr>
								<tr>
									<td></td>
								</tr>
								<tr>
									<td></td>
								</tr>
								<tr>
									<td>
										<xsl:value-of select="field17" />
									</td>
									<td>
										<input type="text" id="spcont" class="disabled-input"
											autocomplete="off"></input>
									</td>

									<td>
										<xsl:value-of select="field18" />
									</td>
									<td>
										<input type="text" id="spcmail" class="disabled-input"
											autocomplete="off"></input>
									</td>
								</tr>
								<tr>
									<td></td>
								</tr>
								<tr>
									<td></td>
								</tr>
								<tr>
									<td></td>
								</tr>
								<tr>
									<td></td>
								</tr>
								<tr>
									<td></td>
								</tr>
								<tr>
									<td></td>
								</tr>
								<tr>
									<tr></tr>
									<td>
										<xsl:value-of select="field20" />
									</td>

									<td>
										<xsl:value-of select="field21" />

										<input type="text" id="rmname" class="disabled-input"
											autocomplete="off"></input>
									</td>

									<tr>
										<td></td>
										<td>
											<xsl:value-of select="field22" />

											<input type="text" id="rmemail" class="disabled-input"
												autocomplete="off"></input>
										</td>
									</tr>
									<tr>
										<td></td>
										<td>

											<xsl:value-of select="field23" />

											<input type="text" id="rmcontno" class="disabled-input"
												autocomplete="off"></input>
										</td>
									</tr>
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
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
