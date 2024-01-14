const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs/promises')
const cors = require('cors')

const app = express()
const PORT = 5000

app.use(cors())
app.use(bodyParser.json())

app.post('/submit', async (req, res) => {
  try {
    const existingData = JSON.parse(await fs.readFile('data.json'))
    const newData = req.body

    existingData.push(newData)

    await fs.writeFile('data.json', JSON.stringify(existingData, null, 2))

    res.status(200).send('Successfully')
  } catch (error) {
    console.error('Error:', error)
    res.status(500).send('Internal Server Error')
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
