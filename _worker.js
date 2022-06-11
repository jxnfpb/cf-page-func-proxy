export default {
async fetch(request, env) {
const cars = [
"app1.example.com",
"app2.example.com",
"app3.example.com",
"app4.example.com",
"app5.example.com"
];
let host = cars[Math.floor(Math.random() * cars.length)]; //随机选择VPS
//let host = cars[new Date().getDate() % cars.length]; //每天自动更换VPS

let url = new URL(request.url);
if (url.pathname.startsWith('/')) {
url.hostname = host;
let new_request = new Request(url,request);
return fetch(new_request);
}
return env.ASSETS.fetch(request);
}
};
