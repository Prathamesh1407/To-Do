import styles from "../style.module.css"
const Todo=({todoItem,todoList,setTodoList})=>{
    const deletTodo=()=>{
        setTodoList(todoList.filter((item)=>item.id !== todoItem.id))
    }
    return (
        <div>
            <div className={styles.todoitem}>
                <h3 className={styles.todoname}>{todoItem.name}</h3>
                <button onClick={deletTodo} className={styles.deletebtn}>DONE</button>
            </div>     
        </div>
    )
}
export default Todo;