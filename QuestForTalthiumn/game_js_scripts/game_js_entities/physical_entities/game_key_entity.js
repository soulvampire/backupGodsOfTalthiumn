/*******************/
/* game key entity */
/*******************/
game.game_key_entity = me.CollectableEntity.extend(
{
  /***************/
  /* constructor */
  /***************/
  init: function(x, y, settings) 
  {
    this.key_colour = game.parseColor(settings.key_colour);
    this.is_key_hidden = settings.is_key_hidden;
    this.referenced_object_number = settings.referenced_object_number;
    this.referenced_object_type = settings.referenced_object_type;
    console.log("object text " + this.referenced_object_type);
  
    settings.image = 'rpg_chest_keys';
    settings.framewidth = 32;
    settings.frameheight = 32;
    
    // Redefine the shapes and renderable position.
    settings.anchorPoint = new me.Vector2d(0.5, 0.5);
    settings.shapes = [new me.Rect(5, 11, 22, 10)];
    
    /********************/
    /* call constructor */
    /********************/
    this._super(me.CollectableEntity, 'init', [x, y, settings]);
    this.name = "game_key";

    /**************************************************/
    /* Set the collision based on the hidden property */
    /**************************************************/
    if (this.is_key_hidden) 
    {
      this.body.collisionType = me.collision.types.NO_OBJECT;
    } 
    else 
    {
      this.body.collisionType = me.collision.types.COLLECTABLE_OBJECT;
    }
    
    /**************************************/
    /* Calculate the animation_line value */
    /**************************************/ 
    this.number_of_frames = 12;
    this.animation_line = this.number_of_frames * this.key_colour;
    if (this.is_key_hidden) 
    {
      this.renderable.alpha = 0;
    }
  
    /*************************/
    /* Add an idle animation */
    /*************************/ 
    this.renderable.addAnimation("key_rotation", [
       0 + this.animation_line,
       1 + this.animation_line,
       2 + this.animation_line,
       3 + this.animation_line,
       4 + this.animation_line,
       5 + this.animation_line,
       6 + this.animation_line,
       7 + this.animation_line,
       8 + this.animation_line,
       9 + this.animation_line,
      10 + this.animation_line,
      11 + this.animation_line,
    ], 150);
      
    /*****************************/
    /* Set the default animation */
    /*****************************/
    this.renderable.setCurrentAnimation("key_rotation");
  },
  
  /******************/
  /* enable the key */
  /******************/
  key_enable : function () 
  {
    this.renderable.alpha = 1;
    this.renderable.flicker(500);
    this.body.collisionType = me.collision.types.COLLECTABLE_OBJECT;
  },
  
  /*********************/
  /* collision handler */
  /*********************/
  onCollision : function(response, other)
  {
    if (game.data.obtained_keys.indexOf(this.key_colour) === -1) 
    {
      game.data.obtained_keys.push(this.key_colour);
    }

    /***************************/
    /* Avoid further collision */
    /***************************/
    this.body.setCollisionMask(me.collision.types.NO_OBJECT);

    /**********************************/
    /* delete key from the game level */
    /**********************************/
    me.game.world.removeChild(this);

    /**************************/
    /* return no value(false) */
    /**************************/
    return false;
  }
});
  