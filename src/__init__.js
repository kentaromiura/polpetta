
// need some help ?
if (/^--?h(?:elp)?$/i.test(arguments[0])) {
  help();
}
// need some folder ?
else {
  fs.stat(polpetta.root, function (err, stats) {
    if (err || !stats.isDirectory()) {
      help();
    } else {
      // require(path.join(p.root, "test.njs"));
      serverListen(server.on("error", serverListen.error));
    }
  });

}