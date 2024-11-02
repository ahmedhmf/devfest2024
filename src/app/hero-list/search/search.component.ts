import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() searchOutput = new EventEmitter<string>();

  onSearchUpdated(value: string) {
    this.searchOutput.emit(value);
  }
}
