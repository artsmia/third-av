<?php

/**
 * Main class for the plugin.
 *
 * Provides funtion for printing app to page.
 */
class ThirdAV {
	
	static function print_template(){ 
		readfile( plugins_url( 'index.html', __FILE__ ) );
	}

	static function enqueue_scripts_and_styles(){

		wp_enqueue_style( 
			'thirdav_css',
			plugins_url( '3av.css', __FILE__ ),
			array(),
			null,
			true
		);

		wp_enqueue_script(
			'thirdav_js',
			plugins_url( 'bundle.js', __FILE__ ),
			array(),
			null,
			true
		);

	}

}