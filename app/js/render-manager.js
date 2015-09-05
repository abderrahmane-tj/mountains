define(["require", "exports", 'vendor/three'], function (require, exports) {
    var RenderManager = (function () {
        function RenderManager(game, canvasID) {
            if (canvasID === void 0) { canvasID = 'canvas'; }
            this.game = game;
            this.clock = new THREE.Clock();
            this.renderer = new THREE.WebGLRenderer({ antialias: true });
            ////this.renderer.setClearColor(0xffffff,0);
            this.canvas = document.getElementById(canvasID);
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.canvas.appendChild(this.renderer.domElement);
        }
        RenderManager.prototype.start = function (name) {
            this.game.scenes.setCurrentScene(name);
            this.clock.start();
            this.render();
        };
        RenderManager.prototype.render = function () {
            var _this = this;
            var game = this.game;
            var currentScene = game.scenes.currentScene;
            if (currentScene.update) {
                currentScene.update(game.events, this.clock.getDelta());
            }
            this.renderer.render(game.scenes.currentScene, game.scenes.currentScene.camera);
            requestAnimationFrame(function () { return _this.render(); });
        };
        return RenderManager;
    })();
    exports.RenderManager = RenderManager;
});
//# sourceMappingURL=render-manager.js.map