import sql from 'mssql'

 import config   from '../config'

const bdSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDatabase,
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
        requestTimeout: 150000
      },
};

export async function getConnection(){
    try {
        const pool = await sql.connect(bdSettings)
        console.log('Conexion a 2023 establecida!')
        return pool
    } catch (error){
        console.error(error)
    }
}

export {sql};
