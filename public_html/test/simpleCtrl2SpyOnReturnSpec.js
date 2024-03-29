describe('ItemCtrl with SpyReturn', function() {
    beforeEach(module('simple2'));
    var ctrl, itemService;
    beforeEach(inject(function($controller, ItemService) {
        spyOn(ItemService, 'list')
                .andReturn([{id: 1, label: 'Mock'}]);
        itemService = ItemService;
        ctrl = $controller('ItemCtrl');
    }));
    it('should load mocked out items', function() {
        expect(itemService.list).toHaveBeenCalled();
        expect(itemService.list.callCount).toEqual(1);
        expect(ctrl.items).toEqual([{id: 1, label: 'Mock'}]);
    });
});