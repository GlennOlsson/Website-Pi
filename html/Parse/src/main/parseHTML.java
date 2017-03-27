package main;

import java.io.*;
import java.util.Iterator;

import org.jsoup.Jsoup;


public class parseHTML{
public static void main(String args[]){

String url = "https://www.reddit.com/";
		org.jsoup.nodes.Document document=null;
		try {

			document = Jsoup.connect(url).userAgent("Chrome").get();

      FileReader reader = new FileReader("META-INF/Test.txt");
						BufferedReader br = new BufferedReader(reader);
				Iterator<String> iterator= br.lines().iterator();
				//Writes old + new content
				try(FileWriter file = new FileWriter("/var/lib/tomcat7/webapps/ROOT/index.html")){
					file.write(document.toString());
				}

			} catch (Exception e) {
				// FIXME: handle exception
				System.err.println("ERROR");
        e.printStackTrace();
			}
}
}
