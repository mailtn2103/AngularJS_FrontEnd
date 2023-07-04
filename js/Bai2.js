function gioiThieuController($scope, $routeParams) {
    // $routeParam dùng để lấy tham số từ url
    $scope.message = "Đây là trang giới thiệu của " + $routeParams.name;
    $scope.sanPham  = [
        {id: 1,ten: "iphone",
        gia: 13},
        {id:2,ten: "sumsung",
        gia: 25}
    ];
    var myApp = angular.module("myModule", []);

        myApp.controller("myController", function ($scope) {


            $scope.tong = function () {
                $scope.finalSum = Number.parseInt($scope.number1) * 13 + Number.parseInt($scope.number2) * 9
            }

        });
}