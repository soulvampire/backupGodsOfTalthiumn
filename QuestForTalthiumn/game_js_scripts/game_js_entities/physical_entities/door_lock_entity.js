/********************/
/* door lock entity */
/********************/
game.door_lock_entity = me.CollectableEntity.extend(
{
  /***************/
  /* constructor */
  /***************/
  init(x, y, settings) 
  {
    this.current_lock_colour = game.parseColor(settings.current_lock_colour);
    this.referenced_door_number = settings.referenced_door_object;
  
    this.name = 'castle_door_lock';
  
    settings.image = 'rpg_door_locks';
    settings.framewidth = 32;
    settings.frameheight = 32;
    
    // Set the renderable position to center.
    settings.anchorPoint = new me.Vector2d(0.5, 0.5);
    settings.shapes = [new me.Rect(6, 4, 20, 24)];
  
    // Call the super constructor.
    this._super(me.CollectableEntity, 'init', [x, y, settings]);
    this.body.collisionType = me.collision.types.ACTION_OBJECT;
  
    // Calculate the correct frame line.
    this.number_Of_frames = 6;
    this.animation_line = this.number_Of_frames * this.current_lock_colour;
  
    // add an idle animation.
    this.renderable.addAnimation('door_locked', [
        0 + this.animation_line,
        1 + this.animation_line,
        2 + this.animation_line,
        3 + this.animation_line,
        4 + this.animation_line,
        5 + this.animation_line
    ], 200);
  
    // set the default animation.
    this.renderable.setCurrentAnimation('door_locked');
  },
  
  /***********************************/
  /* remove door lock from the level */
  /***********************************/
  open_lock : function() 
  {
    const door_lock_index = game.data.obtained_keys.indexOf(this.current_lock_colour);
    if (door_lock_index > -1) 
    {
      // Remove the key from the stash.
      game.data.obtained_keys.splice(door_lock_index, 1);
    
      this.renderable.flicker(300, () => 
      {
         // Remove the padlock from the map.
        me.game.world.removeChild(this);
        
        // Open the proper door.
        for (const door of game.castle_level_doors) 
        {
          if (door.referenced_door_number === this.referenced_door_number) 
          {
            door.door_open(this.current_door_color);
            break;
          }
        }
      });
      return true;
    }
    return false;
  },
  
  /*********************/
  /* collision handler */
  /*********************/
  onCollision(response, other) 
  {
      return false;
  },
});
  