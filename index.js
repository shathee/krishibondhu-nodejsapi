const express = require('express')
const app = express()
const port = 3000

const adminRouter = require('./routers/admin.router');
const apiRouter = require('./routers/web.api');

app.use('/admin', adminRouter);
app.use('/api', apiRouter);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
