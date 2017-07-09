// Karma configuration
// Generated on Sun Feb 05 2017 21:40:24 GMT+0300 (Беларусь (зима))


//"pretest": "npm install",

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'client/todolist/todoList.module.js',
      'client/todolist/todoList.factory.js',
      'client/todolist/todoList.component.js',
      'client/todolist/todoList.component.spec.js',

      'client/mainpage/mainPage.module.js',
      'client/mainpage/mainPage.factory.js',
      'client/mainpage/mainPage.component.js'
      
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    // port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}


//jshint strict: false
/*
module.exports = function(config) {
  config.set({

    //basePath: '/',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'client/todolist/todoList.module.js',
      'client/todolist/todoList.factory.js',
      'client/todolist/todoList.component.js',
      'client/todolist/todoList.component.spec.js',

      'client/mainpage/mainPage.module.js',
      'client/mainpage/mainPage.factory.js',
      'client/mainpage/mainPage.component.js'
      //'** /*.module.js',
      //'*!(.module|.spec).js',
      //'!(bower_components)/** /*!(.module|.spec).js',
      //'** /*.spec.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    //browsers: ['PhantomJS'],
    //browsers: ['Chrome', 'Firefox'],
    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ]

  });
};
*/