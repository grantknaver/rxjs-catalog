import { asLiteral } from '@angular/compiler/src/render3/view/util';
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
  concatMap, 
  tap, 
  map
} from 'rxjs/operators';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {
  @Output() componentName = new EventEmitter<string>();
  public concatMapForm: FormGroup;
  public concatMapOutput$: Observable<string[]>
  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.concatMapForm = this.fb.group({
      intervals: 0,
      emissions: 0,
    });
  }

  useConcatMap(): void {
    const intervalCount: number = this.concatMapForm.get('intervals')?.value;
    const emissionsCount: number = this.concatMapForm.get('emissions')?.value;
    if (intervalCount * emissionsCount >= 50) {
      alert('Too many emissions!');
      return;
    }
    let output: string[] = [];
    this.concatMapOutput$ = generate({
      initialState: 1,
      condition(value) { return value <= intervalCount; },
      iterate(value) { return value + 1; },
      resultSelector(value: number) { return value }
    })
    .pipe(
      concatMap(intervalCounter => interval().pipe(
        take(emissionsCount),
        tap(intervalNum => {
          output.push(`Interval: ${intervalCounter} | ${intervalNum}`);
          if ((intervalNum + 1) == emissionsCount) {
            output.push('Completed!');
          }
        })
      )),
      map(() => output)
    );
  }

}
