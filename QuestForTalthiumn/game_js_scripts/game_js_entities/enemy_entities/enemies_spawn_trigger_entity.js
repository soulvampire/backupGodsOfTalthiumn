game.enemies_spawn_trigger = me.Entity.extend(
{
  init: function (x, y, settings) 
  {
    settings = settings || {};
    if(!settings.type_of_enemies) 
    {
      throw "Need to set what type of enemy to spawn with the 'type' propery!";
    }
    this.spawn_id = settings.spawn_entity_id;// this is used by the spawn trigger to activate this entity
    this.enemy_type = settings.type_of_enemies;// this is a string variable which defined to enemy type
    this.enemies_spawn_amount = settings.rate_of_enemies;// this is an int variable the rate of how many enemies are spawned from this entity
    this.number_of_enemies =  settings.number_of_enemies;// this is an int variable for how many enemies in total are spawned from this entity
    this.enemies_spawn_time = settings.spawning_time;// this is how fast the enemies are spawned from the spawn point
    this.lastSpawn = 0;
    settings.shapes[0] = new me.Rect(0, 0, settings.framewidth, settings.frameheight);
    this._super(me.Entity, 'init', [x, y, settings]);
    
    this.alwaysUpdate = false;
  
    this.body.collisionType = me.collision.types.WORLD_SHAPE;
    this.body.setCollisionMask(me.collision.types.WORLD_SHAPE | me.collision.types.PLAYER_OBJECT);
    this.body.setVelocity(0, 0);
    this.body.gravity = 0;
  },
      
  update: function (dt) 
  {
    /*
    this.lastSpawn = this.lastSpawn + dt;
    if(this.lastSpawn > this.spawnTime) 
    {
      var enemy_entity = me.pool.pull(this.enemyType, this.pos.x, this.pos.y);
      me.game.world.addChild(enemy_entity, enemy_entity.pos.z);
      this.lastSpawn = 0;
    }
  
    this.body.update(dt);*/
  
    return false;
  },
      
  /*************************/
  /*   colision handler    */
  /*************************/ 
  onCollision: function (response, other) 
  {
    switch (other.body.collisionType) 
    {
      case me.collision.types.PLAYER_OBJECT:
      // Simulate a platform object
      if (other.type === "players_character") 
      {  
        console.log('enemies trigger point walked over by player');
      }
      break;
    }
  }
});