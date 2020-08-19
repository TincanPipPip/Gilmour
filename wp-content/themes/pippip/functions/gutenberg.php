<?php

/**
 * Adjust Gutenberg editor window column width
 */

add_theme_support( 'editor-styles' );

function p1invmgmt_add_editor_styles() {
  add_editor_style( 'style-editor.css' );
}

add_action( 'admin_init', 'p1invmgmt_add_editor_styles' );


/**
 * Restrict available Gutenberg blocks
 */

add_filter( 'allowed_block_types', 'p1_allowed_block_types' );

function p1_allowed_block_types( $allowed_blocks ) { 
  return array(
    'acf/header',
    'acf/primary-cta',
    'acf/secondary-cta',
    'acf/tertiary-cta',
    'acf/product-ctas',
    'acf/download-cta',
    'acf/invest-cta',
    'acf/support-cta',
    'acf/products-list',
    'acf/platform-features-carousel',
    'acf/platform-tiles',
    'acf/why-choose',
    'acf/key-benefits',
    'acf/help-you-list',
    'acf/stacked-tiles',
    'acf/careers-cards',
    'acf/people-cards',
    'acf/accreditation',
    'acf/testimonials',
    'acf/quotes',
    'acf/integrations',
    'acf/short-copy',
    'acf/long-copy',
    'acf/body-copy',
    'acf/faqs',
  );
}
