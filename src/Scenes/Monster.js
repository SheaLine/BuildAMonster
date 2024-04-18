class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        //arms
        this.RarmX = 380;
        this.RarmY = 370;
        this.LarmX = 215;
        this.LarmY = 370;

        //legs
        this.RlegX = 365
        this.RlegY = 450;
        this.LlegX = 235
        this.LlegY = 450;

        //eye
        this.eyeX = 300;
        this.eyeY = 300;
        this.eyeBagX = 300;
        this.eyeBagY = 260;

        //mouth
        this.mouthX = 300;
        this.mouthY = 430;

        //antena
        this.detailX = 310;
        this.detailY = 210;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
       
        my.sprite.Rarm = this.add.sprite(this.RarmX, this.RarmY, "monsterParts", "arm_blueA.png");
        my.sprite.Larm = this.add.sprite(this.LarmX, this.LarmY, "monsterParts", "arm_blueA.png");
        my.sprite.Larm.flipX = true;
        my.sprite.Rleg = this.add.sprite(this.RlegX, this.RlegY, "monsterParts", "leg_blueE.png");
        my.sprite.Lleg = this.add.sprite(this.LlegX, this.LlegY, "monsterParts", "leg_blueE.png");
        my.sprite.Lleg.flipX = true;
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redE.png");
        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_human_green.png");
        my.sprite.detail = this.add.sprite(this.detailX, this.detailY, "monsterParts", "detail_green_antenna_small.png");
        my.sprite.eyeBag = this.add.sprite(this.eyeBagX, this.eyeBagY, "monsterParts", "mouth_closed_sad.png");
        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthA.png");
        my.sprite.smile = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_happy.png");
        my.sprite.fangs = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.smile.visible = false;
        my.sprite.fangs.visible = false;

        //keys
        my.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        my.fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        my.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        my.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        
        // 
        if (my.sKey.isDown){
            my.sprite.mouth.visible = false;
            my.sprite.smile.visible = true;
            my.sprite.fangs.visible = false
        }
        if(my.fKey.isDown){
            my.sprite.mouth.visible = false;
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = true
        } 
        if(!my.fKey.isDown && !my.sKey.isDown){
            my.sprite.mouth.visible = true;
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = false;
        }

        if(my.aKey.isDown){
            for (let key in this.my.sprite) {
                this.my.sprite[key].x += -5;
            }
        }
        if(my.dKey.isDown){
            for (let key in this.my.sprite) {
                this.my.sprite[key].x += 5;
            }
        }
    }

}