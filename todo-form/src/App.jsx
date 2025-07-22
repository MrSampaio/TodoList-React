import "./App.css";
import { useEffect, useState, useRef } from "react";
import Input from "./components/inputs.jsx";
import Title from "./components/title.jsx";
import Button from "./components/button.jsx";
import Todo from "./components/todo.jsx";
import Modal from "./components/modal.jsx";
import DeleteButton from "./components/deleteBtn.jsx";
import EditButton from "./components/editBtn.jsx";

import api from "./services/axios.js";
// import { json } from "express";

function App() {
  // fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));

  const [todos, setTodos] = useState([]);
  // console.log(todos);

  useEffect(() => {
    getTodos();
  }, []);

  // let todos = [];

  async function getTodos() {
    try {
      const infosTodos = await api.get("/todo");
      setTodos(infosTodos.data);
    } catch (error) {
      console.error("Erro ao buscar todos: ", error);
    }
  }

  const inputTitle = useRef();
  const inputDesc = useRef();

  async function crateNewTodos() {
    try {
      await api.post("/todo", {
        title: inputTitle.current.value,
        description: inputDesc.current.value,
      });
    } catch (error) {
      console.error("Erro ao cadastrar tarefa: ", error);
    }

    getTodos();
  }

  async function deleteTodos(id) {
    try {
      await api.delete(`/todo/${id}`);
    } catch (error) {
      console.error("Erro ao deletar tarefa: ", error);
    }
    getTodos();
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center bg-black gap-[20px]">
      <Modal
        isOpen={isModalOpen}
        isClose={() => setIsModalOpen(!isModalOpen)}
      />
      <form
        action=""
        className="flex flex-col max-w-[70%] min-w-[500px] h-max justify-center items-center shadow-[0px_3px_8px_rgba(255,255,255,0.906)] bg-[#121114] border-none p-10.5 gap-[20px]"
      >
        <Title />
        {/* <div className="inputs flex flex-col w-1/2 gap-[20px]"> */}
        <Input
          type="text"
          placeholder="Digite o título da tarefa"
          ref={inputTitle}
        />
        <Input
          type="text"
          placeholder="Digite a descrição da tarefa"
          ref={inputDesc}
        />

        {/* </div> */}
        <Button type="button" click={crateNewTodos} />
      </form>

      {/* <section className="flex flex-col max-w-[500px]  h-max justify-center items-center shadow-[0px_3px_8px_rgba(255,255,255,0.906)] bg-[#121114] border-none p-10.5 gap-[20px]"> */}

      {todos.map((todo) => (
        <div
          key={todo.id}
          className="text-[#fff] flex flex-row justify-between"
        >
          <Todo title={todo.title} />
          <DeleteButton clickDelete={() => deleteTodos(todo.id)} />
          <EditButton
            clickEdit={() => {
              setIsModalOpen(true);
            }}
          />
          {/* <Todo title={todo.title} clickDelete={() => deleteTodos(todo.id)} /> */}
        </div>
      ))}

      {/* </section> */}
    </div>
  );
}

export default App;
