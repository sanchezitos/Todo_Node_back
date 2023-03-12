# To-do Back Node 
 Este es el proyecto back-end para la prueba técnica. 
 La URL para su consumo es: https://tpmo81rzfa.execute-api.us-east-1.amazonaws.com/dev/node/todo/actions
 La documentación del API: https://documenter.getpostman.com/view/21961268/2s93JtQPdA se puede correr en POSTMAN para visualizar los endpoints
 
El API está construida en NodeJS y desplegada en la nube en una fución lambda y API GATEWAY; Para su despliegue se creó un workflow en GitHub para actualizar la lambda cada vez que se realiza un *git push*.

Como Base de datos se usó *MongoDB* haciendo uso de su servicio en la nube mongo atlas, el string de conexión para acceder a la DB es: mongodb+srv://sanchezitos:Sistemas8@cluster0.klhhsln.mongodb.net/test





