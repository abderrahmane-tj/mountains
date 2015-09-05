define(["require", "exports"], function (require, exports) {
    var EventManager = (function () {
        function EventManager(game) {
            var _this = this;
            this.game = game;
            this.downKeys = {};
            document.addEventListener('keyup', function (event) { return _this.keyup(event); }, false);
            document.addEventListener('keydown', function (event) { return _this.keydown(event); }, false);
            window.addEventListener('resize', function () { return _this.onWindowResize(); }, false);
        }
        EventManager.prototype.isDown = function (key) {
            return this.downKeys[key] !== undefined && this.downKeys[key] == true;
        };
        EventManager.prototype.setKey = function (key, value) {
            this.downKeys[key] = value;
        };
        EventManager.prototype.keyup = function (event) {
            event.preventDefault();
            this.event = event;
            var key = event.keyCode;
            if (this.isDown(key)) {
                this.setKey(key, false);
            }
            this.game.scenes.currentScene.keyup(this, this.game.renderManager.clock.getDelta());
        };
        EventManager.prototype.keydown = function (event) {
            event.preventDefault();
            this.event = event;
            var key = event.keyCode;
            if (!this.isDown(key)) {
                this.setKey(key, true);
            }
            this.game.scenes.currentScene.keydown(this, this.game.renderManager.clock.getDelta());
        };
        EventManager.prototype.onWindowResize = function () {
            var currentScene = this.game.scenes.currentScene;
            if (currentScene !== null) {
                currentScene.camera.aspect = window.innerWidth / window.innerHeight;
                currentScene.camera.updateProjectionMatrix();
                this.game.renderManager.renderer.setSize(window.innerWidth, window.innerHeight);
            }
        };
        return EventManager;
    })();
    exports.EventManager = EventManager;
});
//# sourceMappingURL=event-manager.js.map