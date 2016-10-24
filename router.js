function route(handle, pathname, response) {
  console.log('About to route a request for ' + pathname);
  if (typeof handle[pathname] === 'function') {
    return handle[pathname](response);
  } else {
    console.log('No request handler found for ' + pathname);
    reponse.writeHead(404, {'Content-Type': 'text/plain'});
    reponse.write('404 Not found');
    reponse.end();
  }
}

exports.route = route;