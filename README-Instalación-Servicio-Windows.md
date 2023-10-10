## Configuración e Implementación del Servicio de Windows para la API-JM

Este archivo proporciona instrucciones detalladas sobre cómo configurar e implementar el servicio de Windows para ejecutar la API-JM como un servicio. Este servicio se encargará de mantener la API en funcionamiento de manera continua.

### Requisitos Previos

Asegúrate de que tu servidor cumpla con los siguientes requisitos antes de continuar:

- Windows como sistema operativo.
- Python instalado [Python](https://www.python.org/downloads/).

### Pasos para la Implementación

1. **Editar el Script de Servicio**:

Abrir el archivo `NpmService.py` y asegúrarse de configurar adecuadamente las rutas y otros ajustes específicos según el entorno desadp .

3. **Instalar Dependencias**:

Abrir una terminal en el directorio y ejecutar

```
pip install pywin32
```
Esto instalará el módulo `pywin32` necesario para interactuar con los servicios de Windows.

4. **Registrar el Servicio**:

Desde la misma terminal, ejecuta el siguiente comando para registrar el servicio:

```
python npm_service.py install
```

Esto registrará el servicio en tu servidor.

5. **Iniciar el Servicio**:

Luego de registrarlo, inicia el servicio con el siguiente comando:

```
python npm_service.py start
```
Esto pondrá en marcha el servicio, que ejecutará la API en segundo plano.

