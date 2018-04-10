import { MessageService } from './message.service';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {
    constructor(private messageService: MessageService) { }
    getHeroes(): Observable<Hero[]> {
        this.messageService.add('HeroService: fetched heroes');
        return of(HEROES);
    }
    getHero(id: number): Observable<Hero> {
        this.messageService.add(`HeroService: fetched hero id=${id}`);
        return of(HEROES.find(hero => hero.id === id));
    }
}
