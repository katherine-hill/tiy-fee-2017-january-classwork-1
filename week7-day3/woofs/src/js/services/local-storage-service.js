app.service('StorageService', StorageService);

function StorageService(localStorageService) {
    function set(name, data) {
        localStorageService.set(name, data);
    }

    function get(name) {
        return localStorageService.get(name) || [];
    }

    return {
        set: set,
        get: get
    };
}
