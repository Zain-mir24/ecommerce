const express = require('express');
const router = express.Router();
const adminRoutes = require('./modules/adminmodule/routes');
const orderRoutes = require('./modules/ordermodule/routes')

router.use('/admin', adminRoutes);
router.use('/adminorder',orderRoutes);

module.exports = router;
