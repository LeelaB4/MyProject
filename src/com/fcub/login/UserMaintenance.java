package com.fcub.login;

import java.io.IOException;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.text.SimpleDateFormat;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/UserMaintenance")
public class UserMaintenance extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		if (request.getParameter("method").equals("POST")) {
			java.util.Date date = new java.util.Date();
			java.sql.Date sqlDate = new Date(date.getTime());
			SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss aa");
			System.out.println(request.getParameter("CUST_NO"));
			int custid = Integer.parseInt(request.getParameter("CUST_NO"));
			System.out.println("custid:::::::::::::::::::::::: Post method::::" + custid);
			String name = request.getParameter("cust_name");
			String dob = request.getParameter("cust_dob");

			int salary = Integer.parseInt(request.getParameter("cust_salary"));
			String dept = request.getParameter("cust_dept");
			String maker = request.getParameter("cust_maker");
			/*
			 * String maker_dt_stamp=
			 * request.getParameter("cust_maker_dt_stamp");
			 */
			String maker_dt_stamp = formatter.format(sqlDate);
			String Approver = request.getParameter("cust_Approver");
			String Aprovertime = request.getParameter("cust_Aprovertime");
			System.out.println("Aprovertime::" + Aprovertime);
			String Status = request.getParameter("cust_Status");
			String Approver_statement = request.getParameter("cust_Approver_statement");
			String cust_Once_Auth = request.getParameter("cust_Once_Auth");

			String Query = "INSERT INTO STTM_CUSTOMERS VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,?)";

			try {

				//DatabaseUtil dbConn = new DatabaseUtil();
				PreparedStatement ps=DatabaseUtil.executeQueryData(Query.toString(),"N");
				//PreparedStatement ps = dbConn.conn.prepareStatement(Query);

				ps.setInt(1, custid);
				ps.setString(2, name);
				ps.setString(3, dob);
				ps.setInt(4, salary);
				ps.setString(5, dept);
				ps.setString(6, maker);
				ps.setString(7, maker_dt_stamp);
				ps.setString(8, Approver);
				ps.setString(9, Aprovertime);
				ps.setString(10, Status);
				ps.setString(11, Approver_statement);
				ps.setString(12, cust_Once_Auth);

				int count = ps.executeUpdate();

				System.out.println("Sucess Store::");

				String json_Status = "{\n\"status\" : \"" + "Sucess Store\" \n }";
				response.getOutputStream().print(json_Status);

			} catch (java.sql.SQLIntegrityConstraintViolationException e1) {
				// e1.printStackTrace();

				/*
				 * response.setContentType("text/html;charset=UTF-8");
				 * PrintWriter out=response.getWriter();
				 * out.println("<script type=\"text/javascript\">");
				 * out.println("alert('User Already Exist');");
				 * out.println("</script>");
				 */
				// response.setContentType("text/html;charset=UTF-8");
				// ServletOutputStream out = response.getOutputStream();
				String json_Status = "{\n\"status\" : \"" + "User Already Exist\" \n }";
				response.getOutputStream().print("User Already Exist");

			}

			catch (Exception e) {
				e.printStackTrace();
			}
		} else if (request.getParameter("method").equals("GET")) {
			int cust_nofeData = Integer.parseInt(request.getParameter("custid"));
			System.out.println("frontend data:::" + cust_nofeData);

			String json = null;
			String name = "";
			String dob = null;
			String salary = null;
			String dept = null;
			String maker = null;
			String maker_dt_stamp = null;
			String Approver = null;
			String Aprovertime = null;
			String Status = null;
			String Approver_statement = null;
			String cust_Once_Auth = null;

			try {
				//DatabaseUtil dbConn = new DatabaseUtil();
				//Statement stmt = dbConn.conn.createStatement();
				
				/*ResultSet rs = stmt.executeQuery(
						"select NAME,to_char(DOB, 'DD-MM-YYYY'),SALARY,DEPT,MAKER,to_char(MAKER_DT_STAMP, 'DD-MM-YYYY HH24:MI:SS'),APPROVER,to_char(APROVERTIME, 'DD-MM-YYYY HH24:MI:SS'),STATUS,APPROVER_STATEMENT,ONCE_AUTH  from sttm_customers where cust_no ="
								+ cust_nofeData);*/
				
				String query_tbl="select NAME,to_char(DOB, 'DD-MM-YYYY'),SALARY,DEPT,MAKER,to_char(MAKER_DT_STAMP, 'DD-MM-YYYY HH24:MI:SS'),APPROVER,to_char(APROVERTIME, 'DD-MM-YYYY HH24:MI:SS'),STATUS,APPROVER_STATEMENT,ONCE_AUTH  from sttm_customers where cust_no ="+ cust_nofeData;
				ResultSet rs =DatabaseUtil.executeQueryData1(query_tbl.toString(), "Y");

				while (rs.next()) {
					name = rs.getString(1);
					dob = rs.getString(2);
					salary = rs.getString(3);
					dept = rs.getString(4);
					maker = rs.getString(5);
					maker_dt_stamp = rs.getString(6);
					Approver = rs.getString(7);
					Aprovertime = rs.getString(8);
					Status = rs.getString(9);
					Approver_statement = rs.getString(10);
					cust_Once_Auth = rs.getString(11);
				}

			} catch (Exception e) {
				e.printStackTrace();
			}
			if (name.equals("")) {
				json=null;
			} else {
				json = "{\n\"cust_name\" : \"" + name + "\" ,\n " + "\"cust_dob\" : \"" + dob + "\" ,\n "
						+ "\"cust_salary\" : \"" + salary + "\" ,\n " + "\"cust_dept\" : \"" + dept + "\" ,\n "
						+ "\"cust_maker\" : \"" + maker + "\" ,\n " + "\"cust_maker_dt_stamp\" : \"" + maker_dt_stamp
						+ "\",\n" + "\"cust_Approver\" : \"" + Approver + "\" ,\n" + "\"cust_Aprovertime\" : \""
						+ Aprovertime + "\",\n" + "\"cust_Status\" : \"" + Status + "\",\n"
						+ "\"cust_Approver_statement\" : \"" + Approver_statement + "\",\n" + "\"cust_Once_Auth\" : \""
						+ cust_Once_Auth + "\"\n}";
			}

			System.out.println("Json Get::"+json);

			response.getOutputStream().println(json);
		} else if (request.getParameter("method").equals("UPDATE")) {
			java.util.Date date = new java.util.Date();
			java.sql.Date sqlDate = new Date(date.getTime());
			System.out.println("sqlDate::" + sqlDate);

			SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss aa");

			System.out.println("Date::::::" + formatter.format(date));

			int custid = Integer.parseInt(request.getParameter("custid"));
			System.out.println("custid:" + custid);
			String name = request.getParameter("cust_name");
			System.out.println("name:" + name);
			String dob = request.getParameter("cust_dob");

			System.out.println("dob:" + dob);
			int salary = Integer.parseInt(request.getParameter("cust_salary"));
			System.out.println("salary:" + salary);
			String dept = request.getParameter("cust_dept");
			System.out.println("dept:" + dept);
			String maker = request.getParameter("cust_maker");
			System.out.println("maker:" + maker);
			String maker_dt_stamp = formatter.format(date);
			System.out.println("maker_dt_stamp:" + maker_dt_stamp);
			String Approver = request.getParameter("cust_Approver");
			System.out.println("Approver:" + Approver);
			String Aprovertime = "";
			System.out.println("Aprovertime:" + Aprovertime);
			String Status = request.getParameter("cust_Status");
			System.out.println("Status:" + Status);
			String Approver_statement = request.getParameter("cust_Approver_statement");
			System.out.println("Approver_statement:" + Approver_statement);

			String cust_Once_Auth = request.getParameter("cust_Once_Auth");

			String QueryUpdate = "UPDATE sttm_customers SET NAME = '" + name + "', DOB='" + dob + "'" + ", SALARY=" + salary
					+ " , ONCE_AUTH='" + cust_Once_Auth + "'" + ", DEPT='" + dept + "', MAKER='" + maker
					+ "', MAKER_DT_STAMP='" + maker_dt_stamp + "'  , STATUS='" + Status + "' , APPROVER_STATEMENT='"
					+ Approver_statement + "' WHERE CUST_NO=" + custid;

			System.out.println("QueryUpdate:::" + QueryUpdate);
			try {
				//DatabaseUtil dbConn = new DatabaseUtil();
				//PreparedStatement ps = dbConn.conn.prepareStatement(Query);
				PreparedStatement ps=DatabaseUtil.executeQueryData(QueryUpdate.toString(),"N");
				ps.execute();
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else if (request.getParameter("method").equals("DELETE")) {
			int cust_nofeData = Integer.parseInt(request.getParameter("custid"));
			System.out.println("frontend data:::" + cust_nofeData);
			String QueryDelete = "DELETE FROM STTM_CUSTOMERS WHERE CUST_NO=" + cust_nofeData;

			try {

				//DatabaseUtil dbConn = new DatabaseUtil();

				/*PreparedStatement stmt = dbConn.conn.prepareStatement(Query);
				stmt.execute();*/
				
				PreparedStatement stmt=DatabaseUtil.executeQueryData(QueryDelete.toString(),"N");
				stmt.execute();
				System.out.println("Sucess Deleted");

				DatabaseUtil.conn.commit();

			} catch (Exception e) {
				e.printStackTrace();
			}
		} else if (request.getParameter("method").equals("APPROVE")) {

			System.out.println("calling method approve::");

			java.util.Date date = new java.util.Date();
			java.sql.Date sqlDate = new Date(date.getTime());
			SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss");

			int custid = Integer.parseInt(request.getParameter("custid"));
			String cust_Once_Auth = request.getParameter("cust_Once_Auth");
			String cust_Approver_statement = request.getParameter("cust_Approver_statement");
			String cust_Approver = request.getParameter("cust_Approver");
			/*
			 * String cust_Aprovertime=request.getParameter("cust_Aprovertime");
			 */

			String QueryApprove = " UPDATE sttm_customers SET APPROVER= '" + cust_Approver + "' , APROVERTIME= '"
					+ formatter.format(date) + "' ," + "APPROVER_STATEMENT='" + cust_Approver_statement
					+ "' , ONCE_AUTH='" + cust_Once_Auth + "'" + " WHERE CUST_NO=" + custid;
			System.out.println("QueryApprove:::" + QueryApprove);
			System.out.println("SUCESS");

			try {
				//DatabaseUtil dbConn = new DatabaseUtil();
				//PreparedStatement ps = dbConn.conn.prepareStatement(Query);
				PreparedStatement ps=DatabaseUtil.executeQueryData(QueryApprove.toString(),"N");
				ps.execute();
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else if (request.getParameter("method").equals("CLOSE")) {
			int custId = Integer.parseInt(request.getParameter("custid"));
			String cust_Status = request.getParameter("cust_Status");

			String QueryClose = " UPDATE sttm_customers SET STATUS='" + cust_Status + "' WHERE CUST_NO=" + custId;
			System.out.println("QueryClose:::" + QueryClose);
			System.out.println("SUCESS CLOSE");

			try {
				//DatabaseUtil dbConn = new DatabaseUtil();
				//PreparedStatement ps = dbConn.conn.prepareStatement(Query);
				PreparedStatement ps=DatabaseUtil.executeQueryData(QueryClose.toString(),"N");
				ps.execute();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);
	}

}
