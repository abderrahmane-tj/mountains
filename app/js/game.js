define(["require", "exports", 'render-manager', 'scenes-manager', 'event-manager', 'mountain', 'plains', 'vendor/three'], function (require, exports, render_manager_1, scenes_manager_1, event_manager_1, mountain_1, plains_1) {
    var Game = (function () {
        function Game() {
            this.renderManager = new render_manager_1.RenderManager(this, 'canvas');
            this.scenes = new scenes_manager_1.ScenesManager(this);
            this.events = new event_manager_1.EventManager(this);
            this.boot();
        }
        Game.prototype.boot = function () {
            var mountain = new mountain_1.Mountain(this);
            var plains = new plains_1.Plains(this);
            this.scenes.add('mountain', mountain);
            this.scenes.add('plains', plains);
            this.renderManager.start('plains');
        };
        return Game;
    })();
    exports.Game = Game;
    exports["default"] = new Game();
});
//# sourceMappingURL=game.js.map