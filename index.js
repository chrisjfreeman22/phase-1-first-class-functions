function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function namedFn() {

    };
}
function returnsAnAnonymousFunction() {
    return () => console.log("this is an anonymous function");
}
