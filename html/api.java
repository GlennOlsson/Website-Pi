public class api{

    public static void main(String[] args) {
        new api();
    }

    public api(){
        int portNumber = 4444;

    try (
        ServerSocket serverSocket = new ServerSocket(portNumber);
        Socket clientSocket = serverSocket.accept();
        PrintWriter out =
            new PrintWriter(clientSocket.getOutputStream(), true);
            BufferedReader in = new BufferedReader(
        new InputStreamReader(clientSocket.getInputStream()));
    ) {
    }    }
}
