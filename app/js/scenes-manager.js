define(["require", "exports", 'vendor/three'], function (require, exports) {
    var ScenesManager = (function () {
        function ScenesManager(game) {
            this.game = game;
            this.scenes = {};
        }
        ScenesManager.prototype.add = function (name, scene) {
            this.scenes[name] = scene;
        };
        ScenesManager.prototype.setCurrentScene = function (name) {
            this.currentScene = this.scenes[name];
        };
        return ScenesManager;
    })();
    exports.ScenesManager = ScenesManager;
});
//# sourceMappingURL=scenes-manager.js.map