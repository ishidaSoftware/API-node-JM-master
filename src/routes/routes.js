import {Router} from 'express'
import { getVentasByPrecio, getVentasByYear, getVentasCodItems, getVentasCostoReal, getVentasByYear2019, getVentasCodItems2019, getVentasCostoReal2019, getVentasByPrecio2019, getVentasByYear2021, getVentasCodItems2021, getVentasCostoReal2021, getVentasByPrecio2021 } from '../controllers/ventas.controller.js'
import { getContabilidadByYear, getContabilidadByYear2019, getContabilidadByYear2021 } from '../controllers/contabilidad.controller.js'
import { getItems, getItemsByYear, getItems2019, getItemsByYear2019, getItems2021, getItemsByYear2021 } from '../controllers/items.controller.js'
import { getComprasByYear, getComprasByYear2021, getComprasByYear2019, } from '../controllers/compras.controller.js'
const router = Router()
// RUTAS FUNCIONALES FUNCIONALES
// ANIO ESPECIFICO ---------------- 2023
router.get('/ventas/2023/year/:year',getVentasByYear)
router.get('/ventas/2023/coditem/:coditem', getVentasCodItems)
router.get('/ventas/2023/costo/:costo', getVentasCostoReal)
router.get('/ventas/2023/precio/:precio', getVentasByPrecio)

router.get('/contabilidad/2023/year/:year', getContabilidadByYear)
router.get('/items/2023', getItems)
router.get('/items/2023/year/:year', getItemsByYear)
router.get('/compras/2023/year/:year', getComprasByYear)


// RUTAS PARA 2021
router.get('/ventas/2021/year/:year', getVentasByYear2021)
router.get('/ventas/2021/coditem/:coditem', getVentasCodItems2021)
router.get('/ventas/2021/costo/:costo', getVentasCostoReal2021)
router.get('/ventas/2021/precio/:precio', getVentasByPrecio2021)

router.get('/contabilidad/2021/year/:year', getContabilidadByYear2021)
router.get('/items/2021', getItems2021)
router.get('/items/2021/year/:year',getItemsByYear2021 )
router.get('/compras/2021/year/:year', getComprasByYear2021 )


// RUTAS PARA 2019
router.get('/ventas/2019/year/:year', getVentasByYear2019)
router.get('/ventas/2019/coditem/:coditem', getVentasCodItems2019)
router.get('/ventas/2019/costo/:costo', getVentasCostoReal2019)
router.get('/ventas/2019/precio/:precio', getVentasByPrecio2019)

router.get('/contabilidad/2019/year/:year', getContabilidadByYear2019 )
router.get('/items/2019', getItems2019)
router.get('/items/2019/year/:year', getItemsByYear2019)
router.get('/compras/2019/year/:year', getComprasByYear2019 )

export default router