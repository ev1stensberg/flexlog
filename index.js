module.exports = (...arguments) => {
    let argFn = arguments.shift()
    delete global.console;
    global.console =  {
      log: () => {},
      error: () => {},
      info: () => {},
      stack: () => {}
    }
    argFn(arguments)
    global.console = require('console')
    return;
}
