function a(){
    // console.log("return a")
    return function b(){
        // console.log("this is b")
        return function c(){
            console.log("this is c")
        }
    }
}
a()()();