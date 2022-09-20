import "../../style/Input.css";

function Input(props){
    const handleSubmit = (e)=>{
        e.preventDefault();
        const task = e.target[0].value;
        e.target[0].value = '';
        props.addTask(task);
    }

    return(
        <form id="taskForm" onSubmit={handleSubmit}>
          <input type="text" name="task" id="taskInput" placeholder='What needs to be done?'/>
        </form>
    );
}

export default Input;