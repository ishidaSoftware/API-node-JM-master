## API-JM

_Api desarrollada para Almacenes Juan Montero para consumir vistas creadas en Sql Server_

## Requisitos previos 📄

_Asegurarse de tener instalados los siguientes programas antes de comenzar:_

- Node.js: [Descargar Node.js](https://nodejs.org/)
- npm (Administrador de paquetes de Node.js): Viene incluido con Node.js, pero verifica la versión ejecutando `npm -v`.

## Instalación 📄

1. Abrir una terminal y navegar hasta el directorio donde se encuentra.

2. Ejecutar el siguiente comando para instalar las dependencias:

```
npm install
```

## Configuración

1. Crear un archivo `.env` en el directorio raíz para configurar las variables de entorno.

```
DB_USER = 
DB_PASSWORD = Rtl8139
DB_SERVER = 10.40.49.2\IA2012
DB_DATABASE = JM2023
DB_DATABASE_2021 = JM2021
DB_DATABASE_2019 = JM2019
PORT = 4550
```
2. Dirigirse hacia `src/index.js` y cambiar la ip por defecto , por la ip del equipo en el que se va a instalar

```
app.listen(app.get('port'),"192.168.1.18")
```
3. Si se hizo los pasos anteriormente debe salir el siguiente mensaje en consola:

```
> api-node-jm@1.0.0 dev
> nodemon src --exec babel-node src/index.js
[nodemon] 2.0.22
[nodemon] to restart at any time, enter `rs`    
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json      
[nodemon] starting `babel-node src src/index.js`
server on port 4550
```
4. Consultamos la api de ventas de la base jm2023
Entonces la url de la consulta se construye de la siguiente manera

- ip:puerto/ruta

```
http://192.168.1.18:4550/ventas/2023/year/2023
```
