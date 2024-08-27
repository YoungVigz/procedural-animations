export default class SceneManager {
    constructor(scene, sceneList) {
        this.scene = scene
        this.sceneList = sceneList

        const sceneTitle = findSceneNameByObject(scene, sceneList)
        document.querySelector(".title").innerHTML = sceneTitle
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

function findSceneNameByObject(sceneObject, scenes) {
    for (const [name, scene] of Object.entries(scenes)) {
        if (scene === sceneObject) {
            return name; 
        }
    }
    return null;
}
