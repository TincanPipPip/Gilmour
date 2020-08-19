<?php

/**
 * ACF theme options page
 */

if( function_exists('acf_add_options_page') ) {
  acf_add_options_page(array(
		'page_title' 	=> 'Footer settings',
		'menu_title'	=> 'Footer Settings',
		'menu_slug' 	=> 'footer-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));
}


/**
 * ACF Gutenberg block categories setup
 */

function p1_block_categories( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'header',
				'title' => __( 'Header', 'header' ),
      ),
      array(
        'slug' => 'content',
        'title' => __( 'Content', 'content' ),
      ),
      array(
				'slug' => 'ctas',
				'title' => __( 'CTAs', 'ctas' ),
      ),
      array(
				'slug' => 'tiles-list',
				'title' => __( 'Tiles & List', 'tiles-list' ),
      ),
      array(
				'slug' => 'trust-mark',
				'title' => __( 'Trust Mark', 'trust-mark' ),
      ),
		)
	);
}
add_filter( 'block_categories', 'p1_block_categories', 10, 2);


/**
 * ACF Gutenberg custom blocks setup
 */

add_action( 'acf/init', 'p1_acf' );

function p1_acf() {
  if ( ! function_exists( 'acf_register_block' ) ) {
    return;
  }

  // Include custom blocks by module category
  require 'blocks/header.php';
  require 'blocks/content.php';
  require 'blocks/ctas.php';
  require 'blocks/tiles-list.php';
  require 'blocks/trust-mark.php';
}


/**
 *  This is the callback that displays the block.
 *
 * @param   array  $block      The block settings and attributes.
 * @param   string $content    The block content (emtpy string).
 * @param   bool   $is_preview True during AJAX preview.
 */

function acf_block( $block, $content = '', $is_preview = false ) {
  $context = Timber::context();

  // Add post context to access page data
  $context['post'] = new Timber\Post();

  // Store block values.
  $context['block'] = $block;

  // Store field values.
  $context['fields'] = get_fields();

  // Store $is_preview value.
  $context['is_preview'] = $is_preview;

  // Render the block.
  Timber::render( 'templates/blocks/' . $block['category'] . '/' . sanitize_title($block['title']) . '.twig', $context );
}
