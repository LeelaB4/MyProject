package com.fcub.lov;

import java.io.IOException;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import com.fcub.login.DatabaseUtil;

@WebServlet("/LovServlet1")
public class LovServlet1 extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@SuppressWarnings({ "unchecked", "rawtypes", "unused" })
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		System.out.println("getLogField::" + request.getParameter("getLogField"));
		String getLogField = request.getParameter("getLogField");
		//DatabaseUtil dbConn = null;
		//Connection con = null;
		if (getLogField.equals("Field")) {
			String fetchDataValue = request.getQueryString();
		/*	try {
				//dbConn = new DatabaseUtil();
				//con = dbConn.getConnection();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}*/

			String lov_id = request.getParameter("lov_id");
			String function_id = request.getParameter("function_id");
			System.out.println("fetchDataValue:::" + fetchDataValue);
			if (fetchDataValue == null) {
				fetchDataValue = "";
			}

			try {

				/*
				 * Class.forName("oracle.jdbc.driver.OracleDriver"); String url
				 * = "jdbc:oracle:thin:@10.25.0.46:1541:FCUBTRAIN01"; String
				 * userDB = "CUSTOMDEV"; String passDB = "CUSTOMDEV123";
				 * Connection con = DriverManager.getConnection(url, userDB,
				 * passDB);
				 */
				
				
				
				
				/*Statement stmt = con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
				Statement stmt2 = con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
				Statement stmt3 = con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);*/
				/*Statement stmt = con.createStatement();
				Statement stmt2 = con.createStatement();
				Statement stmt3 = con.createStatement();*/

				String tableName = fetchDataValue;
				StringBuffer query = new StringBuffer();
				query.append("select lov_query from custom_cstb_lov_info where lov_id='");
				query.append(lov_id);
				query.append("'");
				query.append(" AND ");
				query.append("function_id ='");
				query.append(function_id);
				query.append("'");

				// String query = "select lov_query from custom_cstb_lov_info
				// where lov_id='" + fetchDataValue + "'";
				System.out.println("query::" + query);
				// String query = "select * from role_master where role_id like
				// '" +
				// "%" + fetchDataValue + "'";
				
				
				ResultSet rs = DatabaseUtil.executeQueryData1(query.toString(), "Y");
				//ResultSet rs = stmt.executeQuery(query.toString());
				

				ArrayList<String> lovQueryArr = new ArrayList<>();

				while (rs.next()) {
					// System.out.println(rs.getString(1));
					lovQueryArr.add(rs.getString(1));
					break;

				}

				for (Object q : lovQueryArr) {
					System.out.println(q.toString());
				}
				DatabaseUtil.executeQueryData1(query.toString(), "Y");
				
				ResultSet rs2 = DatabaseUtil.executeQueryData1(rs.getString(1), "Y");;
				
				/*ResultSet rs2 = stmt2.executeQuery(rs.getString(1));*/

				int columnCount = rs2.getMetaData().getColumnCount();
				String colName[] = new String[columnCount];
				for (int i = 1; i <= columnCount; i++) {
					colName[i - 1] = rs2.getMetaData().getColumnName(i);
				}
				// String mahesh=lovQueryArr.get(0).toString();

				System.out.println("colName:::" + "  " + colName.length);

				StringBuffer sb = new StringBuffer();
				sb.append("SELECT * FROM ( ");
				sb.append(rs.getString(1));
				sb.append(" ) ");
				sb.append("WHERE ");

				String a = " like '%'";

				for (int j = 0; j < colName.length; j++) {
					sb.append(colName[j]);
					sb.append(a);
					sb.append(" ");
					if (j >= (colName.length - 1)) {

					} else {
						sb.append(" AND ");
					}

				}

				System.out.println("Final Query::" + sb);

				// String query ="select distinct lov_query from cstb_lov_info
				// where
				// lov_id='LOV_SERVICE'";

				// select * from (select * from role_master where role_id =1000)
				// where rolle='%I%'

				// String query = "select * from role_master where role_id like
				// '" +
				// "%" + fetchDataValue + "'";
				
				ResultSet rs3 = DatabaseUtil.executeQueryData1(sb.toString(), "Y");
//				ResultSet rs3 = stmt3.executeQuery(sb.toString());

				int columnCount1 = rs3.getMetaData().getColumnCount();
				System.out.println("columnCount1::" + columnCount1);

				LinkedHashMap<String, List> dbData = new LinkedHashMap<>();
				for (int j = 1; j <= columnCount1; j++) {
					dbData.computeIfAbsent(rs3.getMetaData().getColumnName(j), k -> new ArrayList<>()).add(null);

					/*
					 * while (rs3.next()) {
					 * 
					 * dbData.computeIfAbsent(rs3.getMetaData().getColumnName(j)
					 * , k -> new ArrayList<>()) .add(rs3.getString(j));
					 * 
					 * } rs3.close(); rs3 = stmt3.executeQuery(sb.toString());
					 */
				}

				System.out.println("dbData:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::"
						+ dbData.toString());

				//JSONObject json = new JSONObject();
				StringBuffer jsonData = new StringBuffer();
				int y = 0;
				jsonData.append("{");
				for (Map.Entry<String, List> entry : dbData.entrySet()) {
					System.out.println("Key = " + entry.getKey() + ", Value = " + entry.getValue());

					jsonData.append("\"");
					jsonData.append(entry.getKey());
					jsonData.append("\"");
					jsonData.append(":");
					jsonData.append("[");
					for (int i = 0; i < entry.getValue().size(); i++) {
						jsonData.append("\"");
						jsonData.append(entry.getValue().get(i));
						jsonData.append("\"");
						if (i == entry.getValue().size() - 1) {

						} else {
							jsonData.append(",");
						}
					}
					jsonData.append("]");
					y++;

					if (y == columnCount) {

					} else {
						jsonData.append(",");
					}

				}
				jsonData.append("}");
				response.setContentType("application/json");
				response.setCharacterEncoding("UTF-8");

				System.out.println("Json form db data" + jsonData.toString());

				request.setAttribute("dbData", jsonData.toString());
				request.setAttribute("tablename", tableName);

				request.setAttribute("LovQuery", sb.toString());

				RequestDispatcher rd = request.getRequestDispatcher("/Role.jsp");
				rd.forward(request, response);

			} catch (Exception e) {
				e.printStackTrace();
			}
		} else if (getLogField.equals("filterData")) {

			/*try {
				dbConn = new DatabaseUtil();

				con = dbConn.getConnection();
			} catch (SQLException e1) {

				e1.printStackTrace();
			}*/

			System.out.println("helloooooooo");
			System.out.println("Calling filterData");
			String fetchDataValue2 = request.getQueryString();
			String f1 = fetchDataValue2.replace("%20", " ");
			String f2 = f1.replace("%27", "'");
			String f3 = f2.replace("getLogField=filterData&", " ");

			System.out.println("Mahesh        ::::" + f3);
			System.out.println("Mahesh:" + f2);
			System.out.println("fetchDataValue2:::" + f3);
			if (fetchDataValue2 == null) {
				fetchDataValue2 = "";
			}

			try {

				/*
				 * Class.forName("oracle.jdbc.driver.OracleDriver"); String url
				 * = "jdbc:oracle:thin:@10.25.0.46:1541:FCUBTRAIN01"; String
				 * userDB = "CUSTOMDEV"; String passDB = "CUSTOMDEV123";
				 * Connection con = DriverManager.getConnection(url, userDB,
				 * passDB);
				 */
				//DatabaseUtil.executeQueryData1(sb.toString(), "Y");
				//Statement stmtfil = con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
				
				//Statement stmtfil = con.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
				//Statement stmtfil = con.createStatement();

				String tableName = f3;

				String query = f3;

				System.out.println("query::" + query);
				// String query = "select * from role_master where role_id like
				// '" +
				// "%" + fetchDataValue + "'";
				//DatabaseUtil.executeQueryData1(sb.toString(), "Y");
				ResultSet rs = DatabaseUtil.executeQueryData1(query.toString(), "Y");;
				/*ResultSet rs = stmtfil.executeQuery(query);*/

				int columnCount = rs.getMetaData().getColumnCount();
				System.out.println("columnCount::" + columnCount);

				LinkedHashMap<String, List> dbData = new LinkedHashMap<>();
				for (int j = 1; j <= columnCount; j++) {

					dbData.computeIfAbsent(rs.getMetaData().getColumnName(j), k -> new ArrayList<>());

					while (rs.next()) {

						dbData.computeIfAbsent(rs.getMetaData().getColumnName(j), k -> new ArrayList<>())
								.add(rs.getString(j));

					}
					rs.beforeFirst();
					
				}

				System.out.println(dbData);

				JSONObject json = new JSONObject();
				StringBuffer jsonData = new StringBuffer();
				int y = 0;
				jsonData.append("{");
				for (Map.Entry<String, List> entry : dbData.entrySet()) {
					System.out.println("Key = " + entry.getKey() + ", Value = " + entry.getValue());

					jsonData.append("\"");
					jsonData.append(entry.getKey());
					jsonData.append("\"");
					jsonData.append(":");
					jsonData.append("[");
					for (int i = 0; i < entry.getValue().size(); i++) {
						jsonData.append("\"");
						jsonData.append(entry.getValue().get(i));
						jsonData.append("\"");
						if (i == entry.getValue().size() - 1) {

						} else {
							jsonData.append(",");
						}
					}
					jsonData.append("]");
					y++;

					if (y == columnCount) {

					} else {
						jsonData.append(",");
					}

				}
				jsonData.append("}");
				response.setContentType("application/json");
				response.setCharacterEncoding("UTF-8");
				DatabaseUtil.conn.setAutoCommit(false);
				DatabaseUtil.conn.commit();
			     
				
				
				rs.close();
				
				System.out.println(json.toString(2));

				request.setAttribute("dbData", jsonData.toString());
				request.setAttribute("tablename", tableName);

				RequestDispatcher rd = request.getRequestDispatcher("/dataDb.jsp");
				rd.forward(request, response);

			} catch (Exception e) {
				e.printStackTrace();
			}
			finally{
				/*try {
					
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}*/
			}
		}

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);
	}

}
