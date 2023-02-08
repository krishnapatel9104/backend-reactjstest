import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import { myDataSource } from './data-source'

import indexRoute from './routes/index.route';

const bodyParser = require('body-parser');

const main = () => {
  myDataSource
    .initialize()
    .then(() => {
      console.log('Data Source has been initialized!')
    })
    .catch((err) => {
      console.error('Error during Data Source initialization:', err)
    })

  const app = express();
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
  });
  app.use('/uploads', express.static('./uploads'));
  app.use(bodyParser.json());
  app.use(express.json())
  app.use('/api', indexRoute)
  app.listen(3001)
}
main()
