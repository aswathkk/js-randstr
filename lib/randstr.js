var randstr = (function(){
    var charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    return function(length) {
        var arr = [];
        for(var i = 0; i < length; i++)
            arr[i] = charset.charAt(Math.floor(Math.random() * charset.length));
        return arr.join('');
    };
})();

if(typeof window === 'undefined')
    module.exports = randstr;
else
    window.randstr = randstr;
