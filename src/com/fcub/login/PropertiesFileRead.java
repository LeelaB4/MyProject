package com.fcub.login;

import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;
import java.util.ResourceBundle;

public class PropertiesFileRead {
	static String DATABSE_URL;
	static String USERNAME;
	static String PASSWORD;
	static String DRIVER_PATH;
	static String Logo;

	public static String readProperties() {

		Properties prop = new Properties();

		try {
			/*ResourceBundle RB = ResourceBundle.getBundle("Config/configDb");*/
			InputStream input =PropertiesFileRead.class.getResourceAsStream("/Config/configDb.properties");
			// System.out.println("resource::"+ResourceBundle.getBundle("Config/configDb").getString("USERNAME"));
			// System.out.println("maheshshshssh"+System.getProperty("user.dir"));
			/*
			 * InputStream input =new FileInputStream(
			 * "D:/Mahesh_Workspace/Dynamic_Login_Page/WebContent/Config/configDb.properties"
			 * );
			 */
			// InputStream input =new FileInputStream("configDb.properties");
			// prop.load(input);

			// System.out.println(input.toString());
			prop.load(input);
			/*DATABSE_URL = RB.getString("DATABSE_URL");
			USERNAME = RB.getString("USERNAME");
			PASSWORD = RB.getString("PASSWORD");
			DRIVER_PATH = RB.getString("DRIVER_PATH");*/
			
			DATABSE_URL =prop.getProperty("DATABSE_URL");
			USERNAME =prop.getProperty("USERNAME");
			PASSWORD =prop.getProperty("PASSWORD");
			DRIVER_PATH =prop.getProperty("DRIVER_PATH");
			Logo=prop.getProperty("LOGO");

		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;

	}

}
