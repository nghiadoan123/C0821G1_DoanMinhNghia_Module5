import { Component, OnInit } from '@angular/core';
import {IWord} from '../../../model/i-word';
import {DictionaryService} from '../../../service/dictionary.service';
import {ActivatedRoute, convertToParamMap, ParamMap} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  dictionary: IWord;
  word: string;
  constructor(private activatedRoute: ActivatedRoute,
              private dictionaryService: DictionaryService) {
    this.activatedRoute.paramMap.subscribe((pamaMap: ParamMap) =>{
      this.word = pamaMap.get('word');
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.dictionaryService.getAll().length; i++){
        if (this.dictionaryService.getAll()[i].word === this.word){
          this.dictionary = this.dictionaryService.getAll()[i];
        }
      }
    });
  }

  ngOnInit(): void {
  }
}
