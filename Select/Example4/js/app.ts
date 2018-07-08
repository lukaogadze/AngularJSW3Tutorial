namespace Select.Example4 {
    interface IMyCtrl {
        cars: { model: string, color: string }[];
    }
    const app = angular.module("myApp", []);
    app.controller("myCtrl", function ($scope: IMyCtrl) {
        $scope.cars = [
            { model: "Ford Mustang", color: "red" },
            { model: "Fiat 500", color: "white" },
            { model: "Volvo XC90", color: "black" }
        ];
    });
}