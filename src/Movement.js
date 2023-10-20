class Movement extends Phaser.Scene {
    constructor() {
        super('movementScene')
    }

    preload() {
        this.load.spritesheet('character', './assets/spritesheets/Character_002.png', {
            frameWidth: 48,
            frameHeight: 48
        })
    }

    create() {
        this.cameras.main.setBackgroundColor(0xDDDDDD)

        this.player = this.add.sprite(width / 2, height / 2, 'character', 1).setScale(2)
        this.PLAYER_VELOCITY = 5

        cursors = this.input.keyboard.createCursorKeys()
    }

    update() {

    }
}