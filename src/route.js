var myApp = angular.module("myApp", ["ngRoute"]);
//Cấu hình chuyển nội dung trang
myApp.config(function ($routeProvider, $locationProvider){
    //Xóa khoảng trắng
    $locationProvider.hashPrefix("");
    //Chuyển trang
    $routeProvider
    .when("/home", {
        templateUrl: "./pages/TrangChu.html",
        controller:"homeCtrl"
    })
    .when("/GioiThieu", {
        templateUrl: "./pages/GioiThieu.html",    
        controller:"homeCtrl"
    })
    .when("/LienHe", {
        templateUrl: "./pages/LienHe.html"
    })
    .when("/CuaHang", {
        templateUrl: "./pages/CuaHang.html",
        controller:"homeCtrl"
    })
    .when("/login", {
        templateUrl: "./pages/DangNhap_DKy.html"
    })
    .when("/Car", {
        templateUrl: "./pages/Car.html",
        controller:"homeCtrl"
    })
    .when("/nu", {
        templateUrl: "./pages/nu.html",
        controller:"homeCtrl"
    })
    .when("/nam", {
        templateUrl: "./pages/nam.html",
        controller:"homeCtrl"
    })
    .when("/kid", {
        templateUrl: "./pages/kid.html",
        controller:"homeCtrl"
    })
    .when("/TinTuc", {
        templateUrl: "./pages/TinTuc.html"
    })
    .when("/CharmeNu", {
        templateUrl: "./pages/CharmeNu.html",
        controller:"homeCtrl"
    })
    .when("/CharmeNam", {
        templateUrl: "./pages/CharmeNam.html",
        controller:"homeCtrl"
    })
    .when("/CharmeMyPham", {
        templateUrl: "./pages/CharmeMyPham.html",
        controller:"homeCtrl"
    })
    .when("/CharmeKid", {
        templateUrl: "./pages/CharmeKid.html",
        controller:"homeCtrl"
    })
    .when("/CharmeCar", {
        templateUrl: "./pages/CharmeCar.html",
        controller:"homeCtrl"
    })
    .when("/ShoppingCart", {
        templateUrl: "./pages/ShoppingCart.html",
        controller: "gioHang"
    })
    .when("/forgot_password", {
        templateUrl: "./pages/forgot_password.html"
    })
    .when("/detailSP1", {
        templateUrl: "./pages/detailSP1.html"
    })
    .when("/detailSP2", {
        templateUrl: "./pages/detailSP2.html"
    })
    .when("/GoodCharme", {
        templateUrl: "./pages/GoodCharme.html"
    })
    .otherwise({ 
        //Chạy trang nào đầu tiên thì đưa vào otherwise
        redirectTo: "/home"
    })
});
myApp.controller("homeCtrl",homeCtrl);