
const { db } = require('../../../controller/index')

const getToDos = async () => {

    try {
        const database = await db('ToDo');
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
const getToDoByName = async (name) => {
    try {
        const database = await db('ToDo');
        const getToDo = await database.collection("todolist").findOne({ Name: name });
        console.log('---- GET RESULT TODO BY NAME----', getToDo);

        if (getToDo) {
            return {
                success: true,
                status: 200,
                data: getToDo
            }
        } else {
            return {
                success: false,
                status: 404,
                msg: "To Do not found"
            }
        }
    } catch (error) {
        console.log('---ERROR GET TO DO BY NAME----', error)
        return {
            success: false,
            status: 400,
            msg: "Error get To Do by name"
        }
    }
}
const addtodo = async (todo) => {
    try {
        const database = await db('ToDo');
        const existingTodo = await getToDoByName(todo.name);
        if (existingTodo.success) {
            return {
                success: false,
                status: 400,
                msg: "To Do with same name already exists"
            }
        }

        const result = await database.collection("todolist").insertOne(todo);
        console.log('---- ADD RESULT TODO----', result)

        return {
            success: true,
            status: 200,
            data: result.insertedId
        }
    } catch (error) {
        console.log('---ERROR ADD TO DO----', error)
        return {
            success: false,
            status: 400,
            msg: "Error adding To Do"
        }
    }
}



module.exports = {
    getToDos,
    getToDoByName,
    addtodo
}