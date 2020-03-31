if(process.env.NODE_ENV === "production"){
    //module.exports = {mongoURI : 'mongodb+srv://FabienT:TODtNi8rldnwQ6x9@clusterftr-wrdqy.mongodb.net/test?retryWrites=true&w=majority'}
    module.exports = {mongoURI : 'mongodb://FabienT:TODtNi8rldnwQ6x9@clusterftr-shard-00-00-wrdqy.mongodb.net:27017,clusterftr-shard-00-01-wrdqy.mongodb.net:27017,clusterftr-shard-00-02-wrdqy.mongodb.net:27017/test?ssl=true&replicaSet=ClusterFTR-shard-0&authSource=admin&retryWrites=true&w=majority'}
} else {
    //module.exports = {mongoURI : 'mongodb://localhost/vidjot-dev'}
    //module.exports = {mongoURI : 'mongodb+srv://FabienT:TODtNi8rldnwQ6x9@clusterftr-wrdqy.mongodb.net/test?retryWrites=true&w=majority'}
    module.exports = {mongoURI : 'mongodb://FabienT:TODtNi8rldnwQ6x9@clusterftr-shard-00-00-wrdqy.mongodb.net:27017,clusterftr-shard-00-01-wrdqy.mongodb.net:27017,clusterftr-shard-00-02-wrdqy.mongodb.net:27017/test?ssl=true&replicaSet=ClusterFTR-shard-0&authSource=admin&retryWrites=true&w=majority'}
}