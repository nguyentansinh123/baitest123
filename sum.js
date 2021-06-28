
    function add(x){
        return function(y){
            if(typeof y!= 'undefined'){
                x = x+y
                return arguments.callee
            }
            else{
                returnx 
            }               
        }
        
    }
    