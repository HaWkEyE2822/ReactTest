const API = {
    development: {
        AUTH_URL: 'http://localhost:9001/auth'
    }
}

export default API[process.env.NODE_ENV || 'development'];