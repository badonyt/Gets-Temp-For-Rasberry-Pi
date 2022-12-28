//@ts-ignore
const http = require('http');

function get_body_of_url(url: string, port: number, path: string = '/') {
  //@ts-ignore
  let options: any;
  if (typeof port == 'number') {  
    options = {
      host: url,
      port: port,
      path: path,
      method: 'GET'
    };
  }else{
    options = {
      host: url,
      path: path,
      method: 'GET'
    };
  }


  const req = http.request(options, (res: any) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', (d: string) => {
      //@ts-ignore
      process.stdout.write("Temperature of rasberry pi is " + d);
    });
  });

  req.on('error', (error: any) => {
    console.error(error);
  });

  req.end();

}

get_body_of_url("localhost", 3000)