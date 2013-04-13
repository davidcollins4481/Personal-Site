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

    this.debug = true;

    if (args.shipImage) {
        this.shipImage = args.shipImage;
    }

    // attach event listeners
    var self = this;
    window.addEventListener("keydown", function(e) {
        e.preventDefault();
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

        if (this.debug)
            console.log("angle:" + self.angle);
    });
}

Ship.prototype.fire = function(e) {
    e.preventDefault();
    var soundEffect = new Audio("/audio/pew.wav")
    soundEffect.play()
    var currentX = this.node.offsetLeft;
    var currentY = this.node.offsetTop;

    var t = new Torpedo({
        x: currentX,
        y: currentY
    }).launch();

    if (this.debug)
        console.log(currentX + ', ' + currentY);
}

Ship.prototype._getXYChange = function() {
    var radians = (Math.PI / 180) * (this.angle - 90);

    //x -= this.MOVE_SIZE * Math.cos(radians);
    //y -= this.MOVE_SIZE * Math.sin(radians);

    return { 
        x: this.MOVE_SIZE * Math.cos(radians),
        y: this.MOVE_SIZE * Math.sin(radians) 
    };
}

Ship.prototype.moveForward = function(event) {
    var coords = this._getXYChange();
    var x = parseInt(this.node.style.left);
    var y = parseInt(this.node.style.top); 

    x += coords.x;
    y += coords.y;

    this.node.style.left = Math.ceil(x) + "px";
    this.node.style.top = Math.ceil(y) + "px";

    if (this.debug) 
        console.log(x + ',' + y);
}

/* FIXME - not working at all */
Ship.prototype.moveBackward = function(event) {
    var coords = this._getXYChange();
    var x = parseInt(this.node.style.left);
    var y = parseInt(this.node.style.top); 

    x -= coords.x;
    y -= coords.y;

    this.node.style.left = Math.ceil(x) + "px";
    this.node.style.top = Math.ceil(y) + "px";

    if (this.debug) 
        console.log(x + ',' + y);
}

Ship.prototype.moveLeft = function(event) {
    var self = this;
    var rotateLeft = function(node) {
        var oldVal = node.style.webkitTransform.replace('rotate(','').replace('deg)','') || 0;
        var newAngle = parseInt(oldVal) + -self.TURN_SIZE;
        self.angle  = newAngle <= -360 ? 0 : newAngle;
        node.style.webkitTransform = 'rotate(' + self.angle + 'deg)';
    };

    rotateLeft(this.node);
}

Ship.prototype.moveRight = function(event) {
    var self = this;
    var rotateRight = function(node) {
        // this is hideous
        var oldVal = node.style.webkitTransform.replace('rotate(','').replace('deg)','') || 0;
        var newAngle = parseInt(oldVal) + self.TURN_SIZE;
        self.angle  = newAngle >= 360 ? 0 : newAngle;
        node.style.webkitTransform = 'rotate(' + self.angle + 'deg)';
    };

    rotateRight(this.node);
}
