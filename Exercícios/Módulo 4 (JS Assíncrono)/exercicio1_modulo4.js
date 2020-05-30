function checaIdade(idade){
    return new Promise(function(resolve,reject){
        timeout=2000;
        setTimeout(() => {
            
        
        if(idade>18){
            resolve("Maior de idade");
        } else{
            reject('Menor de idade');
        }
    }, timeout);
    });
}


checaIdade(20)
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });