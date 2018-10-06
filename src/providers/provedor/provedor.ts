//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the ProvedorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvedorProvider {

  constructor(public http: Http) {
    console.log('Hello ProvedorProvider Provider');
  }

  getPersonagem(){
   return this.http.get("https://swapi.co/api/people/");
  }

}
