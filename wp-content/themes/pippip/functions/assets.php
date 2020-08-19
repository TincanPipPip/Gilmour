<?php

/**
 * Include global CSS & JS files
 */

function p1_assets() {
    wp_enqueue_style( 'global', get_template_directory_uri() . '/dist/css/global.css');
    wp_enqueue_script( 'defaults', get_template_directory_uri() . '/dist/js/defaults.js', array(), false, true );
    wp_enqueue_script( 'global', get_template_directory_uri() . '/dist/js/global.js', array(), false, true );
}
add_action( 'wp_enqueue_scripts', 'p1_assets' );
