const express = require('express');
const app = express()
const members = app.get('/api/members/')

console.log('members are')
console.log(members)

module.exports = members;