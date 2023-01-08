import { useState } from "react"


const showTypes = [
   {
      type: "all",
   },
   {
      type: "completed"
   },
   {
      type: "uncompleted"
   }
]

export default function TasksFilterEx() {
   const [tasks, setTasks] = useState([
      { id: 1, title: "Run", completed: true },
      { id: 2, title: "Sleep", completed: false },
      { id: 3, title: "Eat", completed: false },
      { id: 4, title: "Read", completed: false },
   ])

   const [showType, setShowType] = useState("all")

   function tasksType(type) {
      setShowType(type)
   }

   let filteredTasks = []

   if (showType === "all") {
      filteredTasks = tasks
   } else {
      filteredTasks = tasks.filter((task) => {
         if (showType === "completed") return task.completed
         if (showType === "uncompleted") return !task.completed
      })
   }

   console.log("FILTERED:", filteredTasks)
   console.log("ORIGINAL", tasks)


   return (
      <div>
         <h1>Tasks</h1>

         <Button text="All" handleClick={() => tasksType("all")} />
         <Button text="Completed" handleClick={() => tasksType("completed")} />
         <Button text="Uncompleted" handleClick={() => tasksType("uncompleted")} />

         {/* {showTypes.map((type) => {
            return (
               <Button text={type.type} handleClick={() => tasksType(type.type)} />
            )
         })} */}

         <TaskList tasks={filteredTasks} showType={showType} />
      </div>
   )
}


function Button(props) {
   return (
      <button onClick={props.handleClick}>{props.text}</button>
   )
}

function TaskList(props) {
   return (
      <div>
         {props.tasks.map((task) => {
            return <TaskItem showType={props.showType} key={task.id} task={task} />
            // if (props.showType === "all") {
            //    return <TaskItem key={task.id} task={task} />
            // } else if (props.showType === "completed" && task.completed)) {
            //       return <TaskItem key={task.id} task={task} />
            // } else if (props.showType === "uncompleted" && !task.completed) {
            //       return <TaskItem key={task.id} task={task} />
            // }
         })}
      </div>
   )
}


function TaskItem(props) {
   const { task, showType } = props

   // let show = "none"

   // if (showType === "all") {
   //    show = "block"
   // }
   // if (showType === "completed" && task.completed) {
   //    show = "block"
   // }
   // else if (showType === "uncompleted" && !task.completed) {
   //    show = "block"
   // }


   // return <p style={{ display: show }} key={task.id} >{task.title}</p>
   return <p key={task.id} >{task.title}</p>

}
