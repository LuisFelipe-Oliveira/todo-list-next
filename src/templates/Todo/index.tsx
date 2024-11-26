"use client";
import { useEffect, useState } from "react";
import * as S from "./style";
import Input from "../../components/input/index";
import Button from "../../components/Button/index";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);
  const [editingTask, setEditingTask] = useState<string | null>(null);
  const fetchTodos = async () => {
    const response = await fetch("/api/todo");
    const data = await response.json();

    setTodoList(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handlerTodo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (task === "") return;

    const response = await fetch("/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task }),
    });

    if (response.ok) {
      fetchTodos();
      setTask("");
    } else {
      const error = await response.json();
      Swal.fire("Erro", error.message, "error");
    }
  };

  const removeTask = (taskToRemove: string) => {
    Swal.fire({
      title: "Deseja remover essa tarefa ?",
      text: "Você não podera desfazer essa ação",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, remover!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await fetch("/api/todo", {
          method: "DELETE",
          headers: {
            "Content-Type": "applicatino/json",
          },
          body: JSON.stringify({ task: taskToRemove }),
        });

        if (response.ok) {
          fetchTodos();
          Swal.fire({
            title: "Tarefa removida",
            text: "A tarefa foi removida com sucesso!",
            icon: "success",
          });
        } else {
          const error = await response.json();
          Swal.fire("Error", error.message, "error");
        }
      }
    });
  };

  const editTask = async (taskToEdit: string) => {
    setEditingTask(taskToEdit);
    setTask(taskToEdit);
  };

  const updateTask = async () => {
    if (task === "") return;

    const response = await fetch("/api/todo", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ oldTask: editingTask, newTask: task }),
    });

    if (response.ok) {
      fetchTodos();
      setEditingTask(null);
      setTask("");
    }
  };

  return (
    <S.Container>
      <S.ContentFormResponse>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            editingTask ? updateTask() : handlerTodo(e);
          }}
        >
          <Input
            type="text"
            value={task}
            placeholder="Insira uma tarefa"
            onChange={(event) => setTask(event.target.value)}
          />

          <Button type="submit">
            {editingTask ? "Atualizar" : "Adicionar"}
          </Button>
        </form>

        <ul>
          {todoList.map((todo, index) => {
            return (
              <li key={index}>
                {todo}{" "}
                <Button
                  onClick={() => editTask(todo)}
                  style={{ cursor: "pointer" }}
                >
                  Editar
                </Button>
                <Button
                  onClick={() => removeTask(todo)}
                  style={{ cursor: "pointer" }}
                >
                  <FontAwesomeIcon icon={faTimes} /> Remover
                </Button>
              </li>
            );
          })}
        </ul>
      </S.ContentFormResponse>
    </S.Container>
  );
};

export default Todo;
