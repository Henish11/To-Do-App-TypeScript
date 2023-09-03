import { Todo } from "../model";
import { useState } from "react";

interface Props {
    item: Todo;
    todoList: Todo[];
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ item, setTodoList, todoList }) => {
    const [edit, setEdit] = useState(false);
    const [editTodo, setEditTodo] = useState(item.todo);

    const handleDelete = (id: number) => {
        setTodoList(
            todoList.filter((item) => {
                return item.id !== id;
            })
        );
        localStorage.setItem("Todos", JSON.stringify(todoList));
    };
    const handleDone = (id: number) => {
        setTodoList(
            todoList.map((item) => {
                return item.id === id ? { ...item, isDone: !item.isDone } : item;
            })
        );
    };
    const handleEdit = () => {
        if (!edit) {
            setEdit(!edit);
        }
    };

    const handleSubmitEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodoList(
            todoList.map((item) => {
                return item.id === id ? { ...item, item: editTodo } : item;
            })
        );
        console.log(editTodo);
        setEdit(false);
    };

    return (
        <div className="singleTask">
            <div className="left">
                {edit ? (
                    <div>
                        {" "}
                        <form
                            onSubmit={(e) => {
                                handleSubmitEdit(e, item.id);
                            }}
                        >
                            <input
                                type="text"
                                value={editTodo}
                                onChange={(e) => {
                                    setEditTodo(e.target.value);
                                }}
                            />
                        </form>{" "}
                    </div>
                ) : item.isDone ? (
                    <s style={{ display: "block" }}> {editTodo} </s>
                ) : (
                    <div>{editTodo}</div>
                )}
            </div>
            <div className="right">
                <button onClick={() => handleEdit()}>Edit</button>
                <button
                    onClick={() => {
                        handleDelete(item.id);
                    }}
                >
                    Delete
                </button>
                <button
                    onClick={() => {
                        handleDone(item.id);
                    }}
                >
                    Done
                </button>
            </div>
        </div>
    );
};

export default SingleTodo;
