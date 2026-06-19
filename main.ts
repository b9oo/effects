/**
 * Cinematic Effects Extension
 */
//% color=#AA00FF icon="\uf008"
namespace cinematic {

    //% block="shake camera strength $strength duration $duration ms"
    export function shakeCamera(strength: number, duration: number) {
        scene.cameraShake(strength, duration)
    }

    //% block="flash screen color $color duration $duration ms"
    export function flashScreen(color: number, duration: number) {
        scene.setBackgroundColor(color)
        pause(duration)
        scene.setBackgroundColor(1)
    }

    //% block="boss intro $text"
    export function showBossIntro(text: string) {
        game.splash(text)
    }

    //% block="slow motion $percent %"
    export function setSlowMotion(percent: number) {
        game.setFrameRate(Math.max(5, percent))
    }
}
