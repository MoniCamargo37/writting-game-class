class Hero {
    constructor(name, type, age) {
        this.name = name;
        this.type = type;
        this.age = age;   
    }

    attack() {
        let attack;
        switch(this.type) {
            case 'mage':
                attack = 'magic';
                break;
            case 'monk':
                attack = 'martial arts';
                break;
            case 'warrior':
                attack = 'sword';
                break;
            case 'ninja':
                attack = 'shuriken';
                break;
            default:
                attack = 'unknown attack';
        }
        console.log(`The ${this.type} attacked using ${attack}`);
    }
}

let hero = new Hero('Javier', 'monk', 18);
hero.attack();  