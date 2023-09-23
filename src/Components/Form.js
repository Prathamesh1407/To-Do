import styles from "../style.module.css"
import shortid from 'shortid'
const Form=({todo,setTodo,todoList,setTodoList})=>{
    const handleChange=(event)=>{
        setTodo(event.target.value)
        //console.log({todo})
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setTodoList([...todoList,{name:todo,id:shortid.generate()}])
        //console.log(todoList);
        setTodo("")
    }
    return (
        <div className={styles.todoform}>
            <form onSubmit={handleSubmit}>
                <input 
                    value={todo} 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="Add Todo Item" 
                    className={styles.todoinput}
                ></input>
                <div className={styles.btn}>
                    <button type="submit" className={styles.todobtn}>Add</button>
                </div>
                
            </form>
        </div>
    )
}
export default Form;