import { GameMap } from "./game_map/base.js";
import { kyo } from "./player/kyo.js";

export class KOF {
    constructor(id) {
        this.$kof = $('#' + id);

        this.game_map = new GameMap(this);
        this.players = [
            new kyo(this, {
                id: 0,
                x: 210,
                y: 0,
                width: 120,
                height: 200,
                color: 'blue',
            }),
            new kyo(this, {
                id: 1,
                x: 950,
                y: 0,
                width: 120,
                height: 200,
                color: 'red',
            }),
        ]
    }
}