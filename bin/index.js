var https = require('https')
var querystring = require('querystring')

var arguments = process.argv.splice(2, process.argv.length -1).join(' ')
var search    = querystring.stringify({ address: arguments })

https
  .get('https://maps.googleapis.com/maps/api/geocode/json?' + search, function(res){
    var data = ''
  
    res.on('data', function(newData){
      data += newData
    });

   res.on('end', function(){

      var location = JSON.parse(data).results[0].geometry.location
      var options = querystring.stringify({ units: 'si', lang: 'pt' })
      console.log(location)
      console.log(options)
    })
  })