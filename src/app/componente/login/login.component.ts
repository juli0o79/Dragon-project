import { Identifiers } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  //variáveis que serão usadas na validação das informações de login
  user:any="";
  pass:any="";
  validUser: boolean = false;
  validPassword: boolean = false;

  //variável logged transita entre os componentes para mostrar a navbar dinamicamente
  logged: boolean = false;
  redirect = () => {
    return window.location.href = "/list";
}

  //informações de login
  validUsers: any = 
    {
      email: 'dragon@example.com',
      pass: '123456'
    }
  

  constructor() { }

  ngOnInit(): void {
    

  }

  //Código de validação
  async login(email, password){
    validateEmail(email);
    validatePassword(password);
    //validação de email
    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
      
    }
    // Validação de password
    function validatePassword(password){
      if(password.length < 5 ){
        alert('senha deve ter mais de 5 dígitos')
      }
      
    }
    //código para checar se as informações de senha são válidas com as estabelecidas
    if(this.validUsers.pass === password){
            this.validPassword = true
          }else{
          this.validPassword = false;
          }


    if(validateEmail(email) && this.validPassword){
      this.validUser = true;
      console.log(email)
          if(this.validUser == true && this.validUsers.email === email){
            this.logged = false;
            setTimeout(this.redirect(),3000) ;
           
          }else{
            console.log('Confira email e senha, dados estão incorretos.')
          }
        }else {
            alert('Dados incorretos')
            
          }
   
   
  }
  //função para alterar as opções de navbar no logout
  logOut(){
    this.logged = true;
  }

}
