## API-JM

_Api desarrollada para Almacenes Juan Montero para consumir vistas creadas en Sql Server_
---
* Ubicar el archivo `.ven` donde se encuentras las *Variables de entorno*, aqui se debe cambiar las credenciales dependiendo de la base de datos que se desee conectar:

![Ejemplo](src\assets\imgs\virtual_Env.JPG)

* Luego es necesario dirigirse al archivo ir a [Querys](src\database\querys.js) para poder crear las variables donde se almacenan las consultas a la base de datos.

* En este punto se debe ir a la carpeta de *Controladores* para crear la busqueda dependiendo de un campo en especifico, **usar como ejemplo los archivos ya creados, la estructura y funcionalidad es la misma**.

* Por ultimo dirigirse a la carpeta de `Routes` e ingresar al archivo [Rutas](src\routes\routes.js), en donde se encuentras especificadas las routas de los **ENDPOINTS**.
---
**NOTA:** *Esta aplicacion esta orientada solo para la consulta y generacion de endpoints para las bases de datos.*

---

### Configuracion del Puerto:
En caso de que el puerto se encuentre ocupado dirigirse a las [Variables de Entorno](.env) y en la varible especificada como **PORT** cambiar el valor del puerto que esta en estos momentos especificado en el ***4550***.

Dentro de [config.js](src\config.js) se encuentra la logica de ejecucion en donde especifica que en caso de que no se pueda ejecutar en el puerto especificado en las variables de entorno se ejecutara por defento en el puerto ***3000***.

---
***NOTA:*** *Tener muy en cuenta de que la estructura de los archivos puede ser cambiada dependiendo la cantidad de rutas que requiera especificarse.*

---
