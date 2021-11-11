import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchInput'
})
export class SearchInputPipe implements PipeTransform {

  transform(articlesArray:any[],str:string): any {
    if(!str){
      return articlesArray;
    }else{
      return articlesArray.filter(
        (article)=>article.title.toLowerCase().indexOf(str.toLowerCase())!==-1
      )
    }
  }

}
