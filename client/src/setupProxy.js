const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    ["/api/*"],
    createProxyMiddleware({
      target: "http://localhost:4000",
      // target: "https://safe-gorge-29170.herokuapp.com",
      // headers: {
      //   Connection: "keep-alive",
      // },
      // followRedirects: true,
      changeOrigin: true,
    })
  );
};
