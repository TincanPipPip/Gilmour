<?php

/**
 * CTA Modules
 */

acf_register_block( array(
  'name'            => 'primary-cta',
  'title'           => __( 'Primary CTA', 'p1invmgmt' ),
  'description'     => __( 'Full width CTA blocks', 'p1invmgmt' ),
  'render_callback' => 'acf_block',
  'category'        => 'ctas',
  'icon'            => 'star-filled',
  'keywords'        => array( 'cta', 'primary' ),
  'mode'            => 'edit',
  'supports'        => array(
    'align' => false,
  ),
) );

acf_register_block( array(
  'name'            => 'secondary-cta',
  'title'           => __( 'Secondary CTA', 'p1invmgmt' ),
  'description'     => __( 'Centre aligned CTA block', 'p1invmgmt' ),
  'render_callback' => 'acf_block',
  'category'        => 'ctas',
  'icon'            => 'star-half',
  'keywords'        => array( 'cta', 'secondary' ),
  'mode'            => 'edit',
  'supports'        => array(
    'align' => false,
  ),
) );

acf_register_block( array(
  'name'            => 'tertiary-cta',
  'title'           => __( 'Tertiary CTA', 'p1invmgmt' ),
  'description'     => __( 'Two column CTA block', 'p1invmgmt' ),
  'render_callback' => 'acf_block',
  'category'        => 'ctas',
  'icon'            => 'star-empty',
  'keywords'        => array( 'cta', 'tertiary' ),
  'mode'            => 'edit',
  'supports'        => array(
    'align' => false,
  ),
) );

acf_register_block( array(
  'name'            => 'product-ctas',
  'title'           => __( 'Product CTAs', 'p1invmgmt' ),
  'description'     => __( 'Three column product CTAs', 'p1invmgmt' ),
  'render_callback' => 'acf_block',
  'category'        => 'ctas',
  'icon'            => 'products',
  'keywords'        => array( 'cta', 'products' ),
  'mode'            => 'edit',
  'supports'        => array(
    'align' => false,
  ),
) );

acf_register_block( array(
  'name'            => 'download-cta',
  'title'           => __( 'Download brochure CTA', 'p1invmgmt' ),
  'description'     => __( 'Prompts a customer to download a document', 'p1invmgmt' ),
  'render_callback' => 'acf_block',
  'category'        => 'ctas',
  'icon'            => 'download',
  'keywords'        => array( 'cta', 'brochure', 'download' ),
  'mode'            => 'edit',
  'supports'        => array(
    'align' => false,
  ),
) );

acf_register_block( array(
  'name'            => 'invest-cta',
  'title'           => __( 'Where to invest CTA', 'p1invmgmt' ),
  'description'     => __( 'Show where can users invest', 'p1invmgmt' ),
  'render_callback' => 'acf_block',
  'category'        => 'ctas',
  'icon'            => 'cart',
  'keywords'        => array( 'cta', 'invest' ),
  'mode'            => 'edit',
  'supports'        => array(
    'align' => false,
  ),
) );

acf_register_block( array(
  'name'            => 'support-cta',
  'title'           => __( 'Support CTA', 'p1invmgmt' ),
  'description'     => __( 'Link users to support information/pages', 'p1invmgmt' ),
  'render_callback' => 'acf_block',
  'category'        => 'ctas',
  'icon'            => 'editor-help',
  'keywords'        => array( 'cta', 'support' ),
  'mode'            => 'edit',
  'supports'        => array(
    'align' => false,
  ),
) );
