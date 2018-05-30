const Aspect = {
    getAspect: () => {
        console.log('get aspect');
    },
    setAspect: () => {
        console.log('set aspect');
    }
};

exports['getAspect'] = Aspect.getAspect;
exports['setAspect'] = Aspect.setAspect;