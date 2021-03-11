const config={
    production :{
        SECRET: process.env.SECRET,
    
    },
    default : {
        SECRET: 'mysecretkey',
    }
}

exports.get = function get(env){
    return config[env] || config.default
}