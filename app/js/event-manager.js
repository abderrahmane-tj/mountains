define(["require", "exports"], function (require, exports) {
    var EventManager = (function () {
        function EventManager(renderManager) {
            var _this = this;
            this.renderManager = renderManager;
            this.downKeys = {};
            //let canvasID = renderManager.canvas.id;
            document.addEventListener('keyup', function (event) { return _this.keyup(event); }, false);
            document.addEventListener('keydown', function (event) { return _this.keydown(event); }, false);
        }
        EventManager.prototype.isDown = function (key) {
            return this.downKeys[key] !== undefined && this.downKeys[key] == true;
        };
        EventManager.prototype.setKey = function (key, value) {
            this.downKeys[key] = value;
        };
        EventManager.prototype.keyup = function (event) {
            event.preventDefault();
            var key = event.keyCode;
            if (this.isDown(key)) {
                this.setKey(key, false);
            }
        };
        EventManager.prototype.keydown = function (event) {
            event.preventDefault();
            var key = event.keyCode;
            if (!this.isDown(key)) {
                this.setKey(key, true);
            }
        };
        return EventManager;
    })();
    exports.EventManager = EventManager;
});
//# sourceMappingURL=event-manager.js.map