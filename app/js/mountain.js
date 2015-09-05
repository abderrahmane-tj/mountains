var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'scene', 'constants', 'vendor/three'], function (require, exports, scene_1, constants_1) {
    var Mountain = (function (_super) {
        __extends(Mountain, _super);
        function Mountain(game) {
            _super.call(this);
            this.game = game;
            this.name = "mountains";
            this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
            var skyGeometry = new THREE.SphereGeometry(75, 32, 16, 0, 6.28, 0, Math.PI);
            var skyMaterial = new THREE.MeshPhongMaterial({
                shininess: 25,
                color: 0x0a637c,
                emissive: 0x0e8fb6,
                specular: 0xfff791,
                side: THREE.BackSide
            });
            var sky = new THREE.Mesh(skyGeometry, skyMaterial);
            sky.scale.set(100, 100, 100);
            this.add(sky);
            var boxGeometry = new THREE.BoxGeometry(1, 1, 1);
            var knotGeometry = new THREE.TorusKnotGeometry(100, 20, 50, 50);
            var knotMaterial = new THREE.MeshLambertMaterial({
                //color: 0xffefff,
                emissive: 0xccabcc,
                shininess: 30
            });
            this.model = new THREE.Mesh(knotGeometry, knotMaterial);
            this.add(this.model);
            this.camera.position.z = 500;
            var skyLight = new THREE.DirectionalLight(0x5bebff, 0.4);
            skyLight.position.set(0, -525, -75);
            var sunFlairLight = new THREE.DirectionalLight(0xf5f986, 0.18);
            sunFlairLight.position.set(0, -400, 500);
            //let ambientLight = new THREE.AmbientLight( 0x404040 ); // soft white light
            //this.add( ambientLight    );
            this.add(skyLight);
            this.add(sunFlairLight);
            /////////
            // SKY //
            /////////
            // recommend either a skybox or fog effect (can't use both at the same time)
            // without one of these, the scene's background color is determined by webpage background
            // make sure the camera's "far" value is large enough so that it will render the skyBox!
            //let skyBoxGeometry = new THREE.BoxGeometry(10000, 10000, 10000);
            //// BackSide: render faces from inside of the cube, instead of from outside (default).
            //let skyBoxMaterial = new THREE.MeshBasicMaterial({color: 0x9999ff, side: THREE.BackSide});
            //let skyBox = new THREE.Mesh(skyBoxGeometry, skyBoxMaterial);
            //this.add(skyBox);
            // fog must be added to scene before first render
            //this.fog = new THREE.FogExp2( 0x9999ff, 0.00025 );
        }
        Mountain.prototype.update = function (e, delta) {
            var rSpeed = Math.PI / 5;
            var tSpeed = 1000;
            this.model.rotation.x += delta * rSpeed;
            this.model.rotation.y += delta * rSpeed;
            if (e.isDown(constants_1.KeyCodes.W)) {
                this.camera.position.z -= tSpeed * delta;
            }
            if (e.isDown(constants_1.KeyCodes.S)) {
                this.camera.position.z += tSpeed * delta;
            }
            if (e.isDown(constants_1.KeyCodes.D)) {
                this.camera.position.x += tSpeed * delta;
            }
            if (e.isDown(constants_1.KeyCodes.A)) {
                this.camera.position.x -= tSpeed * delta;
            }
        };
        Mountain.prototype.keyup = function (eventManager, delta) {
            var event = eventManager.event;
            if (event.keyCode === constants_1.KeyCodes.SPACE) {
                this.game.scenes.setCurrentScene('plains');
            }
        };
        return Mountain;
    })(scene_1.Scene);
    exports.Mountain = Mountain;
});
//# sourceMappingURL=mountain.js.map