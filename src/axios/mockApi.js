import axios from './axios';
import mockAdapter from 'axios-mock-adapter';
let schoolRange = require('../data/school_range.json');
let schoolArea = require('../data/school_area.json');
let overAll = require('../data/overall.json');
let major = require('../data/major.json');

var mocker =new mockAdapter (axios);
mocker.onGet('/chooseExam/selectedConditions').reply(200,{
    msg:'',
    result:1234567890,
    success:"true",
    state:1000
})
mocker.onGet('src/data/school_range.json').reply(200, schoolRange);
mocker.onGet('src/data/school_area.json').reply(200, schoolArea);
mocker.onGet('src/data/major.json').reply(200, major);
