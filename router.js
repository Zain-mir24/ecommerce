const express = require('express');
const router = express.Router();
const adminRoutes = require('./modules/AdminModule/routes');
const orderRoutes = require('./modules/ordermodule/routes')

router.use('/admin', adminRoutes);
router.use('/adminorder',orderRoutes);

module.exports = router;
