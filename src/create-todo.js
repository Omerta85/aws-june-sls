const {MongoClient} = require('mongodb');
const {configs} = require("../configs");

const createTodo = async (event)=>{
const client = new MongoClient(configs.MONGO_URL);
const {todo} = JSON.parse(event.body);
const date = new Date().toISOString()
const newTodo = {
    todo,
    createdAt: date,
    updatedAt: date,
    completed: false,
}
await  client.db().collection('todos').insertOne(newTodo);

return{
    statusCode:201,
    body: JSON.stringify('Created')
};
};

module.exports = {
    handler:createTodo,
};

