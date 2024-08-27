export default class SceneManager {
    constructor(scene, sceneList) {
        this.scene = scene
        this.sceneList = sceneList
    }

    changeScene(sceneTitle) {
        try{
            this.scene = this.sceneList[sceneTitle]
        } catch(e) {
            console.log("Error: this scene doesn't exists.", e)
        } 
    }

    playScene() {
        this.scene.draw()
    }
}