import "dotenv/config";
import express, { json } from "express";
import { PrismaClient } from "@prisma/client";

import cors from "cors";

const prisma = new PrismaClient();

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());
app.listen(port);

app.post("/todo", async (req, res) => {
  await prisma.post.create({
    data: {
      title: req.body.title,
      description: req.body.description,
      // email: req.body.email,
      // name: req.body.name,
      // age: req.body.age,
    },
  });

  // post.push(req.body);

  res.status(201).send(req.body);
});

app.get("/todo", async (req, res) => {
  // res.send('Rodou sakaralha')

  let todo = await prisma.post.findMany();

  // console.log("aqui");

  if (req.query) {
    todo = await prisma.post.findMany({
      where: {
        title: req.query.title,
        description: req.query.description,
      },
    });
  } else {
    todo = await prisma.post.findMany();
  }

  res.status(200).json(todo);
});

app.put("/users/:id", async (req, res) => {
  // await prisma.user.update({
  //   where: {
  //     id: req.params.id,
  //   },

  //   data: {
  //     email: req.body.email,
  //     name: req.body.name,
  //     age: req.body.age,
  //   },
  // });

  res.json(req.body);
});

app.delete("/todo/:id", async (req, res) => {
  await prisma.post.delete({
    where: {
      id: req.params.id,
    },
  });

  res.json({ message: "apaguei esse puto" });
});
