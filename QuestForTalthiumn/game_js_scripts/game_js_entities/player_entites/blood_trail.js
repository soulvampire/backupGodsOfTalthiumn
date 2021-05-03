game.blood_trail = me.Renderable.extend(
  { 
    init: function(objectPosX, objectPosY) 
    {
      // create a new emitter
      this.bloodemitter = new me.ParticleEmitter(objectPosX, objectPosY);
  
      // start the emitter with pre-defined params
      this.configureBloodTrails();
      
      // add the emitter to game
      me.game.world.addChild(this.bloodemitter,100);
    },
  
    /********************************/
    /* blood particle emitter start */
    /********************************/
    configureBloodTrails: function()
    {
      this.bloodemitter.image = me.loader.getImage("blood_particle");
      this.bloodemitter.angle = null;
      this.bloodemitter.minLife = 500;
      this.bloodemitter.maxLife = 1000;
      this.bloodemitter.speedVariation = 0;
      this.bloodemitter.angleVariation = 1.52;
      this.bloodemitter.gravity = 0.1,
      this.bloodemitter.wind = 0.00,
      this.bloodemitter.floating = false;
      this.bloodemitter.width = 22;
      this.bloodemitter.height = 57;
      this.bloodemitter.frequency = 1;
      this.bloodemitter.duration = 250;
    },
  
    /********************************/
    /* blood particle emitter start */
    /********************************/
    displayBloodTrails: function(object_xPos, object_yPos)
    {
      this.bloodemitter.angle = 1.570;
      this.bloodemitter.totalParticles = me.Math.random(5, 11)// random number between 5 and 10;
      this.bloodemitter.maxParticles = me.Math.random(5, 11)// random number between 5 and 10
      this.bloodemitter.pos.set(Math.floor(object_xPos), Math.floor(object_yPos));
      this.bloodemitter.burstParticles();
    },
  
    removeBloodTrails: function() 
    {
      // remove the emitter from game		
      me.game.world.removeChild(this.bloodemitter);
    }
  });