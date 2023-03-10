const utils = require("./utils");

module.exports = {

  // Retorna un string de prueba
  test: async () => {
    return "Test de TODO NODE :)";
  },
  // Retorna la lista de todos obtenidos de la DB
  gettodos: async () => {

    return await utils.getToDos();
  },
  gettodobyname: async (event, context, { MainController, constants }) => {
    const body = JSON.parse(event.body);
    const name = body?.name;

    if (!name) {
      return {
        success: false,
        status: 400,
        msg: "Missing name parameter"
      };
    }

    return await utils.getToDoByName(name);

  },
  addtodo: async (event, context, { MainController, constants }) => {
    const body = JSON.parse(event.body);
    const name = body?.name;

    if (!name) {
      return {
        success: false,
        status: 400,
        msg: "Missing name parameter"
      };
    }
    body.creationDate = new Date();

    return await utils.addToDo(body);
  },
  deletetodo: async (event) => {

    const body = JSON.parse(event.body);
    const name = body?.name;

    if (!name) {
      return {
        success: false,
        status: 400,
        msg: "Missing name parameter"
      };
    }
    return await utils.deleteToDo(name);
  },
  updatetodo: async (event, context, { MainController, constants }) => {

    const body = JSON.parse(event.body);
    const name = body?.name;

    if (!name) {
      return {
        success: false,
        status: 400,
        msg: "Missing name parameter"
      };
    }
    return await utils.updateToDo(body);
  },
};
