describe('ItemCtrl with inline mock', function() {
    beforeEach(module('simple2'));
    var ctrl, mockService;
    beforeEach(module(function($provide) {
        mockService = {
            list: function() {
                return [{id: 1, label: 'Mock'}];
            }
        };
        $provide.value('ItemService', mockService);
    }));
    beforeEach(inject(function($controller) {
        ctrl = $controller('ItemCtrl');
    }));
    it('should load mocked out items', function() {
        expect(ctrl.items).toEqual([{id: 1, label: 'Mock'}]);
    });
});