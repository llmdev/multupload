const express = require('express')
const app = express()
const multer = require("multer")
const upload = multer({ dest: "uploads/" })
const cors = require('cors')

app.use(cors());

app.post("/upload", upload.fields([{name: 'arquivos', maxCount: 10 }]), (req, res) => {
    /// vai mostrar no console
    console.log(req.files.arquivos);

    // OU NO RETORNO DA REQUEST
    res.send(JSON.stringify(req.files.arquivos))
})

app.listen('3333', () => {
    console.log("Server listen port 3333")
})