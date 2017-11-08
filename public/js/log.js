window.printStack = [];
function print(s){
    if(!window._debug){
        return;
    }
    console.log(s);
    printStack.push(s);
}
