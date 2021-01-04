const http = require('http');
const url = require('url');
let router = [];

class App {
  get(path, handler){
    router.push({
      path,
      method: "get",
      handler
    })
  }
  listen(){
    http.createServer((req, res) => {
      let { pathname } = url.parse(req.url,true);

      for(const route of router){
        if(route.path === pathname){
          route.handler(req, res);
          return;
        }
      }
    }).listen(...arguments);
  }
}
module.exports = function(config){
  return new App();
}