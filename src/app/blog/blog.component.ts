import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Post } from '../post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrPostsMostrados: Post[]
  categories: string[]

  constructor(private blogService: BlogService) {

    this.arrPostsMostrados = []


  }

  ngOnInit(): void {

    //Obtener Todos los posts al inicio

    this.blogService.getAllPosts()

      .then(posts => {
        this.arrPostsMostrados = posts;
      })
      .catch(error => (console.log(error)))

    //Obtener todas las categorías al inicio

    this.blogService.getCategories()
      .then(categorias => {
        this.categories = categorias
      })

  }

  async onChange($event) {

    if ($event.target.value === "all") {

      this.arrPostsMostrados = await this.blogService.getAllPosts();
    } else {
      this.arrPostsMostrados = await this.blogService.getPostByCategory($event.target.value);

      console.log($event.target.value);

    }
  }

  async onClick(pIndice) {
    this.blogService.deletePost(pIndice)
  }

}
