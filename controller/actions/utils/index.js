
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
        const getToDo = await database.collection("todolist").findOne({ name: name });
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
const addToDo = async (todo) => {
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
const deleteToDo = async (name) => {
    try {
        const database = await db('ToDo');
        const existingTodo = await getToDoByName(name);

        if (!existingTodo.success) {
            return {
                success: false,
                status: 404,
                msg: "To Do not found"
            }
        }

        const result = await database.collection("todolist").deleteOne({ name: name });
        console.log('---- DELETE RESULT TODO----', result)

        return {
            success: true,
            status: 200,
            data: result.deletedCount
        }
    } catch (error) {
        console.log('---ERROR DELETE TO DO----', error)
        return {
            success: false,
            status: 400,
            msg: "Error deleting To Do"
        }
    }
}
const updateToDo = async (updatedTodo) => {
    try {
        const database = await db('ToDo');

        if (updatedTodo.name) {
            const todoByName = await getToDoByName(updatedTodo.name);
            if (todoByName.success) {
                const result = await database.collection("todolist").updateOne(
                    { name: updatedTodo.name },
                    { $set: updatedTodo }
                );
                console.log('---- UPDATE RESULT TODO----', result);

                return {
                    success: true,
                    status: 200,
                    data: result
                }
            } else {
                return {
                    success: false,
                    status: 400,
                    msg: "To do not found"
                }
            }
        }


    } catch (error) {
        console.log('---ERROR UPDATE TO DO----', error)
        return {
            success: false,
            status: 400,
            msg: "Error updating To Do"
        }
    }
}




module.exports = {
    getToDos,
    getToDoByName,
    addToDo,
    deleteToDo,
    updateToDo
}