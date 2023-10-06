import sql from 'mssql'
 import config   from '../config'

const bdSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDatabase2021,
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
        requestTimeout: 150000
      },
};

export async function getConnection2021(){
    try {
        const pool2021 = await sql.connect(bdSettings)
        console.log('Conexion a 2021 establecida!')
        return pool2021
    } catch (error){
        console.error(error)
    }
}

export {sql};
