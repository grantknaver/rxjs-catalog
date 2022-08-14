import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-display',
  templateUrl: './code-display.component.html',
  styleUrls: ['./code-display.component.scss']
})
export class CodeDisplayComponent{
  @Input() public tsCode2Display = '';
}
