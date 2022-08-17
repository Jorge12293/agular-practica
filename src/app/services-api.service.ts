
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesApiService {
  messages: string[] = [];
  
  constructor(){}

  add(message: string) {
    console.log(message);
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
