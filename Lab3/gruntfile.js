// Вся конфигурация находится внутри этой функции
module.exports = function(grunt) {
 
  // ===========================================================================
  // Конфигурация GRUNT ========================================================
  // ===========================================================================
  grunt.initConfig(
  {
    clean: 
		{
			js: ['scripts/built.js'],
			build: ['build/**'],
			//cleanJs: ['build/built.js'],			
			cleanCss: ['build/bootstrap.min.css'],
		},
		
    concat: 
    {
      options: 
      {
        separator: ';\n'
      },
    
      dist: 
      {
        //src: ['scripts/**.*js'],
				src: 
				[
					'scripts/shape.js'
					,'scripts/circle.js'
					,'scripts/triangle.js'
					,'scripts/rectangle.js'
					,'scripts/script.js'
				],
        dest: 'scripts/built.js',
      },
    },

    eslint: 
    {
        target: ['scripts/built.js']
    },
		
		connect: 
		{
			meta: 
			{
				port: 2000,
				base: ''
			}
		},  
		
		open:
		{
			dev:
			{
				path: 'http://localhost:2000/build/index.html',
				app: ''
			}
		},
		
		watch: 
		{			
			files: ['**/*'],      			
			options: 
			{				
				livereload: true
			}
		},		
		
		cacheBust: 
		{
			css: 
			{
        options: 
				{
            assets: ['build/built.js', 'build/bootstrap.min.css']
        },
        src: ['build/index.html']
			},			
		},
		
		copy: 
		{
			css: 
			{
				src: 'css/bootstrap.min.css',
				dest: 'build/bootstrap.min.css',
			},
			
			js:
			{
				src: 'scripts/built.js',
				dest: 'build/built.js',
			},
			
			index:
			{
				src: 'index.html',
				dest: 'build/index.html',				
			}
		},
});
 
  grunt.registerTask('default', 
	[ 'clean:js'
	, 'concat'
	, 'eslint'
	, 'copy'
	, 'cacheBust'
	//, 'clean: cleanJs'
	//, 'clean: cleanCss'
	, 'open'
	, 'connect'
	, 'watch']);
  
	grunt.loadNpmTasks('grunt-contrib-copy');	
  grunt.loadNpmTasks('grunt-cache-bust');     
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-open');	
	grunt.loadNpmTasks('grunt-connect');	
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-eslint');                                          
};