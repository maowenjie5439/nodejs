const cookieParser = require("cookie-parser");
module.exports = (req, resp, next) => {
    console.log('[loginInterceptor]req.baseUrl: ', req.baseUrl)
    console.log('[loginInterceptor]req.path: ', req.path)
    const needLoginApi = ["/api/stu"];
    console.log('req.baseUrl:', req.baseUrl)
    console.log('req.session:', req.session)
    console.log('req.cookies:', req.cookies)
    console.log('req.signedCookies:', req.signedCookies)
    
    if (needLoginApi.some(api => req.path.startsWith(api))) {
        // console.log(JSON.parse(req.cookies))
        if (req.signedCookies.id && req.signedCookies.id === "007") {
            console.log("已登录");
            next();
        } else {
            console.log("未登录");
            //TODO 这里应该重定向到登录页面
            resp.send("请先登录");
        }
    } else {
        next();
    }
};
