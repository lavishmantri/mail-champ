import express from 'express';
import { getListOfMails } from './clients/gmail';

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/list', (req, res) => {
  const data = getListOfMails();

  res.send({
    data,
  });
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
