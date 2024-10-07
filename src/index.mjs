import express from 'express'

const app = express();
const PORT = process.env.PORT || 3000

app.get('/', (request, response) => {
  response.status(201).send({msg: "Hellox!"});
  //Request Handler function
})

app.get('/api/users', (request, response) => {
  response.send([{id: 1, username: "anson", displayName: "Spectra"}])
})

app.listen(PORT, () => {
  console.log("Hello Node at Port: %s", PORT)
})