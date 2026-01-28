const expresss = require('express');
const bodyParset = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParset.json());

let tasks = [
  { id: 1, description: 'faire une tontine'
  { id: 2, description: 'Apprendre Node js' 

]

app.get('/tasks/:id', (reqq, res) => {
  const taskId = paeseInt(req.params.id );
  const task = tasks.find(t => t.id === taskId);

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});


