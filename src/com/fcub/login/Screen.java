package com.fcub.login;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.PasswordAuthentication;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Time;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
import java.util.Map.Entry;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

/**
 * Servlet implementation class Practic
 */
@WebServlet("/Screen")
public class Screen extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String function_id = request.getParameter("function_id");
		StringBuffer dataJson = new StringBuffer();
		String data = null;
		/*
		 * StringBuffer query1 = new StringBuffer(); StringBuffer query2 = new
		 * StringBuffer();
		 */
		// LinkedHashMap<Integer, String> frontendData1 = new
		// LinkedHashMap<>();

		// List<String> rdata = new ArrayList<>();

		HashMap<String, List> insertmap1 = new HashMap<>();

		StringBuffer queryDyanamic = new StringBuffer();
		HashMap<Integer, String> frontendData1 = new HashMap<>();
		List<String> m2 = new ArrayList<>();
		List<String> fields = new ArrayList<>();
		List<String> column = new ArrayList<>();
		List<String> Role_fields = new ArrayList<>();
		List<String> Role_column = new ArrayList<>();
		List<String> Role_incremental_fields = new ArrayList<>();
		List<String> Role_column2 = new ArrayList<>();
		List<String> get_Table_Fields = new ArrayList<>();
		List<String> get_Table_Column = new ArrayList<>();
		List<String> allFrontEndFields = new ArrayList<>();
		List<String> allFrontEndFields1 = new ArrayList<>();

		List<String> get_Table_FieldsRelationTo_parentTable = new ArrayList<>();
		List<String> get_Table_ColumnRelationTo_parentTable = new ArrayList<>();

		ArrayList<String> al1 = new ArrayList<>(); // parent Table Backend Data

		ArrayList<String> al2 = new ArrayList<>(); // Dynamic Table Backend Data

		// List<String> get_Table_Relation = new ArrayList<>();
		StringBuffer jsonFrontEnd = new StringBuffer();
		LinkedHashMap<String, HashMap<String, String>> data1 = null;
		LinkedHashMap<String, HashMap<String, String>> Role_data = null;
		LinkedHashMap<String, HashMap<String, String>> role_increment_Data = new LinkedHashMap<>();
		LinkedHashMap<String, HashMap<String, String>> Get_Table_Relation_data = new LinkedHashMap<>();
		LinkedHashMap<String, HashMap<String, String>> Get_Table_Relation_dataOf_parenTable = new LinkedHashMap<>();
		LinkedHashMap<String, HashMap<String, String>> view_block_parentTable_data = new LinkedHashMap<>();
		LinkedHashMap<String, HashMap<String, String>> view_block_dynamicTable_data = new LinkedHashMap<>();

		String parentTable = null;
		String parentTable_primarykey = null;
		String get_table_primaryKey = null;
		String dynamic_table1_primaryKey = null;
		String dynamic_table1 = null;
		String get_Table1 = null;
		String get_table_relationToParentTable = null;
		int countValue = 0;
		String Field_OfPrimaryKey = null;
		String get_table_relationToParentTable_primaryKey = null;
		JSONObject json_dynamic_table_relation = new JSONObject();
		JSONObject view_json_fields = new JSONObject();

		int r1 = 0;

		int r2 = 0;

		/* HashMap<String, List> insertmap2 = new HashMap<>(); */

		if (request.getParameter("method").equals("POST")) {

			System.out.println("Inserting------------");
			try {
				File f = new File(
						"C:/Users/Yashvanth/Desktop/New folder/Dynamic_Login_Page_updated/WebContent/JsonScreen/"
								+ function_id + ".json");
				Scanner myReader = new Scanner(f);
				while (myReader.hasNextLine()) {
					data = myReader.nextLine();
					System.out.println(data);
					dataJson.append(data);
				}
				myReader.close();

				// System.out.println("Data Json::" + dataJson.toString());//
				// assigning
				// data's
				// in
				// one
				// line
				JSONParser parser = new JSONParser();// string to javascript

				JSONObject json = (JSONObject) parser.parse(dataJson.toString());

				System.out.println("BLOCK Object creation");

				String Field_mapping = json.get("BLOCK").toString();

				JSONObject json_fields = (JSONObject) parser.parse(Field_mapping);

				System.out.println("json_fields---" + json_fields);

				System.out.println("Relation object ");

				String Relation = json.get("Relations").toString();

				JSONObject json_relation = (JSONObject) parser.parse(Relation);

				System.out.println("json_relation " + json_relation);

				System.out.println("==========================================================");

				System.out.println("checking  Parent_Table_Relation--- ");

				if (json_relation.containsKey("Parent_Table_Relation")) {

					System.out.println("Parent_Table_Relation Object creation");

					String Parent_Table_Relation = json_relation.get("Parent_Table_Relation").toString();

					JSONObject json_Parent_Table_Relation = (JSONObject) parser.parse(Parent_Table_Relation);

					// String tabledata=(String)
					// json_fields.get("sttm_customers1");

					parentTable = (String) json_Parent_Table_Relation.get("parent_table");

					System.out.println("parentTable  " + parentTable);

					parentTable_primarykey = (String) json_Parent_Table_Relation.get(parentTable);
					System.out.println("parentTable_primarykey " + parentTable_primarykey);

					String BLK_parentTable = json_fields.get("BLK_" + parentTable).toString();

					JSONObject json_BLK_parentTable = (JSONObject) parser.parse(BLK_parentTable);

					System.out.println("json_BLK_parentTable---" + json_BLK_parentTable);

					Field_OfPrimaryKey = (String) json_BLK_parentTable.get(parentTable_primarykey);

					System.out.println("Field_OfPrimaryKey-------------" + Field_OfPrimaryKey);

					data1 = new LinkedHashMap<>();

					data1.put("BLK_" + parentTable, (HashMap<String, String>) json_fields.get("BLK_" + parentTable));

					System.out.println("data1:::" + data1);

					for (Entry<String, HashMap<String, String>> entry : data1.entrySet()) {

						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (int i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */

							for (Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									column.add(entry1.getKey());
									fields.add(entry1.getValue());
								}
							}

						}

					}
				}

				System.out.println("fields======================== " + fields);

				List<String> frontEndvalues1 = new ArrayList<>();
				for (int i = 0; i < fields.size(); i++) {
					System.out.println("fields---" + fields.get(i) + " column----" + column.get(i));
				}

				/// String parentTable_variable = parentTable ;

				// System.out.println(parentTable_variable);

				for (int i = 0; i < fields.size(); i++) {
					System.out.println(" column----" + column.get(i) + ":" + request.getParameter(fields.get(i)));

				}

				// System.out.println("queryDyanamic----------------" +
				// queryDyanamic.toString());

				for (int i = 0; i < fields.size(); i++) {

					System.out.println("================================");

					String Data = request.getParameter(fields.get(i));

					if (Data != null) {
						frontEndvalues1.add(Data);
					} else {
						frontEndvalues1.add("");
					}
					// Move to the next column index
				}

				System.out.println("frontEndvalues1--" + frontEndvalues1);

				StringBuffer parentQuery = new StringBuffer();
				parentQuery.append("INSERT INTO ");
				parentQuery.append(parentTable.toUpperCase() + "(");
				for (int i = 0; i < column.size(); i++) {
					parentQuery.append(column.get(i));

					if (column.size() - 1 == i) {

					} else {
						parentQuery.append(",");
					}

				}
				parentQuery.append(")");

				parentQuery.append(" values (");

				for (int i = 0; i < fields.size(); i++) {
					parentQuery.append("'");
					parentQuery.append(frontEndvalues1.get(i));
					parentQuery.append("'");
					if (fields.size() - 1 == i) {

					} else {
						parentQuery.append(",");

					}

				}
				parentQuery.append(")");

				for (int i = 0; i < frontEndvalues1.size(); i++) {
					System.out.println(" column----" + column.get(i) + ":" + frontEndvalues1.get(i));

				}

				System.out.println("queryDyanamic1---" + parentQuery.toString());

				try {

					PreparedStatement pstm = DatabaseUtil.executeQueryData(parentQuery.toString(), "N");
					pstm.execute();
					System.out.println("Successfully inserted");

					// stmt1.execute(parentQuery.toString());

				}

				catch (java.sql.SQLIntegrityConstraintViolationException e1) {

					e1.printStackTrace();

				} catch (SQLException e) {

					// TODO Auto-generated catch block

					e.printStackTrace();

				}

				System.out.println(queryDyanamic.toString());

				if (json_relation.containsKey("DYNAMIC_TABLE_RELATION")) {

					System.out.println("DYNAMIC_BLOCK creation");

					String dynamic_block_relation = json.get("DYNAMIC_BLOCK").toString();

					JSONObject json_dynamic_block_relation = (JSONObject) parser.parse(dynamic_block_relation);

					System.out
							.println("==============================================================================");

					System.out.println("DYNAMIC_TABLE_RELATION Object  creation");

					String dynamic_table_relation = json_relation.get("DYNAMIC_TABLE_RELATION").toString();
					System.out.println(dynamic_table_relation);

					json_dynamic_table_relation = (JSONObject) parser.parse(dynamic_table_relation);

					System.out.println("taking dynamic_table name");

					dynamic_table1 = (String) json_dynamic_table_relation.get("DYNAMIC_TABLE1");
					System.out.println(dynamic_table1);

					Role_data = new LinkedHashMap<>();

					Role_data.put("BLK_" + dynamic_table1,
							(HashMap<String, String>) json_dynamic_block_relation.get("BLK_" + dynamic_table1));

					System.out.println("Role_data---" + Role_data);

					for (Entry<String, HashMap<String, String>> entry1 : Role_data.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry1.getKey() + ", Value1 = " + entry1.getValue());
						for (i = 0; i < entry1.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Entry<String, String> entry11 : entry1.getValue().entrySet()) {

								if (i < 1) {
									System.out
											.println("Key2= " + entry11.getKey() + ", Value2 = " + entry11.getValue());

									Role_column.add(entry11.getKey());
									Role_fields.add(entry11.getValue());
								}
							}
						}

					}

					System.out.println(Role_fields);
					System.out.println(Role_column);

					StringBuffer q2 = new StringBuffer();

					role_increment_Data.put("BLK2_" + dynamic_table1,
							(HashMap<String, String>) json_dynamic_block_relation.get("BLK2_" + dynamic_table1));

					for (Entry<String, HashMap<String, String>> entry : role_increment_Data.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									Role_column2.add(entry1.getKey());
									Role_incremental_fields.add(entry1.getValue());
								}
							}
						}

					}

				}

				System.out.println("Role_incremental_fields--" + Role_incremental_fields);
				System.out.println("Role_column2--" + Role_column2);

				// StringBuffer q2 = new StringBuffer();
				// boolean childtable = false;

				boolean DYNAMIC_TABLE1 = false;

				List<String> l2 = new ArrayList<>();

				for (int i = 0; i < json_dynamic_table_relation.size(); i++) {

					l2.add("DYNAMIC_TABLE" + i);

					if (l2.contains("DYNAMIC_TABLE1")) {
						DYNAMIC_TABLE1 = true;

					}

					/*
					 * if (json.containsKey("child_table" + i)) { childtable =
					 * true; // System.out.println("child tables //
					 * :::"+json.get("child_table"+i));
					 * 
					 * }
					 */
				}
				System.out.println(l2);
				System.out.println("DYNAMIC_TABLE1--" + DYNAMIC_TABLE1);

				if (DYNAMIC_TABLE1 == true) {

					System.out.println("Inside the Condtion");

					StringBuffer q21 = new StringBuffer();

					q21.append("INSERT");
					q21.append(" INTO ");
					q21.append(dynamic_table1);

					q21.append(" (");
					for (int i = 0; i < Role_column.size(); i++) {
						q21.append(Role_column.get(i));
						if (Role_column.size() - 1 == i) {

						} else {
							q21.append(",");
						}
					}

					q21.append(",");
					for (int i = 0; i < Role_column2.size(); i++) {
						q21.append(Role_column2.get(i));
						if (Role_column2.size() - 1 == i) {

						} else {
							q21.append(",");
						}
					}

					q21.append(")");
					q21.append(" VALUES");
					List<String> psq21 = new ArrayList<>();
					String frontEndcountRow = request.getParameter("countRow");

					System.out.println("frontEndcountRow--" + frontEndcountRow);

					countValue = Integer.parseInt(frontEndcountRow);

					System.out.println(countValue);
					for (int i = 0; i < countValue; i++) {
						StringBuffer qq21 = new StringBuffer();
						qq21.append(q21.toString());
						qq21.append("(");

						for (int j = 0; j < Role_fields.size(); j++) {
							qq21.append("'");
							qq21.append(request.getParameter(Role_fields.get(j)));
							qq21.append("'");
							if (Role_fields.size() - 1 == j) {

							}

							else {
								qq21.append(",");
							}
						}

						qq21.append(",");
						for (int k = 0; k < Role_incremental_fields.size(); k++) {
							qq21.append("'");
							qq21.append(request.getParameter(Role_incremental_fields.get(k) + i));
							qq21.append("'");
							if (Role_incremental_fields.size() - 1 == k) {

							} else {
								qq21.append(",");
							}
						}

						qq21.append(")");

						psq21.add(qq21.toString());
					}

					try {

						for (String s1 : psq21) {

							PreparedStatement pstm = DatabaseUtil.executeQueryData(s1.toString(), "N");
							pstm.execute();

							System.out.println("role_date Stored");
						}

					} catch (java.sql.SQLIntegrityConstraintViolationException e1) {

						e1.printStackTrace();

					} catch (SQLException e) {
						e.printStackTrace();

					}

				}

				// System.out.println(q2.toString());

				// System.out.println("Get-----");

				// select distinct u.role_id,r.role_desc from
				// sttm_customers1 s
				// ,user_role1 u,role_master r where u.role_id=r.role_id and
				// u.cust_id =""

				/// select USER_ROLE1.Role_ID,ROLE_MASTER.Role_Desc from
				/// sttm_customers1 sttm_customers1,USER_ROLE1
				/// USER_ROLE1,ROLE_MASTER ROLE_MASTER
				// WHERE USER_ROLE1.CUST_ID= sttm_customers1.CUST_ID AND
				/// USER_ROLE1.ROLE_ID=ROLE_MASTER.ROLE_ID AND
				/// sttm_customers1.CUST_ID = '1'

				// Role_query.append();

			} catch (FileNotFoundException e) {

				System.out.println("An error occurred.");

				e.printStackTrace();

			} catch (ParseException e) {

				// TODO Auto-generated catch block

				e.printStackTrace();

			}

		}

		if (request.getParameter("method").equals("getFrontEndData")) {

			System.out.println("getFrontEndData");

			try {
				File f = new File(
						"C:/Users/Yashvanth/Desktop/New folder/Dynamic_Login_Page_updated/WebContent/JsonScreen/"
								+ function_id + ".json");
				Scanner myReader = new Scanner(f);
				while (myReader.hasNextLine()) {
					data = myReader.nextLine();
					System.out.println(data);
					dataJson.append(data);
				}
				myReader.close();

				JSONParser parser = new JSONParser();// string to javascript

				JSONObject json = (JSONObject) parser.parse(dataJson.toString());
				System.out.println("BLOCK Object creation");

				String Field_mapping = json.get("BLOCK").toString();

				System.out.println("Field_mapping-------" + Field_mapping.toString());

				JSONObject json_fields = (JSONObject) parser.parse(Field_mapping);

				System.out.println("json_fields------" + json_fields.toString());

				System.out.println(
						"--------------------------------------------------------------------------------------------");

				System.out.println("Relation object ");

				String Relation = json.get("Relations").toString();

				JSONObject json_relation = (JSONObject) parser.parse(Relation);

				System.out.println("json_relation " + json_relation);

				System.out.println("==========================================================");

				if (json_relation.containsKey("Parent_Table_Relation")) {

					System.out.println("Parent_Table_Relation Object  creation");

					String Parent_Table_Relation = json_relation.get("Parent_Table_Relation").toString();

					JSONObject json_Parent_Table_Relation = (JSONObject) parser.parse(Parent_Table_Relation);

					// String tabledata=(String)
					// json_fields.get("sttm_customers1");

					System.out.println("json_Parent_Table_Relation==" + json_Parent_Table_Relation);

					System.out.println("==========================================================");

					System.out.println("Get ParentTable");
					parentTable = (String) json_Parent_Table_Relation.get("parent_table");

					System.out.println("parentTable  " + parentTable);

					System.out.println("----------------------------------------------------------");

					data1 = new LinkedHashMap<>();

					System.out.println("Get parentTable fields and coloumns");

					data1.put("BLK_" + parentTable, (HashMap<String, String>) json_fields.get("BLK_" + parentTable));

					System.out.println("data1=====" + data1);

					for (Map.Entry<String, HashMap<String, String>> entry : data1.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Map.Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									System.out.println(entry1.getKey());
									column.add(entry1.getKey());
									fields.add(entry1.getValue());
								}
							}

						}

					}

					for (int i = 0; i < fields.size(); i++) {
						System.out.println("fields---" + fields.get(i) + " column----" + column.get(i));
					}

					System.out.println(
							"------------------------------------------------------------------------------------");

					System.out.println();

					/// String parentTable_variable = parentTable ;

					// System.out.println(parentTable_variable);

					System.out.println("get parentTable_primarykey");

					parentTable_primarykey = (String) json_Parent_Table_Relation.get(parentTable);
					System.out.println("parentTable_primarykey " + parentTable_primarykey);

					String BLK_parentTable = json_fields.get("BLK_" + parentTable).toString();

					JSONObject json_BLK_parentTable = (JSONObject) parser.parse(BLK_parentTable);

					System.out.println("json_BLK_parentTable---" + json_BLK_parentTable);

					Field_OfPrimaryKey = (String) json_BLK_parentTable.get(parentTable_primarykey);

					System.out.println("Field_OfPrimaryKey-------------" + Field_OfPrimaryKey);

					column.remove(parentTable_primarykey);
					fields.remove(Field_OfPrimaryKey);

				}

				System.out.println("-------------------------------------------------------------------------");

				for (int i = 0; i < fields.size(); i++) {
					m2.add(request.getParameter(fields.get(i)));
					System.out.println(fields.get(i) + "--->" + m2.get(i));

				}

				System.out.println("FrontEnd Fields " + m2);

			} catch (FileNotFoundException e) {

				System.out.println("An error occurred.");

				e.printStackTrace();

			} catch (ParseException e) {

				// TODO Auto-generated catch block

				e.printStackTrace();

			}

		}

		if (request.getParameter("method").equals("GET")) {

			System.out.println("GET------------");
			try {
				File f = new File(
						"C:/Users/Yashvanth/Desktop/New folder/Dynamic_Login_Page_updated/WebContent/JsonScreen/"
								+ function_id + ".json");
				Scanner myReader = new Scanner(f);
				while (myReader.hasNextLine()) {
					data = myReader.nextLine();
					System.out.println(data);
					dataJson.append(data);
				}
				myReader.close();

				JSONParser parser = new JSONParser();// string to javascript

				JSONObject json = (JSONObject) parser.parse(dataJson.toString());
				System.out.println("BLOCK Object creation");

				String Field_mapping = json.get("BLOCK").toString();

				System.out.println("Field_mapping-------" + Field_mapping.toString());

				JSONObject json_fields = (JSONObject) parser.parse(Field_mapping);

				System.out.println("json_fields------" + json_fields.toString());

				System.out.println(
						"--------------------------------------------------------------------------------------------");

				System.out.println("VIEW_BLOCK bject creation");

				if (json.containsKey("VIEW_BLOCK")) {
					String view_Field_mapping = json.get("VIEW_BLOCK").toString();

					view_json_fields = (JSONObject) parser.parse(view_Field_mapping);

					System.out.println("view_json_fields--" + view_json_fields);
				}

				System.out.println(
						"--------------------------------------------------------------------------------------------------");

				System.out.println("Relation object ");

				String Relation = json.get("Relations").toString();

				JSONObject json_relation = (JSONObject) parser.parse(Relation);

				System.out.println("json_relation " + json_relation);

				System.out.println("==========================================================");

				if (json_relation.containsKey("Parent_Table_Relation")) {

					System.out.println("Parent_Table_Relation Object  creation");

					String Parent_Table_Relation = json_relation.get("Parent_Table_Relation").toString();

					JSONObject json_Parent_Table_Relation = (JSONObject) parser.parse(Parent_Table_Relation);

					// String tabledata=(String)
					// json_fields.get("sttm_customers1");

					System.out.println("json_Parent_Table_Relation==" + json_Parent_Table_Relation);

					System.out.println("==========================================================");

					System.out.println("Get ParentTable");
					parentTable = (String) json_Parent_Table_Relation.get("parent_table");

					System.out.println("parentTable  " + parentTable);

					System.out.println("----------------------------------------------------------");

					data1 = new LinkedHashMap<>();

					System.out.println("Get parentTable fields and coloumns");

					data1.put("BLK_" + parentTable, (HashMap<String, String>) json_fields.get("BLK_" + parentTable));

					System.out.println("data1=====" + data1);

					for (Map.Entry<String, HashMap<String, String>> entry : data1.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Map.Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									System.out.println(entry1.getKey());
									column.add(entry1.getKey());
									fields.add(entry1.getValue());
								}
							}

						}

					}

					for (int i = 0; i < fields.size(); i++) {
						System.out.println("fields---" + fields.get(i) + " column----" + column.get(i));
					}

					System.out.println(
							"------------------------------------------------------------------------------------");

					/// String parentTable_variable = parentTable ;

					// System.out.println(parentTable_variable);

					System.out.println("get parentTable_primarykey");

					parentTable_primarykey = (String) json_Parent_Table_Relation.get(parentTable);
					System.out.println("parentTable_primarykey " + parentTable_primarykey);

					String BLK_parentTable = json_fields.get("BLK_" + parentTable).toString();

					JSONObject json_BLK_parentTable = (JSONObject) parser.parse(BLK_parentTable);

					System.out.println("json_BLK_parentTable---" + json_BLK_parentTable);

					Field_OfPrimaryKey = (String) json_BLK_parentTable.get(parentTable_primarykey);

					System.out.println("Field_OfPrimaryKey-------------" + Field_OfPrimaryKey);

					column.remove(parentTable_primarykey);
					fields.remove(Field_OfPrimaryKey);

				}

				System.out.println("-------------------------------------------------------------------------");

				if (json_relation.containsKey("DYNAMIC_TABLE_RELATION")) {

					System.out.println("DYNAMIC_TABLE_BLOCK Object  creation");

					String dynamic_block_relation = json.get("DYNAMIC_BLOCK").toString();

					JSONObject json_dynamic_block_relation = (JSONObject) parser.parse(dynamic_block_relation);

					System.out
							.println("==============================================================================");

					System.out.println("DYNAMIC_TABLE_RELATION Object  creation");

					String dynamic_table_relation = json_relation.get("DYNAMIC_TABLE_RELATION").toString();

					System.out.println(dynamic_table_relation);

					json_dynamic_table_relation = (JSONObject) parser.parse(dynamic_table_relation);

					System.out
							.println("==============================================================================");

					System.out.println("taking dynamic_table name");

					dynamic_table1 = (String) json_dynamic_table_relation.get("DYNAMIC_TABLE1");
					System.out.println("dynamic_table1---" + dynamic_table1);

					System.out
							.println("==============================================================================");

					System.out.println("Taking dynamic_table1 columns and fields");

					Role_data = new LinkedHashMap<>();

					Role_data.put("BLK_" + dynamic_table1,
							(HashMap<String, String>) json_dynamic_block_relation.get("BLK_" + dynamic_table1));

					System.out.println("Role_data---" + Role_data);

					for (Entry<String, HashMap<String, String>> entry : Role_data.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									Role_column.add(entry1.getKey());
									Role_fields.add(entry1.getValue());
								}
							}
						}

					}

					System.out.println(Role_fields);
					System.out.println(Role_column);

					role_increment_Data.put("BLK2_" + dynamic_table1,
							(HashMap<String, String>) json_dynamic_block_relation.get("BLK2_" + dynamic_table1));

					for (Entry<String, HashMap<String, String>> entry : role_increment_Data.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									Role_column2.add(entry1.getKey());
									Role_incremental_fields.add(entry1.getValue());
								}
							}
						}

					}
					System.out.println("Role_incremental_fields--" + Role_incremental_fields);
					System.out.println("Role_column2--" + Role_column2);

				}

				if (json_relation.containsKey("Get_Table_Relation")) {

					System.out.println("Get_Table_Relation Object Creation-----");

					// if(json_relation.containsKey("Get_Table_Relation")){
					JSONObject get_block_relation = (JSONObject) parser
							.parse(json_relation.get("Get_Table_Relation").toString());

					System.out.println("Taking get_Table1 name");
					get_Table1 = (String) get_block_relation.get("Get_Table1");

					System.out.println("Get_Table1--" + get_Table1);

					System.out
							.println("==============================================================================");

					System.out.println("Taking Get Table Relations");

					get_table_primaryKey = (String) get_block_relation.get(get_Table1);

					System.out.println(get_table_primaryKey);

					// get_Table_Relation.addAll((List)
					// get_block_relation.get(get_Table1));

					// System.out.println("get_Table_Relation--" +
					// get_Table_Relation);

					System.out
							.println("==============================================================================");

					System.out.println("Get_BLOCK Object Creation ");

					JSONObject get_block = (JSONObject) parser.parse(json.get("Get_BLOCK").toString());

					System.out.println(get_block);

					System.out.println("Get Table columns and Fields");

					Get_Table_Relation_data.put("BLK_" + get_Table1,
							(HashMap<String, String>) get_block.get("BLK_" + get_Table1));

					System.out.println("Get_Table_Relation_data--" + Get_Table_Relation_data);

					for (Entry<String, HashMap<String, String>> entry : Get_Table_Relation_data.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									get_Table_Column.add(entry1.getKey());
									get_Table_Fields.add(entry1.getValue());
								}
							}
						}

					}

				}

				System.out.println("==============================================================================");

				System.out.println("view_block parentTable columns and Fields");

				List<String> vw_parentTable_coloumns = new ArrayList<>();
				List<String> vw_parentTable_fields = new ArrayList<>();

				if (json.containsKey("VIEW_BLOCK")) {
					
					if(view_json_fields.containsKey("VW_"+parentTable)){

					view_block_parentTable_data.put("VW_" + parentTable,
							(HashMap<String, String>) view_json_fields.get("VW_" + parentTable));

					for (Entry<String, HashMap<String, String>> entry : view_block_parentTable_data.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									vw_parentTable_coloumns.add(entry1.getKey());
									vw_parentTable_fields.add(entry1.getValue());
								}
							}
						}

					}

				}
				}

				System.out.println("vw_parentTable_coloumns--" + vw_parentTable_coloumns);
				System.out.println("vw_parentTable_fields--" + vw_parentTable_fields);

				System.out.println("view_block dynamicTable columns and Fields");

				List<String> vw_dynamicTable_coloumns = new ArrayList<>();
				List<String> vw_dynamicTable_fields = new ArrayList<>();

				if (json.containsKey("VIEW_BLOCK")) {
					if (view_json_fields.containsKey("VW_"+ dynamic_table1)) {
						
						System.out.println("insideeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");

						view_block_dynamicTable_data.put("VW_" + dynamic_table1,
								(HashMap<String, String>) view_json_fields.get("VW_" + dynamic_table1));

						for (Entry<String, HashMap<String, String>> entry : view_block_dynamicTable_data.entrySet()) {
							int i = 0;
							System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
							for (i = 0; i < entry.getValue().size(); i++) {
								/*
								 * System.out.println(i);
								 * System.out.println((HashMap)
								 * entry.getValue());
								 */
								for (Entry<String, String> entry1 : entry.getValue().entrySet()) {

									if (i < 1) {
										System.out.println(
												"Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

										vw_dynamicTable_coloumns.add(entry1.getKey());
										vw_dynamicTable_fields.add(entry1.getValue());
									}
								}
							}

						}

					}
				}

				System.out.println("view_block_dynamicTable_data--" + view_block_dynamicTable_data);

				System.out.println("vw_dynamicTable_coloumns--" + vw_dynamicTable_coloumns);
				System.out.println("vw_dynamicTable_fields--" + vw_dynamicTable_coloumns);

				StringBuffer parantTable_query = new StringBuffer();

				String view_parentTable = "VW_" + parentTable;

				System.out.println(parentTable);
				parantTable_query.append("Select ");

				if (json.containsKey("VIEW_BLOCK")) {
					if (view_json_fields.containsKey("VW_" + parentTable)) {
						System.out.println("inside nested if---------");
						for (int i = 0; i < vw_parentTable_coloumns.size(); i++) {
							parantTable_query.append(vw_parentTable_coloumns.get(i));
							if (vw_parentTable_coloumns.size() - 1 == i) {

							} else {
								parantTable_query.append(",");
							}
						}
					}
					else {
						System.out.println("inside else");
						for (int i = 0; i < column.size(); i++) {
							parantTable_query.append(column.get(i));
							if (column.size() - 1 == i) {

							} else {
								parantTable_query.append(",");
							}
						}
					}
					
				}
				else {
					System.out.println("outside else");
					for (int i = 0; i < column.size(); i++) {
						parantTable_query.append(column.get(i));
						if (column.size() - 1 == i) {

						} else {
							parantTable_query.append(",");
						}
					}
				}

				

				parantTable_query.append(" from ");
				
				
				if (json.containsKey("VIEW_BLOCK")) {
					if(view_json_fields.containsKey("VW_"+parentTable)){
						System.out.println("inside if");
					parantTable_query.append(view_parentTable);
				} 
					
					else {
						System.out.println("inside else ");
					parantTable_query.append(parentTable);
				}
				
				
			}
				
				else {
					System.out.println("outside else ");
					parantTable_query.append(parentTable);
				}
				parantTable_query.append(" where ");
				parantTable_query.append(parentTable_primarykey);
				parantTable_query.append("=");
				parantTable_query.append("'");
				parantTable_query.append(request.getParameter(Field_OfPrimaryKey));
				// parantTable_query.append(1315);
				parantTable_query.append("'");

				/*
				 * parantTable_query.append("Select "); for (int i = 0; i <
				 * column.size(); i++) {
				 * parantTable_query.append(column.get(i)); if (column.size() -
				 * 1 == i) {
				 * 
				 * } else { parantTable_query.append(","); } }
				 * 
				 * parantTable_query.append(" from ");
				 * parantTable_query.append(parentTable);
				 * parantTable_query.append(" where ");
				 * parantTable_query.append(parentTable_primarykey);
				 * parantTable_query.append("="); parantTable_query.append("'");
				 * parantTable_query.append(request.getParameter(
				 * Field_OfPrimaryKey)); // parantTable_query.append(1315);
				 * parantTable_query.append("'");
				 */

				System.out.println("parantTable_query------" + parantTable_query);

				// DatabaseUtil dbConn2 = new DatabaseUtil();

				// Statement ps1 = dbConn2.getConnection().createStatement();

				ResultSet rs1 = DatabaseUtil.executeQueryData1(parantTable_query.toString(), "N");

				r1 = rs1.getMetaData().getColumnCount();

				System.out.println("row count -" + r1);

				while (rs1.next()) {

					for (int i = 1; i <= rs1.getMetaData().getColumnCount(); i++) {

						if (rs1.getMetaData().getColumnClassName(i).equals("oracle.sql.TIMESTAMP")) {

							if (rs1.getString(i) == null) {

								al1.add(rs1.getString(i));

							}

							else {

								Date d = null;

								SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");

								String s2 = rs1.getString(i);

								s2.substring(0, 10);

								d = d.valueOf(s2.substring(0, 10));

								// System.out.println(sdf.format(d));

								String ss2 = s2.substring(11, s2.length()).toString();

								Time t = null;

								t = t.valueOf(ss2);

								SimpleDateFormat tdf = new SimpleDateFormat("hh:mm:ss aa");

								// System.out.println("."+tdf.format(t).toString()+".");

								String s3 = sdf.format(d).toString() + " " + tdf.format(t).toString();

								al1.add(s3);

							}

						}

						else if (rs1.getMetaData().getColumnClassName(i).equals("java.sql.Timestamp")) {

							Date d = null;

							SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");

							String s2 = rs1.getString(i);

							s2.substring(0, 10);

							d = d.valueOf(s2.substring(0, 10));

							al1.add(sdf.format(d).toString());

						}

						else {

							al1.add(rs1.getString(i));

						}

					}

				}

				/*
				 * if (json_relation.containsKey("Get_Table_Relation1")) {
				 * 
				 * fields.addAll(get_Table_FieldsRelationTo_parentTable);
				 * al1.addAll(get_Table_ColumnRelationTo_parentTable); }
				 */

				jsonFrontEnd.append("{");
				jsonFrontEnd.append("\n");

				System.out.println("fields.size()--" + fields.size());
				System.out.println("al1.size()--" + al1.size());

				if (json.containsKey("VIEW_BLOCK")) {
					if (view_json_fields.containsKey("VW_" + parentTable)) {
						for (int i = 0; i < vw_parentTable_fields.size(); i++) {

							jsonFrontEnd.append('"' + vw_parentTable_fields.get(i) + '"' + " : " + '"' + al1.get(i) + '"');
							jsonFrontEnd.append(",");
							jsonFrontEnd.append("\n");
						}
					}
					else {
						for (int i = 0; i < fields.size(); i++) {

							jsonFrontEnd.append('"' + fields.get(i) + '"' + " : " + '"' + al1.get(i) + '"');
							jsonFrontEnd.append(",");
							jsonFrontEnd.append("\n");
						}

					}
					
				} 
				
				else {
					for (int i = 0; i < fields.size(); i++) {

						jsonFrontEnd.append('"' + fields.get(i) + '"' + " : " + '"' + al1.get(i) + '"');
						jsonFrontEnd.append(",");
						jsonFrontEnd.append("\n");
					}

				}
				
				
				

				for (int i = 0; i < al1.size(); i++) {
					System.out.println("ParenTable " + al1.get(i));
				}

				boolean DYNAMIC_TABLE1 = false;

				List<String> l2 = new ArrayList<>();

				for (int i = 0; i < json_dynamic_table_relation.size(); i++) {

					l2.add("DYNAMIC_TABLE" + i);

					if (l2.contains("DYNAMIC_TABLE1")) {
						DYNAMIC_TABLE1 = true;

					}

					/*
					 * if (json.containsKey("child_table" + i)) { childtable =
					 * true; // System.out.println("child tables //
					 * :::"+json.get("child_table"+i));
					 * 
					 * }
					 */
				}
				System.out.println(l2);
				System.out.println("DYNAMIC_TABLE1--" + DYNAMIC_TABLE1);

				if (DYNAMIC_TABLE1 == true) {

					System.out.println("Inside the Condtion");

					String view_dynamic_table1 = "VW_" + dynamic_table1;

					System.out.println("view_dynamic_table1--" + view_dynamic_table1);

					StringBuffer Role_query = new StringBuffer();

					Role_query.append("Select ");

					if (view_json_fields.containsKey("VW_"+ dynamic_table1)) {

						for (int i = 0; i < vw_dynamicTable_coloumns.size(); i++) {
							Role_query.append(vw_dynamicTable_coloumns.get(i));
							if (vw_dynamicTable_coloumns.size() - 1 == i) {
							} else {
								Role_query.append(",");
							}
						}
					}

					/*
					 * for (int i = 0; i < Role_column2.size(); i++) {
					 * Role_query.append(Role_column2.get(i)); if
					 * (Role_column2.size() - 1 == i) { } else {
					 * Role_query.append(","); } }
					 * 
					 * if (json_relation.containsKey("Get_Table_Relation")) {
					 * Role_query.append(","); for (int i = 0; i <
					 * get_Table_Column.size(); i++) {
					 * Role_query.append(get_Table_Column.get(i)); if
					 * (get_Table_Column.size() - 1 == i) {
					 * 
					 * } else { Role_query.append(","); } }
					 * 
					 * }
					 */

					Role_query.append(" from ");
					Role_query.append(view_dynamic_table1);
					Role_query.append(" where ");
					Role_query.append(parentTable_primarykey);
					Role_query.append("=");
					Role_query.append("'");
					Role_query.append(request.getParameter(Field_OfPrimaryKey));
					Role_query.append("'");

					// ---------------------------------------------------------------------------------------------------------------------

					/*
					 * Role_query.append("Select  "); for (int i = 0; i <
					 * Role_column2.size(); i++) {
					 * Role_query.append(dynamic_table1);
					 * Role_query.append(".");
					 * Role_query.append(Role_column2.get(i)); if
					 * (Role_column2.size() - 1 == i) { } else {
					 * Role_query.append(","); } }
					 * 
					 * if (json_relation.containsKey("Get_Table_Relation")) {
					 * Role_query.append(","); for (int i = 0; i <
					 * get_Table_Column.size(); i++) {
					 * Role_query.append(get_Table1); Role_query.append(".");
					 * Role_query.append(get_Table_Column.get(i)); if
					 * (get_Table_Column.size() - 1 == i) {
					 * 
					 * } else { Role_query.append(","); } }
					 * 
					 * }
					 * 
					 * Role_query.append(" from ");
					 * Role_query.append(parentTable); Role_query.append(" ");
					 * Role_query.append(parentTable); Role_query.append(",");
					 * Role_query.append(dynamic_table1);
					 * Role_query.append(" ");
					 * Role_query.append(dynamic_table1);
					 * 
					 * if (json_relation.containsKey("Get_Table_Relation")) {
					 * Role_query.append(","); Role_query.append(get_Table1);
					 * Role_query.append(" "); Role_query.append(get_Table1); }
					 * 
					 * 
					 * 
					 * Role_query.append(" where ");
					 * Role_query.append(parentTable); Role_query.append(".");
					 * Role_query.append(parentTable_primarykey);
					 * Role_query.append(" = ");
					 * Role_query.append(dynamic_table1);
					 * Role_query.append(".");
					 * Role_query.append(parentTable_primarykey);
					 * 
					 * /// select USER_ROLE1.Role_ID,ROLE_MASTER.Role_Desc from
					 * /// sttm_customers1 sttm_customers1,USER_ROLE1 ///
					 * USER_ROLE1,ROLE_MASTER ROLE_MASTER // WHERE
					 * USER_ROLE1.CUST_ID= sttm_customers1.CUST_ID AND ///
					 * USER_ROLE1.ROLE_ID=ROLE_MASTER.ROLE_ID AND ///
					 * sttm_customers1.CUST_ID = '1' if
					 * (json_relation.containsKey("Get_Table_Relation")) {
					 * Role_query.append(" And ");
					 * Role_query.append(dynamic_table1);
					 * Role_query.append(".");
					 * Role_query.append(get_table_primaryKey);
					 * Role_query.append("="); Role_query.append(get_Table1);
					 * Role_query.append(".");
					 * Role_query.append(get_table_primaryKey); }
					 * Role_query.append(" And ");
					 * Role_query.append(parentTable); Role_query.append(".");
					 * Role_query.append(parentTable_primarykey);
					 * Role_query.append("="); Role_query.append("'");
					 * Role_query.append(request.getParameter(
					 * parentTable_primarykey)); Role_query.append("'");
					 */
					System.out.println("Role_query--" + Role_query.toString());

					/*
					 * DatabaseUtil dbConn3 = new DatabaseUtil();
					 * 
					 * Statement stmt2 =
					 * dbConn3.getConnection().createStatement();
					 */

					ResultSet rs22 = DatabaseUtil.executeQueryData1(Role_query.toString(), "N");

					r2 = rs22.getMetaData().getColumnCount();

					System.out.println(rs22.getMetaData().getColumnCount());

					while (rs22.next())

					{
						for (int i = 1; i <= rs22.getMetaData().getColumnCount(); i++) {

							if (rs22.getMetaData().getColumnClassName(i).equals("oracle.sql.TIMESTAMP")) {

								if (rs22.getString(i) == null) {

									al2.add(rs22.getString(i));

								}

								else {

									Date d = null;

									SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");

									String s2 = rs22.getString(i);

									s2.substring(0, 10);

									d = d.valueOf(s2.substring(0, 10));

									// System.out.println(sdf.format(d));

									String ss2 = s2.substring(11, s2.length()).toString();

									Time t = null;

									t = t.valueOf(ss2);

									SimpleDateFormat tdf = new SimpleDateFormat("hh:mm:ss aa");

									// System.out.println("."+tdf.format(t).toString()+".");

									String s3 = sdf.format(d).toString() + " " + tdf.format(t).toString();

									al2.add(s3);

								}

							}

							else if (rs22.getMetaData().getColumnClassName(i).equals("java.sql.Timestamp")) {

								Date d = null;

								SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");

								String s2 = rs22.getString(i);

								s2.substring(0, 10);

								d = d.valueOf(s2.substring(0, 10));

								al2.add(sdf.format(d).toString());

							}

							else {

								al2.add(rs22.getString(i));

							}

						}

					}

					/*
					 * String f1 = null; String f2 = null;
					 * 
					 * 
					 * for (int i = 0; i < Role_incremental_fields.size(); i++)
					 * {
					 * 
					 * f1 = Role_incremental_fields.get(i);
					 * allFrontEndFields.add(f1);
					 * System.out.println("Role_incremental_fields --->>" + f1);
					 * 
					 * }
					 * 
					 * if (json_relation.containsKey("Get_Table_Relation")) {
					 * for(int i=0; i<get_Table_Fields.size(); i++){ f2 =
					 * get_Table_Fields.get(i); allFrontEndFields.add(f2);
					 * System.out.println("Role_incremental_fields --->>" + f2);
					 * } }
					 */

					String f1 = null;

					for (int i = 0; i < vw_dynamicTable_fields.size(); i++) {
						f1 = vw_dynamicTable_fields.get(i);

						allFrontEndFields.add(f1);
					}

					System.out.println("allFrontEndFields--" + allFrontEndFields);

					int count = vw_dynamicTable_fields.size();

					System.out.println("=----" + count);
					/*
					 * String frontEndcountRow =
					 * request.getParameter("countRow");
					 * 
					 * System.out.println("frontEndcountRow--" +
					 * frontEndcountRow);
					 * 
					 * countValue = Integer.parseInt(frontEndcountRow);
					 */

					// r2 is result set count of User_role1 Table

					for (int i = 0; i < al2.size(); i++) {
						System.out.println(al2.get(i));
					}
					System.out.println("al2 Size----" + al2.size());
					for (int i = 0; i < al2.size() / count; i++) {

						for (int j = 0; j < allFrontEndFields.size(); j++) {

							String flds = allFrontEndFields.get(j) + i;

							System.out.println("flds---" + flds);
							allFrontEndFields1.add(flds);

						}
						// System.out.println("id--" + f1 + i);

						// System.out.println("desc--"+get_Table_Fields.toString()+i);

						// allFrontEndFields.add(f1 + i);

						/*
						 * if(json_relation.containsKey("Get_Table_Relation")){
						 * System.out.println("desc--" + f2 + i);
						 * allFrontEndFields.add(f2 + i); }
						 */

					}

					for (int i = 0; i < allFrontEndFields1.size(); i++) {
						System.out.println("allFrontEndFields--" + allFrontEndFields1.get(i));

					}

					for (int i = 0; i < allFrontEndFields1.size(); i++) {
						jsonFrontEnd.append('"' + allFrontEndFields1.get(i) + '"' + " : " + '"' + al2.get(i) + '"');
						jsonFrontEnd.append(",");
						jsonFrontEnd.append("\n");

					}

				}
				
				jsonFrontEnd.deleteCharAt(jsonFrontEnd.lastIndexOf(","));
				jsonFrontEnd.append('}');
				
				System.out.println("jsonFrontEnd--" + jsonFrontEnd.toString());

				for (int i = 0; i < al2.size(); i++) {
					System.out.println("Dynamic Table Data " + al2.get(i));
				}

				response.getOutputStream().println(jsonFrontEnd.toString());

			}

			catch (FileNotFoundException e) {

				System.out.println("An error occurred.");

				e.printStackTrace();

			} catch (ParseException e) {

				// TODO Auto-generated catch block

				e.printStackTrace();
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

		if (request.getParameter("method").equals("UPDATE")) {

			System.out.println("UPDATE------------");
			try {
				File f = new File(
						"C:/Users/Yashvanth/Desktop/New folder/Dynamic_Login_Page_updated/WebContent/JsonScreen/"
								+ function_id + ".json");
				Scanner myReader = new Scanner(f);
				while (myReader.hasNextLine()) {
					data = myReader.nextLine();
					System.out.println(data);
					dataJson.append(data);
				}
				myReader.close();
				// line
				JSONParser parser = new JSONParser();// string to javascript

				JSONObject json = (JSONObject) parser.parse(dataJson.toString());
				System.out.println("BLOCK Object creation");

				String Field_mapping = json.get("BLOCK").toString();

				System.out.println("Field_mapping-------" + Field_mapping.toString());

				JSONObject json_fields = (JSONObject) parser.parse(Field_mapping);

				System.out.println("json_fields------" + json_fields.toString());

				System.out.println(
						"--------------------------------------------------------------------------------------------");

				System.out.println("Relation object ");

				String Relation = json.get("Relations").toString();

				JSONObject json_relation = (JSONObject) parser.parse(Relation);

				System.out.println("json_relation " + json_relation);

				System.out.println("==========================================================");

				if (json_relation.containsKey("Parent_Table_Relation")) {

					System.out.println("Parent_Table_Relation Object  creation");

					String Parent_Table_Relation = json_relation.get("Parent_Table_Relation").toString();

					JSONObject json_Parent_Table_Relation = (JSONObject) parser.parse(Parent_Table_Relation);

					// String tabledata=(String)
					// json_fields.get("sttm_customers1");

					System.out.println("json_Parent_Table_Relation==" + json_Parent_Table_Relation);

					System.out.println("==========================================================");

					System.out.println("Get ParentTable");
					parentTable = (String) json_Parent_Table_Relation.get("parent_table");

					System.out.println("parentTable  " + parentTable);

					System.out.println("----------------------------------------------------------");

					data1 = new LinkedHashMap<>();

					System.out.println("Get parentTable fields and coloumns");

					data1.put("BLK_" + parentTable, (HashMap<String, String>) json_fields.get("BLK_" + parentTable));

					System.out.println("data1=====" + data1);

					for (Map.Entry<String, HashMap<String, String>> entry : data1.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Map.Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									System.out.println(entry1.getKey());
									column.add(entry1.getKey());
									fields.add(entry1.getValue());
								}
							}

						}

					}

					for (int i = 0; i < fields.size(); i++) {
						System.out.println("fields---" + fields.get(i) + " column----" + column.get(i));
					}

					System.out.println(
							"------------------------------------------------------------------------------------");

					/// String parentTable_variable = parentTable ;

					// System.out.println(parentTable_variable);

					System.out.println("get parentTable_primarykey");

					parentTable_primarykey = (String) json_Parent_Table_Relation.get(parentTable);
					System.out.println("parentTable_primarykey " + parentTable_primarykey);

					String BLK_parentTable = json_fields.get("BLK_" + parentTable).toString();

					JSONObject json_BLK_parentTable = (JSONObject) parser.parse(BLK_parentTable);

					System.out.println("json_BLK_parentTable---" + json_BLK_parentTable);

					Field_OfPrimaryKey = (String) json_BLK_parentTable.get(parentTable_primarykey);

					System.out.println("Field_OfPrimaryKey-------------" + Field_OfPrimaryKey);

					column.remove(parentTable_primarykey);
					fields.remove(Field_OfPrimaryKey);

				}

				System.out.println("-------------------------------------------------------------------------");

				if (json_relation.containsKey("DYNAMIC_TABLE_RELATION")) {

					System.out.println("DYNAMIC_TABLE_BLOCK Object  creation");

					String dynamic_block_relation = json.get("DYNAMIC_BLOCK").toString();

					JSONObject json_dynamic_block_relation = (JSONObject) parser.parse(dynamic_block_relation);

					System.out
							.println("==============================================================================");

					System.out.println("DYNAMIC_TABLE_RELATION Object  creation");

					String dynamic_table_relation = json_relation.get("DYNAMIC_TABLE_RELATION").toString();

					System.out.println(dynamic_table_relation);

					json_dynamic_table_relation = (JSONObject) parser.parse(dynamic_table_relation);

					System.out
							.println("==============================================================================");

					System.out.println("taking dynamic_table name");

					dynamic_table1 = (String) json_dynamic_table_relation.get("DYNAMIC_TABLE1");
					System.out.println("dynamic_table1---" + dynamic_table1);

					System.out
							.println("==============================================================================");

					System.out.println("Taking dynamic_table1 columns and fields");

					Role_data = new LinkedHashMap<>();

					Role_data.put("BLK_" + dynamic_table1,
							(HashMap<String, String>) json_dynamic_block_relation.get("BLK_" + dynamic_table1));

					System.out.println("Role_data---" + Role_data);

					for (Entry<String, HashMap<String, String>> entry : Role_data.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									Role_column.add(entry1.getKey());
									Role_fields.add(entry1.getValue());
								}
							}
						}

					}

					System.out.println(Role_fields);
					System.out.println(Role_column);

					role_increment_Data.put("BLK2_" + dynamic_table1,
							(HashMap<String, String>) json_dynamic_block_relation.get("BLK2_" + dynamic_table1));

					for (Entry<String, HashMap<String, String>> entry : role_increment_Data.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									Role_column2.add(entry1.getKey());
									Role_incremental_fields.add(entry1.getValue());
								}
							}
						}

					}
					System.out.println("Role_incremental_fields--" + Role_incremental_fields);
					System.out.println("Role_column2--" + Role_column2);

				}

				if (json_relation.containsKey("Get_Table_Relation")) {

					System.out.println("Get_Table_Relation Object Creation-----");

					// if(json_relation.containsKey("Get_Table_Relation")){
					JSONObject get_block_relation = (JSONObject) parser
							.parse(json_relation.get("Get_Table_Relation").toString());

					System.out.println("Taking get_Table1 name");
					get_Table1 = (String) get_block_relation.get("Get_Table1");

					System.out.println("Get_Table1--" + get_Table1);

					System.out
							.println("==============================================================================");

					System.out.println("Taking Get Table Relations");

					/*
					 * get_Table_Relation.addAll((List)
					 * get_block_relation.get(get_Table1));
					 * 
					 * System.out.println("get_Table_Relation--" +
					 * get_Table_Relation);
					 */
					System.out
							.println("==============================================================================");

					System.out.println("Get_BLOCK Object Creation ");

					JSONObject get_block = (JSONObject) parser.parse(json.get("Get_BLOCK").toString());

					System.out.println(get_block);

					System.out.println("Get Table columns and Fields");

					Get_Table_Relation_data.put("BLK_" + get_Table1,
							(HashMap<String, String>) get_block.get("BLK_" + get_Table1));

					System.out.println("Get_Table_Relation_data--" + Get_Table_Relation_data);

					for (Entry<String, HashMap<String, String>> entry : Get_Table_Relation_data.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									get_Table_Column.add(entry1.getKey());
									get_Table_Fields.add(entry1.getValue());
								}
							}
						}

					}

				}

				System.out.println("==============================================================================");

				StringBuffer getQuery = new StringBuffer();

				getQuery.append("Select ");
				for (int i = 0; i < column.size(); i++) {
					getQuery.append(column.get(i));
					if (column.size() - 1 == i) {

					} else {
						getQuery.append(",");
					}
				}

				getQuery.append(" From ");
				getQuery.append(parentTable);
				getQuery.append(" Where ");
				getQuery.append(parentTable_primarykey);
				getQuery.append("=");
				getQuery.append("'");
				getQuery.append(request.getParameter(Field_OfPrimaryKey));
				getQuery.append("'");

				System.out.println("getQuery--" + getQuery.toString());

				List<String> frontEndData = new ArrayList<>();

				List<String> backendData = new ArrayList<>();

				List<String> frontEndData1 = new ArrayList<>();

				List<String> columnData = new ArrayList<>();

				for (int i = 0; i < fields.size(); i++) {

					System.out.println("================================");

					String Data = request.getParameter(fields.get(i));

					if (Data != null) {
						frontEndData.add(Data);
					} else {
						frontEndData.add("");
					}
					// Move to the next column index
				}

				System.out.println("frontEndvalues1--" + frontEndData1);

				/*
				 * for(int i=0; i<fields.size(); i++){
				 * 
				 * frontEndData.add(request.getParameter(fields.get(i)));
				 * 
				 * System.out.println("frontEndData--"+frontEndData.get(i));
				 * 
				 * }
				 */

				System.out.println("frontEndData--" + frontEndData);

				PreparedStatement ps = null;
				try {

					/*
					 * DatabaseUtil dbConn = new DatabaseUtil(); Statement stmt
					 * = dbConn.conn.createStatement();
					 */
					ResultSet rs = DatabaseUtil.executeQueryData1(getQuery.toString(), "N");

					while (rs.next()) {
						int i = 1; // Start i from 1 (columns are 1-indexed in
									// ResultSet)

						// Iterate through each column in updatalist
						for (String columnName : column) {
							System.out.println("Column Name: " + columnName);

							System.out.println("Value: " + rs.getString(i));

							System.out.println("================================");

							String Data = rs.getString(i);

							if (Data != null) {
								backendData.add(Data);
							} else {
								backendData.add("");
							}

							i++;

							// Move to the next column index
						}

					}

					System.out.println("frontEndData--" + frontEndData);

					System.out.println("backendData--" + backendData);

					System.out.println("frontEndDataSize " + frontEndData.size());

					System.out.println("backendDataSize---" + backendData.size());

					for (int i = 0; i < frontEndData.size(); i++) {
						String frontEndValue = frontEndData.get(i);
						String backEndValue = backendData.get(i);
						String columnsValue = column.get(i);

						if (!(frontEndValue.equals(backEndValue))) {
							System.out.println("=============CONDITION CHECK==============");
							System.out.println("backendVlaue--" + backEndValue);
							System.out.println("frontendVlaue1--" + frontEndValue);
							System.out.println("colname--" + columnsValue);
							System.out.println("==============================================");

							frontEndData1.add(frontEndValue);
							columnData.add(columnsValue);

						}

					}

					System.out.println("frontEndData1---" + frontEndData1);
					System.out.println("columnData---" + columnData);

					StringBuffer updateQuery = new StringBuffer();
					updateQuery.append("update ");
					updateQuery.append(parentTable.toUpperCase());
					updateQuery.append(" SET ");
					for (int i = 0; i < columnData.size(); i++) {

						if (i < columnData.size()) {
							updateQuery.append(columnData.get(i));
							updateQuery.append("=");
							updateQuery.append("'");
							updateQuery.append(frontEndData1.get(i));
							updateQuery.append("'");

							if (columnData.size() - 1 == i) {

							} else {
								updateQuery.append(",");
							}
						}

					}

					updateQuery.append(" where ");
					updateQuery.append(parentTable_primarykey);
					updateQuery.append("=");
					updateQuery.append("'");
					updateQuery.append(request.getParameter(Field_OfPrimaryKey));
					updateQuery.append("'");

					System.out.println("updateQuery----" + updateQuery.toString());

					ps = DatabaseUtil.executeQueryData(updateQuery.toString(), "N");

					if (frontEndData1.size() > 0) {
						ps.executeUpdate();
					}

				} catch (java.sql.SQLIntegrityConstraintViolationException e1) {

					e1.printStackTrace();

				} catch (SQLException e) {
					e.printStackTrace();

				}

				boolean DYNAMIC_TABLE1 = false;

				List<String> l2 = new ArrayList<>();

				for (int i = 0; i < json_dynamic_table_relation.size(); i++) {

					l2.add("DYNAMIC_TABLE" + i);

					if (l2.contains("DYNAMIC_TABLE1")) {
						DYNAMIC_TABLE1 = true;

					}

					/*
					 * if (json.containsKey("child_table" + i)) { childtable =
					 * true; // System.out.println("child tables //
					 * :::"+json.get("child_table"+i));
					 * 
					 * }
					 */
				}
				System.out.println(l2);
				System.out.println("DYNAMIC_TABLE1--" + DYNAMIC_TABLE1);

				if (DYNAMIC_TABLE1 == true) {

					System.out.println("Inside the Condtion");

					StringBuffer q21 = new StringBuffer();

					q21.append("INSERT");
					q21.append(" INTO ");
					q21.append(dynamic_table1);

					q21.append(" (");
					for (int i = 0; i < Role_column.size(); i++) {
						q21.append(Role_column.get(i));
						if (Role_column.size() - 1 == i) {

						} else {
							q21.append(",");
						}
					}

					q21.append(",");
					for (int i = 0; i < Role_column2.size(); i++) {
						q21.append(Role_column2.get(i));
						if (Role_column2.size() - 1 == i) {

						} else {
							q21.append(",");
						}
					}

					q21.append(")");
					q21.append(" VALUES");
					List<String> psq21 = new ArrayList<>();
					String frontEndcountRow = request.getParameter("countRow");

					System.out.println("frontEndcountRow--" + frontEndcountRow);

					countValue = Integer.parseInt(frontEndcountRow);

					System.out.println(countValue);
					for (int i = 0; i < countValue; i++) {
						StringBuffer qq21 = new StringBuffer();
						qq21.append(q21.toString());
						qq21.append("(");

						for (int j = 0; j < Role_fields.size(); j++) {
							qq21.append("'");
							qq21.append(request.getParameter(Role_fields.get(j)));
							qq21.append("'");
							if (Role_fields.size() - 1 == j) {

							}

							else {
								qq21.append(",");
							}
						}

						qq21.append(",");
						for (int k = 0; k < Role_incremental_fields.size(); k++) {
							qq21.append("'");
							qq21.append(request.getParameter(Role_incremental_fields.get(k) + i));
							qq21.append("'");
							if (Role_incremental_fields.size() - 1 == k) {

							} else {
								qq21.append(",");
							}
						}

						qq21.append(")");

						psq21.add(qq21.toString());
					}

					StringBuffer role = new StringBuffer();

					role.append("Delete from ");
					role.append(dynamic_table1.toUpperCase());
					role.append(" Where ");
					role.append(parentTable_primarykey);
					role.append("=");
					role.append("'");
					role.append(request.getParameter(Field_OfPrimaryKey));
					role.append("'");

					PreparedStatement stmt1 = null;

					System.out.println("rolequery--" + role.toString());
					try {

						/*
						 * DatabaseUtil dbConn = new DatabaseUtil(); Statement
						 * stmt = dbConn.getConnection().createStatement();
						 */
						stmt1 = DatabaseUtil.executeQueryData(role.toString(), "N");

						stmt1.executeUpdate();
						System.out.println("Deleted Successfully");

						// Create and execute the insert statement inside
						// the
						// loop
						for (String s1 : psq21) {

							System.out.println("qry " + s1);
							PreparedStatement pstm = DatabaseUtil.executeQueryData(s1.toString(), "N");
							pstm.execute();

							// Assuming your table has two columns (column1
							// and
							// column2)

							// Set other values for the other columns if
							// needed

							System.out.println("role_date Stored");
						}

						System.out.println("=====================================================");

						/*
						 * System.out.println(al1.size()+"-------------");
						 * for(int i=0; i< al1.size(); i++){
						 * System.out.println("ParenTable "+al1.get(i)); }
						 */

						System.out.println("m2 values " + m2);

						/*
						 * for (int i = 0; i < fields.size(); i++) {
						 * m2.add(request.getParameter(fields.get(i)));
						 * System.out.println(fields.get(i) + "--->" +
						 * request.getParameter(fields.get(i)));
						 * 
						 * }
						 */
						System.out.println("FrontEnd Fields === M2------" + m2);

					} catch (java.sql.SQLIntegrityConstraintViolationException e1) {

						e1.printStackTrace();
 
					} catch (SQLException e) {
						e.printStackTrace();

					}

				}
			} catch (FileNotFoundException e) {

				System.out.println("An error occurred.");

				e.printStackTrace();

			} catch (ParseException e) {

				// TODO Auto-generated catch block

				e.printStackTrace();
			}
		}

		if (request.getParameter("method").equals("APPROVE")) {

			System.out.println("UPDATE------------");
			try {
				File f = new File(
						"C:/Users/Yashvanth/Desktop/New folder/Dynamic_Login_Page_updated/WebContent/JsonScreen/"
								+ function_id + ".json");
				Scanner myReader = new Scanner(f);
				while (myReader.hasNextLine()) {
					data = myReader.nextLine();
					System.out.println(data);
					dataJson.append(data);
				}
				myReader.close();
				// line
				JSONParser parser = new JSONParser();// string to javascript

				JSONObject json = (JSONObject) parser.parse(dataJson.toString());
				System.out.println("BLOCK Object creation");

				String Field_mapping = json.get("BLOCK").toString();

				System.out.println("Field_mapping-------" + Field_mapping.toString());

				JSONObject json_fields = (JSONObject) parser.parse(Field_mapping);

				System.out.println("json_fields------" + json_fields.toString());

				System.out.println(
						"--------------------------------------------------------------------------------------------");

				System.out.println("Relation object ");

				String Relation = json.get("Relations").toString();

				JSONObject json_relation = (JSONObject) parser.parse(Relation);

				System.out.println("json_relation " + json_relation);

				System.out.println("==========================================================");

				if (json_relation.containsKey("Parent_Table_Relation")) {

					System.out.println("Parent_Table_Relation Object  creation");

					String Parent_Table_Relation = json_relation.get("Parent_Table_Relation").toString();

					JSONObject json_Parent_Table_Relation = (JSONObject) parser.parse(Parent_Table_Relation);

					// String tabledata=(String)
					// json_fields.get("sttm_customers1");

					System.out.println("json_Parent_Table_Relation==" + json_Parent_Table_Relation);

					System.out.println("==========================================================");

					System.out.println("Get ParentTable");
					parentTable = (String) json_Parent_Table_Relation.get("parent_table");

					System.out.println("parentTable  " + parentTable);

					System.out.println("----------------------------------------------------------");

					data1 = new LinkedHashMap<>();

					System.out.println("Get parentTable fields and coloumns");

					data1.put("BLK_" + parentTable, (HashMap<String, String>) json_fields.get("BLK_" + parentTable));

					System.out.println("data1=====" + data1);

					for (Map.Entry<String, HashMap<String, String>> entry : data1.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Map.Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									System.out.println(entry1.getKey());
									column.add(entry1.getKey());
									fields.add(entry1.getValue());
								}
							}

						}

					}

					for (int i = 0; i < fields.size(); i++) {
						System.out.println("fields---" + fields.get(i) + " column----" + column.get(i));
					}

					System.out.println(
							"------------------------------------------------------------------------------------");

					/// String parentTable_variable = parentTable ;

					// System.out.println(parentTable_variable);

					System.out.println("get parentTable_primarykey");

					parentTable_primarykey = (String) json_Parent_Table_Relation.get(parentTable);
					System.out.println("parentTable_primarykey " + parentTable_primarykey);

					String BLK_parentTable = json_fields.get("BLK_" + parentTable).toString();

					JSONObject json_BLK_parentTable = (JSONObject) parser.parse(BLK_parentTable);

					System.out.println("json_BLK_parentTable---" + json_BLK_parentTable);

					Field_OfPrimaryKey = (String) json_BLK_parentTable.get(parentTable_primarykey);

					System.out.println("Field_OfPrimaryKey-------------" + Field_OfPrimaryKey);

					column.remove(parentTable_primarykey);
					fields.remove(Field_OfPrimaryKey);

				}

				System.out.println("-------------------------------------------------------------------------");

				if (json_relation.containsKey("DYNAMIC_TABLE_RELATION")) {

					System.out.println("DYNAMIC_TABLE_BLOCK Object  creation");

					String dynamic_block_relation = json.get("DYNAMIC_BLOCK").toString();

					JSONObject json_dynamic_block_relation = (JSONObject) parser.parse(dynamic_block_relation);

					System.out
							.println("==============================================================================");

					System.out.println("DYNAMIC_TABLE_RELATION Object  creation");

					String dynamic_table_relation = json_relation.get("DYNAMIC_TABLE_RELATION").toString();

					System.out.println(dynamic_table_relation);

					json_dynamic_table_relation = (JSONObject) parser.parse(dynamic_table_relation);

					System.out
							.println("==============================================================================");

					System.out.println("taking dynamic_table name");

					dynamic_table1 = (String) json_dynamic_table_relation.get("DYNAMIC_TABLE1");
					System.out.println("dynamic_table1---" + dynamic_table1);

					System.out
							.println("==============================================================================");

					System.out.println("Taking dynamic_table1 columns and fields");

					Role_data = new LinkedHashMap<>();

					Role_data.put("BLK_" + dynamic_table1,
							(HashMap<String, String>) json_dynamic_block_relation.get("BLK_" + dynamic_table1));

					System.out.println("Role_data---" + Role_data);

					for (Entry<String, HashMap<String, String>> entry : Role_data.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									Role_column.add(entry1.getKey());
									Role_fields.add(entry1.getValue());
								}
							}
						}

					}

					System.out.println(Role_fields);
					System.out.println(Role_column);

					role_increment_Data.put("BLK2_" + dynamic_table1,
							(HashMap<String, String>) json_dynamic_block_relation.get("BLK2_" + dynamic_table1));

					for (Entry<String, HashMap<String, String>> entry : role_increment_Data.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									Role_column2.add(entry1.getKey());
									Role_incremental_fields.add(entry1.getValue());
								}
							}
						}

					}
					System.out.println("Role_incremental_fields--" + Role_incremental_fields);
					System.out.println("Role_column2--" + Role_column2);

				}

				if (json_relation.containsKey("Get_Table_Relation")) {

					System.out.println("Get_Table_Relation Object Creation-----");

					// if(json_relation.containsKey("Get_Table_Relation")){
					JSONObject get_block_relation = (JSONObject) parser
							.parse(json_relation.get("Get_Table_Relation").toString());

					System.out.println("Taking get_Table1 name");
					get_Table1 = (String) get_block_relation.get("Get_Table1");

					System.out.println("Get_Table1--" + get_Table1);

					System.out
							.println("==============================================================================");

					System.out.println("Taking Get Table Relations");

					/*
					 * get_Table_Relation.addAll((List)
					 * get_block_relation.get(get_Table1));
					 * 
					 * System.out.println("get_Table_Relation--" +
					 * get_Table_Relation);
					 */
					System.out
							.println("==============================================================================");

					System.out.println("Get_BLOCK Object Creation ");

					JSONObject get_block = (JSONObject) parser.parse(json.get("Get_BLOCK").toString());

					System.out.println(get_block);

					System.out.println("Get Table columns and Fields");

					Get_Table_Relation_data.put("BLK_" + get_Table1,
							(HashMap<String, String>) get_block.get("BLK_" + get_Table1));

					System.out.println("Get_Table_Relation_data--" + Get_Table_Relation_data);

					for (Entry<String, HashMap<String, String>> entry : Get_Table_Relation_data.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									get_Table_Column.add(entry1.getKey());
									get_Table_Fields.add(entry1.getValue());
								}
							}
						}

					}

				}

				System.out.println("==============================================================================");

				StringBuffer getQuery = new StringBuffer();

				getQuery.append("Select ");
				for (int i = 0; i < column.size(); i++) {
					getQuery.append(column.get(i));
					if (column.size() - 1 == i) {

					} else {
						getQuery.append(",");
					}
				}

				getQuery.append(" From ");
				getQuery.append(parentTable);
				getQuery.append(" Where ");
				getQuery.append(parentTable_primarykey);
				getQuery.append("=");
				getQuery.append("'");
				getQuery.append(request.getParameter(Field_OfPrimaryKey));
				getQuery.append("'");

				System.out.println("getQuery--" + getQuery.toString());

				List<String> frontEndData = new ArrayList<>();

				List<String> backendData = new ArrayList<>();

				List<String> frontEndData1 = new ArrayList<>();

				List<String> columnData = new ArrayList<>();

				for (int i = 0; i < fields.size(); i++) {

					System.out.println("================================");

					String Data = request.getParameter(fields.get(i));

					if (Data != null) {
						frontEndData.add(Data);
					} else {
						frontEndData.add("");
					}
					// Move to the next column index
				}

				System.out.println("frontEndvalues1--" + frontEndData1);

				/*
				 * for(int i=0; i<fields.size(); i++){
				 * 
				 * frontEndData.add(request.getParameter(fields.get(i)));
				 * 
				 * System.out.println("frontEndData--"+frontEndData.get(i));
				 * 
				 * }
				 */

				System.out.println("frontEndData--" + frontEndData);

				PreparedStatement ps = null;
				try {

					/*
					 * DatabaseUtil dbConn = new DatabaseUtil(); Statement stmt
					 * = dbConn.conn.createStatement();
					 */
					ResultSet rs = DatabaseUtil.executeQueryData1(getQuery.toString(), "N");

					while (rs.next()) {
						int i = 1; // Start i from 1 (columns are 1-indexed in
									// ResultSet)

						// Iterate through each column in updatalist
						for (String columnName : column) {
							System.out.println("Column Name: " + columnName);

							System.out.println("Value: " + rs.getString(i));

							System.out.println("================================");

							String Data = rs.getString(i);

							if (Data != null) {
								backendData.add(Data);
							} else {
								backendData.add("");
							}

							i++;

							// Move to the next column index
						}

					}

					System.out.println("frontEndData--" + frontEndData);

					System.out.println("backendData--" + backendData);

					System.out.println("frontEndDataSize " + frontEndData.size());

					System.out.println("backendDataSize---" + backendData.size());

					for (int i = 0; i < frontEndData.size(); i++) {
						String frontEndValue = frontEndData.get(i);
						String backEndValue = backendData.get(i);
						String columnsValue = column.get(i);

						if (!(frontEndValue.equals(backEndValue))) {
							System.out.println("=============CONDITION CHECK==============");
							System.out.println("backendVlaue--" + backEndValue);
							System.out.println("frontendVlaue1--" + frontEndValue);
							System.out.println("colname--" + columnsValue);
							System.out.println("==============================================");

							frontEndData1.add(frontEndValue);
							columnData.add(columnsValue);

						}

					}

					System.out.println("frontEndData1---" + frontEndData1);
					System.out.println("columnData---" + columnData);

					StringBuffer updateQuery = new StringBuffer();
					updateQuery.append("update ");
					updateQuery.append(parentTable.toUpperCase());
					updateQuery.append(" SET ");
					for (int i = 0; i < columnData.size(); i++) {

						if (i < columnData.size()) {
							updateQuery.append(columnData.get(i));
							updateQuery.append("=");
							updateQuery.append("'");
							updateQuery.append(frontEndData1.get(i));
							updateQuery.append("'");

							if (columnData.size() - 1 == i) {

							} else {
								updateQuery.append(",");
							}
						}

					}

					updateQuery.append(" where ");
					updateQuery.append(parentTable_primarykey);
					updateQuery.append("=");
					updateQuery.append("'");
					updateQuery.append(request.getParameter(Field_OfPrimaryKey));
					updateQuery.append("'");

					System.out.println("updateQuery----" + updateQuery.toString());

					ps = DatabaseUtil.executeQueryData(updateQuery.toString(), "N");

					if (frontEndData1.size() > 0) {
						ps.executeUpdate();
						System.out.println("successfully Approved");
					}

				} catch (java.sql.SQLIntegrityConstraintViolationException e1) {

					e1.printStackTrace();

				} catch (SQLException e) {
					e.printStackTrace();

				}

			} catch (FileNotFoundException e) {

				System.out.println("An error occurred.");

				e.printStackTrace();

			} catch (ParseException e) {

				// TODO Auto-generated catch block

				e.printStackTrace();
			}
		}

		if (request.getParameter("method").equals("CLOSE")) {

			System.out.println("UPDATE------------");
			try {
				File f = new File(
						"C:/Users/Yashvanth/Desktop/New folder/Dynamic_Login_Page_updated/WebContent/JsonScreen/"
								+ function_id + ".json");
				Scanner myReader = new Scanner(f);
				while (myReader.hasNextLine()) {
					data = myReader.nextLine();
					System.out.println(data);
					dataJson.append(data);
				}
				myReader.close();
				// line
				JSONParser parser = new JSONParser();// string to javascript

				JSONObject json = (JSONObject) parser.parse(dataJson.toString());
				System.out.println("BLOCK Object creation");

				String Field_mapping = json.get("BLOCK").toString();

				System.out.println("Field_mapping-------" + Field_mapping.toString());

				JSONObject json_fields = (JSONObject) parser.parse(Field_mapping);

				System.out.println("json_fields------" + json_fields.toString());

				System.out.println(
						"--------------------------------------------------------------------------------------------");

				System.out.println("Relation object ");

				String Relation = json.get("Relations").toString();

				JSONObject json_relation = (JSONObject) parser.parse(Relation);

				System.out.println("json_relation " + json_relation);

				System.out.println("==========================================================");

				if (json_relation.containsKey("Parent_Table_Relation")) {

					System.out.println("Parent_Table_Relation Object  creation");

					String Parent_Table_Relation = json_relation.get("Parent_Table_Relation").toString();

					JSONObject json_Parent_Table_Relation = (JSONObject) parser.parse(Parent_Table_Relation);

					// String tabledata=(String)
					// json_fields.get("sttm_customers1");

					System.out.println("json_Parent_Table_Relation==" + json_Parent_Table_Relation);

					System.out.println("==========================================================");

					System.out.println("Get ParentTable");
					parentTable = (String) json_Parent_Table_Relation.get("parent_table");

					System.out.println("parentTable  " + parentTable);

					System.out.println("----------------------------------------------------------");

					data1 = new LinkedHashMap<>();

					System.out.println("Get parentTable fields and coloumns");

					data1.put("BLK_" + parentTable, (HashMap<String, String>) json_fields.get("BLK_" + parentTable));

					System.out.println("data1=====" + data1);

					for (Map.Entry<String, HashMap<String, String>> entry : data1.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Map.Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									System.out.println(entry1.getKey());
									column.add(entry1.getKey());
									fields.add(entry1.getValue());
								}
							}

						}

					}

					for (int i = 0; i < fields.size(); i++) {
						System.out.println("fields---" + fields.get(i) + " column----" + column.get(i));
					}

					System.out.println(
							"------------------------------------------------------------------------------------");

					/// String parentTable_variable = parentTable ;

					// System.out.println(parentTable_variable);

					System.out.println("get parentTable_primarykey");

					parentTable_primarykey = (String) json_Parent_Table_Relation.get(parentTable);
					System.out.println("parentTable_primarykey " + parentTable_primarykey);

					String BLK_parentTable = json_fields.get("BLK_" + parentTable).toString();

					JSONObject json_BLK_parentTable = (JSONObject) parser.parse(BLK_parentTable);

					System.out.println("json_BLK_parentTable---" + json_BLK_parentTable);

					Field_OfPrimaryKey = (String) json_BLK_parentTable.get(parentTable_primarykey);

					System.out.println("Field_OfPrimaryKey-------------" + Field_OfPrimaryKey);

					column.remove(parentTable_primarykey);
					fields.remove(Field_OfPrimaryKey);

				}

				System.out.println("-------------------------------------------------------------------------");

				if (json_relation.containsKey("DYNAMIC_TABLE_RELATION")) {

					System.out.println("DYNAMIC_TABLE_BLOCK Object  creation");

					String dynamic_block_relation = json.get("DYNAMIC_BLOCK").toString();

					JSONObject json_dynamic_block_relation = (JSONObject) parser.parse(dynamic_block_relation);

					System.out
							.println("==============================================================================");

					System.out.println("DYNAMIC_TABLE_RELATION Object  creation");

					String dynamic_table_relation = json_relation.get("DYNAMIC_TABLE_RELATION").toString();

					System.out.println(dynamic_table_relation);

					json_dynamic_table_relation = (JSONObject) parser.parse(dynamic_table_relation);

					System.out
							.println("==============================================================================");

					System.out.println("taking dynamic_table name");

					dynamic_table1 = (String) json_dynamic_table_relation.get("DYNAMIC_TABLE1");
					System.out.println("dynamic_table1---" + dynamic_table1);

					System.out
							.println("==============================================================================");

					System.out.println("Taking dynamic_table1 columns and fields");

					Role_data = new LinkedHashMap<>();

					Role_data.put("BLK_" + dynamic_table1,
							(HashMap<String, String>) json_dynamic_block_relation.get("BLK_" + dynamic_table1));

					System.out.println("Role_data---" + Role_data);

					for (Entry<String, HashMap<String, String>> entry : Role_data.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									Role_column.add(entry1.getKey());
									Role_fields.add(entry1.getValue());
								}
							}
						}

					}

					System.out.println(Role_fields);
					System.out.println(Role_column);

					role_increment_Data.put("BLK2_" + dynamic_table1,
							(HashMap<String, String>) json_dynamic_block_relation.get("BLK2_" + dynamic_table1));

					for (Entry<String, HashMap<String, String>> entry : role_increment_Data.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									Role_column2.add(entry1.getKey());
									Role_incremental_fields.add(entry1.getValue());
								}
							}
						}

					}
					System.out.println("Role_incremental_fields--" + Role_incremental_fields);
					System.out.println("Role_column2--" + Role_column2);

				}

				if (json_relation.containsKey("Get_Table_Relation")) {

					System.out.println("Get_Table_Relation Object Creation-----");

					// if(json_relation.containsKey("Get_Table_Relation")){
					JSONObject get_block_relation = (JSONObject) parser
							.parse(json_relation.get("Get_Table_Relation").toString());

					System.out.println("Taking get_Table1 name");
					get_Table1 = (String) get_block_relation.get("Get_Table1");

					System.out.println("Get_Table1--" + get_Table1);

					System.out
							.println("==============================================================================");

					System.out.println("Taking Get Table Relations");

					/*
					 * get_Table_Relation.addAll((List)
					 * get_block_relation.get(get_Table1));
					 * 
					 * System.out.println("get_Table_Relation--" +
					 * get_Table_Relation);
					 */
					System.out
							.println("==============================================================================");

					System.out.println("Get_BLOCK Object Creation ");

					JSONObject get_block = (JSONObject) parser.parse(json.get("Get_BLOCK").toString());

					System.out.println(get_block);

					System.out.println("Get Table columns and Fields");

					Get_Table_Relation_data.put("BLK_" + get_Table1,
							(HashMap<String, String>) get_block.get("BLK_" + get_Table1));

					System.out.println("Get_Table_Relation_data--" + Get_Table_Relation_data);

					for (Entry<String, HashMap<String, String>> entry : Get_Table_Relation_data.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									get_Table_Column.add(entry1.getKey());
									get_Table_Fields.add(entry1.getValue());
								}
							}
						}

					}

				}

				System.out.println("==============================================================================");

				StringBuffer getQuery = new StringBuffer();

				getQuery.append("Select ");
				for (int i = 0; i < column.size(); i++) {
					getQuery.append(column.get(i));
					if (column.size() - 1 == i) {

					} else {
						getQuery.append(",");
					}
				}

				getQuery.append(" From ");
				getQuery.append(parentTable);
				getQuery.append(" Where ");
				getQuery.append(parentTable_primarykey);
				getQuery.append("=");
				getQuery.append("'");
				getQuery.append(request.getParameter(Field_OfPrimaryKey));
				getQuery.append("'");

				System.out.println("getQuery--" + getQuery.toString());

				List<String> frontEndData = new ArrayList<>();

				List<String> backendData = new ArrayList<>();

				List<String> frontEndData1 = new ArrayList<>();

				List<String> columnData = new ArrayList<>();

				for (int i = 0; i < fields.size(); i++) {

					System.out.println("================================");

					String Data = request.getParameter(fields.get(i));

					if (Data != null) {
						frontEndData.add(Data);
					} else {
						frontEndData.add("");
					}
					// Move to the next column index
				}

				System.out.println("frontEndvalues1--" + frontEndData1);

				/*
				 * for(int i=0; i<fields.size(); i++){
				 * 
				 * frontEndData.add(request.getParameter(fields.get(i)));
				 * 
				 * System.out.println("frontEndData--"+frontEndData.get(i));
				 * 
				 * }
				 */

				System.out.println("frontEndData--" + frontEndData);

				PreparedStatement ps = null;
				try {

					/*
					 * DatabaseUtil dbConn = new DatabaseUtil(); Statement stmt
					 * = dbConn.conn.createStatement();
					 */
					ResultSet rs = DatabaseUtil.executeQueryData1(getQuery.toString(), "N");

					while (rs.next()) {
						int i = 1; // Start i from 1 (columns are 1-indexed in
									// ResultSet)

						// Iterate through each column in updatalist
						for (String columnName : column) {
							System.out.println("Column Name: " + columnName);

							System.out.println("Value: " + rs.getString(i));

							System.out.println("================================");

							String Data = rs.getString(i);

							if (Data != null) {
								backendData.add(Data);
							} else {
								backendData.add("");
							}

							i++;

							// Move to the next column index
						}

					}

					System.out.println("frontEndData--" + frontEndData);

					System.out.println("backendData--" + backendData);

					System.out.println("frontEndDataSize " + frontEndData.size());

					System.out.println("backendDataSize---" + backendData.size());

					for (int i = 0; i < frontEndData.size(); i++) {
						String frontEndValue = frontEndData.get(i);
						String backEndValue = backendData.get(i);
						String columnsValue = column.get(i);

						if (!(frontEndValue.equals(backEndValue))) {
							System.out.println("=============CONDITION CHECK==============");
							System.out.println("backendVlaue--" + backEndValue);
							System.out.println("frontendVlaue1--" + frontEndValue);
							System.out.println("colname--" + columnsValue);
							System.out.println("==============================================");

							frontEndData1.add(frontEndValue);
							columnData.add(columnsValue);

						}

					}

					System.out.println("frontEndData1---" + frontEndData1);
					System.out.println("columnData---" + columnData);

					StringBuffer updateQuery = new StringBuffer();
					updateQuery.append("update ");
					updateQuery.append(parentTable.toUpperCase());
					updateQuery.append(" SET ");
					for (int i = 0; i < columnData.size(); i++) {

						if (i < columnData.size()) {
							updateQuery.append(columnData.get(i));
							updateQuery.append("=");
							updateQuery.append("'");
							updateQuery.append(frontEndData1.get(i));
							updateQuery.append("'");

							if (columnData.size() - 1 == i) {

							} else {
								updateQuery.append(",");
							}
						}

					}

					updateQuery.append(" where ");
					updateQuery.append(parentTable_primarykey);
					updateQuery.append("=");
					updateQuery.append("'");
					updateQuery.append(request.getParameter(Field_OfPrimaryKey));
					updateQuery.append("'");

					System.out.println("updateQuery----" + updateQuery.toString());

					ps = DatabaseUtil.executeQueryData(updateQuery.toString(), "N");

					if (frontEndData1.size() > 0) {
						ps.executeUpdate();
						System.out.println("successfully closed");
					}

				} catch (java.sql.SQLIntegrityConstraintViolationException e1) {

					e1.printStackTrace();

				} catch (SQLException e) {
					e.printStackTrace();

				}

			} catch (FileNotFoundException e) {

				System.out.println("An error occurred.");

				e.printStackTrace();

			} catch (ParseException e) {

				// TODO Auto-generated catch block

				e.printStackTrace();
			}
		}

		if (request.getParameter("method").equals("REOPEN")) {

			System.out.println("REOPEN------------");
			try {
				File f = new File(
						"C:/Users/Yashvanth/Desktop/New folder/Dynamic_Login_Page_updated/WebContent/JsonScreen/"
								+ function_id + ".json");
				Scanner myReader = new Scanner(f);
				while (myReader.hasNextLine()) {
					data = myReader.nextLine();
					System.out.println(data);
					dataJson.append(data);
				}
				myReader.close();
				// line
				JSONParser parser = new JSONParser();// string to javascript

				JSONObject json = (JSONObject) parser.parse(dataJson.toString());
				System.out.println("BLOCK Object creation");

				String Field_mapping = json.get("BLOCK").toString();

				System.out.println("Field_mapping-------" + Field_mapping.toString());

				JSONObject json_fields = (JSONObject) parser.parse(Field_mapping);

				System.out.println("json_fields------" + json_fields.toString());

				System.out.println(
						"--------------------------------------------------------------------------------------------");

				System.out.println("Relation object ");

				String Relation = json.get("Relations").toString();

				JSONObject json_relation = (JSONObject) parser.parse(Relation);

				System.out.println("json_relation " + json_relation);

				System.out.println("==========================================================");

				if (json_relation.containsKey("Parent_Table_Relation")) {

					System.out.println("Parent_Table_Relation Object  creation");

					String Parent_Table_Relation = json_relation.get("Parent_Table_Relation").toString();

					JSONObject json_Parent_Table_Relation = (JSONObject) parser.parse(Parent_Table_Relation);

					// String tabledata=(String)
					// json_fields.get("sttm_customers1");

					System.out.println("json_Parent_Table_Relation==" + json_Parent_Table_Relation);

					System.out.println("==========================================================");

					System.out.println("Get ParentTable");
					parentTable = (String) json_Parent_Table_Relation.get("parent_table");

					System.out.println("parentTable  " + parentTable);

					System.out.println("----------------------------------------------------------");

					data1 = new LinkedHashMap<>();

					System.out.println("Get parentTable fields and coloumns");

					data1.put("BLK_" + parentTable, (HashMap<String, String>) json_fields.get("BLK_" + parentTable));

					System.out.println("data1=====" + data1);

					for (Map.Entry<String, HashMap<String, String>> entry : data1.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Map.Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									System.out.println(entry1.getKey());
									column.add(entry1.getKey());
									fields.add(entry1.getValue());
								}
							}

						}

					}

					for (int i = 0; i < fields.size(); i++) {
						System.out.println("fields---" + fields.get(i) + " column----" + column.get(i));
					}

					System.out.println(
							"------------------------------------------------------------------------------------");

					/// String parentTable_variable = parentTable ;

					// System.out.println(parentTable_variable);

					System.out.println("get parentTable_primarykey");

					parentTable_primarykey = (String) json_Parent_Table_Relation.get(parentTable);
					System.out.println("parentTable_primarykey " + parentTable_primarykey);

					String BLK_parentTable = json_fields.get("BLK_" + parentTable).toString();

					JSONObject json_BLK_parentTable = (JSONObject) parser.parse(BLK_parentTable);

					System.out.println("json_BLK_parentTable---" + json_BLK_parentTable);

					Field_OfPrimaryKey = (String) json_BLK_parentTable.get(parentTable_primarykey);

					System.out.println("Field_OfPrimaryKey-------------" + Field_OfPrimaryKey);

					column.remove(parentTable_primarykey);
					fields.remove(Field_OfPrimaryKey);

				}

				System.out.println("-------------------------------------------------------------------------");

				if (json_relation.containsKey("DYNAMIC_TABLE_RELATION")) {

					System.out.println("DYNAMIC_TABLE_BLOCK Object  creation");

					String dynamic_block_relation = json.get("DYNAMIC_BLOCK").toString();

					JSONObject json_dynamic_block_relation = (JSONObject) parser.parse(dynamic_block_relation);

					System.out
							.println("==============================================================================");

					System.out.println("DYNAMIC_TABLE_RELATION Object  creation");

					String dynamic_table_relation = json_relation.get("DYNAMIC_TABLE_RELATION").toString();

					System.out.println(dynamic_table_relation);

					json_dynamic_table_relation = (JSONObject) parser.parse(dynamic_table_relation);

					System.out
							.println("==============================================================================");

					System.out.println("taking dynamic_table name");

					dynamic_table1 = (String) json_dynamic_table_relation.get("DYNAMIC_TABLE1");
					System.out.println("dynamic_table1---" + dynamic_table1);

					System.out
							.println("==============================================================================");

					System.out.println("Taking dynamic_table1 columns and fields");

					Role_data = new LinkedHashMap<>();

					Role_data.put("BLK_" + dynamic_table1,
							(HashMap<String, String>) json_dynamic_block_relation.get("BLK_" + dynamic_table1));

					System.out.println("Role_data---" + Role_data);

					for (Entry<String, HashMap<String, String>> entry : Role_data.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									Role_column.add(entry1.getKey());
									Role_fields.add(entry1.getValue());
								}
							}
						}

					}

					System.out.println(Role_fields);
					System.out.println(Role_column);

					role_increment_Data.put("BLK2_" + dynamic_table1,
							(HashMap<String, String>) json_dynamic_block_relation.get("BLK2_" + dynamic_table1));

					for (Entry<String, HashMap<String, String>> entry : role_increment_Data.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									Role_column2.add(entry1.getKey());
									Role_incremental_fields.add(entry1.getValue());
								}
							}
						}

					}
					System.out.println("Role_incremental_fields--" + Role_incremental_fields);
					System.out.println("Role_column2--" + Role_column2);

				}

				if (json_relation.containsKey("Get_Table_Relation")) {

					System.out.println("Get_Table_Relation Object Creation-----");

					// if(json_relation.containsKey("Get_Table_Relation")){
					JSONObject get_block_relation = (JSONObject) parser
							.parse(json_relation.get("Get_Table_Relation").toString());

					System.out.println("Taking get_Table1 name");
					get_Table1 = (String) get_block_relation.get("Get_Table1");

					System.out.println("Get_Table1--" + get_Table1);

					System.out
							.println("==============================================================================");

					System.out.println("Taking Get Table Relations");

					/*
					 * get_Table_Relation.addAll((List)
					 * get_block_relation.get(get_Table1));
					 * 
					 * System.out.println("get_Table_Relation--" +
					 * get_Table_Relation);
					 */
					System.out
							.println("==============================================================================");

					System.out.println("Get_BLOCK Object Creation ");

					JSONObject get_block = (JSONObject) parser.parse(json.get("Get_BLOCK").toString());

					System.out.println(get_block);

					System.out.println("Get Table columns and Fields");

					Get_Table_Relation_data.put("BLK_" + get_Table1,
							(HashMap<String, String>) get_block.get("BLK_" + get_Table1));

					System.out.println("Get_Table_Relation_data--" + Get_Table_Relation_data);

					for (Entry<String, HashMap<String, String>> entry : Get_Table_Relation_data.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									get_Table_Column.add(entry1.getKey());
									get_Table_Fields.add(entry1.getValue());
								}
							}
						}

					}

				}

				System.out.println("==============================================================================");

				StringBuffer getQuery = new StringBuffer();

				getQuery.append("Select ");
				for (int i = 0; i < column.size(); i++) {
					getQuery.append(column.get(i));
					if (column.size() - 1 == i) {

					} else {
						getQuery.append(",");
					}
				}

				getQuery.append(" From ");
				getQuery.append(parentTable);
				getQuery.append(" Where ");
				getQuery.append(parentTable_primarykey);
				getQuery.append("=");
				getQuery.append("'");
				getQuery.append(request.getParameter(Field_OfPrimaryKey));
				getQuery.append("'");

				System.out.println("getQuery--" + getQuery.toString());

				List<String> frontEndData = new ArrayList<>();

				List<String> backendData = new ArrayList<>();

				List<String> frontEndData1 = new ArrayList<>();

				List<String> columnData = new ArrayList<>();

				for (int i = 0; i < fields.size(); i++) {

					System.out.println("================================");

					String Data = request.getParameter(fields.get(i));

					if (Data != null) {
						frontEndData.add(Data);
					} else {
						frontEndData.add("");
					}
					// Move to the next column index
				}

				System.out.println("frontEndvalues1--" + frontEndData1);

				/*
				 * for(int i=0; i<fields.size(); i++){
				 * 
				 * frontEndData.add(request.getParameter(fields.get(i)));
				 * 
				 * System.out.println("frontEndData--"+frontEndData.get(i));
				 * 
				 * }
				 */

				System.out.println("frontEndData--" + frontEndData);

				PreparedStatement ps = null;
				try {

					/*
					 * DatabaseUtil dbConn = new DatabaseUtil(); Statement stmt
					 * = dbConn.conn.createStatement();
					 */
					ResultSet rs = DatabaseUtil.executeQueryData1(getQuery.toString(), "N");

					while (rs.next()) {
						int i = 1; // Start i from 1 (columns are 1-indexed in
									// ResultSet)

						// Iterate through each column in updatalist
						for (String columnName : column) {
							System.out.println("Column Name: " + columnName);

							System.out.println("Value: " + rs.getString(i));

							System.out.println("================================");

							String Data = rs.getString(i);

							if (Data != null) {
								backendData.add(Data);
							} else {
								backendData.add("");
							}

							i++;

							// Move to the next column index
						}

					}

					System.out.println("frontEndData--" + frontEndData);

					System.out.println("backendData--" + backendData);

					System.out.println("frontEndDataSize " + frontEndData.size());

					System.out.println("backendDataSize---" + backendData.size());

					for (int i = 0; i < frontEndData.size(); i++) {
						String frontEndValue = frontEndData.get(i);
						String backEndValue = backendData.get(i);
						String columnsValue = column.get(i);

						if (!(frontEndValue.equals(backEndValue))) {
							System.out.println("=============CONDITION CHECK==============");
							System.out.println("backendVlaue--" + backEndValue);
							System.out.println("frontendVlaue1--" + frontEndValue);
							System.out.println("colname--" + columnsValue);
							System.out.println("==============================================");

							frontEndData1.add(frontEndValue);
							columnData.add(columnsValue);

						}

					}

					System.out.println("frontEndData1---" + frontEndData1);
					System.out.println("columnData---" + columnData);

					StringBuffer updateQuery = new StringBuffer();
					updateQuery.append("update ");
					updateQuery.append(parentTable.toUpperCase());
					updateQuery.append(" SET ");
					for (int i = 0; i < columnData.size(); i++) {

						if (i < columnData.size()) {
							updateQuery.append(columnData.get(i));
							updateQuery.append("=");
							updateQuery.append("'");
							updateQuery.append(frontEndData1.get(i));
							updateQuery.append("'");

							if (columnData.size() - 1 == i) {

							} else {
								updateQuery.append(",");
							}
						}

					}

					updateQuery.append(" where ");
					updateQuery.append(parentTable_primarykey);
					updateQuery.append("=");
					updateQuery.append("'");
					updateQuery.append(request.getParameter(Field_OfPrimaryKey));
					updateQuery.append("'");

					System.out.println("updateQuery----" + updateQuery.toString());

					ps = DatabaseUtil.executeQueryData(updateQuery.toString(), "N");
					if (frontEndData1.size() > 0) {
						ps.executeUpdate();
						System.out.println("successfully Reopen");
					}

				} catch (java.sql.SQLIntegrityConstraintViolationException e1) {

					e1.printStackTrace();

				} catch (SQLException e) {
					e.printStackTrace();

				}

			} catch (FileNotFoundException e) {

				System.out.println("An error occurred.");

				e.printStackTrace();

			} catch (ParseException e) {

				// TODO Auto-generated catch block

				e.printStackTrace();
			}
		}

		if (request.getParameter("method").equals("DELETE")) {

			try {
				File f = new File(
						"C:/Users/Yashvanth/Desktop/New folder/Dynamic_Login_Page_updated/WebContent/JsonScreen/"
								+ function_id + ".json");
				Scanner myReader = new Scanner(f);
				while (myReader.hasNextLine()) {
					data = myReader.nextLine();
					System.out.println(data);
					dataJson.append(data);
				}
				myReader.close();
				// line
				JSONParser parser = new JSONParser();// string to javascript

				JSONObject json = (JSONObject) parser.parse(dataJson.toString());
				System.out.println("BLOCK Object creation");

				String Field_mapping = json.get("BLOCK").toString();

				System.out.println("Field_mapping-------" + Field_mapping.toString());

				JSONObject json_fields = (JSONObject) parser.parse(Field_mapping);

				System.out.println("json_fields------" + json_fields.toString());

				System.out.println(
						"--------------------------------------------------------------------------------------------");

				System.out.println("Relation object ");

				String Relation = json.get("Relations").toString();

				JSONObject json_relation = (JSONObject) parser.parse(Relation);

				System.out.println("json_relation " + json_relation);

				System.out.println("==========================================================");

				if (json_relation.containsKey("Parent_Table_Relation")) {

					System.out.println("Parent_Table_Relation Object  creation");

					String Parent_Table_Relation = json_relation.get("Parent_Table_Relation").toString();

					JSONObject json_Parent_Table_Relation = (JSONObject) parser.parse(Parent_Table_Relation);

					// String tabledata=(String)
					// json_fields.get("sttm_customers1");

					System.out.println("json_Parent_Table_Relation==" + json_Parent_Table_Relation);

					System.out.println("==========================================================");

					System.out.println("Get ParentTable");
					parentTable = (String) json_Parent_Table_Relation.get("parent_table");

					System.out.println("parentTable  " + parentTable);

					System.out.println("----------------------------------------------------------");

					data1 = new LinkedHashMap<>();

					System.out.println("Get parentTable fields and coloumns");

					data1.put("BLK_" + parentTable, (HashMap<String, String>) json_fields.get("BLK_" + parentTable));

					System.out.println("data1=====" + data1);

					for (Map.Entry<String, HashMap<String, String>> entry : data1.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Map.Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									System.out.println(entry1.getKey());
									column.add(entry1.getKey());
									fields.add(entry1.getValue());
								}
							}

						}

					}

					for (int i = 0; i < fields.size(); i++) {
						System.out.println("fields---" + fields.get(i) + " column----" + column.get(i));
					}

					System.out.println(
							"------------------------------------------------------------------------------------");

					/// String parentTable_variable = parentTable ;

					// System.out.println(parentTable_variable);

					System.out.println("get parentTable_primarykey");

					parentTable_primarykey = (String) json_Parent_Table_Relation.get(parentTable);
					System.out.println("parentTable_primarykey " + parentTable_primarykey);

					String BLK_parentTable = json_fields.get("BLK_" + parentTable).toString();

					JSONObject json_BLK_parentTable = (JSONObject) parser.parse(BLK_parentTable);

					System.out.println("json_BLK_parentTable---" + json_BLK_parentTable);

					Field_OfPrimaryKey = (String) json_BLK_parentTable.get(parentTable_primarykey);

					System.out.println("Field_OfPrimaryKey-------------" + Field_OfPrimaryKey);

					column.remove(parentTable_primarykey);
					fields.remove(Field_OfPrimaryKey);

				}

				System.out.println("-------------------------------------------------------------------------");

				if (json_relation.containsKey("DYNAMIC_TABLE_RELATION")) {

					System.out.println("DYNAMIC_TABLE_BLOCK Object  creation");

					String dynamic_block_relation = json.get("DYNAMIC_BLOCK").toString();

					JSONObject json_dynamic_block_relation = (JSONObject) parser.parse(dynamic_block_relation);

					System.out
							.println("==============================================================================");

					System.out.println("DYNAMIC_TABLE_RELATION Object  creation");

					String dynamic_table_relation = json_relation.get("DYNAMIC_TABLE_RELATION").toString();

					System.out.println(dynamic_table_relation);

					json_dynamic_table_relation = (JSONObject) parser.parse(dynamic_table_relation);

					System.out
							.println("==============================================================================");

					System.out.println("taking dynamic_table name");

					dynamic_table1 = (String) json_dynamic_table_relation.get("DYNAMIC_TABLE1");
					System.out.println("dynamic_table1---" + dynamic_table1);

					dynamic_table1_primaryKey = (String) json_dynamic_table_relation.get(dynamic_table1);

					System.out.println("dynamic_table1_primaryKey--" + dynamic_table1_primaryKey);

					System.out
							.println("==============================================================================");

					System.out.println("Taking dynamic_table1 columns and fields");

					Role_data = new LinkedHashMap<>();

					Role_data.put("BLK_" + dynamic_table1,
							(HashMap<String, String>) json_dynamic_block_relation.get("BLK_" + dynamic_table1));

					System.out.println("Role_data---" + Role_data);

					for (Entry<String, HashMap<String, String>> entry : Role_data.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									Role_column.add(entry1.getKey());
									Role_fields.add(entry1.getValue());
								}
							}
						}

					}

					System.out.println(Role_fields);
					System.out.println(Role_column);

					role_increment_Data.put("BLK2_" + dynamic_table1,
							(HashMap<String, String>) json_dynamic_block_relation.get("BLK2_" + dynamic_table1));

					for (Entry<String, HashMap<String, String>> entry : role_increment_Data.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									Role_column2.add(entry1.getKey());
									Role_incremental_fields.add(entry1.getValue());
								}
							}
						}

					}
					System.out.println("Role_incremental_fields--" + Role_incremental_fields);
					System.out.println("Role_column2--" + Role_column2);

				}

				if (json_relation.containsKey("Get_Table_Relation")) {

					System.out.println("Get_Table_Relation Object Creation-----");

					// if(json_relation.containsKey("Get_Table_Relation")){
					JSONObject get_block_relation = (JSONObject) parser
							.parse(json_relation.get("Get_Table_Relation").toString());

					System.out.println("Taking get_Table1 name");
					get_Table1 = (String) get_block_relation.get("Get_Table1");

					System.out.println("Get_Table1--" + get_Table1);

					System.out
							.println("==============================================================================");

					System.out.println("Taking Get Table Relations");

					/*
					 * get_Table_Relation.addAll((List)
					 * get_block_relation.get(get_Table1));
					 * 
					 * System.out.println("get_Table_Relation--" +
					 * get_Table_Relation);
					 */
					System.out
							.println("==============================================================================");

					System.out.println("Get_BLOCK Object Creation ");

					JSONObject get_block = (JSONObject) parser.parse(json.get("Get_BLOCK").toString());

					System.out.println(get_block);

					System.out.println("Get Table columns and Fields");

					Get_Table_Relation_data.put("BLK_" + get_Table1,
							(HashMap<String, String>) get_block.get("BLK_" + get_Table1));

					System.out.println("Get_Table_Relation_data--" + Get_Table_Relation_data);

					for (Entry<String, HashMap<String, String>> entry : Get_Table_Relation_data.entrySet()) {
						int i = 0;
						System.out.println("Key1 = " + entry.getKey() + ", Value1 = " + entry.getValue());
						for (i = 0; i < entry.getValue().size(); i++) {
							/*
							 * System.out.println(i);
							 * System.out.println((HashMap) entry.getValue());
							 */
							for (Entry<String, String> entry1 : entry.getValue().entrySet()) {

								if (i < 1) {
									System.out.println("Key2= " + entry1.getKey() + ", Value2 = " + entry1.getValue());

									get_Table_Column.add(entry1.getKey());
									get_Table_Fields.add(entry1.getValue());
								}
							}
						}

					}

				}

				System.out.println("================================");

				StringBuffer deleteQuery = new StringBuffer();

				deleteQuery.append("delete from ");
				deleteQuery.append(parentTable.toUpperCase());
				deleteQuery.append(" where ");
				deleteQuery.append(parentTable_primarykey);
				deleteQuery.append("=");
				deleteQuery.append("'");
				deleteQuery.append(request.getParameter(Field_OfPrimaryKey));
				deleteQuery.append("'");

				System.out.println("deleteQuery--" + deleteQuery.toString());

				PreparedStatement stmt1 = null;
				try {
					/* DatabaseUtil dbConn = new DatabaseUtil(); */

					stmt1 = DatabaseUtil.executeQueryData(deleteQuery.toString(), "N");
					stmt1.executeUpdate();
					System.out.println("deleted Successfully..");

				} catch (java.sql.SQLIntegrityConstraintViolationException e1) {

					e1.printStackTrace();

				} catch (SQLException e) {
					e.printStackTrace();

				}

				boolean DYNAMIC_TABLE1 = false;

				List<String> l2 = new ArrayList<>();

				for (int i = 0; i < json_dynamic_table_relation.size(); i++) {

					l2.add("DYNAMIC_TABLE" + i);

					if (l2.contains("DYNAMIC_TABLE1")) {
						DYNAMIC_TABLE1 = true;

					}

					/*
					 * if (json.containsKey("child_table" + i)) { childtable =
					 * true; // System.out.println("child tables //
					 * :::"+json.get("child_table"+i));
					 * 
					 * }
					 */
				}
				System.out.println(l2);
				System.out.println("DYNAMIC_TABLE1--" + DYNAMIC_TABLE1);

				if (DYNAMIC_TABLE1 == true) {

					System.out.println("Inside the Condtion");

					StringBuffer q21 = new StringBuffer();

					q21.append("delete from ");
					q21.append(dynamic_table1.toUpperCase());
					q21.append(" where ");
					q21.append(dynamic_table1_primaryKey);
					q21.append("=");
					q21.append("'");
					q21.append(request.getParameter(dynamic_table1_primaryKey));
					q21.append("'");

					System.out.println("Delete query " + q21.toString());

					PreparedStatement ps = null;
					try {

						ps = DatabaseUtil.executeQueryData(q21.toString(), "N");
						ps.executeUpdate();
						System.out.println("All data deleted successfully");

					} catch (java.sql.SQLIntegrityConstraintViolationException e1) {

						e1.printStackTrace();

					} catch (SQLException e) {
						e.printStackTrace();

					}

				}

			} catch (FileNotFoundException e) {

				System.out.println("An error occurred.");

				e.printStackTrace();

			} catch (ParseException e) {

				// TODO Auto-generated catch block

				e.printStackTrace();
			}

		}

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
