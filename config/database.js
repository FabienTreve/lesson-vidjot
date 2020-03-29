if(process.env.NODE_ENV === "production"){
    module.exports = {mongoURI : 'mongodb+srv://FabienT:623ukJKRGtGAewYW@clusterftr-wrdqy.mongodb.net/test?retryWrites=true&w=majority&keepAlive=true&poolSize=30&autoReconnect=true&socketTimeoutMS=360000&connectTimeoutMS=360000'}
} else {
    //module.exports = {mongoURI : 'mongodb://localhost/vidjot-dev'}
    module.exports = {mongoURI : 'mongodb+srv://FabienT:623ukJKRGtGAewYW@clusterftr-wrdqy.mongodb.net/test?retryWrites=true&w=majority&keepAlive=true&poolSize=30&autoReconnect=true&socketTimeoutMS=360000&connectTimeoutMS=360000'}
}