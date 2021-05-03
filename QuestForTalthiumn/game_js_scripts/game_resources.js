game.resources = [
    /*********************/
    /* character sprites */
    /*********************/
        {name: "enemy_walk_right", type: "image", src: "game_data/game_sprites/enemy_sprites/enemy_walk_right.png"},
        {name: "character_movement_right", type: "image", src: "game_data/game_sprites/character_sprites/character_movement_right.png"},
        {name: "character_movement_right", type: "json", src: "game_data/game_sprites/character_sprites/character_movement_right.json"},
        {name: "dust_particle", type: "image", src: "game_data/game_sprites/character_sprites/player_dust_trail.png"},
        {name: "blood_particle", type: "image", src: "game_data/game_sprites/character_sprites/blood_trail.png"},
        {name: "hp_bar_frame", type: "image", src: "game_data/game_sprites/character_sprites/hp_bar.png"},
    
    /********************************/
    /* parallax layers images (png) */
    /********************************/ 
        {name: "platform_background_image_03", type:"image", src: "game_data/game_images/game_map_images/game_world01/parallax_layers/platform_background_image_03.png"},

    /**********************/
    /* map graphics (png) */
    /**********************/
        {name: "world01_area01_images", type:"image", src: "game_data/game_images/game_map_images/game_world01/map_castle_level/world01_area01_images.png"},

    /***********************/
    /* dialog window (png) */
    /***********************/
        {name: "dialog_box", type: "image", src: "game_data/game_images/game_map_images/dialog_box.png"},

    /******************/
    /* platform spike */
    /******************/  
        {name: "platform_spike", type:"image", src: "game_data/game_images/game_map_images/game_world01/game_hazards/rotating_standing_spike.png"},
        //{name: "platform_flame_torch", type:"image", src: "game_data/game_images/game_map_images/game_world01/game_hazards/crystal_light_green.png"},
        {name: "explosive_trap", type:"image", src: "game_data/game_images/game_map_images/game_world01/game_hazards/explosive_trap.png"},
        {name: "default_trap_explosion", type:"image", src: "game_data/game_images/game_map_images/game_world01/game_hazards/trap_explosion.png"},
        {name: "large_trap_explosion", type:"image", src: "game_data/game_images/game_map_images/game_world01/game_hazards/large_trap_explosion.png"},
        {name: "default_explosion", type:"image", src: "game_data/game_images/game_map_images/game_world01/game_hazards/default_explosion.png"},

    /*****************/
    /* static cannon */
    /*****************/  
        {name: "static_cannon", type:"image", src: "game_data/game_images/game_map_images/game_world01/game_hazards/cannon.png"},
    
    /****************/
    /* items chests */
    /****************/  
        {name: "rpg_item_chest", type: "image", src: "/game_data/game_images/game_map_images/game_world01/castle_level_items/rpg_item_chests.png"},
        {name: "rpg_chest_keys", type: "image", src: "/game_data/game_images/game_map_images/game_world01/castle_level_items/rpg_chest_keys.png"},
        {name: "rpg_doors",  type: "image", src: "/game_data/game_images/game_map_images/game_world01/castle_level_items/rpg_doors.png"},
        {name: "rpg_door_locks", type: "image", src: "/game_data/game_images/game_map_images/game_world01/castle_level_items/rpg_door_locks.png"},
        
    /***************************/
    /* floating platform image */
    /***************************/
        {name: "platform_1", type: "image", src: "game_data/game_images/game_map_images/game_world01/map_castle_level/platform_1.png"},
        {name: "platform_2", type: "image", src: "game_data/game_images/game_map_images/game_world01/map_castle_level/platform_2.png"},
        {name: "platform_3", type: "image", src: "game_data/game_images/game_map_images/game_world01/map_castle_level/platform_3.png"},
        {name: "platform_4", type: "image", src: "game_data/game_images/game_map_images/game_world01/map_castle_level/platform_4.png"},
    
    /*********************************/
    /* world 1, area 1(castle level) */
    /*********************************/
        /**********************/
        /* map tilesets (tmx) */
        /**********************/
	   {name: "world01_area01", type: "tmx", src: "game_data/game_maps/game_world01/map_castle_level/world01_area01.tmx"},
     
        /**********************/
        /* map tilesets (tsx) */
        /**********************/
        {name: "world01_area01_castle",  type: "tsx", src: "game_data/game_maps/game_world01/map_castle_level/world01_area01_castle.tsx"},

    /**************/
    /* text fonts */
    /**************/
        { name: "default_font", type:"image", src: "game_data/game_fonts/default_font/default_font.png"},
        { name: "default_font", type:"binary", src: "game_data/game_fonts/default_font/default_font.fnt"},

        { name: "amble_bold", type:"image", src: "game_data/game_fonts/amble_font/amble_bold.png"},
        { name: "amble_bold", type:"binary", src: "game_data/game_fonts/amble_font/amble_bold.fnt"},

        { name: "aller_reg", type:"image", src: "game_data/game_fonts/aller_font/aller_reg.png"},
        { name: "aller_reg", type:"binary", src: "game_data/game_fonts/aller_font/aller_reg.fnt"},

        { name: "tahoma_reg", type:"image", src: "game_data/game_fonts/tahoma_font/tahoma_reg.png"},
        { name: "tahoma_reg", type:"binary", src: "game_data/game_fonts/tahoma_font/tahoma_reg.fnt"},

        { name: "times_reg", type:"image", src: "game_data/game_fonts/times_font/times_reg.png"},
        { name: "times_reg", type:"binary", src: "game_data/game_fonts/times_font/times_reg.fnt"},

        { name: "times_bold", type:"image", src: "game_data/game_fonts/times_font/times_bold.png"},
        { name: "times_bold", type:"binary", src: "game_data/game_fonts/times_font/times_bold.fnt"},

        { name: "8x8_font_blue", type:"image", src: "/game_data/game_fonts/other_fonts/8x8_font_blue.png"},
        { name: "16x16_font_blue", type:"image", src: "/game_data/game_fonts/other_fonts/16x16_font_blue.png"},
];