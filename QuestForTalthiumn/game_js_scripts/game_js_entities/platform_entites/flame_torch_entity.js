/*********************************/
/* stationary flame light entity */
/*********************************/
game.flame_torch_entity = me.Entity.extend(
  {
      /***************/
      /* constructor */
      /***************/
      init: function(x, y, settings) 
      {
          settings.image = "platform_flame_torch";
          settings.shapes = new me.Rect(0, 0, settings.framewidth, settings.frameheigh);
  
          /********************/
          /* call constructor */
          /********************/
          this._super(me.Entity, 'init', [x, y, settings]);
          this.name = 'stationary_flame_torch';
  
          /**************************/
          /* default for all spikes */
          /**************************/
          this.body.setVelocity(0, 0);
          this.body.setMaxVelocity(0, 0);
          this.body.garavity = 0;
  
          this.body.collisionType = me.collision.types.NO_OBJECT;
  
          // ALWAYS update.
          this.alwaysUpdate = false;
  
          this.renderable.addAnimation( "flame_torch", [ 0, 1, 2, 3, 4, 5, 4, 3, 2, 1], 150 );
          this.renderable.setCurrentAnimation("flame_torch");
      },
  
      /*****************/
      /* entity update */
      /*****************/
      update(dt) 
      {
          // apply physics to the body (this moves the entity).
          this.body.update(dt);
  
          // Handle collisions against other shapes.
          me.collision.check(this);
  
          // Return true if we moved or if the renderable was updated.
          return (this._super(me.Entity, 'update', [dt]));
      },
  
      /*********************/
      /* collision handler */
      /*********************/
      onCollision() 
      {
          // Make all other objects solid.
          return false;
      }
  });
  