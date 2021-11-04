import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super();
        this.state={
            tasks:[{task:"check mails",id:1},{task:"Read article",id:2},{task:"complete HW",id:3}],
            currTask:''
        }
    }
    handleChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            currTask:e.target.value
        })
    }
    handleSubmit=()=>
    {
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length+1}],
            currTask:''
        })
    }
    handledelete=(id)=>{
      let narr=this.state.tasks.filter((taskobj)=>{
          return taskobj.id!=id
      })
      this.setState({
          tasks:[...narr]
      })

    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.currTask} onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Submit</button>
                <ul>
                {
                    this.state.tasks.map((taskobj)=>(
                        <li key={taskobj.id}>
                             <p>{taskobj.task}</p>
                             <button onClick={()=>this.handledelete(taskobj.id)}>Delete</button>
                        </li>
                    ))
                }
                </ul>
            </div>
        )
    }
}
