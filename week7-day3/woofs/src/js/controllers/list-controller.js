app.controller('ListController', function(StorageService, StarService, $stateParams) {
    this.allWoofs = StorageService.get('all-woofs');
    this.toggleStar = function(woofObj) {
        StarService.update(woofObj);
    };

    this.listFilter = $stateParams.filter || 'all';
    this.filterObj = {
        all: {},
        starred: {
            starred: true
        }
    };
});
