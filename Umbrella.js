class Umbrella {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.r = 300;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("walking_1.png"); 
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        imageMode(RADIUS);
        image(this.image,0,0,this.r,this.r);
        pop();
    }

};