import { WIDTH, HEIGHT, FPS } from "./config.js"
import Scene from "./scene/Scene.js"
import SceneManager from "./scene/SceneManager.js"
import SimpleConstrainScene from "./scene/SimpleConstrainScene.js"

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const scenes = document.querySelectorAll(".list-element")
const sceneTitleDiv = document.querySelector(".title")

const sm = new SceneManager(new SimpleConstrainScene(ctx), {
    "Simple Constrain": new SimpleConstrainScene(ctx),
    "Chain Of Constrains": new Scene(ctx)
})

scenes.forEach(scene => {
    scene.onclick = () => {
        let sceneTitle = scene.innerText

        sceneTitleDiv.innerHTML = sceneTitle
        sm.changeScene(sceneTitle)
    }
})

function draw() {
    sm.playScene()
}

function loop() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT)
    draw() 
}

setInterval(loop, 1000 / FPS)
