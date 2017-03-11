var randstr = (function(){
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    return function(length, charset) {
        var len = length || 32;
        var charset = charset || chars;
        var arr = [];
        for(var i = 0; i < len; i++)
            arr[i] = charset.charAt(Math.floor(Math.random() * charset.length));
        return arr.join('');
    };
})();

if(typeof window === 'undefined')
    module.exports = randstr;
else
    window.randstr = randstr;
