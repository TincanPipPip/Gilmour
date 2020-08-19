<?php

/**
 * Enable excerpts for pages. Used to get original page content in cards etc
 */

add_action( 'init', 'p1_enable_excerpt' );
function p1_enable_excerpt() {
    add_post_type_support( 'page', 'excerpt' );
}