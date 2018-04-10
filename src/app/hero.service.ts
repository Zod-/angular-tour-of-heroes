import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {
    constructor() { }
    getHeroes(): Observable<Hero[]> {
        return of(HEROES);
    }
}
