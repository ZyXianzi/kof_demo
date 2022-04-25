let KOF_GAME_OBJECTS = [];

export class KofGameObject {
    constructor() {
        KOF_GAME_OBJECTS.push(this);

        this.timedelta = 0;
        this.has_called_start = false;
    }

    start() {  // 初始执行一次

    }

    update() {  // 每一帧执行一次

    }

    destroy() { // 删除当前对象
        for (let i in KOF_GAME_OBJECTS) {
            if (KOF_GAME_OBJECTS[i] === this) {
                KOF_GAME_OBJECTS.splice(i, 1);
                break;
            }
        }
    }
}

// let last_timestamp = 0;
// let KOF_GAME_OBJECTS_FRAME = (timestamp) => {
//     for (let obj of KOF_GAME_OBJECTS) {
//         if (!obj.has_called_start) {
//             obj.start();
//             obj.has_called_start = true;
//         } else {
//             obj.timedelta = timestamp - last_timestamp;
//             obj.update();
//         }
//     }

//     const elapsed = timestamp - last_timestamp;
//     last_timestamp = timestamp;
//     if (elapsed > 1000 / 60) {
//         requestAnimationFrame(KOF_GAME_OBJECTS_FRAME);
//     }
// }

//requestAnimationFrame(KOF_GAME_OBJECTS_FRAME);

const fps = 60;
let fpsInterval, startTime, now, then, elapsed;
let startAnimating = fps => {
    fpsInterval = 1000 / fps;
    then = window.performance.now();
    startTime = then;
    animate();
}

let animate = () => {
    requestAnimationFrame(animate);
    now = window.performance.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        for (let obj of KOF_GAME_OBJECTS) {
            if (!obj.has_called_start) {
                obj.start();
                obj.has_called_start = true;
            } else {
                obj.timedelta = elapsed;
                obj.update();
            }
        }
    }
}

startAnimating(fps);