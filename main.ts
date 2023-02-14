import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { buildSchemaSync } from "type-graphql";
import http from "http";
import express from "express";
import { FileResolver } from "./src/resolvers/File";
import { AuthorResolver } from "./src/resolvers/Author";
import { CategoryResolver } from "./src/resolvers/Category";
import { ConfigResolver } from "./src/resolvers/Config";
import upload from "./src/multer";
import path from "path";

async function bootstrap() {
  const schema = await buildSchemaSync({
    resolvers: [FileResolver, AuthorResolver, CategoryResolver, ConfigResolver],
  });
  const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
  };
  const app = express();
  app.use("/uploads", express.static(path.resolve("./src/uploads")));
  const httpServer = http.createServer(app);

  // app.post("/uploadFile", upload.single("file"), (req: any, res, next) => {
  //   console.log("req.body", req.body);
  //   const file = req.file;
  //   console.log("file", file);
  // });

  const server = new ApolloServer({
    schema,
    cache: "bounded",
    context: ({ req, res }) => ({ req, res }),
    introspection: process.env.NODE_ENV !== "production",
  });
  await server.start();
  server.applyMiddleware({
    app,
    //cors: corsOptions,
    path: "/graphql",
  });

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

bootstrap();
