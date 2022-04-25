import { KofGameObject } from "../kof_game_object/base.js";
import { Controller } from "../controller/base.js";

export class GameMap extends KofGameObject {
    constructor(root) {
        super();

        this.root = root;
        this.$canvas = $('<canvas width="1280" height="720" tabindex=0></canvas>');
        this.ctx = this.$canvas[0].getContext('2d');
        this.root.$kof.append(this.$canvas);
        this.$canvas.trigger('focus');

        this.controller = new Controller(this.$canvas);

        this.root.$kof.append($(
            `
            <div class="kof-head">
                <div class="kof-head-hp-0">
                    <div>
                        <div></div>
                    </div>
                </div>
                <div class="kof-head-timer">60</div>
                <div class="kof-head-hp-1">
                    <div>
                        <div></div>
                    </div>
                </div>
            </div>
            `
        ));

        this.time_left = 10000;  // ms
        this.$timer = this.root.$kof.find(".kof-head-timer");
    }

    start() {

    }

    update() {
        let [a, b] = this.root.players;
        // 有角色死亡后停止计时
        if (a.status !== 6 && b.status !== 6) {
            this.time_left -= this.timedelta;
        }
        // 时间到则平局，两位玩家均死亡
        if (this.time_left < 0) {
            this.time_left = 0;
            a.is_attack(100);
            b.is_attack(100);
        }

        this.$timer.text(parseInt(this.time_left / 1000));

        this.render();
    }

    render() {
        this.ctx.clearRect(0, 0, 1280, 720);
    }
}