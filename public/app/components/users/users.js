'use strict';

angular.module('wildNoteApp')

    .component('users', {
        templateUrl: '/app/components/users/users.html',
        controller: Users
    });

function Users(AllUsers, UserNotes) {

    let th = this;
    // get all users with resp. notes
    let users = AllUsers.query();

    users.$promise.then( function(data) {
        th.users = data;

    });

}

