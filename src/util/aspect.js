const AOP = {
    logger: (content, callback) => {
        console.log(content);
        if (callback) {
            callback();
        }
    }
};


Function.prototype.before = function (beforefn) {
    var self = this;
    return function () {
        AOP.logger('###前置通知开始');
        beforefn.apply(this, arguments);
        AOP.logger('###前置通知结束');
        return self.apply(this, arguments);
    };
};

Function.prototype.after = function (afterfn) {
    var self = this;
    return function () {
        var ret = self.apply(this, arguments);
        AOP.logger('###后置通知开始');
        afterfn.apply(this, arguments);
        AOP.logger('###后置通知结束');
        return ret;
    };
};




exports['logger'] = AOP.logger;