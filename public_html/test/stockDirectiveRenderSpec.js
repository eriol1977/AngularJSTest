describe('Stock Widget Directive Rendering', function() {
    beforeEach(module('stockMarketApp'));
    var compile, mockBackend, rootScope;
    
    // Step 1: Get the $compile service injected into our test.
    beforeEach(inject(function($compile, $httpBackend, $rootScope) {
        compile = $compile;
        mockBackend = $httpBackend;
        rootScope = $rootScope;
    }));
    
    it('should render HTML based on scope correctly', function() {
        
        // Step 2: Set up our directive instance HTML.
        var scope = rootScope.$new();
        scope.myStock = {
            name: 'Best Stock',
            price: 100,
            previous: 200
        };
        scope.title = 'the best';
        
        // Step 3: Create and set up our scope with the necessary variables.
        mockBackend.expectGET('../view/stock4.html').respond(
                '<div ng-bind="stockTitle"></div>' +
                '<div ng-bind="stockData.price"></div>');
        
        // Step 4: Determine the template to load because our server is mocked out. 
        var element = compile('<div stock-widget' +
                ' stock-data="myStock"' +
                ' stock-title="This is {{title}}"></div>')(scope);
        
        // Step 5: Instantiate an instance of our directive using the $compile service.
        scope.$digest();
        mockBackend.flush();
        
        // Step 6: Write our expectations for rendering and behavior
        expect(element.html()).toEqual(
                '<div ng-bind="stockTitle" class="ng-binding">' +
                'This is the best' +
                '</div>' +
                '<div ng-bind="stockData.price" class="ng-binding">' +
                '100' +
                '</div>');
    });
});