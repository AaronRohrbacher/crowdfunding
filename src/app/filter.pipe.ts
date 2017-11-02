import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(input: Project[], range){
    let output: Project[] = []
    if (range === "charity") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].type === "charity") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (range === "scheme") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].type === "scheme") {
          output.push(input[i]);
        }
      }
      return output
    } else if (range === "stealing") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].type === "stealing") {
          output.push(input[i]);
        }
      }
      return output
    } else {
      return input;
    }
  }
}
