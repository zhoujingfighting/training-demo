/**
 * lodash是npm上下载量最大的库
 * @link https://www.npmjs.com/package/lodash
 */

//简单实现一下reduce

Array.prototype._reduce = function(...args) {
    const callback = args[0];
    if( typeof callback !== 'function') {
        throw new Error('callBack must be a function')
    }
    let initialValue = args[1] !== undefined ? args[1] : this[0]; 
    const startIndex = args[1] !== undefined ? 0 : 1;
    for(let i = startIndex ; i < this.length ; i ++) {
        initialValue = callback(initialValue,this[i]);
    }
    return initialValue;
}

console.log([2,3]._reduce((a,b) => a+ b ,2))