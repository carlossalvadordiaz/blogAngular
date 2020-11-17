import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private arrPosts: Post[];

  constructor() {

    if (localStorage.getItem('arrPosts')) {
      this.arrPosts = JSON.parse(localStorage.getItem('arrPosts'))
    } else {

      this.arrPosts = [
        {
          titulo: 'BlogdePrueba',
          categoria: 'categoria de prueba'
        }
      ];
    }
  }

  agregarPost(pPost: Post): Promise<Post> {
    return new Promise((resolve, reject) => {
      this.arrPosts.push(pPost);
      console.log(this.arrPosts);

      localStorage.setItem('arrPosts', JSON.stringify(this.arrPosts))

    })
  }

  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPosts)
    })
  }

  getCategories(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      resolve([...new Set(this.arrPosts.map(post => post.categoria))])
    })
  }

  getPostByCategory(pCategory): Promise<Post[]> {
    return new Promise((resolve, reject) => {

      resolve(this.arrPosts.filter(post => post.categoria == pCategory
      ))
    })

  }

  deletePost(pIndice: number) {
    this.arrPosts.splice(pIndice, 1);

    localStorage.setItem('arrPosts', JSON.stringify(this.arrPosts))
  }
}
