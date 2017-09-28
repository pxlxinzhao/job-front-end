import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
/**
 * Generated class for the MyPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'timeDiffPipe',
})
export class TimeDiffPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any, ...args) {
    var now = moment();
    var then = moment(value['timestamp']);

    var diff = now.diff(then, 'days')
    return diff == 0 ? 'Today' : diff + (diff == 1 ? ' day ago' : ' days ago');
  }
}
