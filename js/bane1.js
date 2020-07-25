var bane1State = {
    
    create: function() {
        
        this.createWorld(); 
        
      this.player = game.add.sprite(260, 200, 'player');
      this.player.animations.add('right', [13, 14, 15, 16], 8, true);
      this.player.animations.add('left',[9, 10, 11, 12], 8, true);
      this.player.animations.add('down', [1, 2, 3, 4], 8, true)
      this.player.animations.add('up', [5, 6, 7, 8], 8, true);
      this.player.height = 30;
      this.player.width = 28;
      this.player.anchor.setTo(0.5, 0.5);   
    
      this.cursor = game.input.keyboard.createCursorKeys();
        game.physics.arcade.enable(this.player);
    
        

        this.a = game.add.sprite(190, 500, 'a');
        game.physics.arcade.enable(this.a);
        this.a.anchor.setTo(0.5, 0.5);
        this.a.nyx = 290;
        this.a.nyy = 40;
        this.a.placeret = false;
        this.a.body.immovable = true;
        game.add.tween(this.a).to({y:this.a.y+5}, 500).to({y:this.a.y},500).loop().start();
        
        
        this.b = game.add.sprite(545, 365, 'b');
        game.physics.arcade.enable(this.b);
        this.b.anchor.setTo(0.5, 0.5);
        this.b.nyx = 385;
        this.b.nyy = 40;
        this.b.placeret = false;
        this.b.body.immovable = true;
        game.add.tween(this.b).to({y:this.b.y+5}, 500).to({y:this.b.y},500).loop().start();
        
        this.e = game.add.sprite(50, 100, 'e');
        game.physics.arcade.enable(this.e);
        this.e.anchor.setTo(0.5, 0.5);
        this.e.nyx = 480;
        this.e.nyy = 40;
        this.e.placeret = false;
        this.e.body.immovable = true;
        game.add.tween(this.e).to({y:this.e.y+5}, 500).to({y:this.e.y},500).loop().start();
        
        
        
        this.hintButton = game.add.button(740, 76, 'hint', this.hint, this);    
        this.pauseButton = game.add.button(740, 135, 'pause_spritesheet', this.pause, this);
        this.muteButton = game.add.button(740, 194, 'lyd_spritesheet', this.toggleSound, this);
        this.menuButton = game.add.button(740, 525, 'menuKnap', this.menu, this); 
        
        
        this.music = game.add.audio('map1');
        this.music.loop = true;
        this.music.play();
        
        this.music1 = game.add.audio('saml');
        this.music1.play();
        
        this.abeLyd = game.add.audio('abe_lyd');
        
        this.enemies = game.add.group();
        this.enemies.enableBody = true;
        tween = game.add.tween(this.enemies).to({y:this.enemies.y+150}, 1200).to({y:this.enemies.y},1200).loop().start();
        
        this.map.createFromObjects('Object', 56, 'monster', 0, true, false, this.enemies, Phaser.Sprite, false);
        this.enemies.forEach(function(enemy){enemy.body.immovable=true;
                                       enemy.height = 32;
                                       enemy.width = 32;                         
                                    
                                       enemy.anchor.setTo(0, 0);
                                       enemy.anchor.setTo(0, 0);
                                      });
        
        game.physics.arcade.enable(this.enemies);
        
        },
        
        
        update: function() {
        
        game.physics.arcade.overlap(this.player, this.enemies, this.playerDie, null, this);
       
        
        this.movePlayer();
        
        game.physics.arcade.collide(this.player, this.layer);
        game.physics.arcade.collide(this.player, this.a, this.takeBogstavA, null, this);
        game.physics.arcade.collide(this.player, this.b, this.takeBogstavB, null, this);
        game.physics.arcade.collide(this.player, this.e, this.takeBogstavE, null, this);
        
    },
    
    
    hint: function(){
        
    this.abeLyd.play();
        
    this.abeBillede = game.add.sprite(400, 300, 'abe_billede');
    this.abeBillede.anchor.setTo(0.5, 0.5);
    game.time.events.add(Phaser.Timer.SECOND * 3, this.fadePicture, this);
            
    }, 
    
    
    fadePicture: function() {
        game.add.tween(this.abeBillede).to ( {alpha: 0}, 2000, Phaser.Easing.Linear.None, true);
    },
    
            
    pause: function togglePause (){
        game.physics.arcade.isPaused = (game.physics.arcade.isPaused) ? false : true;
        game.sound.mute = !game.sound.mute;
        this.pauseButton.frame = game.sound.mute ? 1 : 0;
        tween.isPaused = (tween.isPaused) ? false : true;
    },
    
        
    toggleSound: function() {

    game.sound.mute = !game.sound.mute;
    this.muteButton.frame = game.sound.mute ? 1 : 0;
    },
    
    
    menu: function() {
        game.state.start('menu');
            this.music.stop();
            this.music1.stop();
    },
    
    takeBogstavA: function(player, bogstav) {
        
        bogstav.placeret = true;
        
        bogstav.x = bogstav.nyx;
        bogstav.y = bogstav.nyy;
        game.add.tween(this.a).to({y:this.a.y+5}, 500).to({y:this.a.y},500).loop().start();
    },
    
    
    takeBogstavB: function(player, bogstav) {
        if (this.a.placeret == true) {
            bogstav.x = bogstav.nyx;
            bogstav.y = bogstav.nyy;
            bogstav.placeret = true;
            game.add.tween(this.b).to({y:this.b.y+5}, 500).to({y:this.b.y},500).loop().start();
        }
        else {
            game.camera.shake(0.02, 300);
            this.music.stop();
            game.time.events.add(1000, this.restartBane, this)
             }
    },
    
    
    takeBogstavE: function(player, bogstav) {
        if (this.b.placeret == true) {
            bogstav.x = bogstav.nyx;
            bogstav.y = bogstav.nyy;
            game.add.tween(this.e).to({y:this.e.y+5}, 500).to({y:this.e.y},500).loop().start();
            this.bane2Button = game.add.button(game.width/2, game.height/2, 'startknap', this.bane2, this, 1, 2);
            this.bane2Button.anchor.setTo(0.5, 0.5);
            var bane2Label = game.add.text(game.width/2, game.height/2, 'BANE 2 >>', {font:'25px Arial', fill: '#ffffff'});
            bane2Label.anchor.setTo(0.5, 0.5);
            this.baneskiftLyd = game.add.audio('baneskift_lyd');
            this.baneskiftLyd.play();
        }
        else {
               game.camera.shake(0.02, 300);
               this.music.stop();
               game.time.events.add(1000, this.restartBane, this);
             
        }
        
    },
    
    bane2: function(){
        game.state.start('bane2');
        this.music.stop();
    },
    
    restartBane: function (){
     game.state.restart('bane1');   
    },
    

    movePlayer: function() {
    
        if (this.cursor.left.isDown) {
        this.player.body.velocity.x = -100;
        this.player.animations.play('left');
        }
   
        else if (this.cursor.right.isDown) {
        this.player.body.velocity.x = 100;
        this.player.animations.play('right');
        }
        
       else {
        this.player.body.velocity.x = 0;
        this.player.animations.stop();
        this.player.frame = 0;
        
        }
            
        if (this.cursor.up.isDown) {
            this.player.body.velocity.y =-100;
            this.player.animations.play('up');
        }
        
        else if (this.cursor.down.isDown) {
            this.player.body.velocity.y = 100;
            this.player.animations.play('down');
        }
        
        else {
            this.player.body.velocity.y = 0;
            this.player.animations.stop();
            this.player.frame = 0;
        }  
    },
    
    playerDie: function() {
            game.camera.shake(0.02, 300);
            this.music.stop();
            game.time.events.add(1000, this.restartBane, this)
    },
    

    
    createWorld: function() {
    
    this.map = game.add.tilemap('map');
    this.map.addTilesetImage('tileset');
    this.layer = this.map.createLayer('Tile Layer 1');
    this.layer2 = this.map.createLayer('Tile Layer 2');
    this.layer.resizeWorld();
    this.map.setCollision(13);
    this.map.setCollision(14);
    }
    
};