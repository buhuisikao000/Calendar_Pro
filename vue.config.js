module.exports = {
    
    devServer: {

        //该文件中的 overlay 和 lintOnSave 配置的作用: 关闭eslint检查
        //同时需要把package.json文件中eslitConfig的
        //"root"和"node"也改为false
        overlay: {
            warning: false,
            errors: false
        },

        //配置 反向代理,处理跨域
        proxy:{
            "/api": {
                target: "http://v.juhe.cn/",
                changeOrigin: true,
                ws: true,
                secure: false,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },
    lintOnSave: false
}