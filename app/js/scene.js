///<reference path="typings/threejs/three.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "vendor/three"], function (require, exports) {
    // I am not sure this is the right way to do this.
    // TODO: learn more about polymorphism in TS
    var Scene = (function (_super) {
        __extends(Scene, _super);
        function Scene() {
            _super.apply(this, arguments);
        }
        Scene.prototype.update = function (events, delta) {
        };
        return Scene;
    })(THREE.Scene);
    exports.Scene = Scene;
});
//# sourceMappingURL=scene.js.map