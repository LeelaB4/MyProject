package com.fcub.login;

import java.sql.*;

import java.util.*;

public class DatabaseUtil {

	 static PropertiesFileRead propObject = new PropertiesFileRead();

	public static String DATABSE_URL;
	public static String DRIVER_PATH;
	public static String USERNAME;
	public static String PASSWORD;
	public static Connection conn;
	public static Statement stmt;
	public static PreparedStatement pstmt;

	// private static final String DRIVER_PATH =
	// "oracle.jdbc.driver.OracleDriver";
	// private static final String DATABSE_URL =
	// "jdbc:oracle:thin:@192.168.1.70:1521:MCBTRN";
	// private static final String DATABSE_URL =
	// "jdbc:oracle:thin:@103.195.246.118:1521:FCDB";
	// private static final String USERNAME = "custom";
	// private static final String PASSWORD = "custom";

	public DatabaseUtil() throws SQLException {
		try {

			PropertiesFileRead.readProperties();
			DATABSE_URL = PropertiesFileRead.DATABSE_URL;
			DRIVER_PATH = PropertiesFileRead.DRIVER_PATH;
			USERNAME = PropertiesFileRead.USERNAME;
			PASSWORD = PropertiesFileRead.PASSWORD;

			Class.forName(DRIVER_PATH);
			conn = DriverManager.getConnection(DATABSE_URL, USERNAME, PASSWORD);
			stmt = conn.createStatement();

		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}

	public static Connection getConnection() throws SQLException {
		PropertiesFileRead.readProperties();
		return conn = DriverManager.getConnection(DATABSE_URL, USERNAME, PASSWORD);
	}

	public static ResultSet executeQueryData1(String string, String creatPara) throws SQLException {
		System.out.println("Calling executeQueryData1");

		ArrayList<String> queries = new ArrayList<>();
		queries.add(string.toString());

		// conn.setAutoCommit(false);
		ResultSet rset = null;
		ResultSet rsetQueryData = null;
		Statement cre_stmt = null;
		PreparedStatement p_statement = null;
		try {
			if (creatPara.equals("Y")) {
				cre_stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
			} else {
				cre_stmt = conn.createStatement();
			}

			try {
				for (String q : queries) { // queries is an array containing the
											// 3 queries
					rset = cre_stmt.executeQuery(q);
					p_statement = conn.prepareStatement(q);
					p_statement.execute();
					try {
						rsetQueryData = rset;
					} catch (Exception e) {
						e.printStackTrace();
					} finally {
						rsetQueryData = rset;
					}
				}
			} finally {
				// rset.close();
				// stmt.close();
			}
		} finally {

		}
		return rsetQueryData;
	}

	public static PreparedStatement executeQueryData(String query1, String creatPara) throws SQLException {
		System.out.println("Calling executeQueryData");

		ArrayList<String> queries = new ArrayList<>();
		queries.add(query1.toString());

		// conn.setAutoCommit(false);
		ResultSet rset = null;
		@SuppressWarnings("unused")
		ResultSet rsetQueryData = null;
		PreparedStatement p_statement = null;
		//boolean query = false;
		Statement cre_stmt = null;
		try {
			if (creatPara.equals("Y")) {
				cre_stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
			}
			else if(creatPara.equals("N")){
				
				p_statement = conn.prepareStatement(query1.toString());
				
			}
			else {
				cre_stmt = conn.createStatement();
			}

			try {
				 
					if(creatPara.equals("N")){
						cre_stmt = conn.createStatement();
						//rset = p_statement.executeQuery();
						
					}else{					// 3 queries
					rset = cre_stmt.executeQuery(query1.toString());
					}
					
					// query=p_statement.execute();
					try {
						rsetQueryData = rset;
					} catch (Exception e) {
						e.printStackTrace();
					} finally {
						rsetQueryData = rset;
					}
				
			} finally {
			}
		} finally {

		}

		return p_statement;
	}
	
	

}
