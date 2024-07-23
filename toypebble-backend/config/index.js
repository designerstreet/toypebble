module.exports = {
    port: process.env.PORT,
    local_frontend_app: process.env.LOCAL_FRONTEND_APP,
    remote_frontend_app: process.env.REMOTE_FRONTEND_APP,
    allowedDomains: (
        process.env.NODE_ENV === 'production' ?
        [
            process.env.REMOTE_FRONTEND_APP,
            process.env.REMOTE_SERVER_API,
        ] : [
            process.env.LOCAL_FRONTEND_APP,
            process.env.LOCAL_SERVER_API
        ]
    )
};