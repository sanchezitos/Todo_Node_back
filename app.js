const MainController = require("./controller");
const constants = require("./constants");

const Init = (event, context) => {
  if (!event.path) {
    throw new Error("Wrong URL: missing entity name");
  }

  const urlSegments = event.path.split("/");
  const entity = urlSegments[2];
  const controller = urlSegments[3];
  const action = urlSegments[4];

  console.log('---- ENTITY ----', entity)
  console.log('---- CONTROLLER ----', controller)
  console.log('---- ACTION ----', action)
  const start = async () => {
    if (!entity) {
      return MainController.apiResponder(404, "Entity not found");
    }

    if (!controller) {
      return MainController.apiResponder(404, "Controller not found");
    }

    if (!action) {
      return MainController.apiResponder(404, "Action not found");
    }

    const entityController = require(`./entities/${entity}.js`)[controller];
    if (!entityController[action]) {
      return MainController.apiResponder(404, "Missing action property");
    }

    const actionResponse = await entityController[action](
      event,
      context,
      { MainController, constants }
    );

    return MainController.apiResponder(200, JSON.stringify(actionResponse));
  };

  return { start };
};

module.exports = {
  Init,
};
