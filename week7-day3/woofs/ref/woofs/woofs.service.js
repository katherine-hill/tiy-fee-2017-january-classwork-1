angular.module('woof').service('Woofs', function ($q, Woof, localStorageService) {
  function getWoofs () {
    return localStorageService.get('woofs') || [];
  }

  function setWoofs (woofs) {
    localStorageService.set('woofs', woofs);
  }

  function findWoofById (woofs, id) {
    var toReturn;
    woofs.forEach(function (woof) {
      if (woof.id === id) {
        toReturn = woof;
      }
    })
    return toReturn;
  }

  this.toggleStar = function (woof) {
    var isPreviouslyStarred = woof.starred;
    woof.starred = !isPreviouslyStarred;

    if (isPreviouslyStarred) {
      woof.starCount = woof.starCount - 1;
    } else {
      woof.starCount = woof.starCount + 1;
    }

    var woofs = getWoofs();
    var woofToUpdate = findWoofById(woofs, woof.id);
    angular.copy(woof, woofToUpdate);
    setWoofs(woofs);
  };

  this.fetch = function () {
    return $q.when(getWoofs());
  };

  this.create = function (woofText) {
    var woofs = getWoofs();
    woofs.push(new Woof({
      body: woofText
    }));
    return setWoofs(woofs);
  };
});
