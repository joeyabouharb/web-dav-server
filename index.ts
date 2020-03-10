import express, {
  Application, Response, Request,
} from 'express';

const PORT: number = 5000;
const HOST: string = 'localhost';
const app: Application = express();
app.get('/', (req: Request, res: Response) => {
  res.send('hello from ts!');
});

app.listen(PORT, HOST, (): void => {
  console.log(`listening on: ${HOST}:${PORT}`);
});

