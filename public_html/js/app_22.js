/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('notesApp', [])
        .controller('MainCtrl', [function() {
                var self = this;
                self.tab = 'first';
                self.open = function(tab) {
                    self.tab = tab;
                };
            }])
        .controller('SubCtrl', [function() {
                var self = this;
                self.list = [
                    {id: 1, label: 'Item 0'},
                    {id: 2, label: 'Item 1'}
                ];
                self.add = function() {
                    self.list.push({
                        id: self.list.length + 1,
                        label: 'Item ' + self.list.length
                    });
                };
            }]);