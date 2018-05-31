const AOP = {
    logger: (content, callback) => {
        console.log(content);
        if (callback) {
            callback();
        }
    }
};


Function.prototype.before = function (beforefn) {
    let self = this;
    return function () {
        AOP.logger('### before advice start');
        beforefn.apply(this, arguments);
        AOP.logger('### before advice end');
        return self.apply(this, arguments);
    };
};

Function.prototype.after = function (afterfn) {
    let self = this;
    return function () {
        let ret = self.apply(this, arguments);
        AOP.logger('### after advice start');
        afterfn.apply(this, arguments);
        AOP.logger('### after advice start');
        return ret;
    };
};

exports['logger'] = AOP.logger;