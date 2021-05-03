/*******************/
/* character stats */
/*******************/
game.character_stat_entity = me.Entity.extend(
{
  /**********************************************/
  /* data object where to store key information */
  /**********************************************/ 
  character_stats_data : 
  {
    player_initial_level = 1,
    player_initial_gold = 0,
    player_initial_experience = 0,
    player_initial_summoning = 30,
    player_initial_summoning_interval = 3000,
  }
   
});