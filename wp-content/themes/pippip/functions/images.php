<?php

/**
 * Image styles & settings
 */

add_filter('jpeg_quality', function($arg){return 90;});
add_image_size( 'card', 483, 336, array( 'center', 'center' ) );
add_image_size( 'logo', 350 );
add_image_size( 'square_small', 200, 200, true );
add_image_size( 'square_xsmall', 100, 100, true );