var nome =document.getElementById('nome').value;
var email =document.getElementById('email').value;
var assunto =document.getElementById('texto_assunto').value;
var info =document.getElementById('texto_usuario').value;

var texto = 'O Sr/Sra '+nome.toString()+' acessou seu portifólio, gostaria de falar sobre ***'+assunto.toString()+'*** e deixou a mensagem ***'+info.toString()+'*** espera sua resposta pelo e-mail: '


function mandaForm(){
    
    if(!nome| !email | !info | !assunto){
        document.getElementById('nome').setAttribute('placeholder', '*** campo obrigatório ***');
        document.getElementById('email').setAttribute('placeholder', '*** campo obrigatório ***');
        document.getElementById('texto_assunto').setAttribute('placeholder', '*** campo obrigatório ***');
        document.getElementById('texto_usuario').setAttribute('placeholder', '*** campo obrigatório ***');
        
    }else{
    let res = 'https://api.whatsapp.com/send?phone=5561981291250&text=O'+texto;
        
        window.open(res);}
}

document.getElementById('btn').addEventListener('click', function () {
    mandaForm();
});