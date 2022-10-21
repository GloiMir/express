const app = require('express')()
const port = 3000

app.set('view engine','pug')

app.get('/', (req, res) => {
  res.render('index',{title:'My page',message:'Ici mon message'})
})

app.listen(port, () => {
  console.log(`Node application listening on port ${port}`)
})