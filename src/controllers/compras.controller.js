import {getConnection, queries, getConnection2021, getConnection2019} from '../database'
import { queries2021 } from '../database/querys'
import { queries2019 } from '../database/querys'

// PARA COMPRAS 2023
export const getComprasByYear = async(req, res) => {
    try{
        const {year} = req.params

        const pool = await getConnection()
        const result = await pool.request().input('Year', year).query(queries.getComprasByYear)
        // Enumerar los elementos de la consulta
        const compras = result.recordset;
        const comprasEnumeradas = compras.map((compras, index) => {
        return {
            numero: index + 1,
            ...compras
        };
        });
        console.log(`Busqueda de compras en la base 2023, 
        el numero de elementos encontrados es:${comprasEnumeradas.length}`)

        if(result.recordset.length == 0){
            const info = {Message: "Sorry Data is Empty"}
            res.send(info)
        }else{
            res.send(result.recordset)
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// PARA COMPRAS 2021
export const getComprasByYear2021 = async(req, res) => {
    try{
        const {year} = req.params

        const pool2021 = await getConnection2021()
        const result = await pool2021.request().input('Year', year).query(queries2021.getComprasByYear)
        const compras = result.recordset;
        const comprasEnumeradas = compras.map((compras, index) => {
        return {
            numero: index + 1,
            ...compras
        };
        });
        console.log(`Busqueda de compras en la base 2021, 
        el numero de elementos encontrados es:${comprasEnumeradas.length}`)

        if(result.recordset.length == 0){
            const info = {Message: "Sorry Data is Empty"}
            res.send(info)
           
        }else{
            res.send(result.recordset)
            
        }
    } catch (error) {
        res.status(500).send(error.message);
        
    }
}

// PARA COMPRAS 2019
export const getComprasByYear2019 = async(req, res) => {
    try{
        const {year} = req.params

        const pool2019 = await getConnection2019()
        const result = await pool2019.request().input('Year', year).query(queries2019.getComprasByYear)
        const compras = result.recordset;
        const comprasEnumeradas = compras.map((compras, index) => {
        return {
            numero: index + 1,
            ...compras
        };
        });
        console.log(`Busqueda de compras en la base 2019, 
        el numero de elementos encontrados es:${comprasEnumeradas.length}`)

        if(result.recordset.length == 0){
            const info = {Message: "Sorry Data is Empty"}
            res.send(info)
          
        }else{
            res.send(result.recordset)
           
        }
    } catch (error) {
        res.status(500).send(error.message);
       
    }
}