// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import salonAppointmentReducer from '../features/salon/salonAppointmentSlice';
import salonContactReducer from '../features/salon/salonContactSlice';
import salonBlogReducer from '../features/salon/salonBlogSlice';

import clinicAppointmentReducer from '../features/clinic/clinicAppointmentSlice';
import clinicContactReducer from '../features/clinic/clinicContactSlice';
import clinicBlogReducer from '../features/clinic/clinicBlogSlice';

export const store = configureStore({
  reducer: {
    salonAppointment: salonAppointmentReducer,
    salonContact: salonContactReducer,
    salonBlog: salonBlogReducer,

    clinicAppointment: clinicAppointmentReducer,
    clinicContact: clinicContactReducer,
    clinicBlog: clinicBlogReducer,
  },
});
