import express from 'express';

import CalendarificController from '../controllers';

const router = express.Router();

router.get('/holidays', CalendarificController.getHolidays);

router.get('/countries', CalendarificController.getCountries);

export default router;
