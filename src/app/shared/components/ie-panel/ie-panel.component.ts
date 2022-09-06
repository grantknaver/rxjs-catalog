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
import { InputsData } from '../../models/ie-panel.model';

@Component({
  selector: 'app-ie-panel',
  templateUrl: './ie-panel.component.html',
  styleUrls: ['./ie-panel.component.scss']
})
export class IEPanelComponent implements OnInit {
  @Output() submitForm: EventEmitter<InputsData> = new EventEmitter();
  public activeForm: FormGroup;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activeForm = this.fb.group({
      intervals: 0,
      emissions: 0,
    });
  }

  submit() {
    const formData = {
      intervals: this.activeForm.get('intervals')?.value,
      emissions: this.activeForm.get('emissions')?.value
    };
    this.submitForm.emit(formData);
  }
}
