const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Francisco Javier',
            edad: 39,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        res.end();

    })
    .listen(8080);

console.log("Escucando el puerto 8080");