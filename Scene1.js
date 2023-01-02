class Scene1 extends Phaser.Scene {
	constructor() {
		super({ key: 'Scene1' })
	}



  preload() {
		//load background
		this.load.image('home_screen_background', 'data/images/home_screen_background.png');

   }

  create() {
    var shreveSport1 = [
    	"* Shreve",
    	"    Sport"

    	];
    var uncertain2 = [
    	"    *",
    	"Uncertain"
    	];

    var ginCity3 = [
    	"  *",
    	"Gin City"
    	];

    var armyCorp4 = [
    	"    *",
    	"Army Corp",
    	"of Engineers"
    	];

    var garlandCity5 = [
    	"   *",
    	"Garland",
    	"City"
    	];

    var trees6 = [
    	"Trees *"
    	];

    var oilCity7 = [
    	"Oil City",
    	"   *"
    	];

    var fallOut8 = [
    	"*  ",
    	"Fall Out"
    	];

    var pleiades9 = [
    	"*",
    	"Pleiades"
    	];

    var lakeCharles10 = [
    	"   *",
    	" Lake",
    	"Charles"
    	];

    var princeTown11 = [
    	"*",
    	"Prince Town"
    	];

    var plainDealing12 = [
    	"   *",
    	" Plain",
    	"Dealing"
    	];

    var hossTown13 = [
    	"Hoss Town",
    	"     *"
    	];

    var sulphur14 = [
    	"Sulphur",
    	"    *"
    	];

    var bridgeCity15 = [
    	"* Bridge City"
    	];

    var wildCowlake16 = [
    	"* Wild Cow Lake"

    	];

    var texarkana17 = [
    	"Texarkana *"
    	];

    var chalkHill18 = [
    	"* Chalk",
    	"   Hill"
    	];

    var pollux19 = [
    	"*",
    	"Pollux"
    	];

    var castor20 = [
    	"Castor",
    	"     *"
    	];


		this.input.on('pointerdown', () => {
			this.scene.stop('Scene1')
			this.scene.start('Scene2')
		})




    // Map of East Texas and West Louisiana, this is the Home Screen's background:
    gameState.background = this.add.image(0, 0, 'home_screen_background');
    gameState.background.setOrigin(0,0);
    gameState.background.setScale(.1549, .429);
    this.add.text(185, 185, shreveSport1, { color: '#FFFDD0', fontSize: '10px'});
    this.add.text(145, 199, uncertain2, { color: '#FFFDD0', fontSize: '10px'});
    this.add.text(105, 39, ginCity3, { color: '#FFFDD0', fontSize: '10px'});
    this.add.text(225, 29, armyCorp4, { color: '#FFFDD0', fontSize: '10px'});
    this.add.text(165, 22, garlandCity5, { color: '#FFFDD0', fontSize: '10px'});
    this.add.text(105, 200, trees6, { color: '#FFFDD0', fontSize: '10px'});
    this.add.text(135, 160, oilCity7, { color: '#FFFDD0', fontSize: '10px'});
    this.add.text(112, 419, fallOut8, { color: '#FFFDD0', fontSize: '10px'});
    this.add.text(249, 319, pleiades9, { color: '#FFFDD0', fontSize: '10px'});
    this.add.text(155, 389, lakeCharles10, { color: '#FFFDD0', fontSize: '10px'});
    this.add.text(205, 99, princeTown11, { color: '#FFFDD0', fontSize: '10px'});
    this.add.text(245, 185, plainDealing12, { color: '#FFFDD0', fontSize: '10px'});
    this.add.text(105, 359, hossTown13, { color: '#FFFDD0', fontSize: '10px'});
    this.add.text(165, 369, sulphur14, { color: '#FFFDD0', fontSize: '10px'});
    this.add.text(125, 449, bridgeCity15, { color: '#FFFDD0', fontSize: '10px'});
    this.add.text(205, 399, wildCowlake16, { color: '#FFFDD0', fontSize: '10px'});
    this.add.text(115, 99, texarkana17, { color: '#FFFDD0', fontSize: '10px'});

    this.add.text(65, 269, chalkHill18, { color: '#FFFDD0', fontSize: '10px'});


    this.add.text(45, 399, pollux19, { color: '#FFFDD0', fontSize: '10px'});
    this.add.text(45, 99, castor20, { color: '#FFFDD0', fontSize: '10px'});


    //this.add.text(185, 185, '* Shreveport, LA ', {fill: '#FFFDD0', fontSize: '12px'});
    //this.add.text(155, 199, '* Uncertain ', {fill: '#FFFDD0', fontSize: '10px'});

		

		gameState.cursors = this.input.keyboard.createCursorKeys();




  }

// Update is not ready to use yet.
	update() {
		// if (gameState.cursors.left.isDown) {
	  //   gameState.player.setVelocityX(-80);
    // }else if
    // (gameState.cursors.right.isDown) { gameState.player.setVelocityX(80);
    // }else {
	  //   gameState.player.setVelocityX(0);
    // }

		// if ((gameState.cursors.space.isDown || gameState.cursors.up.isDown) && gameState.player.body.touching.down) {
    //     //gameState.player.anims.play('jump', true);
    //     gameState.player.setVelocityY(-150);
		}



	}
