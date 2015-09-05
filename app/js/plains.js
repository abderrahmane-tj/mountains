var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'scene', 'constants', 'vendor/three'], function (require, exports, scene_1, constants_1) {
    var Plains = (function (_super) {
        __extends(Plains, _super);
        function Plains(game) {
            _super.call(this);
            this.game = game;
            this.name = "planes";
            this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
            var planeGeometry = new THREE.PlaneGeometry(200, 200);
            var planeMaterial = new THREE.MeshPhongMaterial({
                emissive: 0x7bcb41
            });
            this.model = new THREE.Mesh(planeGeometry, planeMaterial);
            this.add(this.model);
            this.camera.position.z = 500;
        }
        Plains.prototype.update = function (e, delta) {
            var rSpeed = Math.PI / 5;
            var tSpeed = 1000;
            //this.model.rotation.x += delta * rSpeed;
            //this.model.rotation.y += delta * rSpeed;
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
        Plains.prototype.keyup = function (eventManager, delta) {
            var event = eventManager.event;
            if (event.keyCode === constants_1.KeyCodes.SPACE) {
                this.game.scenes.setCurrentScene('mountain');
            }
        };
        return Plains;
    })(scene_1.Scene);
    exports.Plains = Plains;
});
//# sourceMappingURL=plains.js.map