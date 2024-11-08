<?php
function my_theme_enqueue_scripts() {
    // Path to the asset manifest file
    error_log('functions.php is running');

    $manifest_path = get_template_directory() . '/build/asset-manifest.json';
    
    if (file_exists($manifest_path)) {
        $manifest = json_decode(file_get_contents($manifest_path), true);
        
        if (isset($manifest['files'])) {
            // Get file paths from the manifest
            $main_js = isset($manifest['files']['main.js']) ? $manifest['files']['main.js'] : null;
            $main_css = isset($manifest['files']['main.css']) ? $manifest['files']['main.css'] : null;

            // Enqueue JavaScript if available
            if ($main_js) {
                error_log('JS Path: ' . get_template_directory_uri() . '/build/' . $main_js);
                
                wp_enqueue_script(
                    'my-react-app-js',
                    get_template_directory_uri() . '/build/' . $main_js,
                    array(),
                    null,
                    true // Load in footer
                );
            } else {
                error_log('JS file not found in manifest.');
            }
            
            // Enqueue CSS if available
            if ($main_css) {
                error_log('CSS Path: ' . get_template_directory_uri() . '/build/' . $main_css);
                
                wp_enqueue_style(
                    'my-react-app-css',
                    get_template_directory_uri() . '/build/' . $main_css
                );
            } else {
                error_log('CSS file not found in manifest.');
            }
        } else {
            error_log('Files array not found in manifest.');
        }
    } else {
        error_log('Manifest file not found.');
    }
}
add_action('wp_enqueue_scripts', 'my_theme_enqueue_scripts');