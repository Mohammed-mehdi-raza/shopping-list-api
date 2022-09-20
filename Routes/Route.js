import express from 'express';
import { data, home,login,signUp,getAllProduct,filter } from '../controllers/controller.js';

const Router=express.Router();

Router.get('/',home);
Router.post('/login',login);
Router.post('/signUp',signUp);
Router.get('/data',data);
Router.get('/products',getAllProduct);
Router.post('/filter',filter);

export default Router;