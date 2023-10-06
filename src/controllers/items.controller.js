import {getConnection, getConnection2019, getConnection2021,queries, queries2019, queries2021} from '../database'

// TRAER TODOS
export const getItems = async (req, res) => {

    try{
        const pool = await getConnection();
        const result = await pool.request().query(queries.getItems);
        // Enumerar los elementos de la consulta
        const item = result.recordset;
        const itemEnumeradas = item.map((item, index) => {
        return {
            numero: index + 1,
            ...item
        };
        });
        console.log(`Busqueda de items en l base 2023, 
        el numero de elementos encontrados es:${itemEnumeradas.length}`)
        res.json(result.recordset)
        pool.close()
    }catch (error){
        res.status(500).send(error.message);
    }
}

// PARA ITEMS
export const getItemsByYear = async (req,res) =>{
    try{
        const {year} = req.params

        const pool = await getConnection()
        const result = await pool.request().input('Year', year).query(queries.getItemsByYear)
        // Enumerar los elementos de la consulta
        const item = result.recordset;
        const itemEnumeradas = item.map((item, index) => {
        return {
            numero: index + 1,
            ...item
        };
        });
        console.log(`Busqueda de items en l base 2023, 
        el numero de elementos encontrados es:${itemEnumeradas.length}`)

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

// RUTAS PARA 2019 ------------------------------------------
// TRAER TODOS
export const getItems2019 = async (req, res) => {

    try{
        const pool2019 = await getConnection2019();
        const result = await pool2019.request().query(queries2019.getItems);
        // Enumerar los elementos de la consulta
        const item = result.recordset;
        const itemEnumeradas = item.map((item, index) => {
        return {
            numero: index + 1,
            ...item
        };
        });
        console.log(`Busqueda de items en l base 2019, 
        el numero de elementos encontrados es:${itemEnumeradas.length}`)
        res.json(result.recordset)
        pool2019.close()
    }catch (error){
        res.status(500).send(error.message);
    }
}

// PARA ITEMS by year
export const getItemsByYear2019 = async (req,res) =>{
    try{
        const {year} = req.params

        const pool2019 = await getConnection2019()
        const result = await pool2019.request().input('Year', year).query(queries2019.getItemsByYear)
        // Enumerar los elementos de la consulta
        const item = result.recordset;
        const itemEnumeradas = item.map((item, index) => {
        return {
            numero: index + 1,
            ...item
        };
        });
        console.log(`Busqueda de items en la base 2019, 
        el numero de elementos encontrados es:${itemEnumeradas.length}`)

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


// RUTAS PARA 2021 ------------------------------------------
// TRAER TODOS
export const getItems2021 = async (req, res) => {

    try{
        const pool2021 = await getConnection2021();
        const result = await pool2021.request().query(queries2021.getItems);
        // Enumerar los elementos de la consulta
        const item = result.recordset;
        const itemEnumeradas = item.map((item, index) => {
        return {
            numero: index + 1,
            ...item
        };
        });
        console.log(`Busqueda de items en la base 2021, 
        el numero de elementos encontrados es:${itemEnumeradas.length}`)
        res.json(result.recordset)
        pool2021.close()
    }catch (error){
        res.status(500).send(error.message);
    }
}

// PARA ITEMS by year
export const getItemsByYear2021 = async (req,res) =>{
    try{
        const {year} = req.params

        const pool2021 = await getConnection2021()
        const result = await pool2021.request().input('Year', year).query(queries2021.getItemsByYear)
        // Enumerar los elementos de la consulta
        const item = result.recordset;
        const itemEnumeradas = item.map((item, index) => {
        return {
            numero: index + 1,
            ...item
        };
        });
        console.log(`Busqueda de items en la base 2021, 
        el numero de elementos encontrados es:${itemEnumeradas.length}`)

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