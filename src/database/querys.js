export const queries = {
    getVentasByYear: 'select * from vw_ventas where DATEPART(YYYY, FechaTrans) = @Year',
    getItems: 'SELECT * FROM vw_items',
    getVentasByCodItems: 'select * from vw_ventas where CodInventario = @CodItem',
    getVentasByCostoReal: 'select * from vw_ventas where CostoRealTotal between 0 and @Costo',
    getVentasByPrecio: 'select * from vw_ventas where PrecioRealTotal between 0 and @Precio',

    getContabilidadByYear: 'SELECT * FROM vw_contabilidad where DATEPART(YYYY, FechaTrans) = @Year',
    getItemsByYear: "SELECT * FROM vw_items where DATEPART(YYYY, FechaTrans) = @Year",
    getComprasByYear: 'SELECT * FROM vw_compras where DATEPART(YYYY, FechaTrans) = @Year',
}

export const queries2021 = {
    getVentasByYear: 'select * from vw_ventas where DATEPART(YYYY, FechaTrans) = @Year',
    getItems: 'SELECT * FROM vw_items',
    getVentasByCodItems: 'select * from vw_ventas where CodInventario = @CodItem',
    getVentasByCostoReal: 'select * from vw_ventas where CostoRealTotal between 0 and @Costo',
    getVentasByPrecio: 'select * from vw_ventas where PrecioRealTotal between 0 and @Precio',

    getContabilidadByYear: 'SELECT * FROM vw_contabilidad where DATEPART(YYYY, FechaTrans) = @Year',
    getItemsByYear: 'SELECT * FROM vw_items where DATEPART(YYYY, FechaTrans) = @Year',
    getComprasByYear: 'SELECT * FROM vw_compras where DATEPART(YYYY, FechaTrans) = @Year',
}


export const queries2019 = {
    getVentasByYear: 'select * from vw_ventas where DATEPART(YYYY, FechaTrans) = @Year',
    getItems: 'SELECT * FROM vw_items',
    getVentasByCodItems: 'select * from vw_ventas where CodInventario = @CodItem',
    getVentasByCostoReal: 'select * from vw_ventas where CostoRealTotal between 0 and @Costo',
    getVentasByPrecio: 'select * from vw_ventas where PrecioRealTotal between 0 and @Precio',

    getContabilidadByYear: 'SELECT * FROM vw_contabilidad where DATEPART(YYYY, FechaTrans) = @Year',
    getItemsByYear: "SELECT * FROM vw_items where DATEPART(YYYY, FechaTrans) = @Year",
    getComprasByYear: 'SELECT * FROM vw_compras where DATEPART(YYYY, FechaTrans) = @Year',
}