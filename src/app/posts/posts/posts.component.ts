import { Component, OnInit } from '@angular/core';
import { Posts } from '../model/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsbase: Posts[];
 displayedColumns = ['nome','conteudo','voto'];

  constructor() {
    this.postsbase = [
        {_id:'1', nome: 'Angular', conteudo:'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI', voto:true},
        {_id:'2', nome: 'Java', conteudo:'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI', voto:true},
        {_id:'3', nome: 'Nodejs', conteudo:'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI', voto:true}
    ];
   }

  ngOnInit(): void {
  }

}
