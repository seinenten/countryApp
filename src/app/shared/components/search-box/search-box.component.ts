import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscripcion?: Subscription;


  @Input() public placeholder: string = '';

  @Input() public initialValue: string = '';

  @Output() public onValue = new EventEmitter<string>(); 


  onKeyPress( searchTerm: string ){
    this.debouncer.next( searchTerm );
    
  }


  constructor() { }
  
  ngOnInit(): void {
    this.debouncerSubscripcion = this.debouncer
    .pipe(
      debounceTime( 1000 )
      )
      .subscribe( value => {
        this.onValue.emit(value);
      })
    }
    
    ngOnDestroy(): void {
      this.debouncerSubscripcion?.unsubscribe();
    }
}
