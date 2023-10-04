import React, { useState } from "react";
import Styles from "./index.module.scss";
import UserDetails from "../userDetails/UserDetails";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../../features/counter/todoSlice";
import { useLocation } from "react-router-dom";

function TodoList(props) {
  const [task, setTask] = useState("");
  const [currentId, setCurrentId] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const { list } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const location = useLocation();
  const currentUserName = location.state.firstName;

  const handleToAdd = () => {
    if (task.trim() !== "") {
      dispatch(addTodo({ id: Date.now(), task }));
      setTask("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleToAdd();
    }
  };

  const handlerRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEdit = (data) => {
    let id = data.id;
    setCurrentId(id);
    setTask(data.task);
    setIsUpdate(true);
  };

  const handleToUpdate = () => {
    dispatch(updateTodo({ id: currentId, task: task }));
    setTask("");
    setIsUpdate(false);
  };
  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.main__container}>
          <div className={Styles.main__container__content}>
            <div className={Styles.main__container__content__userDetails}>
              <UserDetails name={currentUserName} />
            </div>
            <div className={Styles.main__container__content__heading}>
              <h2>Todo List</h2>
            </div>
            <div className={Styles.main__container__content__inp}>
              <input type="text" placeholder="Write your todos" value={task} onChange={(e) => setTask(e.target.value)} onKeyPress={handleKeyPress} />
              {!isUpdate ? (
                <button onClick={handleToAdd}>
                  <i className="fa-solid fa-plus"></i>
                </button>
              ) : (
                <button onClick={handleToUpdate}>
                  <i className="fa-solid fa-pen"></i>
                </button>
              )}
            </div>
            <div className={Styles.main__container__content__ul}>
              <ul>
                {list?.map((todo, id) => {
                  return (
                    <>
                      <div className={Styles.main__container__content__ul__item}>
                        <div className={Styles.main__container__content__ul__item__li}>
                          <li key={id}>{todo.task}</li>
                        </div>
                        <div className={Styles.main__container__content__ul__item__btn}>
                          <button onClick={() => handlerRemoveTodo(todo.id)}>
                            <i className="fa-solid fa-trash-can"></i>
                          </button>
                          <button onClick={() => handleEdit(todo)}>
                            <i className="fa-solid fa-marker"></i>
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
