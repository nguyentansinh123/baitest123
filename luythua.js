var so = [4 , 32 ,72,96]
console.log(so)
for(i=0 ; i<so.length;i++){
for(j=2 ; j<10 ; j++){
    for(m=2 ; m<10 ; m++){
        let x = m**j
        if(x == so[i]){
            console.log(x)
        }
    }
}
}
