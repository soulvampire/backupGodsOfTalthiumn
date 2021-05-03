/********************/
/* moving Plataform */
/****************** */
game.moving_platform_entity = me.Entity.extend(
{
  init: function(x, y, settings) 
    {
    //values from tiled on the size of the area to move within
    settings.image = settings.platform_image;
    this.area_width = settings.width;
    this.area_height = settings.height;
    this.platform_speed = settings.platform_speed;
    
    //sprite area
    settings.width = settings.framewidth = settings.platform_width;
    settings.height = settings.frameheight = 32;
    settings.shapes[0] = new me.Rect(0, 0, settings.framewidth, settings.frameheight);
    this._super(me.Entity, 'init', [x, y , settings]);

    this.body.collisionType = me.collision.types.WORLD_SHAPE;
    this.body.setCollisionMask(me.collision.types.WORLD_SHAPE | me.collision.types.PLAYER_OBJECT);
      
    // set start/end position based on the initial area size
    x = this.pos.x;
    this.startX = x;
    this.endX   = this.startX + this.area_width - settings.framewidth;;
    this.pos.x  = this.startX + this.area_width - settings.framewidth;
    
    // manually update the entity bounds as we manually change the position
    this.updateBounds();
    
    // to remember which side we were walking
    this.moveLeft = false;
    this.alwaysUpdate = false;

    // velocity
    this.body.setVelocity(this.platform_speed, 5);
  },
    
  /***************************/
  /* moving Plataform update */
  /************************* */
  update : function (dt) 
  {
      this.body.gravity = 0;
      if (this.moveLeft && this.pos.x <= this.startX) 
      {
          this.moveLeft = false;
      } 
      else if (!this.moveLeft && this.pos.x >= this.endX) 
      {
          this.moveLeft = true;
      }
      this.body.vel.x += (this.moveLeft) ? -this.body.accel.x * me.timer.tick : this.body.accel.x * me.timer.tick;
      
      // update the body movement
      this.body.update(dt);

      // handle collisions against other shapes
      me.collision.check(this);

      // return true if we moved or if the renderable was updated
      return (this._super(me.Entity, 'update', [dt]) || this.body.vel.x !== 0 || this.body.vel.y !== 0);
  }
});