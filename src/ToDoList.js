import { Component  } from "react";


class ToDoList extends Component {

    constructor() {
        super();
        this.state = {
            newItem: '',
            todoItems: [
                {title: 'wash', done: false},
                {title: 'cook', done: false},
            ]
        }
    }


    addItemToList = (event) => {
        //do something
        event.preventDefault();
        if(this.state.newItem.length < 1){
            alert("Please add a task!");
            return;
        }
        const newArr = [...this.state.todoItems]
        newArr.push({ title: this.state.newItem, done: false});
        this.setState({ todoItems: [...newArr], newItem: ''})
    }

    taskIsDone = (index) => {
        //do something
        console.log(index)

        const data = [...this.state.todoItems]
        data[index] = {...data[index], done: true}
        this.setState({ todoItems: data});


        // const index = data.findIndex(item => item.title === title)
    }



    render() {


        return (
            <div>
                <form onSubmit={this.addItemToList}>
                    <input value={this.state.newItem} onChange={
                        (event) => this.setState({ newItem: event.target.value})
                    } type="text" placeholder="Add task" />
                    <button type="submit">Add Task</button>
                </form>

                <ul>
                   { 
                        this.state.todoItems?.map((item, index) => (
                            <li key={index.toString()} onClick={() => this.taskIsDone(index)} style={{textDecoration: item.done ? 'line-through' : '', cursor: 'pointer'}}>{item.title}</li>
                        ))
                       
                    }
                </ul>
            </div>
        )
    }
}


export default ToDoList;