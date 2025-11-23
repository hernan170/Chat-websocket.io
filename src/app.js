import express from 'express'
import UserRoute from './routes/user.route.js'
import PetsRoute from './routes/pets.route.js'
import ViewRoutes from './routes/view.route.js'
import path from 'node:path'
import handlebars from 'express-handlebars'
import { Server } from 'socket.io' 

const app = express()

app.engine('handlebars', handlebars.engine()) //Defino a express que va usar el motor de plantilla con la extension handlebars.
app.set('views', path.join(process.cwd(), 'src','views', ))
app.set('view engine', 'handlebars')

app.use(express.static(path.join(process.cwd(), 'src','public')))

app.use('/api/user', UserRoute)
app.use('/api/pets', PetsRoute)
app.use('/', ViewRoutes)



const serverHttp = app.listen(8080, () => {
     console.log("server ON")
})

const serverSocket = new Server(serverHttp)

const BBDD = [];

serverSocket.on('connection', (socket) => {
     console.log('Nuevo cliente conectado con id ->', socket.id)

     socket.emit('lista_de_mensaje_actualizada', BBDD);

     socket.on('mensaje', (payload) => {
         BBDD.push(payload)

         serverSocket.emit('lista_de_mensaje_actualizada', BBDD)

     }) 

})