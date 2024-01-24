import * as THREE from 'three'
import Experience from './Experience.js'
import { OrbitControls } from '../jsm/controls/OrbitControls.js'
import EventEmitter from './Utils/EventEmitter.js';

export default class Camera extends EventEmitter
{
    constructor()
    {

        super();
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.time = this.experience.time;
        this.viewListener = this.experience.viewListener;
        this.cursor = {};
        this.cursor.x = 0
        this.cursor.y = 0

        this.raycaster = new THREE.Raycaster();
        this.pointer = new THREE.Vector2(); 
        
        this.target = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1, 1, 1),
            new THREE.MeshBasicMaterial()
        )
        this.spherical = new THREE.Spherical();
        this.rotationMatrix = new THREE.Matrix4();
        this.targetQuaternion = new THREE.Quaternion();
        this.speed = 2;


        // Used to signal whether the user is on the home'page' or not

        this.setInstance();
        this.listenToPageChange();
        this.trackMousePos();
    }

    
    trackMousePos() {
        this.dummy = new THREE.Mesh(
            new THREE.PlaneGeometry(200, 200),
            new THREE.MeshBasicMaterial({color: 'red'})
        )

        // this.scene.add(this.dummy);
        
        document.addEventListener('pointermove', (e) => {
            this.pointer.x = (e.clientX / window.innerWidth) * 2 - 1
            this.pointer.y = -((e.clientY / window.innerHeight) * 2 - 1)

            this.raycaster.setFromCamera(this.pointer, this.instance)
            let intersects = this.raycaster.intersectObject(this.dummy)
            if(intersects.length > 0) {
                
                let {x, y} = intersects[0].point
                // this.dummy.position.set(this.target.position.x, this.target.position.y, this.target.position.z)
                // this.dummy.lookAt(this.instance.position, this.dummy.position, this.dummy.up)

                this.target.position.set(x * 0.1, y * 0.1, 0)
                this.rotationMatrix.lookAt( this.instance.position, this.target.position, this.instance.up );
                this.targetQuaternion.setFromRotationMatrix( this.rotationMatrix );
            }
        })
    }
    
    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(55, this.sizes.width / this.sizes.height, 0.1, 4000);
        this.instance.position.set(0, 0, 1000);
        this.scene.add(this.instance);
        
        
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

    generateTarget(x, y, z) {
        // Set position 
        this.target.position.set(x, y, z);
        // this.dummy.position.set(this.target.position.x, this.target.position.y, this.target.position.z)
        // this.dummy.lookAt(this.instance.position, this.dummy.position, this.dummy.up)

        // compute target rotation
        this.rotationMatrix.lookAt( this.instance.position, this.target.position, this.instance.up );
        this.targetQuaternion.setFromRotationMatrix( this.rotationMatrix );
    }

    listenToPageChange() {
        this.viewListener.on('cameraLookRight', () => {
            this.generateTarget(30, -30, 30);
        })

        this.viewListener.on('cameraLookForward', () => {
            this.generateTarget(0, 0, 0);
        })
        
    }


    update()
    {
        var deltaTime = this.time.delta;
        
        if(!this.instance.quaternion.equals(this.targetQuaternion)) {
            var step = this.speed * deltaTime * 0.001;
            this.instance.quaternion.slerp(this.targetQuaternion, step)
        }
    }
}