var apiHot = "http://localhost:3000/sanPhamHot";
var apiPhoBien = "http://localhost:3000/phoBien";
var apiCar = "http://localhost:3000/car";
var apiCharNu = "http://localhost:3000/charmeNu";
var apiCharNam = "http://localhost:3000/charmeNam";
var apiCharKid = "http://localhost:3000/charmeKid";
function homeCtrl($scope, $http, $routeParams) {

    $scope.idCharme = $routeParams.id;
    // SP HOT
    $scope.listHot = [];
    $http.get(apiHot).then(function (response) {
        $scope.listHot = response.data
    })
        .catch(function (e) {
            console.log(e)
        })

    // TimKiemPhoBien
    $scope.listPhoBien = [];
    $http.get(apiPhoBien).then(function (response) {
        $scope.listPhoBien = response.data
    })
        .catch(function (e) {
            console.log(e)
        })
    //  BanChayNhat
    $scope.listChay = [];
    $http.get("http://localhost:3000/banChay").then(function (response) {
        $scope.listChay = response.data
    })
        .catch(function (e) {
            console.log(e)
        })
    // Nam
    $scope.listNam = [];
    $http.get("http://localhost:3000/nam").then(function (response) {
        $scope.listNam = response.data
    })
        .catch(function (e) {
            console.log(e)
        })
    // Nu 
    $scope.listNu = [];
    $http.get("http://localhost:3000/nu").then(function (response) {
        $scope.listNu = response.data
    })
        .catch(function (e) {
            console.log(e)
        })
    // Tre
    $scope.listKid = [];
    $http.get("http://localhost:3000/tre").then(function (response) {
        $scope.listKid = response.data
    })
        .catch(function (e) {
            console.log(e)
        })
    // Car
    $scope.listCar = [];
    $http.get(apiCar).then(function (response) {
        $scope.listCar = response.data
    })
        .catch(function (e) {
            console.log(e)
        })
    // noiBat
    $scope.listNoiBat = [];
    $http.get("http://localhost:3000/noiBat").then(function (response) {
        $scope.listNoiBat = response.data
    })
        .catch(function (e) {
            console.log(e)
        })
    // CharmeNu
    $scope.listCharmeNu = [];
    $http.get(apiCharNu).then(function (response) {
        $scope.listCharmeNu = response.data
    })
        .catch(function (e) {
            console.log(e)
        })
    // CharmeNam
    $scope.listCharmeNam = [];
    $http.get(apiCharNam).then(function (response) {
        $scope.listCharmeNam = response.data
        console.log(response.data)
    })
        .catch(function (e) {
            console.log(e)
        })
    // CharmeKid
    $scope.listCharmeKid = [];
    $http.get(apiCharKid).then(function (response) {
        $scope.listCharmeKid = response.data
    })
        .catch(function (e) {
            console.log(e)
        })







    //Add
    $scope.charmeNam = {
        id: "",
        ten: "",
        gia: "",
        image: "",
    }
    $scope.charmeNu = {
        id: "",
        ten: "",
        gia: "",
        image: "",
    }
    $scope.charmeKid = {
        id: "",
        ten: "",
        gia: "",
        image: "",
    }

    $scope.add = function (event) {

        $http
            .post(apiCharNam, $scope.charmeNam)
            .then(function () {
                $scope.listCharmeNam.push($scope.charmeNam)
                alert("Thêm thành công")
            })
            .catch(function (e) {
                console.log(e)
            })
        // Nữ
        $http
            .post(apiCharNu, $scope.charmeNu)
            .then(function () {
                $scope.listCharmeNu.push($scope.charmeNu)
                alert("Thêm thành công")
            })
            .catch(function (e) {
                console.log(e)
            })
        // Kid
        $http
            .post(apiCharKid, $scope.charmeKid)
            .then(function () {
                $scope.listCharmeKid.push($scope.charmeKid)
                alert("Thêm thành công")
            })
            .catch(function (e) {
                console.log(e)
            })
    }
    // Delete 
    $scope.delete = function (event) {
        var idDelete = $scope.listCharmeNam[$scope.viTriHienTai].id;

        $http.delete(apiCharNam + "/" + idDelete)
            .then(function () {
                $scope.listCharmeNam.splice(event, 1);
                alert("Xóa Thành Công")
            })
            .catch(function (e) {
                console.log(e)
            })
        // Nữ
        var idDelete = $scope.listCharmeNu[$scope.viTriHienTai].id;

        $http.delete(apiCharNu + "/" + idDelete)
            .then(function () {
                $scope.listCharmeNu.splice(event, 1);
                alert("Xóa Thành Công")
            })
            .catch(function (e) {
                console.log(e)
            })
        // Kid
        var idDelete = $scope.listCharmeKid[$scope.viTriHienTai].id;

        $http.delete(apiCharKid + "/" + idDelete)
            .then(function () {
                $scope.listCharmeKid.splice(event, 1);
                alert("Xóa Thành Công")
            })
            .catch(function (e) {
                console.log(e)
            })
    }

    $scope.viTriHienTai = -1;
    //Phuong thuc select can sua
    $scope.selectNam = function (index) {
        var id = $scope.listCharmeNam[index].id;
        $scope.viTriHienTai = index;
        $http.get(apiCharNam + "/" + id)
            .then(function (data) {
                $scope.charmeNam = data.data;
            })
            .catch(function (e) {
                console.log(e);
            })

        // Kid
        var id = $scope.listCharmeKid[index].id;
        $scope.viTriHienTai = index;
        $http.get(apiCharKid + "/" + id)
            .then(function (data) {
                $scope.charmeKid = data.data;
            })
            .catch(function (e) {
                console.log(e);
            })
    }
    $scope.selectNu = function (index) {
        var id = $scope.listCharmeNu[index].id;
        $scope.viTriHienTai = index;
        $http.get(apiCharNu + "/" + id)
            .then(function (data) {
                $scope.charmeNu = data.data;
            })
            .catch(function (e) {
                console.log(e);
            })
    }
    $scope.edit = function (event) {
        // nút sửa
        console.log($scope.charmeNam);
        var id = $scope.listCharmeNam[$scope.viTriHienTai].id;
        $http.put(apiCharNam + "/" + id, $scope.charmeNam)
            .then(function () {
                $scope.viTriHienTai = -1;
                alert("Sửa Thành Công")
            })
            .catch(function (e) {
                console.log(e);
            })
        // Nữ
        console.log($scope.charmeNu);
        var id = $scope.listCharmeNu[$scope.viTriHienTai].id;
        $http.put(apiCharNu + "/" + id, $scope.charmeNu)
            .then(function () {
                $scope.viTriHienTai = -1;
                alert("Sửa Thành Công")
            })
            .catch(function (e) {
                console.log(e);
            })
        // Kid
        console.log($scope.charmeKid);
        var id = $scope.listCharmeKid[$scope.viTriHienTai].id;
        $http.put(apiCharKid + "/" + id, $scope.charmeKid)
            .then(function () {
                $scope.viTriHienTai = -1;
                alert("Sửa Thành Công")
            })
            .catch(function (e) {
                console.log(e);
            })
    }
}


