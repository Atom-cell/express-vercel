const express = require("express");
const app = express();

app.use(express.json());


app.get("/", (req, res) => res.send("Express on Vercel"));

app.post('/room', (req,res)=>{
    const {name, email} = req.body;

    res.send(`I am ${name} and you can contact me on ${email}`)
})

app.get('/room', (req, res) => res.send("I am in the room"))



app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;