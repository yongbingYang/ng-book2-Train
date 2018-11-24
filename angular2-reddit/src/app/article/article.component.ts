import { Component, OnInit, Input } from '@angular/core';
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

  @Input() article: Article;

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
    if (this.article !== null) {
      console.log(this.article);
    }
  }

}
