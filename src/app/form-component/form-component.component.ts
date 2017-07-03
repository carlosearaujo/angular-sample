import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Http } from "@angular/http";

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  form: FormGroup;

  constructor(private http: Http) { 
    
  }

  ngOnInit() {
    this.form = new FormGroup({
      nome: new FormControl(),
      endereco: new FormControl(),
      email: new FormControl(),
      telefone: new FormControl()
    });
  }

  onSubmit(){
    this.http.post('http://localhost:8080/pacientes', this.form.value);
  }

}
