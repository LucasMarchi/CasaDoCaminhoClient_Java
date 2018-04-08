import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Voluntario } from '../models/voluntario';
import { VoluntarioService } from '../voluntario.service';


@Component({
  selector: 'app-voluntario-cadastro',
  templateUrl: './voluntario-cadastro.component.html',
  styleUrls: ['./voluntario-cadastro.component.css']
})
export class VoluntarioCadastroComponent implements OnInit {

  voluntario: Voluntario = new Voluntario();
  formulario: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private voluntarioService: VoluntarioService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required ],
      identidade: [''],
      cpf: [''],
      nacionalidade: [''],
      endereco: [''],
      bairro: [''],
      cep: [''],
      estadoCivil: [''],
      telefone: [''],
    });
  }

  add(): void {
    this.voluntarioService.addVoluntario(this.voluntario)
    .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
