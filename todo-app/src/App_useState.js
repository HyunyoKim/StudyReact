import React, { useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const createBulkTodos = () => {
    const array = [];
    for (let i = 1; i <= 5000; i++) {
        array.push({
            id: i,
            text: `할 일 ${i}`,
            checked: false,
        });
    }
    return array;
};

function App() {
    /*/// 간단한 샘플 데이터;
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "리액트의 기초 알아보기",
            checked: true,
        },
        {
            id: 2,
            text: "컴포넌트 스타일링해 보기",
            checked: true,
        },
        {
            id: 3,
            text: "일정 관리 앱 만들어 보기",
            checked: false,
        },
    ]);
/*/ // 많은 데이터 렌더링 하기;
    const [todos, setTodos] = useState(createBulkTodos);
    //*/

    //고윳값으로 사용될 id
    //ref를 사용하여 변수 담기
    const nextId = useRef(5001);

    /*/// props가 매번 변경되서 여러번 랜더링 됨
    const onInsert = useCallback(
        (text) => {
            const todo = {
                id: nextId.current,
                text: text,
                checked: false,
            };
            setTodos(todos.concat(todo));
            nextId.current += 1; // nextId 1씩 더하기
        },
        [todos],
    );

    const onRemove = useCallback(
        (id) => {
            setTodos(todos.filter((todo) => todo.id !== id));
        },
        [todos],
    );

    const onToggle = useCallback(
        (id) => {
            setTodos(
                todos.map((todo) =>
                    todo.id === id ? { ...todo, checked: !todo.checked } : todo,
                ),
            );
        },
        [todos],
    );
/*/
    const onInsert = useCallback((text) => {
        const todo = {
            id: nextId.current,
            text,
            checked: false,
        };
        setTodos((todos) => todos.concat(todo));
        nextId.current += 1; //nextId 1씩 더하기
    }, []);
    const onRemove = useCallback((id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    }, []);
    const onToggle = useCallback((id) => {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo,
            ),
        );
    }, []);
    //*/
    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>
    );
}

export default App;
