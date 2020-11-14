import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../login/login.component'
import {DragonServiceService} from '../../service/dragon-service.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  dragons: any = "";
  currentDragon: any="";
  modalDragon:any="";
  editCondition: boolean = false;
  modalCondition: boolean = false;
  buttons:any;

  constructor(private service: DragonServiceService, private logged: LoginComponent) { }

  ngOnInit(){

    //estabelecendo o logged como falso para mostrar informações de usuário logado na navbar
    //set Time out evita erro da informação sendo alterada no momento errado
    setTimeout(() => {
    this.logged.logged = false;}, 1000)

    //Recebimento das informações da api e invocação da "chamada" para ordená-los
    this.service.get().subscribe(async (response) =>{ 
     this.dragons = response;
     await this.chamada();
     this.buttons = buttons;
     this.chamada()
    });
    const buttons = document.getElementsByClassName('troca');
  }

  
  chamada(){
    //Código para ordernar dragoes alfabéticamente
    this.dragons.sort(function(a, b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
  }
  //Código para trocar inputs na tela de edição e fazer alterações dos botóes
  troca($event){
    const clicked = $event.target
    const currentDiv = clicked.parentNode;
    clicked.classList.add('hide')
    const hide = currentDiv.getElementsByClassName('display')
    const show = currentDiv.getElementsByClassName('hidden')
    const showButton = currentDiv.getElementsByClassName('hiddenButton')
    const currentNode = currentDiv.childNodes[0];
    hide[0].classList.add('hide');
    hide[1].classList.add('hide');
    show[0].classList.add('show');
    show[1].classList.add('show');
    showButton[0].classList.add('show');
  }
  //código para alterar as informações do dragão na api

  finished($event,dragao){
    const clicked = $event.target
    const currentDiv = clicked.parentNode;
    clicked.classList.add('hide')
    clicked.classList.remove('show')
    const hide = currentDiv.getElementsByClassName('display')
    const show = currentDiv.getElementsByClassName('hidden')
    const troca = currentDiv.getElementsByClassName('troca')
    
    hide[0].classList.remove('hide');
    hide[1].classList.remove('hide');
    show[0].classList.remove('show');
    show[1].classList.remove('show');
    troca[0].classList.remove('hide');

    console.log(dragao)
    this.service.update(dragao.id, dragao).subscribe((response)=>{
      console.log(response)
    })
    this.chamada();
    
  }

  //Código para abertura do modal e informações sobre o dragão a ser mostrado
  modal($event,dragao){

    this.modalCondition= true;
    this.currentDragon = dragao
  }

  //fechamento do modal
  closeModal(){
    this.modalCondition = false;
  }

  //abrir tela de criação 
  create(){
    window.location.href = "/create"
  }

  //requisição para, se necessário, deleter o dragão atual
  async delete(id){
    await this.service.delete(id).subscribe((deleted)=>{
      console.log(deleted)
    });
    await location.reload();
    this.service.get();
    this.modalCondition = false;
    
  }

}
