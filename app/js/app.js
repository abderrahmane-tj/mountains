define(["require", "exports", 'render-manager', 'mountain', 'vendor/three'], function (require, exports, render_manager_1, mountain_1) {
    var App = (function () {
        function App() {
            var renderManager = this.renderManager = new render_manager_1.RenderManager('canvas');
            var mountain = new mountain_1.Mountain();
            renderManager.scenes.add('mountain', mountain);
            renderManager.start('mountain');
        }
        return App;
    })();
    exports.App = App;
    exports["default"] = new App();
});
//# sourceMappingURL=app.js.map