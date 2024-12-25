/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');
const app = express()
const PORT = 3000;

let data = {
    name: ['Ben'],
    age: '1002',
    occupation: 'broke college student'
}

// Middleware
app.use(express.json())

// ENDPOINT - HTTP VERBS (method) & Routes (or paths)
// The method informs the nature of request and the route is a further subdirectory 
// We redirect the request to the body of code to respond appropriately, and these 
// locations or routes are called endpoints

// Type 1 -website endpoints (for sending HTML responses)

app.get('/', (req, res) => {
    console.log('network request to home page.')
    res.send(`
        <body>
            <h1>stats</h1>
            <p>Name: ${data.name} </p>
            <p>Age: ${data.age} </p>
            <p>Occupation: ${data.occupation} </p>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body>
        <script>console.log('hello home page')</script>
        `)
});

app.get('/dashboard', (req, res) => {
    console.log('network request to dashboard.')
    res.send(` 
        <body>
            <h1>welcome to the dashboard</h1>
            <a href="/">home page</a>
        </body>
        <script>console.log('hello dashboard page')</script>
        `);
})

// Type 2 - API endpoints (non visual)

/**
 * CRUD
 * create: post
 * read: get
 * update: put
 * delete: delete
 */

app.get(`/api/data`, (req, res) => {
    console.log('this one sends data');
    res.send(data);
}) 
 
app.post('/api/data', (req, res) => {
    const newEntry = req.body;
    console.log(newEntry);
    // data.push(newEntry.name);
    res.sendStatus(201);
})

app.delete('/api/data', (req, res) => {
    // data.pop()
    console.log('data wiped')
    res.sendStatus(203)
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))
  