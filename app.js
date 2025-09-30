import { connection } from './bd.js'

export class App {

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

    async InsertQuery(valor1,valor2) {
        /** @type {import("mysql2/promise").Connection} */
        let conn;
        try {
            conn = await connection()
            let sql = "INSERT INTO estudante SET ? "
            let myname = valor1
            let mymail = valor2

            let dd = { nome: myname, email: mymail }

            const [rows] = await conn.query(sql, dd)

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
            let id = 3
            let dados = { nome: "Mario8", email: "marinho3@gmail.com" }

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
            let id = 4
            
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




//const myapp = new App()

//myapp.executeSearchQuey()

//myapp.SearchQueyById(3)

//myapp.InsertQuey()

//myapp.UpdatetQuey()

//myapp.DeletetQuey()


