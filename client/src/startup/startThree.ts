import * as THREE from 'three'
import { IThree } from '../types'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import { theme } from '../theme'

export const startThree = ({scene, camera, renderer}: IThree) => {
  // Add background
  // scene.background = new THREE.Color(theme.colors.sky)
  
  // Add plane
  let geometry = new THREE.PlaneGeometry(30, 1000)
  let material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
  })
  const plane = new THREE.Mesh(geometry, material)
  plane.rotation.x = Math.PI / 2;
  scene.add(plane)

  // Add box
  geometry = new THREE.BoxGeometry( 5, 5, 5 ); 
  material = new THREE.MeshStandardMaterial( {color: theme.colors.light} ); 
  const cube = new THREE.Mesh( geometry, material );
  cube.position.y = 10
  cube.position.z = -3
  scene.add( cube );

  // Add light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)

  // Add helpers
  const gridHelper = new THREE.GridHelper(200, 50)
  scene.add( gridHelper)

  const addStar = () => {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24)
    const material = new  THREE.MeshStandardMaterial({ color: 0xfffff })
    const star = new THREE.Mesh(geometry, material)

    const [x, y, z] = Array(3).fill(0).map(() => THREE.MathUtils.randFloatSpread(100))
    star.position.set(x, y, z)
    scene.add(star)
  }

  Array(200).fill(0).forEach(addStar)

  // const controls = new OrbitControls(camera, renderer.domElement)

  const animate = () => {
    requestAnimationFrame(animate)

    // controls.update()
  
    renderer.render(scene, camera)
  }

  animate()
}