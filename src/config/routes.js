const express = require('express')

module.exports = function(server) {

    // Setting a basic URL that all routes can access
    const router = express.Router()
    server.use('/api', router)

    // Billing cycle routes
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')

}