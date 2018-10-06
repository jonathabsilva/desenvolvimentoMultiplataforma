import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProvedorProvider } from '../../providers/provedor/provedor';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',

  providers: [
    ProvedorProvider
  ]
})
export class ContactPage {

  constructor(
    public navCtrl: NavController, public provedor: ProvedorProvider) {

  }

  public titulo : String = "Alunos";

  //Objeto JSON
  public objeto_alunos = new Array<any>();

  ionViewDidLoad(){
    this.provedor.getPersonagem().subscribe(
      data=>{
        const response = (data as any);
        const obj = JSON.parse(response._body);
        
        this.objeto_alunos = obj.results;
        console.log(this.objeto_alunos);
      }
    )
  }

}
