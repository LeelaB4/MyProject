package com.fcub.login;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Scanner;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

public class Test {

	public static void main(String[] args) {
		StringBuffer dataJson = new StringBuffer();
		String data = null;
		try {
			File myObj = new File("src/com/fcub/login/errorMap.json");
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
			/*System.out.println(json.get("ERRORMAP"));*/
			
			HashMap<String, List> datahashmap = new HashMap<>();
			HashMap<String,String> nestedJsonData=new HashMap<>();

			/*
			 * datahashmap.computeIfAbsent((String) json.get("table_name"), k ->
			 * new ArrayList<>()) .add(json.get("fields"));
			 */
			datahashmap.put("ERRORMAP", (List) json.get("ERRORMAP"));
			JSONObject jsonformData = new JSONObject();
			for (Map.Entry<String, List> entry : datahashmap.entrySet()) {
				System.out.println("Key = " + entry.getKey() + ", Value = " + entry.getValue());
				for(int i=0;i<entry.getValue().size();i++)
				{
					System.out.println((Map)entry.getValue().get(i));
					for (Entry<String, List> entry1 : ((Map<String,List>) entry.getValue().get(i)).entrySet()) {
						System.out.println("Key1 = " + entry1.getKey() + ", Value1 = " + entry1.getValue());
						jsonformData.put(entry1.getKey(), entry1.getValue());
					}
					
					
				}
			}
			
			
			for(int i=0;i<jsonformData.size();i++)
			{
				System.out.println(jsonformData.get("Invalid User"));
			}
			
			
			System.out.println("aaaaaaaaa"+jsonformData);
			
			
			
		
		
		
		
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		

	}

}
