
import app from './app'


app.listen(app.get('port'),"192.168.1.18")

console.log("server on port",app.get('port'))