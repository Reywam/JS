module.exports = function(grunt) {
 
  grunt.initConfig(
  {
		pkg: grunt.file.readJSON('package.json'),
	  
		clean: 
		{						
			ts: ['js/scripts.ts'],
			build: ['build/**'],	
		},		
		
		ts: 
		{
			default: 
			{				
				src: 
				[
					'ts/IShape.ts'
					, 'ts/CShape.ts'
					, 'ts/CCircle.ts'
					, 'ts/CTriangle.ts'
					, 'ts/CRectangle.ts'
					, 'ts/main.ts'
				],				
				configFile: 'tsconfig.json',				
				out: 'build/scripts.js',
				
				options: 
				{
					module: 'system',
					target: 'es5',
					noImplicitAny: true,
					noEmitOnError: true,
					sourceMap: false,						
				}
			}
		},
		
		connect:
		{
			server:
			{
				options:
				{
					hostname: 'localhost',
					port: 2000,
					base: '',
					livereload: true
				}
			}
		},
		
		open:
		{
			dev:
			{
				path: 'http://localhost:2000/index.html',
				app: ''
			}
		},
		
		watch: 
		{
			options: 
			{
				livereload: true
			},
			
			task:
			{
				files: ['index.html'],				
				options:
				{
					livereload: true
				}
			},			
			
			app:
			{
				files: ['js/app.js'],
				options:
				{
					livereload: true
				}
			},
			
			scripts:
			{
				files: ['ts/*.*'],
				options:
				{
					livereload: true
				}
			},
		},					
		
		tslint: 
		{
			options:
			{
					configFile: 'tslint.json',
					quiet: false
			},
			target: 'ts/*.ts'
		},
		
		cacheBust: 
		{
			task: 
			{
				options: 
				{						
					deleteOriginals: true,
					assets: ['build/**']
				},
				src: ['index.html']
			}
    },		
		
		copy: 
		{
			css: 
			{
				src: 'node_modules/bootstrap/dist/css/bootstrap.min.css',
				dest: 'build/bootstrap.min.css',
			},
			
			js:
			{
				src: 'ts/*.js',
				dest: 'js/',
			},
			
			index:
			{
				src: 'index.html',
				dest: 'build/index.html',				
			}
		},		
		
		shell: 
		{
			options: 
			{
					stderr: true
			},
			target: 
			{
				command: 'cspell ts/*.*'
			}
		},		
});
 
  grunt.registerTask('default', 
	[ 
		'clean'	
	, 'tslint'			
	, 'ts'		
	, 'shell'	
	, 'copy:js'
	, 'copy:css'
	, 'cacheBust'
	, 'copy:index'
	,	'open'
	, 'connect'
	, 'watch'
	]);	
  
	grunt.loadNpmTasks('grunt-contrib-copy');	
  grunt.loadNpmTasks('grunt-cache-bust');     	
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');	
	grunt.loadNpmTasks('grunt-ts');
	grunt.loadNpmTasks('grunt-open');	
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-tslint');			
	grunt.loadNpmTasks('grunt-shell');
};