import express from "express";
import bodyParser from "body-parser";
import moment from "moment";

const app = express();
const port = 8888;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs")
})


function calculateAge(birthDate) {
    return moment().diff(moment(birthDate), 'years');
}
app.post("/calculate", (req, res) => {
    const dateOfBirth = req.body.DoB;
    const age = calculateAge(dateOfBirth)
    res.render("index.ejs", {
        clientAge: age
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})