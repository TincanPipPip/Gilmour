<?php

/**
 * Content modules
 */

acf_register_block( array(
  'name'            => 'short-copy',
  'title'           => __( 'Short copy', 'p1invmgmt' ),
  'description'     => __( 'One column content', 'p1invmgmt' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'menu-alt2',
  'keywords'        => array( 'copy' ),
  'mode'            => 'edit',
  'supports'        => array(
    'align' => false,
  ),
) );

acf_register_block( array(
  'name'            => 'long-copy',
  'title'           => __( 'Long copy', 'p1invmgmt' ),
  'description'     => __( 'Two column content', 'p1invmgmt' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'menu',
  'keywords'        => array( 'copy' ),
  'mode'            => 'edit',
  'supports'        => array(
    'align' => false,
  ),
) );

acf_register_block( array(
  'name'            => 'body-copy',
  'title'           => __( 'Body copy', 'p1invmgmt' ),
  'description'     => __( 'Three column content', 'p1invmgmt' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'menu-alt',
  'keywords'        => array( 'copy' ),
  'mode'            => 'edit',
  'supports'        => array(
    'align' => false,
  ),
) );

acf_register_block( array(
  'name'            => 'faqs',
  'title'           => __( 'FAQs', 'p1invmgmt' ),
  'description'     => __( 'Frequently asked questions', 'p1invmgmt' ),
  'render_callback' => 'acf_block',
  'category'        => 'content',
  'icon'            => 'admin-comments',
  'keywords'        => array( 'faqs' ),
  'mode'            => 'edit',
  'supports'        => array(
    'align' => false,
  ),
  'enqueue_assets'	=> function(){
    wp_enqueue_script('accordions', get_template_directory_uri() . '/dist/js/accordion.js', array(), null, true );
  },
) );
