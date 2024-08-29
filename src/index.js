import { WIDTH, HEIGHT, FPS } from "./config.js"

import SceneManager from "./scene/SceneManager.js"
import SimpleConstrainScene from "./scene/SimpleConstrainScene.js"
import ChainOfConstrainsScene from "./scene/ChainOfConstrainsScene.js"
import WormScene from "./scene/WormScene.js"

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const scenesList = document.querySelectorAll(".list-element")
const sceneTitleDiv = document.querySelector(".title")

const scenes = {
    "Simple Constrain": new SimpleConstrainScene(ctx),
    "Chain Of Constrains": new ChainOfConstrainsScene(ctx),
    "Worm": new WormScene(ctx)
}

const sm = new SceneManager(scenes["Worm"], scenes)

scenesList.forEach(scene => {
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
