// game.ts
export class Game {
    pins: number = 0
    roll(pins: number) {
        this.pins += pins
    }

    get score() {
        return this.pins;
    }
}