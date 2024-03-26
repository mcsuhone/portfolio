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
  const t = document.body.getBoundingClientRect().top
  camera.position.z = t * -0.01
  camera.position.x = t * -0.0002
  camera.position.y = 10 + t * -0.0002
  camera.rotation.x = -0.2

  const canvas = document.querySelector('#bg')

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  window.addEventListener("resize", event => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  })

  return {
    scene: scene,
    camera: camera,
    renderer: renderer
  }
}