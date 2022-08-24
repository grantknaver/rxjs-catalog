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
  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activeForm = this.fb.group({
      intervals: 0,
      emissions: 0,
    });
  }

  useMapType(mapType: string): Observable<any> {
    const intervalCount: number = this.activeForm.get('intervals')?.value;
    const emissionsCount: number = this.activeForm.get('emissions')?.value;
    if (intervalCount * emissionsCount >= 50) {
      return of('Too many emissions!');
    }
    return generate({
      initialState: 1,
      condition(value) { return value <= intervalCount; },
      iterate(value) { return value + 1; },
      resultSelector(value: number) { return value }
    })
    .pipe(
      mergeMap(intervalCounter => this.setMapObs(mapType, intervalCounter, emissionsCount) // !!! move this down into setMapObs(), not moving it would imply everything is mergeMap
      .pipe(
        tap((f) => {

        })
      ))
    );
  }

  setMapObs(mapType: string, intervalCounter: number, emissionsCount: number) : Observable<string[]>  {
    let output: string[] = [];
    if (mapType === 'mergeMap') {
      // move line 57 and associated pipe here
      return interval().pipe(
        take(emissionsCount),
        tap(intervalNum => {
          output.push(`Interval: ${intervalCounter} | ${intervalNum}`);
          if ((intervalNum + 1) == emissionsCount) {
            console.log('intervalCounter', intervalCounter);
            output.push(`Completed Interval ${intervalCounter}`);
          }
        }),
        map(() => output)
      )
    } else {
      return of(['Not mergeMap']);
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
    this.useMapType(this.mapType).subscribe();
  }
}
