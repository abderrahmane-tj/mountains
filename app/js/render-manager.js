define(["require", "exports", 'scenes-manager', 'event-manager', 'vendor/three'], function (require, exports, scenes_manager_1, event_manager_1) {
    var RenderManager = (function () {
        function RenderManager(canvasID) {
            var _this = this;
            if (canvasID === void 0) { canvasID = 'canvas'; }
            this.clock = new THREE.Clock();
            this.scenes = new scenes_manager_1.ScenesManager();
            this.events = new event_manager_1.EventManager(this);
            this.renderer = new THREE.WebGLRenderer({ antialias: true });
            ////this.renderer.setClearColor(0xffffff,0);
            this.canvas = document.getElementById(canvasID);
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.canvas.appendChild(this.renderer.domElement);
            window.addEventListener('resize', function () { return _this.onWindowResize(); }, false);
        }
        RenderManager.prototype.start = function (name) {
            this.scenes.setCurrentScene(name);
            this.clock.start();
            this.render();
        };
        RenderManager.prototype.render = function () {
            var _this = this;
            var currentScene = this.scenes.currentScene;
            if (currentScene.update) {
                currentScene.update(this.events, this.clock.getDelta());
            }
            this.renderer.render(this.scenes.currentScene, this.scenes.currentScene.camera);
            requestAnimationFrame(function () { return _this.render(); });
        };
        RenderManager.prototype.onWindowResize = function () {
            var currentScene = this.scenes.currentScene;
            if (currentScene !== null) {
                currentScene.camera.aspect = window.innerWidth / window.innerHeight;
                currentScene.camera.updateProjectionMatrix();
                this.renderer.setSize(window.innerWidth, window.innerHeight);
            }
        };
        return RenderManager;
    })();
    exports.RenderManager = RenderManager;
});
//# sourceMappingURL=render-manager.js.map