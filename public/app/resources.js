"use strict";

angular.module("wildNoteApp")
    // return all users and their notes
    .factory("AllUsers", function($resource) {
        return $resource('/all-users');
    })
    // return all notes of an user
    .factory("UserNotes", function($resource) {
        return $resource('/user-notes/:id', {id : '@id'});
    })
    // // return a specified ninja
    // .factory("Ninja", function($resource) {
    //     return $resource('/ninja/:id', {id: '@id'},
    //         {
    //             // save a specified ninja
    //             save: {
    //                 method:'POST',
    //                 params: {
    //                     ninja: '@ninja'
    //                 }
    //             }
    //         });
    // })
    // // save a specified ninja
    // .factory("SaveNinja", function($resource) {
    //     return $resource('/ninja/:id/save', { id: '@id' });
    // });