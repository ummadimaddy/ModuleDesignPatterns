let singleton=function(){
    let instance;
    function instanceFunc(){
        let obj = new Object("instance created");
        return obj;
    }

    return{
        getInstance : function() {
            if(!instance) {
                instance = instanceFunc();
            }
            return instance;
        }
    }
}();

function run() {
    let firstInstance = singleton.getInstance();
    let secondInstance = singleton.getInstance();
    console.log(firstInstance);
    console.log(secondInstance);
}

run();