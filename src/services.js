import $ from 'jquery';
import envKeys from './.envKeys.js';
import * as actions from './actions';

var hash = envKeys.hash;
var apiKey = envKeys.apiKey;

export function getCharas(offset){
    return $.ajax({
        url : envKeys.BASE_URL+'/v1/public/characters?offset='+offset+'&ts=1&apikey='+apiKey+'&hash='+hash,
        type : 'GET',
        contentType: 'text/html'
    })
}

export function getCharasById(id){
    return $.ajax({
        url : envKeys.BASE_URL+'/v1/public/characters/'+id+'?ts=1&apikey='+apiKey+'&hash='+hash,
        type : 'GET'
    })
}