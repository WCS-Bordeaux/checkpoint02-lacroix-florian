"use strict";

angular.module("wildNoteApp", [
    // les dépendances externes
    "ui.router",
    "ngResource"
])
    .config(
        function($stateProvider, $urlRouterProvider) {
            var states = [
                {
                    name: "home",
                    url: "/",
                    component: "home"
                }
            ];
            $urlRouterProvider.otherwise("/zergling");
            states.forEach(function(state) {
                $stateProvider.state(state);
            })
        });