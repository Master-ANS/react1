import { useState } from "react";

export function Todos({todos}){
    // const[btn , setBtn] = useState("Mark as completed");
    return(
        <div>
            {todos.map(function(todo){
                
                return(
                    // <Check title = {todo.title}  description = {todo.description} completed = {todo.completed}></Check>
                    <div>
                    <h3>{todo.title}</h3>
                    <h4>{todo.description}</h4>
                    <button onClick = {function (res){
                        const id = todo._id;
                        fetch("http://localhost:3000/completed" , {
                            method : "PUT",
                            body :  JSON.stringify({
                                id : id
                            }),
                            headers : { 
                                "content-Type" : "application/json"
                            }       
                        }).then(async (res)=>{
                            const check = await res.json();
                            if(check){
                                alert("Marks as completd");
                            }
                        })
                    }}>{todo.completed == true ? "completed" : "mark as completed?"}</button>
                    
                    </div>
                )
            })}
        </div>
    )
}
// export function Check(input){
//     return <div>
//     <h1>{input.title}</h1>
//     <h2>{input.description}</h2>
//     <button>{input.completed == true ? "completed" : "mark as completed"}</button>
//     </div>
// }










// import { useState } from "react";

// export function Todos({todos}){
//     const[btn , setBtn] = useState("Mark as completed");
//     return(
//         <div>
//             {todos.map(function(todo,id){
                
//                 return(
//                     // <Check title = {todo.title}  description = {todo.description} completed = {todo.completed}></Check>
//                     <div>
//                     <h3>{todo.title}</h3>
//                     <h4>{todo.description}</h4>
//                     <button onClick = {function (res){
//                         const id = todo._id;
//                         fetch("http://localhost:3000/completed" , {
//                             method : "PUT",
//                             body :  JSON.stringify({
//                                 id : id
//                             }),
//                             headers : { 
//                                 "content-Type" : "application/json"
//                             }       
//                         }).then(async (res)=>{
//                             const check = await res.json();
//                             if(check){
//                                 alert("Marks as completd");
//                             }
//                             if(todo.completed)
//                                 setBtn("completed");
//                         })
//                     }}>{btn}</button>
                    
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }
// export function Check(input){
//     return <div>
//     <h1>{input.title}</h1>
//     <h2>{input.description}</h2>
//     <button>{input.completed == true ? "completed" : "mark as completed"}</button>
//     </div>
// }