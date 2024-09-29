const express = require("express");
const bodyParser = require("body-parser");
const { createTodo , updateTodo} = require("./zodtype");
const { todo } = require("./db");
const cors = require("cors");

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
// app.use(cors({
//     origin : "http://localhost:5173"
// }));

app.post("/creatingTodo" ,  async (req,res)=>{
    const createPayload = req.body;
    const checkPayload = createTodo.safeParse(createPayload);
    if(!checkPayload){
        res.status(411).json({
            msg : "there is some issue with the code"
        })
        return;
    }
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })
    // const func = async()=>{
    //     const data = new todo({
    //         title : createPayload.title,
    //         description : createPayload.descriptionv
    //     })

    //     const saved = await data.save();
    // }
    // func();
    

    res.json({
        msg : "the todos have been created"
    })
})

app.get("/gettingTodo", async (req, res) => {
    const todos = await todo.find({});
    res.json({
        todos
    });
});

app.put("/completed" , async(req,res)=>{
    const updatePayload = req.body.id;
    const checkUpadte = updateTodo.safeParse(updatePayload);
    if(!checkUpadte){
        res.status(411).json({
            msg : "there is some issue with the code"
        })
        return;
    }

    await todo.updateOne({
        _id : req.body.id
    },{
        completed : true
    })

    res.json({
        msg : "the backend is completed"
    })
})

app.listen(port , ()=>{
    console.log(`now responding to port ${port}`);
}) 

























































//middlewares
// const express = require("express");
// const bodyParser = require("body-parser");

// //zod library is used for input validation

// const port = 3000;
// const app = express();
// app.use(express.json()); 

// const middleware1 = (req,res,next)=>{
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const n  = req.query.n;
//     if(!(username === "Ayush_navneet_singh" && password === "Qwerty2(*&^%")){
//         res.status(403).json({
//             msg : "Something is wrong with either your username or password"
//         })
//     }
//     else {
//         next();
//     }
// };

// const middleware2 = (req,res,next)=>{
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const n  = req.query.n;
//     if(n != 1 && n!= 2){
//         res.status(403).json({
//             msg : "Something is wrong with your input"
//         })
//     }
//     else {
//         next();
//     }
// };

// app.get("/ayush" ,middleware1, middleware2 , (req,res)=>{
//     res.send("you have a healthy kidney");
// })

// //Global catches  - it is a middleware that is used to throw errors to the users in case of exceptions 
// app.use((err,req,res,next)=>{
//     res.json({
//         msg: "your request cant be processed due to some error" 
//     })
// })


// app.listen(port , ()=>{
//     console.log(`now responding to port ${port}`);
// }) 
