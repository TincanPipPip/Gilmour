<?php

/**
 * Trust mark modules
 */

acf_register_block( array(
  'name'            => 'accreditation',
  'title'           => __( 'Accreditation', 'p1invmgmt' ),
  'description'     => __( 'Up to five accreditation logos', 'p1invmgmt' ),
  'render_callback' => 'acf_block',
  'category'        => 'trust-mark',
  'icon'            => 'yes-alt',
  'keywords'        => array( 'accreditation' ),
  'mode'            => 'edit',
  'supports'        => array(
    'align' => false,
  ),
) );

acf_register_block( array(
  'name'            => 'testimonials',
  'title'           => __( 'Testimonials', 'p1invmgmt' ),
  'description'     => __( 'Three column comments', 'p1invmgmt' ),
  'render_callback' => 'acf_block',
  'category'        => 'trust-mark',
  'icon'            => 'format-chat',
  'keywords'        => array( 'testimonials' ),
  'mode'            => 'edit',
  'supports'        => array(
    'align' => false,
  ),
) );

acf_register_block( array(
  'name'            => 'quotes',
  'title'           => __( 'Quotes', 'p1invmgmt' ),
  'description'     => __( 'Single column quotes', 'p1invmgmt' ),
  'render_callback' => 'acf_block',
  'category'        => 'trust-mark',
  'icon'            => 'format-quote',
  'keywords'        => array( 'quotes' ),
  'mode'            => 'edit',
  'supports'        => array(
    'align' => false,
  ),
  'enqueue_assets'	=> function(){
    wp_enqueue_script('quote', get_template_directory_uri() . '/dist/js/quote.js', array(), null, true );
  },
) );

// acf_register_block( array(
//   'name'            => 'integrations',
//   'title'           => __( 'Integrations', 'p1invmgmt' ),
//   'description'     => __( 'Available integrations for the platform', 'p1invmgmt' ),
//   'render_callback' => 'acf_block',
//   'category'        => 'trust-mark',
//   'icon'            => 'admin-plugins',
//   'keywords'        => array( 'integrations' ),
//   'mode'            => 'edit',
//   'supports'        => array(
//     'align' => false,
//   ),
// ) );
