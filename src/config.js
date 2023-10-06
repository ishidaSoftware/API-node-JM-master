import {config} from 'dotenv'
config();

export default {
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER || "",
    dbPassword: process.env.DB_PASSWORD || "",
    dbServer: process.env.DB_SERVER || "",
    dbDatabase: process.env.DB_DATABASE || "",
    dbDatabase2021: process.env.DB_DATABASE_2021 || "",
    dbDatabase2019: process.env.DB_DATABASE_2019 || "",
}