import { Player } from "./player.js";
import { GIF } from "../utils/gif.js";

export class kyo extends Player {
    constructor(root, info) {
        super(root, info);
        this.init_animations();
    }

    init_animations() {
        let outer = this;
        let offsets = [0, -22, -22, -140, 0, 0, 0];
        for (let i = 0; i < 7; i ++) {
            let gif = GIF();
            gif.load(`/static/images/player/kyo/${i}.gif`);
            this.animations.set(i, {
                gif: gif,
                frame_cnt: 0,  // gif总帧数
                frame_rate: 5,  // gif播放速度(浏览器每n次刷新渲染一帧图片)
                offset_y: offsets[i],  // y方向偏移量
                loaded: false,  // gif是否加载完成
                scale: 2,  // 图片放大倍率
            });

            gif.onload = () => {
                let obj = outer.animations.get(i);
                obj.frame_cnt = gif.frames.length;
                obj.loaded = true;

                if (i === 3) {
                    obj.frame_rate = 4;
                }
            }
        }
    }
}