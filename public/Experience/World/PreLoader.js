import * as THREE from 'three'
import Experience from "../Experience.js";
import { TextGeometry } from "../../jsm/geometries/TextGeometry.js"
import { FontLoader } from "../../jsm/loaders/FontLoader.js"

export default class PreLoader {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.renderer = this.experience.renderer;
        this.resources = this.experience.resources;
        this.camera = this.experience.camera;
        this.camera.instance.position.set(0, 5, 40)

        // this.setScene()
    }

    setScene() {

        // Evnironment
        // const environmentMap = this.resources.items['skyMap']
        // environmentMap.colorSpace = THREE.SRGBColorSpace
        
        // this.scene.background = environmentMap
        // this.scene.environment = environmentMap

        //Camera

        //Lighting
        this.pointLight = new THREE.PointLight('white', 100.0);
        this.pointLight.position.set(10, 8, 3);
        this.scene.add(this.pointLight);

        var ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
        this.scene.add(ambientLight);

        // Textures
        this.rockMaterial = new THREE.MeshPhysicalMaterial();
        // this.rockMaterial.map = this.resources.items['rockTextureMap'];
        // this.rockMaterial.normalMap = this.resources.items['rockNormalMap'];
        // this.rockMaterial.aoMap = this.resources.items['rockAmbientOcclusionMap'];
        // this.rockMaterial.displacementMap = this.resources.items['rockDisplacementMap'];
        // this.rockMaterial.roughnessMap = this.resources.items['rockRoughnessMap'];
        this.rockMaterial.metalness = 0;
        this.rockMaterial.roughness = 0;
        this.rockMaterial.transmission = 1;
        this.rockMaterial.ior = 1.5;
        this.rockMaterial.thickness = 0.5;

        this.rock = new THREE.Mesh(
            new THREE.BoxGeometry(5, 5, 5),
            this.rockMaterial
        )
        this.rock.position.set(5, 5, 0);
        this.scene.add(this.rock);


        var fontLoader = new FontLoader();

        fontLoader.load(
            '/static/fonts/helvetiker_regular.typeface.json',
            (font) =>
            {
                // Material
                const material = new THREE.MeshStandardMaterial()
        
                // Text
                const textGeometry = new TextGeometry(
                    'Welcome',
                    {
                        font: font,
                        size: 5,
                        height: 2.0,
                        curveSegments: 24,
                        bevelEnabled: true,
                        bevelThickness: 0.03,
                        bevelSize: 0.02,
                        bevelOffset: 0,
                        bevelSegments: 5
                    }
                )
                textGeometry.center();
        
                this.text = new THREE.Mesh(textGeometry, material);
                this.text.rotation.set(0, (Math.PI / 4), 0);
                this.text.position.set(-5, 3, 0);
                this.scene.add(this.text);
            })

        // Floor
        this.floorGeometry = new THREE.PlaneGeometry(100, 100, 200, 200);
        this.floorMaterial = new THREE.MeshPhysicalMaterial();

        // this.floorMaterial.map = this.resources.items['marbleTextureMap'];
        // this.floorMaterial.normalMap = this.resources.items['marbleNormalMap'];
        // this.floorMaterial.displacementMap = this.resources.items['marbleDisplacementMap'];
        // this.floorMaterial.roughnessMap = this.resources.items['marbleRoughnessMap'];
        this.floorMaterial.roughness = 0;
        this.floorMaterial.transmission = 1.0;
        this.floorMaterial.ior = 1.3;
        this.floorMaterial.thickness = 0.8;

        this.floor = new THREE.Mesh(
            this.floorGeometry,
            this.floorMaterial
        )

        this.floor.position.set(0, 0, 0);
        this.floor.rotation.set(-Math.PI / 2, 0, 0);

        this.scene.add(this.floor);

    }

    update() {
        this.renderer.instance.render(this.scene, this.camera.instance);
    }

    destroy() {
        this.scene.traverse((child) => {
            if(child instanceof THREE.Mesh) {
                child.geometry.dispose();

                for(const key in child.material) {
                    const value = child.material[key];

                    if(value && typeof value.dispose === 'function') {
                        value.dispose();
                    }
                }
            }
        })

        this.scene.background = null;
        this.scene.environment = null;
        this.scene.remove(this.floor);
        this.scene.remove(this.text);
        this.scene.remove(this.sphere);
        this.scene.remove(this.pointLight);
    }
}