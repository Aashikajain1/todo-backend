import express from 'express';
const app = express();
app.use(express.json());

//use as temoprary DB

const task=[]
app.get('/health', (req, res) => {
    res.json({
        success: true,
        msg: 'Sever is healthy'
    })
})
//POSt can be passed in body only 
//THEREFORRE if Want to Create something than WE have to use POST ONLY
// create task Api
app.post('/create-task',(req,res)=>{
const {id,title,priority}=req.body;
const newTask={id,title,priority} 
if(!id){
    return res.json({
        success: false,
        msg: 'ID required',
        data: task
    })
}
if(!title){
    return res.json({
        success: false,
        msg: 'Title required',
        data: task
    })
}
if(!priority){
    return res.json({
        success: false,
        msg: 'Priority required',
        data: task
    })
}

task.push(newTask);
res.json({
    success: true,
    msg: 'Task created successfully',
    data:newTask
})
})
//All task API
app.get('/all-task',(req,res)=>{
    res.json({
        success: true,
        msg: 'All Task fetched sucessfully',
        data: task
    })
})



const PORT = 5000;
app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)})