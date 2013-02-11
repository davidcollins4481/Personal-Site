function Ship(args) {
    this.node = args.node;

    if (args.top) {
        this.node.style.top  = args.top + "px";
    } else {
        this.node.style.top  = "0px";
    }

    if (args.left) {
        this.node.style.left  = args.left + "px";
    } else {
        this.node.style.left  = "0px";
    }

    /* CONSTANTS - currently arrow keys */
    this.FORWARD_KEY_CODE = 38;
    this.BACKWARD_KEY_CODE = 40;
    this.LEFT_KEY_CODE = 37;
    this.RIGHT_KEY_CODE = 39;

    this.FIRE_KEY_CODE = 32;
    this.MOVE_SIZE = 10;
    this.TURN_SIZE = 10;
    if (args.shipImage) {
        this.shipImage = args.shipImage;
    }

    // attach event listeners
    var self = this;
    window.addEventListener("keydown", function(e) {
        if (e.keyCode == self.FORWARD_KEY_CODE) {
            self.moveForward(e);
        } else if (e.keyCode == self.BACKWARD_KEY_CODE) {
            self.moveBackward(e);
        } else if (e.keyCode == self.LEFT_KEY_CODE) {
            self.moveLeft(e);
        } else if (e.keyCode == self.RIGHT_KEY_CODE) {
            self.moveRight(e);
        } else if (e.keyCode == self.FIRE_KEY_CODE) {
            self.fire(e);
        }
    });
}

Ship.prototype.fire = function(e) {
    e.preventDefault();
    console.log('pew pew pew');
}


Ship.prototype.moveForward = function(event) {
    var topPosition = this.node.style.top;
    var newPos = parseInt(topPosition) - this.MOVE_SIZE;
    this.node.style.top = newPos + "px";
}

Ship.prototype.moveBackward = function(event) {
    var topPosition = this.node.style.top;
    var newPos = parseInt(topPosition) + this.MOVE_SIZE;
    this.node.style.top = newPos + "px";
}

Ship.prototype.moveLeft = function(event) {
    var self = this;
    var rotateLeft = function(node) {
        var oldVal = node.style.webkitTransform;
        var newMove = 'rotate(-' + self.TURN_SIZE + 'deg)';
        node.style.webkitTransform = oldVal + newMove;
    };

    rotateLeft(this.node);
}

Ship.prototype.moveRight = function(event) {
    var self = this;
    var rotateRight = function(node) {
        var oldVal = node.style.webkitTransform;
        var newMove = 'rotate(' + self.TURN_SIZE + 'deg)';
        node.style.webkitTransform = oldVal + newMove;
    };

    rotateRight(this.node);
}
