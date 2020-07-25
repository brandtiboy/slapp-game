var menuState = {
    create: function(){
        game.add.image(0, 0, 'background');
        
        this.music = game.add.audio('music'); 
        this.music.loop = true; 
        this.music.play();
        
        this.startLyd = game.add.audio('start_lyd');
            this.startLyd.play();
        
        
        this.startButton = game.add.button(game.width-350, game.height-450, 'startknap', this.start, this, 1, 2);
        this.instruktionButton = game.add.button(game.width-350, game.height-380, 'startknap', this.instruktion, this, 1, 2);
        this.baneButton = game.add.button(game.width-350, game.height-310, 'startknap', this.baner, this, 1, 2);
        

            
        var startLabel = game.add.text(game.width-245, game.height-415, 'START', {font: '25px Arial', fill: '#ffffff' });
        startLabel.anchor.setTo(0.5, 0.5);
        
        
        var instruktionLabel = game.add.text(game.width-245, game.height-345, 'INSTRUKTION', {font: '25px Arial', fill: '#ffffff' });
        instruktionLabel.anchor.setTo(0.5, 0.5);
        
        var baneLabel = game.add.text(game.width-245, game.height-273, 'BANER', {font: '25px Arial', fill: '#ffffff' });
        baneLabel.anchor.setTo(0.5, 0.5);
        
    },
        start: function(){
            game.state.start('bane1');
            this.music.stop();
            this.startLyd.stop();
        },
        
        instruktion: function(){
            game.state.start('regler');
            this.music.stop();
            this.startLyd.stop();
        },
           
        baner: function(){
            game.state.start('baner');
            this.music.stop();
            this.startLyd.stop();
        }
                
    
};