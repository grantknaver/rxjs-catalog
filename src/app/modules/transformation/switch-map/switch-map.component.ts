import {
  Component,
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
  switchMap, 
  tap, 
  map
} from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {
  @Output() componentName = new EventEmitter<string>();
  public switchMapForm: FormGroup;
  public switchMapOutput$: Observable<string[]>
  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.switchMapForm = this.fb.group({
      intervals: 0,
      emissions: 0,
    });
  }

  useSwitchMap(): void {
    const intervalCount: number = this.switchMapForm.get('intervals')?.value;
    const emissionsCount: number = this.switchMapForm.get('emissions')?.value;
    if (intervalCount * emissionsCount >= 50) {
      alert('Too many emissions!');
      return;
    }
    let output: string[] = [];
    this.switchMapOutput$ = generate({
      initialState: 1,
      condition(value) { return value <= intervalCount; },
      iterate(value) { return value + 1; },
      resultSelector(value: number) { return value }
    })
    .pipe(
      switchMap(intervalCounter => interval().pipe(
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

