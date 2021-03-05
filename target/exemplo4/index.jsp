<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="ISO-8859-1">
    <title>Categorias</title>
</head>

<body>
    <center>
        <h1> Categoria de despesas </h1>
        <h2> 
            <a href="InserirCategoria.jsp"> Inserir nova categoria </a>

        </h2>
    </center>
    <div align="center">
        <table border="1" cellpadding="5">
            <caption> <h2>Lista de Categorias </h2></caption>
            <tr>
                <th>Codigo</th>
                <th>Nome</th>
                <th>Acoes</th>
                </tr>

                <c:forEach var="categoria" Itens="${listaCategoria}">
                    <tr>
                        <td><c:out value="${categoria.codigo}"/></td>
                        <td><c:out value="${categoria.nome}"/></td>

                        <td>
                            <a href="edit?id=<c:out value='${categoria.codigo}" />"Alterar"</a>
                            <a href="edit?id=<c:out value='${categoria.codigo}" />"Deletar"</a>

                        </td>

                        </tr>
                </c:forEach>
        </table>
    </div>


                </c:forEach>
        </table>




    </div>
    
</body>
</html>
