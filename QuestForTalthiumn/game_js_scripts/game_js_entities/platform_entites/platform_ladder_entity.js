/************************/
/* player ladder entity */
/************************/
game.platform_ladder_entity = me.Entity.extend(
{
  /***************/
  /* constructor */
  /***************/ 
  init : function (x, y, settings) 
  {
    /**********************************************************/
    /* x = ladder_left_position                               */
    /* y = ladder_top_position                                */
    /*                      |----|                            */
    /*                      |----|                            */
    /*                      |----|                            */
    /*                      |----|                            */
    /*                      |----| x = ladder_right_position  */
    /*                             y = ladder_bottom_position */
    /**********************************************************/
    this.ladder_bottom_position = settings.ladder_bottom_position_y = settings.y + settings.height;
    this.ladder_left_position = settings.ladder_left_position_x = settings.x;
    this.ladder_right_position  = settings.ladder_right_position_x  = settings.x + settings.width;
    this.ladder_top_position  = settings.ladder_top_position_y = settings.y;

    this._super(me.Entity, 'init', [x, y, settings]);
    this.body.collisionType = me.collision.types.WORLD_SHAPE;
    // enable physic collision (off by default for basic me.Renderable)
    this.isKinematic = false; 
  },
      
  update : function (dt) 
  {
    return false;
  }
});