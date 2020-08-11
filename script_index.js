const button = document.querySelector('button')



button.addEventListener("click", function () {
    var data = Date.parse(document.querySelector('#input').value)
    // Salva os dados na sessionStorage
    sessionStorage.setItem('data', data);

    if(data || 0){
        
        window.location.href = "./contador.html";
    }else{
        alert("Insira uma data!")
    }
});