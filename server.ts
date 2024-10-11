import Fastify from 'fastify'
import {app} from "@/app";



app.listen({ port: 3030, host: '0.0.0.0' }, function (err, address) {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
    app.log.info(`server listening on ${address}`)
})