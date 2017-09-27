import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the MyPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'myPipe',
})
export class MyPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any, ...args) {
    if (value === 0){
    	return '面议';
    }else if(value === false){
    	return '否'
    }else if(value === true){
    	return '是'
    }
  }
}
