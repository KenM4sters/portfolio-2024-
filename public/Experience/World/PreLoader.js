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
        this.camera.instance.position.set(0, 5, 40)

        this.setScene()
    }

    setScene() {

        //Camera

        //Lighting
        var pointLight = new THREE.PointLight('white', 50.0);
        pointLight.position.set(5, 5, 5);
        this.scene.add(pointLight);

        var textureLoader = new THREE.TextureLoader();
        const rockTexture = textureLoader.load('/static/textures/rock/Rock020_1K_Color.jpg');
        const rockRoughnessTexture = textureLoader.load('/static/textures/rock/Rock020_1K_Displacement.jpg')

        var fontLoader = new FontLoader();

        fontLoader.load(
            '/static/fonts/helvetiker_regular.typeface.json',
            (font) =>
            {
                // Material
                const material = new THREE.MeshStandardMaterial({map: rockTexture })
        
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
                this.text.position.set(-5, 3, 0);
                this.text.rotation.set(0, (10 * (20/Math.PI)), 0);
                this.scene.add(this.text);
            })



    }

    update() {
        this.renderer.instance.render(this.scene, this.camera.instance);
    }

    destroy() {
        this.scene.remove(this.text);
        this.text.geometry.dispose();
        this.text.material.dispose();
    }
}