import * as THREE from 'three'
import Experience from './Experience.js'
import { OrbitControls } from '../jsm/controls/OrbitControls.js'

export default class Camera
{
    constructor()
    {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.time = this.experience.time;
        this.cursor = {};
        this.cursor.x = 0
        this.cursor.y = 0

        this.raycaster = new THREE.Raycaster();
        this.pointer = new THREE.Vector2();

        this.setInstance();
        this.setMeshToTrack();
        this.trackMousePos();
    }

    
    trackMousePos() {
        this.dummy = new THREE.Mesh(
            new THREE.PlaneGeometry(100, 100),
            new THREE.MeshBasicMaterial({color: 'red'})
        )
        
        document.addEventListener('pointermove', (e) => {
            this.pointer.x = (e.clientX / window.innerWidth) * 2 - 1
            this.pointer.y = -((e.clientY / window.innerHeight) * 2 - 1)

            this.raycaster.setFromCamera(this.pointer, this.instance)
            let intersects = this.raycaster.intersectObject(this.dummy)
            if(intersects.length > 0) {
                let {x, y} = intersects[0].point
                this.instance.rotation.set(
                    y * 0.00001 * 180/Math.PI, 
                    -(x * 0.00001 * 180/Math.PI), 
                    0
                );
            }
        })
    }
    
    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(55, this.sizes.width / this.sizes.height, 0.1, 4000);
        this.instance.position.set(0, 0, 1000);
        this.scene.add(this.instance);
        
        
    }

    setMeshToTrack() {
        this.targetMesh = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1),
            new THREE.MeshBasicMaterial()
        );
    }


    setControls()
    {
        // this.controls = new OrbitControls(this.instance, this.canvas)
        // this.controls.enableDamping = true
    }

    resize()
    {
        this.instance.aspect = this.sizes.width / this.sizes.height;
        this.instance.updateProjectionMatrix();
    }

    update()
    {
        var elapsedTime = this.time.elapsed;
        
        // if(!this.instance.quaternion.equals(this.targetQuaternion)) {
        //     var step = this.speed * elapsedTime;
        //     this.instance.quaternion.rotateTowards(this.targetQuaternion, step)
        // }
    }
}