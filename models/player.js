export default class Player {
    round: number[] = [
        1529
    ];

    constructor(name) {
        this.name = name
        this.totalScore = 0
    }

    getRound(round: number) {
        return this.round[round]
    }
}