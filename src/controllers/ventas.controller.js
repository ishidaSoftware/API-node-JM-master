import {getConnection, queries, queries2019, queries2021, getConnection2021, getConnection2019} from '../database'

// ANIO ESPECIFICA
export const getVentasByYear = async (req,res) =>{
    try {
        const {year} = req.params

        const pool = await getConnection()
        const result = await pool.request().input('Year',year).query(queries.getVentasByYear)
        const ventas = result.recordset;
        const ventasEnumeradas = ventas.map((ventas, index) => {
        return {
            numero: index + 1,
            ...ventas
        };
        });
        console.log(`Busqueda de ventas en la base 2023, 
        el numero de elementos encontrados es:${ventasEnumeradas.length}`)

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
// CODIGO DE ITEMS
export const getVentasCodItems = async (req,res) =>{
    try {
        const {coditem} = req.params

        const pool = await getConnection()
        const result = await pool.request().input('CodItem',coditem).query(queries.getVentasByCodItems)
        const ventas = result.recordset;
        const ventasEnumeradas = ventas.map((ventas, index) => {
        return {
            numero: index + 1,
            ...ventas
        };
        });
        console.log(`Busqueda de ventas en la base 2023, 
        el numero de elementos encontrados es:${ventasEnumeradas.length}`)

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
// CODIGO DE COSTO REAL
export const getVentasCostoReal = async (req,res) =>{
    try {
        const {costo} = req.params

        const pool = await getConnection()
        const result = await pool.request().input('Costo',costo).query(queries.getVentasByCostoReal)

        const ventas = result.recordset;
        const ventasEnumeradas = ventas.map((ventas, index) => {
        return {
            numero: index + 1,
            ...ventas
        };
        });
        console.log(`Busqueda de ventas en la base 2023, 
        el numero de elementos encontrados es:${ventasEnumeradas.length}`)

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
// CODIGO DE PRECIO REAL
export const getVentasByPrecio = async (req,res) =>{
    try {
        const {precio} = req.params

        const pool = await getConnection()
        const result = await pool.request().input('Precio',precio).query(queries.getVentasByPrecio)
        const ventas = result.recordset;
        const ventasEnumeradas = ventas.map((ventas, index) => {
        return {
            numero: index + 1,
            ...ventas
        };
        });
        console.log(`Busqueda de ventas en la base 2023, 
        el numero de elementos encontrados es:${ventasEnumeradas.length}`)

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



// VENTAS DEL 2019----------------------------------------------------
// ANIO ESPECIFICA
export const getVentasByYear2019 = async (req,res) =>{
    try {
        const {year} = req.params

        const pool2019 = await getConnection2019()
        const result = await pool2019.request().input('Year',year).query(queries2019.getVentasByYear)
        const ventas = result.recordset;
        const ventasEnumeradas = ventas.map((ventas, index) => {
        return {
            numero: index + 1,
            ...ventas
        };
        });
        console.log(`Busqueda de ventas en la base 2019, 
        el numero de elementos encontrados es:${ventasEnumeradas.length}`)

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
// CODIGO DE ITEMS
export const getVentasCodItems2019 = async (req,res) =>{
    try {
        const {coditem} = req.params

        const pool2019 = await getConnection2019()
        const result = await pool2019.request().input('CodItem',coditem).query(queries2019.getVentasByCodItems)
        const ventas = result.recordset;
        const ventasEnumeradas = ventas.map((ventas, index) => {
        return {
            numero: index + 1,
            ...ventas
        };
        });
        console.log(`Busqueda de ventas en la base 2019, 
        el numero de elementos encontrados es:${ventasEnumeradas.length}`)

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
// CODIGO DE COSTO REAL
export const getVentasCostoReal2019 = async (req,res) =>{
    try {
        const {costo} = req.params

        const pool2019 = await getConnection2019()
        const result = await pool2019.request().input('Costo',costo).query(queries2019.getVentasByCostoReal)
        const ventas = result.recordset;
        const ventasEnumeradas = ventas.map((ventas, index) => {
        return {
            numero: index + 1,
            ...ventas
        };
        });
        console.log(`Busqueda de ventas en la base 2019, 
        el numero de elementos encontrados es:${ventasEnumeradas.length}`)

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
// CODIGO DE PRECIO REAL
export const getVentasByPrecio2019 = async (req,res) =>{
    try {
        const {precio} = req.params

        const pool2019 = await getConnection2019()
        const result = await pool2019.request().input('Precio',precio).query(queries2019.getVentasByPrecio)
        const ventas = result.recordset;
        const ventasEnumeradas = ventas.map((ventas, index) => {
        return {
            numero: index + 1,
            ...ventas
        };
        });
        console.log(`Busqueda de ventas en la base 2019, 
        el numero de elementos encontrados es:${ventasEnumeradas.length}`)

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



// VENTAS DEL 2021-------------------------------------------------------
// ANIO ESPECIFICA
export const getVentasByYear2021 = async (req,res) =>{
    try {
        const {year} = req.params

        const pool2021 = await getConnection2021()
        const result = await pool2021.request().input('Year',year).query(queries2021.getVentasByYear)
        const ventas = result.recordset;
        const ventasEnumeradas = ventas.map((ventas, index) => {
        return {
            numero: index + 1,
            ...ventas
        };
        });
        console.log(`Busqueda de ventas en la base 2021, 
        el numero de elementos encontrados es:${ventasEnumeradas.length}`)

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
// CODIGO DE ITEMS
export const getVentasCodItems2021 = async (req,res) =>{
    try {
        const {coditem} = req.params

        const pool2021 = await getConnection2021()
        const result = await pool2021.request().input('CodItem',coditem).query(queries2021.getVentasByCodItems)
        const ventas = result.recordset;
        const ventasEnumeradas = ventas.map((ventas, index) => {
        return {
            numero: index + 1,
            ...ventas
        };
        });
        console.log(`Busqueda de ventas en la base 2021, 
        el numero de elementos encontrados es:${ventasEnumeradas.length}`)

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
// CODIGO DE COSTO REAL
export const getVentasCostoReal2021 = async (req,res) =>{
    try {
        const {costo} = req.params

        const pool2021 = await getConnection2021()
        const result = await pool2021.request().input('Costo',costo).query(queries2021.getVentasByCostoReal)
        const ventas = result.recordset;
        const ventasEnumeradas = ventas.map((ventas, index) => {
        return {
            numero: index + 1,
            ...ventas
        };
        });
        console.log(`Busqueda de ventas en la base 2019, 
        el numero de elementos encontrados es:${ventasEnumeradas.length}`)

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
// CODIGO DE PRECIO REAL
export const getVentasByPrecio2021 = async (req,res) =>{
    try {
        const {precio} = req.params

        const pool2021 = await getConnection2021()
        const result = await pool2021.request().input('Precio',precio).query(queries2021.getVentasByPrecio)
        const ventas = result.recordset;
        const ventasEnumeradas = ventas.map((ventas, index) => {
        return {
            numero: index + 1,
            ...ventas
        };
        });
        console.log(`Busqueda de ventas en la base 2021, 
        el numero de elementos encontrados es:${ventasEnumeradas.length}`)

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