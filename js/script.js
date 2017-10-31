angular.module("myApp", []);
var app = angular.module("myApp");
app.filter('textToLink', function ($sce) {
    var urlPattern = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/gi;
    return function (text) {
        var htmlData = text.replace(urlPattern,
            '<a target="_blank" href="$&">$&</a>');
        return $sce.trustAsHtml(htmlData);
    };
});

app.controller('myWall', ['$scope', '$http', function ($scope, $http) {
                document.getElementById('updateBox').focus();
                $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
                $http({
                    method: "POST",
                    url: "Api",
                    data: ""
                }).then(function (response) {
                    $scope.updatesData = response.data.updates;
                });
                $scope.commentForm = {};
                $scope.commentToggle = function (index) {
                    $scope.commentForm[index] = !$scope.commentForm[index];
                    $timeout(function () {
                        document.getElementById('commenInput' + index).focus();
                    }, 200);
                }
                $scope.updateFeed = function () {
                    if ($scope.feedValue) {
                        $http({
                            method: "POST",
                            url: "Publicar",
                            data: 'user_update=' + $scope.feedValue
                        }).then(function (response) {
                            $scope.updatesData.unshift(response.data.updates[0]);
                            $scope.feedValue = "";
                            document.getElementById('updateBox').focus();
                        })
                        /* .catch(function(error){ 
                             console.log(error)
                         }); COMENTE EL COD QUE ME DICTO*/
                    }
                }
                $scope.deleteFeed = function (updateID, index) {
                    if (updateID > 0) {
                        $http({
                            method: "POST",
                            url: "Borrar Publicacion NUESTRA APIS",
                            data: 'updateID=' + updateID
                        }).then(function (response) {
                            if (response) {
                                $scope.updatesData.splice(index, 1);
                            }
                        });
                    }
                }
                $scope.updateComment = function (commentSubmitData, index, updateID) {
                    if (commentSubmitData.commentValue) {
                        $http({
                            method: "POST",
                            url: "PublicarComentario NUESTRA APIS",
                            data: 'updateID=' + updateID + '&user_comment=' + commentSubmitData.commentValue
                        }).then(function (response) {
                            $scope.updatesData[index].comments.push(response.data.comments[0]);
                            commentSubmitData.commentValue = '';
                            document.getElementById('commenInput' + index).focus();
                        });
                    }
                }
                $scope.deleteComment = function (commentIndex, parentIndex, updateID, commentID) {
                    if (updateID > 0) {
                        $http({
                            method: "POST",
                            url: "BorrarComentario NUESTRA APIS",
                            data: 'updateID=' + updateID + '&commentID=' + commentID
                        }).then(function (response) {
                            if (response) {
                                $scope.updatesData[parentIndex].comments.splice(commentIndex, 1);
                            }
                        });
                    }
                }


            }]);