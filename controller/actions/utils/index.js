
const { db } = require('../../../controller/index')


const database = await db('ToDo');


const getToDos = async () => {

    try {
        const getToDos = await database.collection("todolist").find().toArray();
        console.log('---- GET RESULT TODO LIST----', getToDos)
        return {
            success: true,
            status: 200,
            data: getToDos
        }
    } catch (error) {
        console.log('---ERROR GET TO DO LIST----', error)
        return {
            success: false,
            status: 400,
            msg: "Error get To Do list"
        }
    }


}

modules.exports = {
    getToDos
}