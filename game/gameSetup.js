var config = {
    type: Phaser.Auto,
    width: 720,
    height: 600,
    scene:{
        preload:preload,
        create:create,
        updated:updated
    }
}

var game = new Phaser.Game(config);

function preload(){
    this.load.image('dungeon', '../assets/dungeon.png');
    this.load.spritesheet('char', '../assets/sprites.png', {frameWidth:32, frameHeight:48});
}

function create(){
    this.add.image(360,300,'dungeon').setScale(1.1)


}

function updated(){

}