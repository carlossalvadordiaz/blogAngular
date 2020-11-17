import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  formulario: FormGroup;

  constructor(private blogService: BlogService) {

    this.formulario = new FormGroup({
      titulo: new FormControl(),
      texto: new FormControl(),
      autor: new FormControl(),
      imagen: new FormControl(),
      fecha: new FormControl(),
      categoria: new FormControl()

    })

  }

  ngOnInit(): void {
  }

  async onSubmit() {
    await this.blogService.agregarPost(this.formulario.value);



  }

  onClick() {
    /*  this.formulario.reset() */

    alert('Post created successfuly')
  }


}
