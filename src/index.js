const chalk = require('chalk');
class logPlugin {
  constructor(options) {
    options = Object.assign({}, { showWords: false, showEvent: true }, options);
    if (options.path === undefined && options.showWords) {
      options.path = './word.json';
    }
    this.options = options;
  }
  apply(compiler) {
    const pluginName = 'log';
    const { path, showEvent } = this.options;
    let success = 0;
    let words = [];
    let events = require('./event.json');
    compiler.hooks.entryOption.tap(pluginName, () => {
      if (path) {
        try {
          words = require(path);
        } catch (err) {
          console.log('这里没显示单词大概是路径错了\r\n');
        }
      }
    });
    compiler.hooks.watchRun.tap(pluginName, () => {
      console.log('  少女乞讨中...');
    });
    compiler.hooks.run.tap(pluginName, () => {
      console.log('  少女乞讨中...');
    });
    compiler.hooks.failed.tap(pluginName, err => {
      console.log(chalk.red('  少女卒，享年18。'));
    });
    compiler.hooks.done.tap(pluginName, compilation => {
      console.clear();
      let word = '', event = '';
      if (path) {
        const random = ~~(Math.random() * words.length);
        const item = words[random];
        word = `\n\n     词：${item.word}  ${item.mean}  \n`;
      }
      if(showEvent) {
        const random = ~~(Math.random() * events.length);
        const item = events[random];
        success += 1;
        event = `第${success}次${item.event}！`;
      }
      console.log(chalk.green(`  ${event} ${word}`));
    });
  }
}
module.exports = logPlugin;
