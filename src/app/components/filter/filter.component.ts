import { Component, Output, EventEmitter } from '@angular/core';
import { Filter } from 'src/app/models/filter';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
    
    @Output() filterChanged = new EventEmitter();
    filter : Filter;

    constructor() {
        this.filter = new Filter();
    }

    onFilterChange(){
        this.filterChanged.emit(this.filter);
    }

    onCategoryChange(e){
        this.filter.category = e.target.value;
        this.filterChanged.emit(this.filter);
    }

    onValueChange(e){
        this.filter.value = e.target.value;
        this.filterChanged.emit(this.filter);
    }
}
