if(process.env.NODE_ENV === "production"){
    module.exports = {mongoURI : 'mongodb+srv://FabienT:623ukJKRGtGAewYW@clusterftr-wrdqy.mongodb.net/test'}
} else {
    module.exports = {mongoURI : 'mongodb://localhost/vidjot-dev'}
}