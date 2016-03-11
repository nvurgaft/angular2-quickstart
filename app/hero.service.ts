import {HEROES} from './mock-heroes';
import {Injectable} from "angular2/core";
import {Hero} from './hero';

@Injectable()
export class HeroService {
    getHeroes() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(HEROES), 2000)
        );
    }

    getHero(id: Number) {
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }
}
