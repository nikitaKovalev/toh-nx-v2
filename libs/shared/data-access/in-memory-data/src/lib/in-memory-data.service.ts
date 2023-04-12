import {Injectable} from '@angular/core';
import {Hero} from '@toh-nx-v2/toh-nx-v2/core/models';
import {InMemoryDbService} from 'angular-in-memory-web-api';

interface DB {
    heroes: Hero[];
}

@Injectable({providedIn: 'root'})
export class InMemoryDataService implements InMemoryDbService {
    createDb(): DB {
        const heroes = [
            {id: 12, name: 'Dr. Nice'},
            {id: 13, name: 'Bombasto'},
            {id: 14, name: 'Celeritas'},
            {id: 15, name: 'Magneta'},
            {id: 16, name: 'RubberMan'},
            {id: 17, name: 'Dynama'},
            {id: 18, name: 'Dr. IQ'},
            {id: 19, name: 'Magma'},
            {id: 20, name: 'Tornado'},
        ];

        return {heroes};
    }
}
