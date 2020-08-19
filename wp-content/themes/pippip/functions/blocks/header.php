<?php

/**
 * Header module
 */

acf_register_block( array(
  'name'            => 'header',
  'title'           => __( 'Page header', 'p1invmgmt' ),
  'description'     => __( 'Header section for the page', 'p1invmgmt' ),
  'render_callback' => 'acf_block',
  'category'        => 'header',
  'icon'            => 'layout',
  'keywords'        => array( 'header' ),
  'mode'            => 'edit',
  'supports'        => array(
    'align' => false,
    'multiple' => false,
  ),
) );
