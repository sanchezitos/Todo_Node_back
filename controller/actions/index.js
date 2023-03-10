const utils = require("./utils");

module.exports = {
  test: async (event, context, { MainController, constants }) => {
    return "Test de TODO NODE :)";
  },
  gettodos: async () => {
    /* let body = JSON.parse(event.body) */
    return await utils.getToDos();
  },
  gettodobytype: async (event, context, { MainController, constants }) => {

    return "get todo by type";
  },
  addtodo: async (event, context, { MainController, constants }) => {

    return "add todo :)";
  },
  deletetodo: async (event) => {

    return "Delete todo :)";
  },
  updatetodo: async (event, context, { MainController, constants }) => {

    return "update todo :)";
  },
};
