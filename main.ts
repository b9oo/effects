/**
 * Cinematic Effects Extension
 */
//% color=#AA00FF icon="\uf008"
namespace cinematic {

    //% block="shake camera strength $strength duration $duration ms"
    export function shakeCamera(strength: number, duration: number) {
        scene.cameraShake(strength, duration)
    }

}
