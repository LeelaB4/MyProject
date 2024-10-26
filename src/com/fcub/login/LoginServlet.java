package com.fcub.login;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Scanner;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	static DatabaseUtil dbConn = null;

	@SuppressWarnings({ "unchecked", "rawtypes" })
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String jsonCorrectLogin = "{\n\"status\" : \"" + "ok\" \n }";
		/*
		 * String jsonInCorrectLogin = "{\n\"status\" : \"" +
		 * "Invalid_user\" \n }"; String jsonInCorrectPassLogin =
		 * "{\n\"status\" : \"" + "Invalid_Pass\" \n }";
		 */
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		/* System.out.println("Print Writer" + out); */
		/* System.out.println("Request Login::::" + request); */
		String username = request.getParameter("userid");
		String password = request.getParameter("userpass");
		request.setAttribute("user_id", username);
		/* System.out.println("Action::" + request.getParameter("action")); */
		String Action = request.getParameter("action");

		String formattedTime = null;
		String lang_code = null;

		if (Action.equals("DateFormatChange")) {
			String dateFormat = request.getParameter("dateFormat");
			System.out.println(dateFormat);

			try {
				// DatabaseUtil dbConn = new DatabaseUtil();
				StringBuffer Date_Format_Change_Query = new StringBuffer();
				Date_Format_Change_Query.append("update custom_sszb_user set DATE_FORMAT='");
				Date_Format_Change_Query.append(dateFormat);
				Date_Format_Change_Query.append("' WHERE USER_ID='");
				Date_Format_Change_Query.append(username + "'");

				/*
				 * String Date_Format_Change_Query =
				 * "update custom_sszb_user set DATE_FORMAT='" + dateFormat +
				 * "' WHERE USER_ID='" + username + "'";
				 */

				PreparedStatement pstmt = DatabaseUtil.executeQueryData(Date_Format_Change_Query.toString(), "N");
				boolean Date_Format_Change_Query_Effect = pstmt.execute();

				if (Date_Format_Change_Query_Effect = true) {

					/* out.print(getErrorMapJson(errCode)); */
					out.print("Sucess");
				} else {
					out.print("Fail");
				}

			} catch (Exception dataFormatDbExce) {
				dataFormatDbExce.printStackTrace();
			}
		}

		if (Action.equals("timeData")) {
			/*
			 * LocalTime currentTime = LocalTime.now(); formattedTime =
			 * currentTime.toString();
			 * response.getWriter().write(formattedTime);
			 * out.print(formattedTime); System.out.println(formattedTime);
			 */

			LocalTime currentTime = LocalTime.now();
			formattedTime = currentTime.format(DateTimeFormatter.ofPattern("HH:mm:ss"));
			response.setContentType("text/plain");
			/* response.getWriter().write(formattedTime); */
			out.print(formattedTime);
		}

		if (request.getParameter("action").equals("Logout")) {
			try {

				if (request.getParameter("action").equals("LoginServlet")) {
				} else {

					/*
					 * try (Connection connection = DriverManager.getConnection(
					 * "jdbc:oracle:thin:@10.25.0.46:1541:FCUBTRAIN01",
					 * "CUSTOMDEV", "CUSTOMDEV123")) { String deleteQuery =
					 * "DELETE FROM current_users WHERE user_id = ?";
					 * PreparedStatement statement =
					 * connection.prepareStatement(deleteQuery);
					 * statement.setString(1, username);
					 * 
					 * int rowsAffected = statement.executeUpdate(); if
					 * (rowsAffected > 0) { System.out.
					 * println("User ID deleted successfully from the database."
					 * ); } else {
					 * System.out.println("User ID not found in the database.");
					 * } } catch (SQLException e) { e.printStackTrace(); }
					 */

					// DatabaseUtil dbConn = new DatabaseUtil();
					StringBuffer deleteQuery = new StringBuffer();
					deleteQuery.append("DELETE FROM current_users WHERE user_id ='");
					deleteQuery.append(username + "'");
					// String deleteQuery = "DELETE FROM current_users WHERE
					// user_id = ?";

					PreparedStatement statement = DatabaseUtil.executeQueryData(deleteQuery.toString(), "N");

					int rowsAffected = statement.executeUpdate();
					if (rowsAffected > 0) {
						System.out.println("User ID deleted successfully from the database.");
					} else {
						System.out.println("User ID not found in the database.");
					}

					System.out.println("Log Out ::");
					// DatabaseUtil dbConn1 = new DatabaseUtil();
					StringBuilder sb2 = new StringBuilder();
					sb2.append("update CUSTOM_SMZB_USERLOG_DETAILS set user_id='");
					sb2.append(username + "' ,");
					sb2.append("last_signed_on=sysdate,NO_CUMULATIVE_LOGINS=0,NO_SUCCESSIVE_LOGINS=0 where user_id='");
					sb2.append(username + "'");

					System.out.println("Query2::" + sb2.toString());

					PreparedStatement ps = DatabaseUtil.executeQueryData(sb2.toString(), "N");
					ps.execute();
					String json = "{\n\"status\" : \"" + "successful\" \n }";
					System.out.println(json);
					out.print(json);
					// System.out.println("Query2 sucess :" +
					// ps.executeUpdate(sb2.toString()));

					DatabaseUtil.conn.close();
					// DatabaseUtil.pstmt.close();
					DatabaseUtil.stmt.close();

					/* dbConn.getConnection().close(); */
					// System.out.println("check connection is closed or
					// not"+dbConn.getConnection().isClosed());
				}
			} catch (Exception e1) {
				e1.printStackTrace();
			}
		} else if (request.getParameter("action").equals("Login")
				|| request.getParameter("action").equals("LoginDetails")) {

			try {

				request.setAttribute("Username", username);

				System.out.println("Username Login::" + username);
				System.out.println("Request get para:::" + request.getParameter("user_name1"));

				if (request.getParameter("action").equals("LoginDetails")) {
					try {
						dbConn = new DatabaseUtil();
						// dbConn.getConnection();
					} catch (SQLException e2) {

						e2.printStackTrace();
					}
				}
				StringBuilder sb = new StringBuilder();
				sb.append(
						"SELECT USER_ID, USER_PASSWORD,USER_NAME,LANG_CODE,DATE_FORMAT FROM custom_sszb_user where USER_ID = '");
				sb.append(username);
				sb.append("'");
				ResultSet rs = DatabaseUtil.executeQueryData1(sb.toString(), "N");
				// ResultSet rs = dbConn.stmt.executeQuery(sb.toString());

				if (!(rs.isBeforeFirst())) {
					/* out.println(jsonInCorrectLogin); */
					DatabaseUtil.conn.close();
					out.print(getErrorMapJson("MOD-1001"));
				} else {
					while (rs.next()) {

						String userb = rs.getString("USER_ID");
						String passb = rs.getString("USER_PASSWORD");
						String user_name = rs.getString("USER_NAME");
						lang_code = rs.getString("LANG_CODE");
						String date_Format = rs.getString("DATE_FORMAT");
						request.setAttribute("lang_code", lang_code);
						request.setAttribute("date_Format", date_Format);
						/* rs.close(); */

						if (userb.equals(username) && passb.equals(password)) {

							sb = new StringBuilder();
							sb.append("SELECT count(*) current_count from current_users where USER_ID = '");
							sb.append(username);
							sb.append("'");
							rs = DatabaseUtil.executeQueryData1(sb.toString(), "N");

							rs.next();
							int count = rs.getInt("current_count");

							// boolean isLoggedIn = false;
							if (count > 0) {

								// user
								// already
								// logged
								System.out.println(getErrorMapJson("MOD-1003")); // in
								Date loginTime1 = new Date(0);

								Date currentTime = new Date(0);

								System.out.println("Current time: " + currentTime);
								/*
								 * SimpleDateFormat dateFormat = new
								 * SimpleDateFormat("DD-MON-YYYY HH:MI:SS");
								 * String formattedTime =
								 * dateFormat.format(loginTime1);
								 */
								// System.out.println("Login time: " +
								// formattedTime);
								DatabaseUtil.conn.close();
								out.print(getErrorMapJson("MOD-1003"));
								System.out.println("user already login::");
							} else {

								/* rs.close(); */
								/* out.print(jsonCorrectLogin); */
								out.print(jsonCorrectLogin);

								StringBuffer Querymenu = new StringBuffer(128);
								Querymenu.append(
										"SELECT DISTINCT Z.MAIN_MENU,Z.SUB_MENU_1,Z.SUB_MENU_2,Z.FUNCTION_ID FROM CUSTOM_SMVWS_ROLE_FUNCTION X,CUSTOM_SMVWS_CONSOLIDATED_USERROLE Y,CUSTOM_SMZB_FUNCTION_DESCRIPTION Z WHERE LANG_CODE='ENG' AND Y.ROLE_ID=X.ROLE_ID AND X.FUNCTION_ID=Z.FUNCTION_ID and USER_ID='");
								Querymenu.append(username + "' ");
								Querymenu.append(" AND LANG_CODE='" + lang_code + "'");
								System.out.println(Querymenu.toString());

								// here calling dbconnection
								// Connection ConnDB = dbConn.getConnection();
								// System.out.println("ConnDB" + ConnDB);
								// here create Statement for access the data
								// base
								// Statement stmtmenu =
								// ConnDB.createStatement();

								// Statement stmtmenu =
								// ConnDB.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
								// here ResultSet for retrive data from database
								// and
								// execute the
								// query
								ResultSet rsmenu = DatabaseUtil.executeQueryData1(Querymenu.toString(), "Y");
								// ResultSet rsmenu1 = rsmenu;
								// here count the column of table
								int columnCount = rsmenu.getMetaData().getColumnCount();
								System.out.println("columnCount::" + columnCount);
								// taking HashMap from store all row and column

								LinkedHashMap<String, List> dbData = new LinkedHashMap<>();
								int rowCountmul4 = 0;

								System.out.println("rsmenu:::" + rsmenu);

								// List rowValues = new ArrayList();
								// while (rsmenu.next()) {
								// rowValues.add(rsmenu.getString());
								// }

								for (int j = 1; j <= columnCount; j++) {

									dbData.computeIfAbsent(rsmenu.getMetaData().getColumnName(j),
											k -> new ArrayList<>());

									while (rsmenu.next()) {

										dbData.computeIfAbsent(rsmenu.getMetaData().getColumnName(j),
												k -> new ArrayList<>()).add(rsmenu.getString(j));
										rowCountmul4++;
									}

									/* rsmenu.beforeFirst(); */
									/* rsmenu.absolute(1); */
									/* rsmenu.close(); */
									/* rsmenu=rsmenu1; */
									// rsmenu.first();
									// rsmenu =
									// stmtmenu.executeQuery(Querymenu.toString());
									rsmenu.beforeFirst();
									/* rsmenu1=rsmenu; */

								}

								System.out.println(dbData);
								// here create object of json it will come from
								// org.json.jar file

								StringBuffer menuData = new StringBuffer();
								menuData.append("{");

								for (int y = 0; y < (rowCountmul4 / columnCount); y++) {
									// here print all data of table and put all
									// data
									// into json
									// object one by one key and value form
									for (Map.Entry<String, List> entry : dbData.entrySet()) {
										System.out.println("Key = " + entry.getKey() + ", Value = " + entry.getValue());

										if (entry.getKey().equals("MAIN_MENU")) {
											menuData.append("\"");
											menuData.append(entry.getValue().get(y));
											menuData.append("\"");
											menuData.append(":");
											menuData.append("{");

										}
										if (entry.getKey().equals("SUB_MENU_1")) {
											menuData.append("\"");
											menuData.append(entry.getValue().get(y));
											menuData.append("\"");
											menuData.append(":");
											menuData.append("{");

										}
										if (entry.getKey().equals("SUB_MENU_2")) {
											menuData.append("\"");
											menuData.append(entry.getValue().get(y));
											menuData.append("\"");
											menuData.append(":");

										}
										if (entry.getKey().equals("FUNCTION_ID")) {

											menuData.append("\"");
											menuData.append(entry.getValue().get(y));
											menuData.append("\"");

											menuData.append("}");
											menuData.append("}");
											if (y == (rowCountmul4 / columnCount) - 1) {

											} else {
												menuData.append(",");
											}

										}

									}
								}
								menuData.append("}");

								System.out.println(menuData.toString());

								StringBuilder Queryinformationlogin = new StringBuilder();
								Queryinformationlogin.append(
										"SELECT to_char(LAST_SIGNED_ON, 'DD-MON-YYYY HH24:MI:SS') AS LAST_LOGIN ,to_char(SYSTIMESTAMP,'HH24:MI:SS') AS CURRENT_TIME FROM CUSTOM_SMZB_USERLOG_DETAILS WHERE USER_ID='");
								Queryinformationlogin.append(username + "'");
								System.out.println("Queryinformationlogin::" + Queryinformationlogin.toString());

								ResultSet rs2 = DatabaseUtil.executeQueryData1(Queryinformationlogin.toString(), "N");

								Object infologin[] = new Object[2];

								while (rs2.next()) {
									infologin[0] = rs2.getString(1);
									infologin[1] = rs2.getString(2);
								}

								/*
								 * String jsoninformationlogin =
								 * "{\n\"LAST_LOGIN\" : \"" + infologin[0] +
								 * "\" ,\n" + "\"CURRENT_TIME\" :\"" +
								 * infologin[1] + "\"" + "\n }";
								 */

								/*
								 * System.out.println("jsoninformationlogin:" +
								 * jsoninformationlogin);
								 */
								if (request.getParameter("action").equals("LoginDetails")) {

								} else if (request.getParameter("action").equals("Login")) {
									StringBuffer query = new StringBuffer();
									query.append(
											"INSERT INTO current_users (USER_ID,ISLOGGEDIN, LAST_LOGIN) VALUES (?,?, sysdate)");
									// String query = "INSERT INTO current_users
									// (USER_ID,ISLOGGEDIN, LAST_LOGIN) VALUES
									// (?,?, sysdate)";
									// LocalDate myObj = LocalDate.now();
									// LocalTime myObj = LocalTime.now();
									System.out.println("mAHESHSHASHDHSADHSAD::" + query);

									PreparedStatement currnt_user_statement = DatabaseUtil
											.executeQueryData(query.toString(), "N");
									String a = "Y";
									currnt_user_statement.setString(1, username);
									currnt_user_statement.setString(2, a);

									System.out.println("mAHESHSHASHDHSADHSAD::" + query);
									/*
									 * statement.setString(2,
									 * formatter.format(sqlDate));
									 */

									// statement.executeQuery();
									currnt_user_statement.execute();
									/* response.sendRedirect("Welcome.jsp"); */
								}

								request.setAttribute("formattedTime", formattedTime);
								request.setAttribute("infologin0", infologin[0]);
								request.setAttribute("infologin1", infologin[1]);
								request.setAttribute("USER_NAME", user_name);
								request.setAttribute("menu_data", menuData.toString());
								/*
								 * response.getWriter().append(jsonCorrectLogin)
								 * ;
								 */

								RequestDispatcher rd = request.getRequestDispatcher("Welcome.jsp");
								rd.forward(request, response);

								break;
							}
						} else {
							/* out.print(jsonInCorrectPassLogin); */
							// DatabaseUtil.conn.close();

							// DatabaseUtil.conn.close();
							out.print(getErrorMapJson("MOD-1002"));

						}

					}
				}
			} catch (java.sql.SQLRecoverableException err) {
				response.setContentType("text/html");
				out.println("<script type=\"text/javascript\">");
				out.println("alert('Check Internet Connection');");
				out.println("</script>");

				RequestDispatcher rd = request.getRequestDispatcher("Login.jsp");
				rd.forward(request, response);
			}

			catch (Exception e) {
				System.out.print(e);
				e.printStackTrace();
			}

		}
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	JSONObject getErrorMapJson(String errCode) {

		StringBuffer dataJson = new StringBuffer();
		String data = null;
		try {

			File myObj = new File("C:/Users/VeereshRaghavendra/Downloads/Vrk/Vrk/Dynamic_Login_Page_updated/src/Config/errorMap.json");
			Scanner myReader = new Scanner(myObj);
			while (myReader.hasNextLine()) {
				data = myReader.nextLine();
				// System.out.println(data);
				dataJson.append(data);
			}
			myReader.close();
			// System.out.println("Data Json::" + dataJson.toString());
			JSONParser parser = new JSONParser();
			JSONObject json = (JSONObject) parser.parse(dataJson.toString());
			/* System.out.println(json.get("ERRORMAP")); */

			HashMap<String, List> datahashmap = new HashMap<>();
			HashMap<String, String> nestedJsonData = new HashMap<>();

			/*
			 * datahashmap.computeIfAbsent((String) json.get("table_name"), k ->
			 * new ArrayList<>()) .add(json.get("fields"));
			 */
			datahashmap.put("ERRORMAP", (List) json.get("ERRORMAP"));
			JSONObject jsonformData = new JSONObject();
			for (Map.Entry<String, List> entry : datahashmap.entrySet()) {
				// System.out.println("Key = " + entry.getKey() + ", Value = " +
				// entry.getValue());
				for (int i = 0; i < entry.getValue().size(); i++) {
					// System.out.println((Map) entry.getValue().get(i));
					for (Entry<String, List> entry1 : ((Map<String, List>) entry.getValue().get(i)).entrySet()) {
						// System.out.println("Key1 = " + entry1.getKey() + ",
						// Value1 = " + entry1.getValue());
						jsonformData.put(entry1.getKey(), entry1.getValue());
						if (entry1.getKey().equals(errCode)) {
							return (JSONObject) jsonformData.get(errCode);
						}
					}

				}
			}

			/*
			 * for (int i = 0; i < jsonformData.size(); i++) {
			 * System.out.println("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"+
			 * jsonformData.get("MOD-1001"));
			 * System.out.println(jsonformData.get("MOD-1002"));
			 * System.out.println(jsonformData.get("MOD-1001").equals(errCode));
			 * if (jsonformData.get("MOD-1001").equals(errCode))
			 * 
			 * { return (JSONObject) jsonformData.get("MOD-1001"); }
			 * 
			 * else if(jsonformData.get("MOD-1002").equals(errCode)) { return
			 * (JSONObject) jsonformData.get("MOD-1002");
			 * 
			 * }
			 * 
			 * 
			 * }
			 */

		} catch (Exception e) {

			e.printStackTrace();
		}

		return null;
	}

}
