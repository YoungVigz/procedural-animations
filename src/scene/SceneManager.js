export default class SceneManager {
    constructor(scene) {
        this.scene = scene
    }

    changeScene(scene) {
        this.scene = scene
    }

    playScene() {
        this.scene.draw()
    }
}