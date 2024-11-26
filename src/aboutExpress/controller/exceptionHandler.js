module.exports = (err, req, resp, next) => {
    if(err){
        resp.status(500).send({
            code: 1,
            message: err.message
        })
    }else{
        next()
    }
}