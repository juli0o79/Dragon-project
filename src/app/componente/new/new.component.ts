import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import {DragonServiceService} from '../../service/dragon-service.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private service: DragonServiceService) { }
  redirect = () => {
    return window.location.href = "/list";
}
  ngOnInit(): void {
  
  }
  //função para envio de informações de cadastro de um novo dragão
  async send(){
    const name = (<HTMLInputElement> document.getElementById('name'));
    const id = (<HTMLInputElement> document.getElementById('key'));
    const type= (<HTMLInputElement> document.getElementById('type'));
    const history= (<HTMLInputElement> document.getElementById('history'));
    const data = new Date();
    const message = {
      id: id.value,
      name: name.value,
      type: type.value,
      histories: history.value,
      createdAt: data
    }
    
    await this.service.post(message).subscribe((data)=>{
      console.log(data)
      this.redirect();
    })
    
    }
   

}
