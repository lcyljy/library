import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://data4library.kr/api/",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
