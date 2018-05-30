/**
 * 日志打印
 * @param {Boolean} showLogger
 * @param {Function} callback
 */
export function logger(showLogger, callback) {
    if (showLogger === true) {
        callback();
    }
}