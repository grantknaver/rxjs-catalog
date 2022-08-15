import { 
  Component, 
  Input, 
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
  Observable, 
  of
} from 'rxjs';
import { 
  take, 
  mergeMap, 
  tap,
  map
} from 'rxjs/operators';

@Component({
  selector: 'app-ie-panel',
  templateUrl: './ie-panel.component.html',
  styleUrls: ['./ie-panel.component.scss']
})
export class IEPanelComponent implements OnInit {
  @Input('mapType') mapType: string; 
  @Output() submitForm: EventEmitter<string[]> = new EventEmitter();
  public activeForm: FormGroup;
  // public output$: Observable<string[]>;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activeForm = this.fb.group({
      intervals: 0,
      emissions: 0,
    });
  }

  useMapType(mapType: string) {
    const intervalCount: number = this.activeForm.get('intervals')?.value;
    const emissionsCount: number = this.activeForm.get('emissions')?.value;

    if (intervalCount * emissionsCount >= 50) {
      alert('Too many emissions!');
      return;
    }
    // let output: string[] = [];
    return generate({
      initialState: 1,
      condition(value) { return value <= intervalCount; },
      iterate(value) { return value + 1; },
      resultSelector(value: number) { return value }
    })
    .pipe(
      // mergeMap(intervalCounter => 
      //   interval().pipe(
      //   take(emissionsCount),
      //   tap(intervalNum => {
      //     output.push(`Interval: ${intervalCounter} | ${intervalNum}`);
      //     if ((intervalNum + 1) == emissionsCount) {
      //       console.log('intervalCounter', intervalCounter);
      //       output.push(`Completed Interval ${intervalCounter}`);
      //     }
      //   }))
      // ),
      // map(() => output)
      mergeMap(intervalCounter => this.setMapObs(mapType, intervalCounter, emissionsCount))
    );
  }

  setMapObs(mapType: string, intervalCounter: number, emissionsCount: number) {
    let output: string[] = [];
    if (mapType === 'mergeMap') {
      return interval().pipe(
        take(emissionsCount),
        tap(intervalNum => {
          output.push(`Interval: ${intervalCounter} | ${intervalNum}`);
          if ((intervalNum + 1) == emissionsCount) {
            console.log('intervalCounter', intervalCounter);
            output.push(`Completed Interval ${intervalCounter}`);
          }
        }),
        tap(() => this.submitForm.emit(output)) 
        // map(() => {
        //   return output;
        // }));

    } else {
      console.log('***');
    }
  }

  // useConcatMap(): void {
  //   const intervalCount: number = this.concatMapForm.get('intervals')?.value;
  //   const emissionsCount: number = this.concatMapForm.get('emissions')?.value;
  //   if (intervalCount * emissionsCount >= 50) {
  //     alert('Too many emissions!');
  //     return;
  //   }
  //   let output: string[] = [];
  //   this.concatMapOutput$ = generate({
  //     initialState: 1,
  //     condition(value) { return value <= intervalCount; },
  //     iterate(value) { return value + 1; },
  //     resultSelector(value: number) { return value }
  //   })
  //   .pipe(
  //     concatMap(intervalCounter => interval().pipe(
  //       take(emissionsCount),
  //       tap(intervalNum => {
  //         output.push(`Interval: ${intervalCounter} | ${intervalNum}`);
  //         if ((intervalNum + 1) == emissionsCount) {
  //           output.push('Completed!');
  //         }
  //       })
  //     )),
  //     map(() => output)
  //   );
  // }

  // useSwitchMap(): void {
  //   const intervalCount: number = this.switchMapForm.get('intervals')?.value;
  //   const emissionsCount: number = this.switchMapForm.get('emissions')?.value;
  //   if (intervalCount * emissionsCount >= 50) {
  //     alert('Too many emissions!');
  //     return;
  //   }
  //   let output: string[] = [];
  //   this.switchMapOutput$ = generate({
  //     initialState: 1,
  //     condition(value) { return value <= intervalCount; },
  //     iterate(value) { return value + 1; },
  //     resultSelector(value: number) { return value }
  //   })
  //   .pipe(
  //     switchMap(intervalCounter => interval().pipe(
  //       take(emissionsCount),
  //       tap(intervalNum => {
  //         output.push(`Interval: ${intervalCounter} | ${intervalNum}`);
  //         if ((intervalNum + 1) == emissionsCount) {
  //           console.log('intervalCounter', intervalCounter);
  //           output.push(`Completed Interval ${intervalCounter}`);
  //         }
  //       })
  //     )),
  //     map(() => output)
  //   );
  // }

  submit() {
    this.submitForm.emit(this.useMapType(this.mapType));
  }
}
