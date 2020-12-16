class Drops {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false
        }
        this.r=5;
        this.body = Bodies.circle(x, y, this.r,options);       
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }
};