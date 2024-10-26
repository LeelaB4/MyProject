package com.fcub.login;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.DatabaseMetaData;
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

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

@WebServlet("/Screen_Json")
public class Screen_Json extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String function_id = request.getParameter("function_id");
		if (request.getParameter("method").equals("POST")) {

			System.out.println("calling Servlet Screen Json::");
			StringBuffer dataJson = new StringBuffer();
			String data = null;
			/* String function_id=request.getParameter("function_id"); */
			// String function_id = "STDCIF";

			/* ArrayList<String> frontendData=new ArrayList<>(); */
			LinkedHashMap<Integer, String> frontendData = new LinkedHashMap<>();

			try {

				File myObj = new File(
						"D:/Mahesh_Workspace/Dynamic_Login_Page/WebContent/JsonScreen/" + function_id + ".json");
				Scanner myReader = new Scanner(myObj);
				while (myReader.hasNextLine()) {
					data = myReader.nextLine();
					System.out.println(data);
					dataJson.append(data);
				}
				myReader.close();

	            System.out.println("Data Json::" + dataJson.toString());

	            JSONParser parser = new JSONParser();

	            JSONObject json = (JSONObject) parser.parse(dataJson.toString());

	            System.out.println(json.get("parent_table"));

	            String parenttable=json.get("parent_table").toString();

	            HashMap<String, List> datahashmap = new HashMap<>();

	 

	            /*

	             * datahashmap.computeIfAbsent((String) json.get("table_name"), k ->

	             * new ArrayList<>()) .add(json.get("fields"));

	             */

	            datahashmap.put((String) json.get(""), (List) json.get(parenttable));

	            JSONObject jsonformData = new JSONObject();

	            for (Map.Entry<String, List> entry : datahashmap.entrySet()) {

	                System.out.println("Key = " + entry.getKey() + ", Value = " + entry.getValue());

	                StringBuffer queryDyanamic = new StringBuffer();

	                queryDyanamic.append("INSERT INTO ");

	                queryDyanamic.append(parenttable.toUpperCase() + " VALUES(");

	                for (int i = 0; i < entry.getValue().size(); i++) {

	                    int j = i + 1;

	 

	                    System.out.println("frontend Data COme::" + request.getParameter((String) entry.getValue().get(i)));

	 

	                    frontendData.put(j, request.getParameter((String) entry.getValue().get(i)));

	                    String questionMark = "?";

	                    String comma = ",";

	                    if (i == entry.getValue().size() - 1) {

	                        queryDyanamic.append(questionMark + ")");

	                    } else {

	                        queryDyanamic.append(questionMark);

	                        queryDyanamic.append(comma);

	                    }

	 

	                    System.out.println("Query::::" + queryDyanamic.toString());

	                    System.out.println("index:" + i + " :" + entry.getValue().get(i));

	                    System.out.println(queryDyanamic.toString());

	                    PreparedStatement ps = null;

	                    try {

	 

	                       // DatabaseUtil dbConn = new DatabaseUtil();

	                        if (i == entry.getValue().size() - 1) {

	                            ps = DatabaseUtil.executeQueryData(queryDyanamic.toString().toString(),"N");

	                            for (int k = 0; k < frontendData.size(); k++) {

	                                int m = k + 1;

	                                ps.setString(m, request.getParameter((String) entry.getValue().get(k)));

	 

	                            }

	                            int count = ps.executeUpdate();

	                            System.out.println("Sucess Store::");

	                        }

	                        System.out.println(

	                                "Key:: " + j + "value:: " + request.getParameter((String) entry.getValue().get(i)));

	 

	                        /* ps.setString(1, "101"); */

	 

	                        System.out.println("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"

	                                + frontendData.toString());

	                    } catch (java.sql.SQLIntegrityConstraintViolationException e1) {

	                        e1.printStackTrace();

	                        response.setContentType("text/html;charset=UTF-8");

	                        ServletOutputStream out = response.getOutputStream();

	                    } catch (SQLException e) {

	                         // TODO Auto-generated catch block

	                        e.printStackTrace();

	                    }

	 

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
		if (request.getParameter("method").equals("GET")) {
			StringBuffer dataJson = new StringBuffer();
			String data = null;
			String pk1 = null;
			StringBuffer query = new StringBuffer();
			StringBuffer query2 = new StringBuffer();
			List<String> ldata = new ArrayList<>();
			List<String> rdata = new ArrayList<>();
			ArrayList<String> al1 = new ArrayList<>();
			ArrayList<String> al2 = new ArrayList<>();
			int q1 = 0;
			int q2 = 0;
			int jsize = 0;
			File f = new File("D:/Mahesh_Workspace/Dynamic_Login_Page/WebContent/JsonScreen/" + function_id + ".json");
			try {
				Scanner reader = new Scanner(f);
				System.out.println("========================JSONDATA=========================");
				while (reader.hasNextLine()) {
					data = reader.nextLine();
					System.out.println(data);
					dataJson.append(data);
				}
				System.out.println("=========================================================");
				reader.close();
				// System.out.println("Data Json::" + dataJson.toString());
				JSONParser parser = new JSONParser();
				JSONObject json;
				LinkedHashMap<String, List> mapdata = new LinkedHashMap<>();
				json = (JSONObject) parser.parse(dataJson.toString());
				// to know json objects size
				System.out.println("========================JSONSIZE=========================");
				System.out.println(json.size());
				jsize = json.size();
				System.out.println("=========================================================");
				String parenttable = json.get("parent_table").toString();
				System.out.println("=======================PARENTTABLE========================");
				System.out.println(parenttable);
				System.out.println("=========================================================");
				mapdata.put(parenttable, (List) json.get(parenttable));
				System.out.println("======================CHILDTABLE'S=======================");
				if (json.size() > 3) {
					for (int i = 1; i < json.size() / 2; i++) {
						System.out.println(json.get("table" + i));
						mapdata.put(json.get("child_table" + i).toString(),
								(List) json.get(json.get("child_table" + i).toString()));
					}
				}
				System.out.println("=================JSON KEY AND VALUE DATA==================");
				for (Map.Entry<String, List> entry : mapdata.entrySet()) {
					System.out.println("Key = " + entry.getKey() + ", Value = " + entry.getValue());
				}
				System.out.println("=========================================================");
				// adding resulttable values to list
				rdata.addAll((List) json.get("result"));
				// Join Query code start
				System.out.println("=====================JOINQUERY-STMTs======================");

				//DatabaseUtil dbConn = new DatabaseUtil();
				DatabaseMetaData metaData = DatabaseUtil.conn.getMetaData();
				DatabaseMetaData metadata2 = DatabaseUtil.conn.getMetaData();
				DatabaseMetaData metadata3 = DatabaseUtil.conn.getMetaData();
				// to get primary key of the master table
				ResultSet rspk = metadata3.getPrimaryKeys(null, null, parenttable.toUpperCase());
				while (rspk.next()) {
					pk1 = rspk.getString("COLUMN_NAME");
					System.out.println("pkk" + rspk.getString("COLUMN_NAME"));

				}
				if (json.size() > 3) {
					query2.append("select ");
					for (Map.Entry<String, List> entry : mapdata.entrySet()) {
						if (!entry.getKey().equals(json.get("result"))) {
							ldata.add(entry.getKey());
						}

						if (!entry.getKey().equals(json.get("parent_table"))) {

							for (int i = 0; i < entry.getValue().size(); i++) {
								query2.append(entry.getKey().toString() + "." + entry.getValue().get(i));
								if (i < entry.getValue().size() - 1) {
									query2.append(",");
								}
							}
							query2.append(",");
						}
					}
					query2.deleteCharAt(query2.lastIndexOf(","));

					query2.append(" from ");
					for (int i = 0; i < ldata.size(); i++) {
						query2.append(ldata.get(i) + " " + ldata.get(i));

						if (i < ldata.size() - 1) {
							query2.append(",");
						}
					}
					query2.append(" WHERE ");
					for (int i = 0; i < ldata.size(); i++) {
						for (int j = i + 1; j < ldata.size(); j++) {
							System.out.println(ldata.get(i) + "---" + ldata.get(j));
							System.out.println(ldata.get(j) + "====" + ldata.get(i));
							ResultSet rs = metaData.getCrossReference(null, null, ldata.get(i).toString().toUpperCase(),
									null, null, ldata.get(j).toString().toUpperCase()); // getColumns(null,
																						// null,
																						// "sttm_customers1".toUpperCase(),
																						// null);
							while (rs.next()) {
								String pk = rs.getString("FKCOLUMN_NAME");
								String fk = rs.getString("PKCOLUMN_NAME");
								query2.append(ldata.get(i).toUpperCase() + "." + pk + " = " + ldata.get(j).toUpperCase()
										+ "." + fk);
								query2.append(" AND ");
								// query2.append(",");

							}
							ResultSet rss = metadata2.getCrossReference(null, null,
									ldata.get(j).toString().toUpperCase(), null, null,
									ldata.get(i).toString().toUpperCase()); // getColumns(null,
																			// null,
																			// "sttm_customers1".toUpperCase(),
																			// null);
							while (rss.next()) {
								String pk = rss.getString("FKCOLUMN_NAME");
								String fk = rss.getString("PKCOLUMN_NAME");
								query2.append(ldata.get(j).toUpperCase() + "." + pk + " = " + ldata.get(i).toUpperCase()
										+ "." + fk);
								// query2.append(",");
								query2.append(" AND ");
								// query2.append(",");
							}
						}
					}
					//dbConn.getConnection().close();
					query2.append(parenttable + "." + pk1 + " = ");
					System.out.println(query2.toString());
				}
				System.out.println("======================MAINQUERY-STMT===========================");
				// -----------join query end and main query
				// start-----------------
				query.append("select ");
				for (Map.Entry<String, List> entry : mapdata.entrySet()) {
					if (entry.getKey().equals(json.get("parent_table"))) {
						ldata.add(entry.getKey());
						for (int i = 0; i < entry.getValue().size(); i++) {
							if (!entry.getValue().get(i).toString().toUpperCase().equals(pk1)) {
								query.append(entry.getValue().get(i));
								if (i < entry.getValue().size() - 1) {
									query.append(",");
								}
							}
						}
						break;
					}
				}
				query.append(" FROM" + " " + json.get("parent_table"));
				query.append(" WHERE ");
				query.append(pk1 + " = ");
				// System.out.println("===============================================================================");
				System.out.println(query.toString());

				System.out.println("============================================================");

				System.out.println("frontEnd data ::" + mapdata.get(parenttable).get(0));

				String getdata = request.getParameter((String) mapdata.get(parenttable).get(0));
				query.append(getdata);
				// query2.append(getdata);
				System.out.println(query.toString());
				// System.out.println(query2.toString());
				DatabaseUtil dbConn2 = new DatabaseUtil();
				//Statement ps1 = dbConn2.getConnection().createStatement();
				ResultSet rs1 = DatabaseUtil.executeQueryData1(query2.toString(), "N");
				q1 = rs1.getMetaData().getColumnCount();
				System.out.println("row count22:::" + rs1.getMetaData().getColumnCount());
				while (rs1.next()) {
					for (int i = 1; i <= rs1.getMetaData().getColumnCount(); i++) {
						if (rs1.getMetaData().getColumnClassName(i).equals("oracle.sql.TIMESTAMP")) {
							if (rs1.getString(i) == null) {
								al1.add(rs1.getString(i));
							} else {
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
						} else if (rs1.getMetaData().getColumnClassName(i).equals("java.sql.Timestamp")) {
							Date d = null;
							SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
							String s2 = rs1.getString(i);
							s2.substring(0, 10);
							d = d.valueOf(s2.substring(0, 10));
							al1.add(sdf.format(d).toString());
						} else {
							al1.add(rs1.getString(i));
						}
					}
				}
				for (int i = 0; i < al1.size(); i++) {
					System.out.println(al1.get(i));
				}
				///////////////////// Join Query/////////////////////////
				if (json.size() > 3) {
					query2.append(getdata);
					//dbConn2.getConnection().close();
					System.out.println(query2.toString());
					//DatabaseUtil dbConn3 = new DatabaseUtil();
					//Statement stmt2 = dbConn3.getConnection().createStatement();
					ResultSet rs22 = DatabaseUtil.executeQueryData1(query2.toString(), "Y");
					q2 = rs22.getMetaData().getColumnCount();
					System.out.println(rs22.getMetaData().getColumnCount());
					// rs22.first();
					while (rs22.next()) {
						for (int i = 1; i <= rs22.getMetaData().getColumnCount(); i++) {
							// System.out.println("==============Data2==================");
							// System.out.println(rs22.getString(1));
							// System.out.println(rs22.getString(2));
							// System.out.println("================================");
							// al2.add(rs22.getString(1));
							// al2.add(rs22.getString(2));
							al2.add(rs22.getString(i));
						}
					}

					for (int i = 0; i < al2.size(); i++) {
						System.out.println(al2.get(i));
					}
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
			for (int i = 0; i < q1; i++) {
				System.out.println(rdata.get(i));
			}
			System.out.println("===================");
			if (jsize > 3) {
				for (int i = q1; i < rdata.size(); i++) {
					System.out.println(rdata.get(i));
				}
				System.out.println(rdata.get(q1 + 1));
				System.out.println(q1);
				System.out.println(q2);
			}
			StringBuffer rj = new StringBuffer();
			if (al1.get(0).equals("null")) {

			} else if (!al1.isEmpty()) {
				rj.append("{");
				rj.append("\n");

				for (int i = 0; i < al1.size(); i++) {

					rj.append('"' + rdata.get(i) + '"' + " : " + '"' + al1.get(i) + '"');

					rj.append(",");

					rj.append("\n");

				}

				if (al2.size() > 0) {
					// rj.deleteCharAt(rj.lastIndexOf(","));

					// rj.append("\"countRow\" : "+"\""+(al2.size()/q2)+"\"");
					rj.append('"' + rdata.get(q1) + '"' + " : " + '"' + (al2.size() / q2) + '"');
					rj.append(",");
					rj.append("\n");

					int x = 0;
					System.out.println(al2.size() / (rdata.size() - (q1 + 1)));
					for (int i = 0; i < al2.size() / (rdata.size() - (q1 + 1)); i++) {
						for (int j = q1 + 1; j < rdata.size(); j++) {
							rj.append('"' + rdata.get(j) + i + '"' + " : " + '"' + al2.get(x) + '"');
							if (x < al2.size() - 1) {
								rj.append(",");
							}
							rj.append("\n");
							x++;
						}

					}
				} else {
					rj.deleteCharAt(rj.lastIndexOf(","));
					// rj.append("\"countRow\" : "+"\""+(al2.size()/q2)+"\"");
					// rj.append("\n");
				}

				rj.append("}");
				System.out.println(rj.toString());
			}
			response.getOutputStream().println(rj.toString());

		}
		if (request.getParameter("method").equals("UPDATE")) {
			String j = "STDCIF";

			StringBuffer dataJson = new StringBuffer();
			String data = null;
			StringBuffer query = new StringBuffer();
			try {
				File obj1 = new File(
						"D:/Mahesh_Workspace/Dynamic_Login_Page/WebContent/JsonScreen/" + function_id + ".json");
				Scanner reader = new Scanner(obj1);
				while (reader.hasNextLine()) {
					data = reader.nextLine();
					dataJson.append(data);
				}
				reader.close();
				JSONParser parser = new JSONParser();
				JSONObject json;

				json = (JSONObject) parser.parse(dataJson.toString());

				System.out.println("================database fields==============");
				System.out.println(json.get("fields"));
				System.out.println("=======fields to get data from front-end======");
				System.out.println(json.get("fileds2"));
				String tname = json.get("table_name").toString();
				System.out.println("================DB_TABLE NAME=================");
				System.out.println(tname);

				List<String> l1 = new ArrayList<String>();
				l1.addAll((List) json.get("fields"));

				List<String> l2 = new ArrayList<String>();
				l2.addAll((List) json.get("fileds2"));

				query.append("UPDATE ");
				query.append(tname.toUpperCase());
				query.append(" SET ");

				// DataBase connection
				//DatabaseUtil dbConn = new DatabaseUtil();
				DatabaseMetaData metaData = DatabaseUtil.conn.getMetaData();
				String tableName = (String) json.get("table_name");

				tableName = tableName.toUpperCase();
				;

				// Get the primary key information for the table
				ResultSet resultSet = metaData.getPrimaryKeys(null, null, tableName);
				String primaryKeyColumnName = null;

				// Check if the column is a primary key

				while (resultSet.next()) {
					primaryKeyColumnName = resultSet.getString("COLUMN_NAME");

				}

				for (int i = 0; i < l1.size(); i++) {
					if (!l1.get(i).equals(primaryKeyColumnName)) {
						query.append(l1.get(i));
						query.append(" = ");
						String s2 = request.getParameter(l2.get(i));

						if (s2.matches("\\d+")) {
							int a = Integer.parseInt(s2);
							// System.out.println(a);
							query.append(a);
							if (i < l1.size() - 1) {
								query.append(",");
							}
						}

						else if (!s2.matches("\\d+")) {
							query.append("'");
							query.append(request.getParameter(l2.get(i)));
							// System.out.println(request.getParameter(l2.get(i)));
							query.append("'");
							if (i < l1.size() - 1) {
								query.append(",");
							}
						}
					}
				}
				query.append(" WHERE ");
				int i2 = l1.indexOf(primaryKeyColumnName);
				query.append(primaryKeyColumnName);
				query.append(" = ");
				// query.append(l2.get(i2));
				// System.out.println(query.toString());

				String z = request.getParameter(l2.get(i2));
				int z1 = Integer.parseInt(z);
				query.append(z1);
				System.out.println(query.toString());
				PreparedStatement ps = DatabaseUtil.executeQueryData(query.toString(),"N");
				ps.execute();

			} catch (FileNotFoundException e) {
				e.printStackTrace();
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

	}

}