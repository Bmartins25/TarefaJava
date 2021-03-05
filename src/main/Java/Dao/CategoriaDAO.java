package Dao;


import java.sql.Resultset;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.list;

public class CategoriaDAO {
    public String(Categoria categoria){

        String retorno = "falha";
        Conexao conn = new Conexao();
        try {
        
        
            Statement stmt = (Statement) conn.getConn().createStatement();
            stmt.execute("INSERT INTO categoria (nome) VALUES ('"+categoria.getNome() + "')");
            retorno = "sucesso";
            } catch (Exception e) {
                e.printStackTrace();
                } finally {
                    conn.fecharconexao();
                    }
                    return retorno;
                    }
                    
                    public List<Categoria> listar(){
                    List<Categoria> categorias = new ArrayLista<Categoria>();
                    Conexao conn = new Conexao();
                    try {
                    Statement stmt = (Statement) conn.getConn().createStatement();
                    ResultSet rs = stmt.executeQuery("SELECT * from categoria");
                    while (rs.next()) {
                    
                        Categoria categoria = new Categoria();
                        categoria.setCodigo(rs.getInt("codigo"));
                        categoria.setNome(rs.getString("nome"));
                        categorias.add(categoria);
                        
                        }
                        
                    } catch (Exception e) {
                        e.printStackTrace();
                        } finally {
                            conn.fecharconexao();
                            }
                            return categorias;
                            }
                        }
    

