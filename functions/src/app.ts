import * as cors from 'cors';
import * as express from 'express';

type Request = express.Request;
type Response = express.Response;

const app: express.Express = express();

app.get('/helloworld', (request: Request, response: Response) => {
    const name = request.query['name'] || 'world';
    response.status(200).json({message: `Hello ${name}!!`});
});

app.post('/helloworld',(request: Request, response: Response) => {
    const name = request.body['name'] || 'world';
    response.status(200).json({message: `Hello ${name}!!`});
})

export const APIService: express.Express = app;