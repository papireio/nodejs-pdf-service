import 'dotenv/config'

import { ServerCredentials, Server } from '@grpc/grpc-js'

import { serverImplementation } from './grpc'
import { NodePDFService } from './pkg'
import pkg from '../package.json'
;(function main() {
    const server = new Server()

    server.addService(NodePDFService, serverImplementation)
    server.bindAsync(`0.0.0.0:${process.env.PORT}`, ServerCredentials.createInsecure(), (error, port) => {
        if (error) {
            throw error
        }

        console.log(`${pkg.name}: is running on`, port)
        server.start()
    })
})()
