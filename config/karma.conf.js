/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.exports = function(config) {
    config.set({
        basePath: '../public_html/',
        files: ['js/angular.min.js','js/angular-mocks.js','js/*.js','test/*.js'
        ],
        exclude: [
        ],
        autoWatch: true,
        frameworks: ['jasmine'
        ],
        browsers: ['Chrome'
        ],
        plugins: ['karma-jasmine','karma-chrome-launcher'
        ]
    });
};
