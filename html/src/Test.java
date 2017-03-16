import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class Test extends HttpServlet{
  public static void main(String args[])
     {
        Test obj = new Test();
         String temp1= obj.getString("mutha", "fucka");
     }
  public String getString(String hey, String yo){
    return "Heyya, bitch " + yo + "  --  " +hey;
  }
}
