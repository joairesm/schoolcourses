import { Pipe } from '@angular/core';
import { Course } from './models/course';
import { Filter } from './models/filter';

/**
 * This class is responsible of filtering the search results.
 */
@Pipe({name: 'filterpipe', pure: false})
export class FilterPipe {
  transform(list: Course[], filter: Filter): Course[] {
    
    if(filter == null) return list;
    
    // if(searchText == null) return list;
    // if(searchText.length < 3) return list;
    // searchText = searchText.trim();
    var newList = [...list];
    
     list.forEach(c => {
        var index = newList.indexOf(c);
        if( filter.online == true && !c.online ){
            newList.splice(index,1);
            return;
        }
        if(filter.search){
            if( filter.search.length > 3 && 
                ! c.name.toLowerCase().includes(filter.search.toLowerCase()) && 
                ! c.description.toLowerCase().includes(filter.search.toLowerCase())){
                newList.splice(index,1);
                return;
            }
        }

        if(filter.category){
            if(filter.category != "" && filter.category != c.category ){
                newList.splice(index,1);
                return;
            }
        }
        
        


    //     if((ACTIVE.includes(searchText.toLowerCase())) && s.active) newList.push(s);
    //     if((DEACTIVATE.includes(searchText.toLowerCase()))
    //     && searchText.startsWith('de') && !s.active) newList.push(s);
    //     if(s.number.toString().includes(searchText)) newList.push(s);
    //     if(s.subscription.name.toLowerCase().includes(searchText)) newList.push(s);
     });
    return newList; 

  }
}