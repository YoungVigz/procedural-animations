import { WIDTH, HEIGHT, FPS } from "./config.js"
import SceneManager from "./scene/SceneManager.js"
import SimpleConstrainScene from "./scene/SimpleConstrainScene.js"

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const sm = new SceneManager(new SimpleConstrainScene(ctx))

function draw() {
    sm.playScene()
}

function loop() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT)
    draw() 
}

setInterval(loop, 1000 / FPS)
