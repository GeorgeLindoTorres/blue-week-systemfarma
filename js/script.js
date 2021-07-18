const botao = document.getElementById('btn-cadastro');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

function cadastrar(e) {
    let nomeLp = nome.value;
    let emailLp = email.value;
    if(emailLp == "" || nomeLp == "" || nomeLp == "Preencha seu nome" || emailLp == "Preencha seu nome" ){
        nome.value = "Preencha seu nome";
        email.value = "Preencha seu e-mail";  
    } else {        
        const lead = {
            nome: nomeLp,
            email: emailLp,
        }
        localStorage.setItem('Nome', lead.nome);
        localStorage.setItem('Email', lead.email);
        nome.value = "";
        email.value = "";
        modal.style.display = "block";
        
    }       
    
};

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}