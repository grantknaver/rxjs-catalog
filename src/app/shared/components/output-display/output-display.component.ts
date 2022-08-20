import { 
  Component, 
  OnInit,
  Input
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-output-display',
  templateUrl: './output-display.component.html',
  styleUrls: ['./output-display.component.scss']
})
export class OutputDisplayComponent implements OnInit {
  panelOpenState = false;
  @Input('outStr$') outStr$: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
