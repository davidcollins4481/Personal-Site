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
    this.DETONATE_KEY_CODE = 68; //'d'
    this.MOVE_SIZE = 10;
    this.TURN_SIZE = 10;

    this.soundFx = false;

    this.debug = true;

    this.firedMunitions = [];

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
        } else if (e.keyCode == self.DETONATE_KEY_CODE) {
            self.detonateLaunched();
        }

        if (this.debug)
            console.log("angle:" + self.angle);
    });
}

Ship.prototype.fire = function(e) {
    e.preventDefault();
    if (this.soundFx) {
        var soundEffect = new Audio("/audio/pew.wav")
        soundEffect.play()
    }

    var currentX = this.node.offsetLeft;
    var currentY = this.node.offsetTop;
    // http://stackoverflow.com/questions/839899/how-do-i-calculate-a-point-on-a-circles-circumference

    var originX = currentX;
    var originY = currentY;
    var radius = 25;
    var x = radius * Math.cos(this.angle * Math.PI / 180) + originX;
    var y = radius * Math.sin(this.angle * Math.PI / 180) + originY;

    if (this.debug) {
        console.log("###########");
        console.log("New coords: " + "(" + x + "," + y + ")");
        console.log("Angle: " + this.angle);
        console.log("###########");
    }

    var t = new Torpedo({
        x: x,
        y: y,
        angle: this.angle
    });

    this.firedMunitions.push(t);
    t.launch();
}

Ship.prototype.detonateLaunched = function() {
    if (this.debug)
        console.log(this.firedMunitions);

    this.firedMunitions.forEach(function(m) {
        m.detonate();
    });

    this.firedMunitions = [];
}

Ship.prototype._getXYChange = function() {
    var radians = (Math.PI / 180) * (this.angle - 90);

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
