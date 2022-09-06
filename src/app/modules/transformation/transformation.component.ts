import {
  Component,
  OnInit
} from '@angular/core';
import { 
  Observable 
} from 'rxjs';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { OperatorData, DomExposure, State } from './models/transformation-opertors';
import { TransformationOperatorTypes, IEPanelDomExposure } from './transformation.const';


@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.scss']
})
export class TransformationComponent implements OnInit {
  public transformationOutput$: Observable<string[]>;
  viewData$: Observable<any>
  panelOpenState = false;
  title: string;
  operatorData: OperatorData;
  domExposure: DomExposure;
  state: State;
  
  constructor(protected route : ActivatedRoute) {}

  ngOnInit(): void {
    this.viewData$ = this.route.url.pipe(
      tap(routeData => {
        this.operatorData = { ...this.operatorData, name: routeData[0].path };
        this.title = TransformationOperatorTypes[this.operatorData.name as keyof typeof TransformationOperatorTypes];
        this.setupView();
      })
    )
  }

  setupView() {
    this.domExposure = {
      iePanel : false
    };
    this.domExposure.iePanel = this.domExposure ? IEPanelDomExposure[this.operatorData.name as keyof typeof IEPanelDomExposure] : false;
  }

  updateState(event: any) {
    this.state = { ...event };
    console.log('state', this.state);
  }

}



