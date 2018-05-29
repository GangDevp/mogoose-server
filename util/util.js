/**
 * 日志打印
 * @param {Boolean} showLogger
 * @param {Object} content
 * @param {Function} callback
 */
export function logger(showLogger, content, callback) {
  if (showLogger === true) {
    console.log(content);
    if (callback) {
      callback();
    }
  }
}

