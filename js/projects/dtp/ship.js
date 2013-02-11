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

    this.angle = 0;

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

        //console.log("angle:" + self.angle);
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

    if (this.angle != 0) {
        var oldLeft = parseInt(this.node.style.left);
        var newLeft = (oldLeft + (360 - this.angle) / this.MOVE_SIZE ) + "px";
        console.log(newLeft);
        this.node.style.left = newLeft;
    }
}

Ship.prototype.moveBackward = function(event) {
    var topPosition = this.node.style.top;
    var newPos = parseInt(topPosition) + this.MOVE_SIZE;
    this.node.style.top = newPos + "px";
}

Ship.prototype.moveLeft = function(event) {
    var self = this;
    var rotateLeft = function(node) {
        var oldVal = node.style.webkitTransform.replace('rotate(','').replace('deg)','') || 0;
        self.angle  = parseInt(oldVal) + -self.TURN_SIZE;
        node.style.webkitTransform = 'rotate(' + self.angle + 'deg)';
    };

    rotateLeft(this.node);
}

Ship.prototype.moveRight = function(event) {
    var self = this;
    var rotateRight = function(node) {
        // this is hideous
        var oldVal = node.style.webkitTransform.replace('rotate(','').replace('deg)','') || 0;
        self.angle  = parseInt(oldVal) + self.TURN_SIZE;
        node.style.webkitTransform = 'rotate(' + self.angle + 'deg)';
    };

    rotateRight(this.node);
}
