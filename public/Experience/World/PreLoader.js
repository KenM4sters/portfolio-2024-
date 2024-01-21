import * as THREE from 'three'
import Experience from "../Experience.js";
import { TextGeometry } from "../../jsm/geometries/TextGeometry.js"
import { FontLoader } from "../../jsm/loaders/FontLoader.js"

export default class PreLoader {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.renderer = this.experience.renderer;
        this.camera = this.experience.camera;

        this.setScene()
    }

    setScene() {

        //Camera

        this.sphere = new THREE.Mesh(
            new THREE.SphereGeometry(5, 32, 32),
            new THREE.MeshBasicMaterial({color: 'red', wireframe: true})
        );

        var textureLoader = new THREE.TextureLoader();
        const matcapTexture = textureLoader.load('/static/textures/matcaps/8.png');

        var fontLoader = new FontLoader();

        fontLoader.load(
            '/static/fonts/helvetiker_regular.typeface.json',
            (font) =>
            {
                // Material
                const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture });
        
                // Text
                const textGeometry = new TextGeometry(
                    'Welcome',
                    {
                        font: font,
                        size: 60,
                        height: 10.0,
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
                this.text.position.set(-10, 2, -5);
                this.text.rotation.set(0, (10 * (180/Math.PI)), 0);
                this.scene.add(this.text);
            })

        this.scene.add(this.sphere);

    }

    update() {
        this.renderer.instance.render(this.scene, this.camera.instance);
    }

    destroy() {
        this.scene.remove(this.sphere);
        this.scene.remove(this.text);
        this.text.geometry.dispose();
        this.text.material.dispose();
        this.sphere.geometry.dispose();
        this.sphere.material.dispose();
    }
}