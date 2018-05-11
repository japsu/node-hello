const app = require('express')();
const requestLogger = require('morgan')('tiny');

app.use(requestLogger);
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));