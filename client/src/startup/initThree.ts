import * as THREE from 'three'
import { IThree } from '../types'

export const initThree = (): IThree => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.y = 10
  camera.rotation.x = -0.2
  const canvas = document.querySelector('#bg')

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.position.setZ(30)
  return {
    scene: scene,
    camera: camera,
    renderer: renderer
  }
}