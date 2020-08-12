const body = document.querySelector('body')
var data = sessionStorage.getItem('data')

var now = new Date()

var diff = data - now

var d, h, m, s 


d = Math.round((diff/(1000*60*60*24)*(-1)))
h = Math.round((diff/(1000*60*60)*(-1)))
m = Math.round((diff/(1000*60)*(-1)))
s = Math.round((diff/(1000)*(-1)))


