import { Injectable } from '@angular/core';
import {IWord} from '../model/i-word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaries: IWord[] = [{
    word: 'name',
    mean: 'tên'
  },
    {
      word: 'dictionary',
      mean: 'từ điển'
    },
    {
      word: 'phone',
      mean: 'điện thoại'
    },
    {
      word: 'computer',
      mean: 'máy tính'
    }
    ];
  constructor() { }

  dictionary: IWord;
  getAll() {
    return this.dictionaries;
  }
  // detail(word: string){
  //   // tslint:disable-next-line:prefer-for-of
  //   for (let i = 0; i < this.dictionaries.length;i++){
  //     if (this.dictionaries[i].word === word){
  //       this.dictionary = this.dictionaries[i];
  //     }
  //   }
  // }
}
