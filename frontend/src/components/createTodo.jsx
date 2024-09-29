import { useState } from "react"

export function Createtodo({todoAdded}){

    const [title , setTitle] = useState("");
    const [description , setdescription] = useState("");

    return <div>
        <input style = {{
            padding : 15,
            margin : 10
        }} type="text" placeholder="title" onChange={function(e){
            setTitle(e.target.value);
        }}></input><br/>
        <input style = {{
            padding : 15,
            margin : 10
        }} type="text" placeholder="description" onChange={function(e){
            setdescription(e.target.value);
        }}></input><br/>
        <button style = {{
            padding : 10,
            margin : 10
        }}onClick={()=>{
            fetch("http://localhost:3000/creatingTodo" ,{
                method : "POST",
                body : JSON.stringify({
                    title : title,
                    description : description
                }),
                headers : {
                    "Content-type" : "application/json"
                }
            }).then(async function(res){
                const data = await res.json();
                alert("todo added");
                todoAdded();
            })
        }} >Add a todo</button>
         
    </div>
} 