function Torpedo(args) {
    this.container = args.container || document.getElementById('gameboard');
    this.x = args.x;
    this.y = args.y;

    this._torpedo = document.createElement('div');
    this._torpedo.id = new Date().getTime();
    this._torpedo.className = "torpedo";
    // eventually the placement on the page will happen when 'launched'
    this.container.appendChild(this._torpedo);

    this._torpedo.style.top = this.y + "px";
    this._torpedo.style.left = this.x + "px";
}

Torpedo.prototype.launch = function(e) {
    //console.log("launching torpedo: " + "(" + this.x + "," + this.y + ")");
    
}

Torpedo.prototype.detonate = function() {
    this.container.removeChild(this._torpedo);
}

