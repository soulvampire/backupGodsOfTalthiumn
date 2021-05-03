/***********************/
/* vanishing Plataform */
/********************* */
game.vanishing_platform_entity = me.Entity.extend(
{
  init: function(x, y, settings) 
  {
    /*************************************************/
    /* values from tiled on the size of the platform */
    /*********************************************** */
    settings.image = settings.vanish_platform_image;
    this.vanish_platform_size = settings.vanish_platform_size;
    this.vanish_platform_speed = settings.vanish_platform_speed;
    
    /***************************/
    /* vanishing platform area */
    /************************* */ 
    settings.width = settings.framewidth = settings.vanish_platform_width;
    settings.height = settings.frameheight = 32;
    settings.shapes[0] = new me.Rect(0, 0, settings.framewidth, settings.frameheight);
    this._super(me.Entity, 'init', [x, y , settings]);

    this.body.collisionType = me.collision.types.WORLD_SHAPE;
    this.body.setCollisionMask(me.collision.types.WORLD_SHAPE | me.collision.types.PLAYER_OBJECT);
      
    // manually update the entity bounds as we manually change the position
    this.updateBounds();
    
    // to remember which side we were walking
    this.alwaysUpdate = false;

    // velocity
    this.body.setVelocity(0, 5);
  },
    
  /******************************/
  /* vanishing Plataform update */
  /**************************** */
  update : function (dt) 
  {
    this.body.gravity = 0;

    // update the body movement
    this.body.update(dt);

    // handle collisions against other shapes
    me.collision.check(this);

    // return true if we moved or if the renderable was updated
    return (this._super(me.Entity, 'update', [dt]) || this.body.vel.x !== 0 || this.body.vel.y !== 0);
  }
});