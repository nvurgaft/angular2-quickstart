import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';

@Component({
    selector: 'my-heroes',
    templateUrl: "app/heroes.component.html",
    styleUrls: ["app/heroes.component.css"],
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit{

    public selectedHero: Hero;
    public heroes: Hero[];

    constructor(private _router: Router, private _heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }

    public getHeroes() {
        this._heroService.getHeroes().then(heroes => {
            this.heroes = heroes;
        })
    }

    public onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    public gotoDetail() {
        this._router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
    }
}
