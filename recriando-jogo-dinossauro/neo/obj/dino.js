class Dino {
    constructor(x, y, sprite) {
        this.x = x;
        this.y = y;
        this.jumpHeight = 200;
        this.isJumping = false;
        this.grav = 6.65;
        this.vsp = 0;
        this.spr = sprite;
    }
    create() {
        //Create element and appends to screen
        this.el = document.createElement("div");
        this.el.style.bottom = `${this.y}px`;
        this.el.style.left = `${this.x}px`;
        this.el.classList.add("dino")
        this.el.style.backgroundImage = `url(assets/${this.spr})`;
        this.el.innerHTML = "<span class='collider'/>";
        screen.appendChild(this.el);

        document.addEventListener("keypress", e => {
            if(this.isJumping == false) {
                this.isJumping = true;
                this.pressed = (e.keyCode === 32)
            }
        });
        document.addEventListener("keyup", e => this.pressed = false);
    }
    update() {
        //verifica se ha colisão com o cacto
            // -> se sim retorna game.gameOver()
        //verifica se ta no ar
            //se sim aplica grav
        //se o botao for pressionado
        //e tiver colidindo com o chao
            //pula
    }
}

function makeDino(x, y, sprite) {
    x = (x > WIDTH) ? WIDTH : (x < 0) ? 0 : x;
    y = (y > HEIGHT) ? HEIGHT : (y < 0) ? 0 : y;
    return new Dino(x, y, sprite);
}