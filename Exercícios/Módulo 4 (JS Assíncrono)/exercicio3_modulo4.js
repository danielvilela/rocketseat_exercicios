var btnElement = document.querySelector("#app button");
var inputElement = document.querySelector("#app input");
var listElement = document.createElement("ul");
var containerElement = document.querySelector("#app");




btnElement.onclick = function () {
    nomeUser = inputElement.value;
    url = 'https://api.github.com/users/' + nomeUser + '/repos';


    listElement.innerHTML="";
    
    var carregandoElement = document.createElement("li");
    carregandoElement.appendChild(document.createTextNode('Carregando....'));
    listElement.appendChild(carregandoElement);

    axios.get(url)
        .then(function (response){
            for(dado of response.data){
                itemElement = document.createElement("li");
                var nomeRepo = document.createTextNode(dado.name);
                itemElement.appendChild(nomeRepo);
                listElement.append(itemElement);
                containerElement.append(listElement);
            }
            listElement.removeChild(carregandoElement);
            inputElement.value = "";
            
        })
        .catch(function (error) {
            console.log(error);
            alert("Erro : O usuário não existe!");
            inputElement.value="";
            listElement.removeChild(carregandoElement);
        });



}


