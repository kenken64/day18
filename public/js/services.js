(function() {
  angular.module("ShoppingCartApp")
    .service("CartService", CartService)

  CartService.$inject = ["$http", "$q"]

  function CartService($http, $q) {
      this.refreshCart = function(userId) {
          var defer = $q.defer()

          $http.get("/api/cart/refresh", {params: {
            userId: userId
          }})
            .then(function(results) {
                return defer.resolve(results.data)
            })
            .catch(function(err) {
                return defer.reject(err)
            })

          return defer.promise
      }

      this.addToCart = function(item) {
          var defer = $q.defer()

          $http.post("/api/cart/add", item)
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
