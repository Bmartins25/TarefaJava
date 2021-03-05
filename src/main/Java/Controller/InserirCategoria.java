package Controller;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;


@webServlet("/InserirCategoria")
public class InserirCategoria extends HttpServlet{
    private static final long serialVersionUID = 1L;

    CategoriaDAO dao = new CategoriaDAO();
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {


        String nome = request.getParameter("nome");
        Categoria categoria = new categoria();
        categoria.setNome(nome);

        String retorno = dao.inserir(categoria);

        if (retorno.equals("sucesso")){
            response.sendRedirect("InserirCategoria");
        } else {
                PrintWriter out = response.getWriter();
                out.print("<html>");
                out.print("<h2> Não foi possível inserir a categoria </h2>");
                out.print("<br>");
                out.print("<a href = 'index.jsp'> Voltar </a>");
                out.print("</html>");
                }
            }


            protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws servletException, IOException {

                try {

                    String action = request.get.ServletPath();
                    listaCategoria(request,response);
                } catch (SQLException ex) {

                    throw new ServletException(ex);
                }
            }


            private void listaCategoria(HttpServletRequest request, HttpServletResponse response)
            throws SQLException, IOException, ServletException {

                List<Categoria> listaCategoria = dao.listar();
                request.setAttribute("listaCategoria", listacategoria);
                RequestDispatcher dispatcher = request.getRequestDispatcher("index.jsp");
                dispatcher.forward1(request,response);
            }
    }
    

