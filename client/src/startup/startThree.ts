import * as THREE from 'three'
import { IThree } from '../types'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

export const startThree = ({scene, camera, renderer}: IThree) => {
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
  material = new THREE.MeshStandardMaterial( {color: 0x00ff00} ); 
  const cube = new THREE.Mesh( geometry, material );
  cube.position.y = 2.5
  scene.add( cube );

  // Add light
  const pointLight = new THREE.PointLight(0xffffff, 200)
  pointLight.position.set(0, 10, 0)
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.05)
  scene.add(ambientLight, pointLight)

  // Add helpers
  const lightHelper = new THREE.PointLightHelper(pointLight)
  const gridHelper = new THREE.GridHelper(200, 50)
  scene.add(lightHelper, gridHelper)

  const addStar = () => {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24)
    const material = new  THREE.MeshStandardMaterial({ color: 0xfffff })
    const star = new THREE.Mesh(geometry, material)

    const [x, y, z] = Array(3).fill(0).map(() => THREE.MathUtils.randFloatSpread(100))
    star.position.set(x, y, z)
    scene.add(star)
  }

  Array(200).fill(0).forEach(addStar)

  // Add skybox
  const loader = new THREE.TextureLoader();
  scene.background = loader.load('../assets/andro.jpg')

  // const controls = new OrbitControls(camera, renderer.domElement)

  const animate = () => {
    requestAnimationFrame(animate)

    // controls.update()
  
    renderer.render(scene, camera)
  }

  animate()
}