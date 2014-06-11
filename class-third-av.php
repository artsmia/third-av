<?php

/**
 * Main class for the plugin.
 *
 * Provides funtion for printing app to page.
 */
class ThirdAV {
	
	public function enqueue_scripts_and_styles(){

		wp_enqueue_style( 
			'thirdav_css',
			plugins_url( '3av.css', __FILE__ ),
			array(
				'foundation_css',
				'mia_frontend_css',
				'artsmia-icons',
			),
			false
		);

		wp_enqueue_script(
			'thirdav_js',
			plugins_url( 'bundle.js', __FILE__ ),
			array(),
			null,
			true
		);

		wp_enqueue_script(
			'fastclick',
			plugins_url( 'js/fastclick.js', __FILE__ ),
			array(),
			null,
			true
		);

	}

	public function add_mobile_menu() {
		echo "<h2 class='header'>ThirdAV</h2><div class='menu' id='thirdav-menu'></div>";
	}

	public function print_template(){ 
		readfile( plugins_url( 'index.html', __FILE__ ) );
	}

	public function __construct() {
		add_action( 'mia_mobile_menus', array( $this, 'add_mobile_menu' ) );
	}

}