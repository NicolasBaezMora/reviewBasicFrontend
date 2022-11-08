import { Pipe, PipeTransform } from '@angular/core';
import { Subject } from '../models/Subject';

@Pipe({
  name: 'pipeSubjects'
})
export class PipeSubjectsPipe implements PipeTransform {

  transform(value: Subject[], ...args: unknown[]): string[] {
    return value.map(subj => subj.name);
  }

}
