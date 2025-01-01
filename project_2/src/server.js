import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3333;

// get the file path from the URL of the current module
const __filename = fileURLToPath(import.meta.url)

// get the directory name fom the file path  
const __dirname = dirname(__filename)

// middleware 
app.use(express.json())

// serve the HTML file from the /public directory 
// tells express to serve all files from the public folder as static assets

app.use(express.static(path.join(__dirname, '../public')))

// serving up the HTML file from the public directory  
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () =>  {
    console.log(`Server has started on: ${PORT}`)
})      
 
 