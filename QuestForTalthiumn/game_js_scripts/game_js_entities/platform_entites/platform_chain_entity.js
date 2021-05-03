/************************/
/* player ladder entity */
/************************/
game.platform_chain_entity = me.Entity.extend(
  {
    /***************/
    /* constructor */
    /***************/ 
    init : function (x, y, settings) 
    {
      /*************************************************/
      /*               chain_top_position              */
      /*                     |--|                      */
      /*                     |--|                      */
      /* chain_left_position |--| chain_right_position */
      /*                     |--|                      */
      /*                     |--|                      */
      /*               chain_bottom_position           */
      /**************************************************/
      this.chain_bottom_position = settings.chain_bottom_position_y = settings.y + settings.height;
      this.chain_left_position = settings.chain_left_position_x = settings.x;
      this.chain_right_position  = settings.chain_right_position_x  = settings.x + settings.width;
      this.chain_top_position  = settings.chain_top_position_y = settings.y;
  
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