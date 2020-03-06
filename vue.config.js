module.exports = {
    pages: {
        index: "src/client/src/main.js"
    },
    devServer: {
        // 代理跨域
        proxy: {
            "/api": {
                target: "http://localhost:3333",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": '/api'
                }
            }
        }
    }

}