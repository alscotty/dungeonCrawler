var config = {
    type: Phaser.Auto,
    width: 720,
    height: 600,
    physics:{
        default: 'arcade'
    },
    scene:{
        preload:preload,
        create:create,
        update:update
    }
}

var player;
var cursors;

var game = new Phaser.Game(config);

function preload(){
    this.load.image('dungeon', '../assets/dungeon.png');
    this.load.spritesheet('player', '../assets/sprites.png', {frameWidth:64, frameHeight:66});
}


function create(){
    this.add.image(360,300,'dungeon').setScale(1.1);

    player = this.physics.add.sprite(100,450,'player');
    player.setCollideWorldBounds(true);

    this.anims.create({
        key:'spread',
        frames: this.anims.generateFrameNumbers('player', {start:11, end: 19}),
        frameRate: 10,
        // repeat: -1
    });
    this.anims.create({
        key:'up',
        frames: this.anims.generateFrameNumbers('player', { start: 52, end: 59 }),
        frameRate: 10,
        repeat: -1
    })

    cursors = this.input.keyboard.createCursorKeys();
}

function update(){
    if (cursors.space.isDown) {
        player.anims.play('spread',true)
    } else if(cursors.up.isDown) {
        player.anims.play('up', true);
        player.setVelocityY(-100)
    } else {
        player.setVelocityX(0);
        player.setVelocityY(0);
    }
}