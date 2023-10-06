import sql from 'mssql'
 import config   from '../config'

const bdSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDatabase2019,
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
        requestTimeout: 15000000
      },
};

export async function getConnection2019() {
    try {
      const pool2019 = await sql.connect(bdSettings);
      console.log('Conexión a 2019 establecida!');
      return pool2019;
    } catch (error) {
      console.error(error);
      throw new Error('Error al establecer la conexión con la base de datos 2019');
    }
  }
  

export {sql};
