export const MERGEMAP_TS_STRING = `
import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { 
  interval, 
  generate,  
  Observable 
} from 'rxjs';
import { 
  take, 
  mergeMap, 
  tap, 
  map
} from 'rxjs/operators';
import { TransformationComponent } from '../transformation.component';
import { MERGEMAP_TS_STRING } from './merge-map-str';


@Component({
  selector: 'app-merge-map',
  templateUrl: '../transformation.component.html',
  styleUrls: ['../transformation.component.scss']
})
export class MergeMapComponent extends TransformationComponent implements OnInit  {
  public mergeMapForm: FormGroup;
  public mergeMapOutput$: Observable<string[]>;

  constructor(protected override route: ActivatedRoute) {
    super(route);
    super.operatorData = {...super.operatorData, logic: MERGEMAP_TS_STRING};
  }

  useMergeMap(): void {
    const intervalCount: number = this.mergeMapForm.get('intervals')?.value;
    const emissionsCount: number = this.mergeMapForm.get('emissions')?.value;
    if (intervalCount * emissionsCount >= 50) {
      alert('Too many emissions!');
      return;
    }
    let output: string[] = [];
    this.mergeMapOutput$ = generate({
      initialState: 1,
      condition(value) { return value <= intervalCount; },
      iterate(value) { return value + 1; },
      resultSelector(value: number) { return value }
    })
    .pipe(
      mergeMap(intervalCounter => interval().pipe(
        take(emissionsCount),
        tap(intervalNum => {
          output.push('Interval: ' + intervalCounter + ' | ' + intervalNum);
          if ((intervalNum + 1) == emissionsCount) {
            console.log('intervalCounter', intervalCounter);
            output.push('Completed Interval ' + intervalCounter);
          }
        })
      )),
      map(() => output)
    );
  }
}`;