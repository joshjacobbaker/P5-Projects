function DNA(genes) {
    this.genes = [];
    var maxForce = 0.2;

    if(genes) {
        this.genes = genes;
    } else {
        for (var i = 0; i < lifespan; i++) {
            this.genes[i] = p5.Vector.random2D();
            this.genes[i].setMag(maxForce);
        };
    };

    this.crossover = function (partner) {
        var newgenes = [];
        var mid = floor(random(this.genes.length));
        for (var i = 0; i < this.genes.length; i++) {
            if (i > mid) {
                newgenes[i] = this.genes[i];
            } else {
                newgenes[i] = partner.genes[i];
            };
        };
        return new DNA(newgenes);
    };

    this.mutation = function () {
        for (var i = 0; i < this.genes.length; i++) {
            if (random(1) < mutationRate) {
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(maxForce);
                console.log("MUTATION!!");
            };
        };
    };
};