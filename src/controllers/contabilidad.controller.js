import {getConnection, queries, getConnection2019, getConnection2021, queries2019, queries2021} from '../database'

// PARA CONTABILIDAD
export const getContabilidadByYear = async(req, res) => {
    try{
        const {year} = req.params

        const pool = await getConnection()
        const result = await pool.request().input('Year', year).query(queries.getContabilidadByYear)
        const contabilidad = result.recordset;
        const contabilidadEnumeradas = contabilidad.map((contabilidad, index) => {
        return {
            numero: index + 1,
            ...contabilidad
        };
        });
        console.log(`Busqueda de contabilidad en la base 2023, 
        el numero de elementos encontrados es:${contabilidadEnumeradas.length}`)

        if(result.recordset.length == 0){
            const info = {Message: "Sorry Data is Empty"}
            res.send(info)
            pool.close()
        }else{
            res.send(result.recordset)
            pool.close()
            
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// PARA CONTABILIDAD 2019
export const getContabilidadByYear2019 = async(req, res) => {
    try{
        const {year} = req.params

        const pool2019 = await getConnection2019()
        const result = await pool2019.request().input('Year', year).query(queries2019.getContabilidadByYear)
        const contabilidad = result.recordset;
        const contabilidadEnumeradas = contabilidad.map((contabilidad, index) => {
        return {
            numero: index + 1,
            ...contabilidad
        };
        });
        console.log(`Busqueda de contabilidad en la base 2019, 
        el numero de elementos encontrados es:${contabilidadEnumeradas.length}`)

        if(result.recordset.length == 0){
            const info = {Message: "Sorry Data is Empty"}
            res.send(info)
            pool2019.close()
            
        }else{
            res.send(result.recordset)
            pool2019.close()
            
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// PARA CONTABILIDAD 2021
export const getContabilidadByYear2021 = async(req, res) => {
    try{
        const {year} = req.params

        const pool2021 = await getConnection2021()
        const result = await pool2021.request().input('Year', year).query(queries2021.getContabilidadByYear)
        const contabilidad = result.recordset;
        const contabilidadEnumeradas = contabilidad.map((contabilidad, index) => {
        return {
            numero: index + 1,
            ...contabilidad
        };
        });
        console.log(`Busqueda de contabilidad en la base 2021, 
        el numero de elementos encontrados es:${contabilidadEnumeradas.length}`)

        if(result.recordset.length == 0){
            const info = {Message: "Sorry Data is Empty"}
            res.send(info)
            pool2021.close()
            
        }else{
            res.send(result.recordset)
            pool2021.close()
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}