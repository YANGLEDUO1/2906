
import * as mysql2 from "mysql2"

const pool = mysql2.createPool({
    connectionLimit: 10,
    host: "10.10.20.15",
    user: "root",
    password: "pwd_mariadb_01~!",
    database: "cloud",
    charset: 'utf8mb4'
})
pool.on('connect', (stream: any) => {
    console.log("mysql connect success")
})

pool.on('error', (err: string | undefined) => {
    throw new Error(`mysql conenct err: ${err}`)
})



let promise = pool.promise();

promise.query("select * from adm_user where id =?",['1']).then(query=>{
    console.log(query)
})