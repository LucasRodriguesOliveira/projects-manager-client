import {
  createBrowserRouter
} from 'react-router-dom';
import { HomeRoute } from './pages/Home/route';
import { LoginRoute } from './pages/Login/route';
import { RegisterRoute } from './pages/Register/route';
import { ProjectRoute } from './pages/Project/route';
import { NewProjectRoute } from './pages/Project/New-Project/route';

export const router = createBrowserRouter([
  HomeRoute,
  LoginRoute,
  RegisterRoute,
  ProjectRoute,
  NewProjectRoute,
]);