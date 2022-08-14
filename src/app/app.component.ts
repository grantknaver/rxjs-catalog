import {
  Component,
  ViewChild,
  OnInit,
  ChangeDetectionStrategy,
  ViewContainerRef
} from '@angular/core';
import { ConcatMapComponent } from './operators/transformation/concat-map/concat-map.component';
import { MergeMapComponent } from './operators/transformation/merge-map/merge-map.component';
import { SwitchMapComponent } from './operators/transformation/switch-map/switch-map.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  @ViewChild('placeholder', {read: ViewContainerRef, static: true})
  public placeholder: ViewContainerRef;

  ngOnInit() {
    this.placeholder.clear();
    this.placeholder.createComponent(MergeMapComponent);
  }

}

