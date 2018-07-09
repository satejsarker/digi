import angular from 'angular';

import angularMeteor from 'angular-meteor';

import template from './todosList.html';
import {
    HTTP
} from 'meteor/http'


class TodosListCtrl {
    
    constructor() {

        HTTP.get('http://77.68.80.27:4010/marketplaceapi/landingrestaurantlist?&lat=51.7354&long=-0.315091&pageindex=1&pagesize=30', { /* options */ }, (error, res) => {
            if(error) throw error;        
        // this.value = (res.data.data);
        // console.log(this.value)
        this.tasks = [{

            text: 'This is task 1'

        }, {

            text: 'This is task 2'

        }, {

            text: 'This is task 3'

        }];
            }),


            


            
        console.log(this.value)
    }

}



export default angular.module('todosList', [

        angularMeteor

    ])

    .component('todosList', {

        templateUrl: 'imports/components/todosList.html',

        controller: TodosListCtrl

    });