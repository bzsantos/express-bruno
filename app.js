import { connection } from './bd.js'

class App {

    async executeSearchQuey() {
        /** @type {import("mysql2/promise").Connection} */
        let conn;
        try {
            conn = await connection()
            let sql = "select * from estudante"

            //const [rows] = await conn.execute(sql)
            const [rows] = await conn.query(sql)

            console.log('Registro: total de tuplas', rows)

        } catch (error) {
            console.error('Não encontrado')
            throw error
        } finally {
            if (conn) {
                conn.end()
            }
        }
    }


    async SearchQueyById(id) {
        /** @type {import("mysql2/promise").Connection} */
        let conn;
        try {
            conn = await connection()
            let sql = "select * from estudante where id = ?"

            //const [rows] = await conn.execute(sql, [id])
            const [rows] = await conn.query(sql, id)


            console.log('Registro: total de tuplas', rows)

        } catch (error) {
            console.error('Não encontrado')
            throw error
        } finally {
            if (conn) {
                conn.end()
            }
        }
    }

    async InsertQuey() {
        /** @type {import("mysql2/promise").Connection} */
        let conn;
        try {
            conn = await connection()
            let sql = "INSERT INTO estudante SET ? "
            let dados = { nome: "Mario", email: "marinho@gmail.com" }

            const [rows] = await conn.query(sql, dados)

            console.log('Inserção bem-sucedida!');
            console.log(`Linhas afetadas: ${rows.affectedRows}`);

        } catch (error) {
            console.error('Não encontrado')
            throw error
        } finally {
            if (conn) {
                conn.end()
            }
        }
    }

    async UpdatetQuey() {
        /** @type {import("mysql2/promise").Connection} */
        let conn;
        try {
            conn = await connection()
            let sql = "update estudante set ? where id = ?"
            let id = 2
            let dados = { nome: "Mario3", email: "marinho3@gmail.com" }

            const [rows] = await conn.query(sql, [dados,id])

            console.log('Alteração bem-sucedida!');
            console.log(`Linhas afetadas: ${rows.affectedRows}`);

        } catch (error) {
            console.error('Não encontrado')
            throw error
        } finally {
            if (conn) {
                conn.end()
            }
        }
    }

    async DeletetQuey() {
        /** @type {import("mysql2/promise").Connection} */
        let conn;
        try {
            conn = await connection()
            let sql = "delete from estudante where id = ?"
            let id = 2
            
            const [rows] = await conn.query(sql, id)

            console.log('Remoção bem-sucedida!');
            console.log(`Linhas afetadas: ${rows.affectedRows}`);

        } catch (error) {
            console.error('Não encontrado')
            throw error
        } finally {
            if (conn) {
                conn.end()
            }
        }
    }
}




const myapp = new App()

//myapp.executeSearchQuey()

//myapp.SearchQueyById(2)

//myapp.InsertQuey()

//myapp.UpdatetQuey()

myapp.DeletetQuey()


