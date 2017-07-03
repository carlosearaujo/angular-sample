import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  nome: String;
  endereco: String;
  email: String;
  telefone: String;

  list;
  list2;

  constructor(private http: Http) { 
    this.http.get('http://localhost:8080/list').subscribe(function(data){
      this.list = data.json;
      console.log(this.list)
    })
  }

  getList(){
    
  }

  ngOnInit() {
  }

}
