import React, { useRef, useState, useEffect } from 'react'
import './app.css'

function Todo() {
    const [tasks, setTasks] = useState([]);
    const inputRef = useRef();

    useEffect(() => {
        const savedTasks  = JSON.parse(localStorage.getItem('tasks'))
        if (savedTasks ){
            setTasks(savedTasks )
        }
    }, [])

    useEffect(() => {
        if (tasks.length > 0){
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }, [tasks])

    const handleClick = () => {
        const text = inputRef.current.value.trim();
        if(inputRef.current.value === ""){
            window.alert("Please Enter Your To-Do")
            setTasks(tasks)
        }else{
            const newItem = { completed: false, text }
            setTasks([...tasks, newItem]);
            inputRef.current.value = "";
        }
    }

    const handleDone = (index) => {
        const newTask = [...tasks]
        newTask[index].completed = !newTask[index].completed
        setTasks(newTask)
    }

    const handleDel = (index) => {
        const newTask = [...tasks]
        newTask.splice(index, 1)
        setTasks(newTask)
        
    }



    return (
        <div className='app'>
            <div className='todo'>
                <h2>To-Do List</h2>

                <div className='setTask'>
                    <input type="text" ref={inputRef} placeholder='Add To-Do...' />
                    <button onClick={handleClick}>Add</button>
                </div>

                {tasks.map(({ text, completed }, index) => {
                    return <div className='task'>
                        <li className={completed ? "done" : ""} key={Math.random()} onClick={() => handleDone(index)}>
                            {text}
                        </li>
                        <span onClick={() => handleDel(index)}>X</span>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Todo
