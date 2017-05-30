'use strict';

angular.module('wildNoteApp')

    .component('questions', {
        templateUrl: '/app/components/questions/questions.html',
        controller: Questions
    });

function Questions() {
    this.questionnaire = {
        a: {
            q: 'Pourquoi utiliser $resource dans angular plutôt que $http ?',
            r: '$resource inclue des fonctions génériques (get, query, save...) permettant d\'exploiter plus simplement une API REST basée sur le protocole http'
        },
        b: {
            q: 'C\'est quoi la différence entre front-end et back-end en fait ?',
            r: 'Front-end: partie de l\'application exécutée côté client (navigateur ou appli mobile par ex.)<br>Back-end: partie exécutée côté serveur (serveur, bdd)'
        },
        c: {
            q: 'Pourquoi je peux pas utiliser document.getElementById dans NodeJS ?',
            r: 'Car Node est exécuté sur le serveur, Node n\a pas accés au DOM'
        },
        d: {
            q: 'Pourquoi c\'est très grave d\'utiliser document.getElementById dans AngularJS ?',
            r: '...'
        },
        e: {
            q: 'C\'est quoi la différence entre NodeJS et Javascript ?',
            r: 'NodeJS est une librairie ou framework qui utilise le langage Javascript'
        },
        f: {
            q: ' En quoi c\'est utile d\'utiliser npm ?',
            r: 'Centralisation des packages à installer, simplification du déploiement, gestion d\'environnements distincts pour le dev et la prod'
        },
        g: {
            q: 'A quoi ça sert une base de donnée ? Et mongoDB ?',
            r: 'Stockage et organisation des données exploitées par l\'application. MongoDB est une base de donnée orientée document'
        },
        h: {
            q: 'Est-il possible de faire des relations entre plusieurs collections ? Est-ce une bonne pratique ?',
            r: 'Oui c\'est possible et souvent nécessaire'
        },
        i: {
            q: 'C\'est quoi un document dans mongoDB ? et une collection au final',
            r: 'Un document est l\'équivalent d\'une base de donnée, une collection l\'équivalent d\'une table'
        },
        j: {
            q: 'Quelle serai la requête qui me permettrai d\'aller chercher dans ma db "toto" dans la collection "tata" l\'utilisateur ayant pour nom "titi" ?',
            r: 'toto.tata.find( { nom: "titi" } )'
        },
        k: {
            q: 'Est-il plus important de sécuriser le client ou le serveur ? Pourquoi ?',
            r: 'Le serveur avant tout, car il n\'est de toute façon pas possible d\'assurer une sécurité sérieuse côté client'
        },
        l: {
            q: 'Pourquoi [1, 2, 3, () => "boom"][Number(true) + 2]() === "boom" ? Expliquez le plus précisément possible.',
            r: 'Number(true) + 2 = 3<br>[1, 2, 3, () => "boom"][3] = boom'
        },
        m: {
            q: 'Cite 3 directives angularjs.',
            r: 'ng-repeat, ng-show/ng-hide, ng-click'
        }
    }
}
