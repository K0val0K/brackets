module.exports = function check(str, bracketsConfig) {
    
    let configMap = new Map();

    bracketsConfig.forEach(element => {
        configMap.set(element[0],element[1]);
    });

    let stack = [];
    let strArray = str.split('');

    for(let i = 0; i < strArray.length; i++) {
        if(configMap.has(strArray[i])) {
            if(strArray[i] == stack[stack.length-1]){
                stack.pop();
                continue;
            }
            stack.push(configMap.get(strArray[i]));
        }
        else {
            if(strArray[i] == stack[stack.length-1]) {
                stack.pop()
            } else {
                return false;
            }  

        }
    };
    return stack.length == 0;
}
 
