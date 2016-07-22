(function() {
    angular.module("ShoppingCartApp")
      .controller("CartCtrl", CartCtrl)

    CartCtrl.$inject = ["CartService"]

    function CartCtrl(CartService) {
        var vm = this

        vm.newItem = {}
        vm.cart = []
        vm.msg = ""

        vm.addToCart = function() {

            CartService.addToCart(vm.newItem)
              .then(function() {
                  vm.msg = "Item was added to cart successfully"
              })
              .catch(function() {
                  vm.msg = "There was some problem adding item to cart"
              })
        }

        vm.refreshCart = function() {
            CartService.refreshCart(vm.newItem.userId)
              .then(function(items) {
                  vm.cart = items
              })
              .catch(function() {
                  vm.msg = "Error fetching your cart!"
              })
        }

        vm.checkout = function() {
            CartService.checkout()
              .then(function() {
                  vm.msg = "Checked out cart!"
              })
              .catch(function() {
                  vm.msg = "Error fetching your cart!"
              })
        }
    }
})()
