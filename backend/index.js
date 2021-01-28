const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('src/json/db.json')
const middlewares = jsonServer.defaults()

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

router.render = (req, res) => {
  res.jsonp({
    body: res.locals.data.items.map(x => x.id = uuidv4())
  })
}

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
