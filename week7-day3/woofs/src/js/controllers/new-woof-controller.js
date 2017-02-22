app.controller('NewWoofController', function($state, StorageService) {
    this.maxTextLength = 120;
    this.allWoofsArray = [];
    this.create = function(woofMessage) {
        this.allWoofsArray = StorageService.get('all-woofs');

        let woofObj = {
            body: woofMessage,
            starred: false,
            id: Date.now()
        };

        this.allWoofsArray.push(woofObj);
        StorageService.set('all-woofs', this.allWoofsArray);
        $state.go('woofParent.listWoofs');
    };
});
