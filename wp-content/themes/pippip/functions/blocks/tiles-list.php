<?php

/**
 * Tiles, list & card modules
 */

acf_register_block( array(
  'name'            => 'products-list',
  'title'           => __( 'Products list', 'p1invmgmt' ),
  'description'     => __( 'Five column products list', 'p1invmgmt' ),
  'render_callback' => 'acf_block',
  'category'        => 'tiles-list',
  'icon'            => 'products',
  'keywords'        => array( 'list', 'products' ),
  'mode'            => 'edit',
  'supports'        => array(
    'align' => false,
  ),
) );

acf_register_block( array(
  'name'            => 'platform-features-carousel',
  'title'           => __( 'Platform features carousel', 'p1invmgmt' ),
  'description'     => __( 'Products screens carousel & description', 'p1invmgmt' ),
  'render_callback' => 'acf_block',
  'category'        => 'tiles-list',
  'icon'            => 'leftright',
  'keywords'        => array( 'carousel', 'platform', 'features' ),
  'mode'            => 'edit',
  'supports'        => array(
    'align' => false,
  ),
  'enqueue_assets'	=> function(){
    wp_enqueue_script('swiper', get_template_directory_uri() . '/dist/js/carousel.js', array(), null, true );
  },
) );

acf_register_block( array(
  'name'            => 'platform-tiles',
  'title'           => __( 'Platform tiles', 'p1invmgmt' ),
  'description'     => __( 'Simple icon/description tiles', 'p1invmgmt' ),
  'render_callback' => 'acf_block',
  'category'        => 'tiles-list',
  'icon'            => 'grid-view',
  'keywords'        => array( 'tiles', 'platform' ),
  'mode'            => 'edit',
  'supports'        => array(
    'align' => false,
  ),
) );

acf_register_block( array(
  'name'            => 'why-choose',
  'title'           => __( 'Why choose', 'p1invmgmt' ),
  'description'     => __( 'Introduce platform features', 'p1invmgmt' ),
  'render_callback' => 'acf_block',
  'category'        => 'tiles-list',
  'icon'            => 'editor-help',
  'keywords'        => array( 'platform', 'why', 'choose' ),
  'mode'            => 'edit',
  'supports'        => array(
    'align' => false,
  ),
) );

acf_register_block( array(
  'name'            => 'key-benefits',
  'title'           => __( 'Key benefits', 'p1invmgmt' ),
  'description'     => __( 'Two column list of benefits', 'p1invmgmt' ),
  'render_callback' => 'acf_block',
  'category'        => 'tiles-list',
  'icon'            => 'admin-network',
  'keywords'        => array( 'key', 'benefits' ),
  'mode'            => 'edit',
  'supports'        => array(
    'align' => false,
  ),
) );

acf_register_block( array(
  'name'            => 'help-you-list',
  'title'           => __( 'Help you list', 'p1invmgmt' ),
  'description'     => __( 'How we can help you', 'p1invmgmt' ),
  'render_callback' => 'acf_block',
  'category'        => 'tiles-list',
  'icon'            => 'yes-alt',
  'keywords'        => array( 'help', 'list' ),
  'mode'            => 'edit',
  'supports'        => array(
    'align' => false,
  ),
) );

acf_register_block( array(
  'name'            => 'stacked-tiles',
  'title'           => __( 'Stacked tiles', 'p1invmgmt' ),
  'description'     => __( 'Two stacked image/card tiles', 'p1invmgmt' ),
  'render_callback' => 'acf_block',
  'category'        => 'tiles-list',
  'icon'            => 'excerpt-view',
  'keywords'        => array( 'stacked', 'tiles' ),
  'mode'            => 'edit',
  'supports'        => array(
    'align' => false,
  ),
) );

acf_register_block( array(
  'name'            => 'careers-cards',
  'title'           => __( 'Careers cards', 'p1invmgmt' ),
  'description'     => __( 'Two column vacancy cards', 'p1invmgmt' ),
  'render_callback' => 'acf_block',
  'category'        => 'tiles-list',
  'icon'            => 'megaphone',
  'keywords'        => array( 'careers', 'cards' ),
  'mode'            => 'edit',
  'supports'        => array(
    'align' => false,
  ),
) );

acf_register_block( array(
  'name'            => 'people-cards',
  'title'           => __( 'People cards', 'p1invmgmt' ),
  'description'     => __( 'Grid of P1 employees', 'p1invmgmt' ),
  'render_callback' => 'acf_block',
  'category'        => 'tiles-list',
  'icon'            => 'admin-users',
  'keywords'        => array( 'people', 'cards' ),
  'mode'            => 'edit',
  'supports'        => array(
    'align' => false,
  ),
) );
