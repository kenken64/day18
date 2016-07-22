(function() {
  angular.module("ShoppingCartApp")
    .service("CartService", CartService)

  CartService.$inject = ["$http", "$q"]

  function CartService($http, $q) {
      this.refreshCart = function() {
          var defer = $q.defer()

          $http.get("/api/cart/refresh")
            .then(function(results) {
                return defer.resolve(results.data)
            })
            .catch(function(err) {
                return defer.reject(err)
            })

          return defer.promise
      }

      this.addToCart = function() {
          var defer = $q.defer()

          $http.post("/api/cart/add")
            .then(function(results) {
                return defer.resolve(results.data)
            })
            .catch(function(err) {
                return defer.reject(err)
            })

          return defer.promise
      }

      this.checkout = function() {
          var defer = $q.defer()

          $http.post("/api/cart/checkout")
            .then(function(results) {
                return defer.resolve(results.data)
            })
            .catch(function(err) {
                return defer.reject(err)
            })

          return defer.promise
      }
  }
})()
