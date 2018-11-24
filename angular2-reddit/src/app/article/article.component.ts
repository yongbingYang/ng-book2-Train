import { Component, OnInit } from '@angular/core';
import { Article } from './article.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {

  article: Article;

  constructor() {
    this.article = new Article('Angular 2', 'http://angular.io', 10);
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
