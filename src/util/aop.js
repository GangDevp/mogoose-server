const  consoleColors = {
    'cyan': '\x1b[36m',
    'blue': '\x1B[34m',
    'green': '\x1B[32m',
    'red': '\x1B[31m',
    'yellow': '\x1b[33m'
};

const AOP = {
    logger: (type, content, callback) => {
        switch (type) {
            case 'info':
                console.info(consoleColors.cyan, content);
                break;
            case 'log':
                console.log(consoleColors.green, '\t' + content);
                break;
            case 'warn':
                console.warn(consoleColors.yellow, content);
                break;
            case 'error':
                console.error(consoleColors.red, content);
                break;
            case 'trace':
                console.trace(consoleColors.blue, content);
                break;
        }
        if (callback) {
            callback();
        }
    }
};


Function.prototype.before = function (beforefn) {
    let self = this;
    return function () {
        AOP.logger('info', '[aop] before advice start...');
        beforefn.apply(this, arguments);
        AOP.logger('info', '[aop] before advice end...');
        return self.apply(this, arguments);
    };
};

Function.prototype.after = function (afterfn) {
    let self = this;
    return function () {
        let ret = self.apply(this, arguments);
        AOP.logger('info', '[aop] after advice start...');
        afterfn.apply(this, arguments);
        AOP.logger('info', '[aop] after advice end...');
        return ret;
    };
};

exports['logger'] = AOP.logger;