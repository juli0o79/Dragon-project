import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DragonServiceService {

  constructor(private busca: HttpClient) { }
  url = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon";

  get(){
    return this.busca.get(this.url);
  }
  //olhar no ultimo projeto o processo do modal para criar um modal para cada dragão clicado
  update(id, body){
    return this.busca.put(this.url +"/" + id, body);
  }
  post(body){
    return this.busca.post(this.url, body);
  }
  delete(id){
    return this.busca.delete(this.url +"/" + id);
  }
  

 }
