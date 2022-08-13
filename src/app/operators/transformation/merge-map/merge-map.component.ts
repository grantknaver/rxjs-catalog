import {
  Component,
  ElementRef,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
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

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {
  @Output() componentName = new EventEmitter<string>();
  public mergeMapForm: FormGroup;
  public mergeMapOutput$: Observable<string[]>
  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.mergeMapForm = this.fb.group({
      intervals: 0,
      emissions: 0,
    });
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
          output.push(`Interval: ${intervalCounter} | ${intervalNum}`);
          if ((intervalNum + 1) == emissionsCount) {
            console.log('intervalCounter', intervalCounter);
            output.push(`Completed Interval ${intervalCounter}`);
          }
        })
      )),
      map(() => output)
    );
  }

}

