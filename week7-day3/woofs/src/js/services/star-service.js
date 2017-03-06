app.service('StarService', function(StorageService) {
    function findWoofById(woofsArray, id) {
        let matchedWoof;
        woofsArray.forEach((loneWoof) => {
            if (loneWoof.id === id) {
                matchedWoof = loneWoof;
            }
        });
        return matchedWoof;
    }

    function updateStarValue(woofObj) {
        woofObj.starred = !woofObj.starred;
        let allWoofsArray = StorageService.get('all-woofs');
        let woofToUpdate = findWoofById(allWoofsArray, woofObj.id);

        angular.copy(woofObj, woofToUpdate);

        StorageService.set('all-woofs', allWoofsArray);
    }

    return {
        update: updateStarValue
    };
});
