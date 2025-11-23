import {Router} from "express"; 

const route = Router();


route.get('/perfil', (req, res) => {
    res.render('perfil', {
        name: "Chavo del 8, ",
        rol: "guest",
        isAdmin: true,
        notas: [{curso: "java", nota:10}, {curso:"html", nota:6}, 
               {curso:"css",nota:7}, {curso:"react", nota:9}]
    })
})

route.get('/socket', (req, res) => {
    res.render('chat', {})
})




export default route;