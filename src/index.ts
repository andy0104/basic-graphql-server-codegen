import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './graphql/schemas-maps';

(async () => {
  const PORT = process.env.NODE_PORT || 4000;

  const app = express();
  const graphServer = new ApolloServer({
    schema
  });
  await graphServer.start();
  graphServer.applyMiddleware({ app, path: '/graphql' });
  app.listen(
    PORT,
    () => console.log(`Server running on PORT ${PORT}`));
})()


