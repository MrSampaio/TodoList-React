import "./styles/App.css";
import { useEffect, useState, useRef } from "react";
import Input from "./components/inputs.jsx";
import Title from "./components/title.jsx";
import Button from "./components/button.jsx";
import Todo from "./components/todo.jsx";
import Modal from "./components/modal.jsx";
import DeleteButton from "./components/deleteBtn.jsx";
import EditButton from "./components/editBtn.jsx";
import Loader from "./components/loader.jsx";
// import MessageError from "./components/error.jsx";

import api from "./services/axios.js";
// import { json } from "express";

function App() {
  const [todos, setTodos] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  // console.log(todos);

  useEffect(() => {
    getTodos();
  }, []);

  // let todos = [];

  async function getTodos() {
    setIsLoading(true);
    try {
      const infosTodos = await api.get("/todo");
      setTodos(infosTodos.data.map((todo) => ({ ...todo })));
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    } catch (error) {
      console.error("Erro ao buscar todos: ", error);
      setIsLoading(false);
    }
  }

  async function toggleConcludedApi(id, currentStatus) {
    try {
      await api.put(`/todo/${id}`, { concluded: !currentStatus });

      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, concluded: !currentStatus } : todo
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar o status da tarefa: ", error);
    }
  }

  const inputTitle = useRef();
  const inputDesc = useRef();
  const editInputTitle = useRef();
  const editInputDesc = useRef();

  async function crateNewTodos(event) {
    if (inputTitle.current.value === "") {
      event.preventDefault();
    } else {
      try {
        await api.post(
          "/todo",
          {
            title: inputTitle.current.value,
            description: inputDesc.current.value,
          },
          (inputTitle.current.value = ""),
          (inputDesc.current.value = "")
        );
      } catch (error) {
        console.error("Erro ao cadastrar tarefa: ", error);
      }
      getTodos();
    }
  }

  async function editTodos(id, event) {
    if (editInputTitle.current.value == "") {
      setErrorMessage("O Título não pode ser vazio");
      event.preventDefault;
    } else {
      setIsModalOpen(false);
      try {
        await api.put(`/todo/${id}`, {
          title: editInputTitle.current.value,
          description: editInputDesc.current.value,
        });
      } catch (error) {
        console.error("Erro ao editar tarefa: ", error);
      }
      getTodos();
    }
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
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [isConcluded, setIsConcluded] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => setIsLoading(false), 3000);
  // }, []);

  return (
    <div className="flex flex-col w-screen min-h-max justify-center items-center bg-black gap-[20px] pt-[30px] pb-[30px] overflow-x-hidden">
      <form
        action=""
        className="fadeInTop flex flex-col max-w-[70%] min-w-[500px] h-[50vh] justify-center items-center shadow-[0px_3px_8px_rgba(255,255,255,0.906)] bg-[#121114] border-none p-10.5 gap-[20px]"
      >
        <Title />
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

        <Button
          type="button"
          click={crateNewTodos}
          textButton="Adicionar tarefa"
        />
      </form>
      
      <div className="text-[#fff] flex flex-col gap-[12px] h-max min-h-[50vh]">
        {isLoading ? (
          <Loader />
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="fadeInLeft flex flex-row justify-between"
            >
              <Todo
                title={todo.title}
                click={() => toggleConcludedApi(todo.id, todo.concluded)}
                isConcluded={todo.concluded ? true : false}
              />
              <DeleteButton clickDelete={() => deleteTodos(todo.id)} />
              <EditButton
                clickEdit={() => {
                  setIsModalOpen(true);
                  setSelectedTodo(todo);
                }}
              />
            </div>
          ))
        )}

        <Modal
          isOpen={isModalOpen}
          isClose={() => {
            setIsModalOpen(false);
            setErrorMessage("");
          }}
          titleInput={selectedTodo?.title || ""}
          descInput={selectedTodo?.description || ""}
          onChangeTitle={(e) => {
            setSelectedTodo({ ...selectedTodo, title: e.target.value });
          }}
          onChangeDesc={(e) => {
            setSelectedTodo({
              ...selectedTodo,
              description: e.target.value,
            });
          }}
          titleRef={editInputTitle}
          descRef={editInputDesc}
          erro={errorMessage}
        >
          <Button
            textButton="Salvar alteração"
            click={() => {
              if (selectedTodo) {
                editTodos(selectedTodo.id);
              }
            }}
          />
        </Modal>
      </div>
    </div>
  );
}

export default App;
