import { useRoutes } from 'react-router-dom';
import { MainRoutes, LoginRoutes } from './MainRoutes';

export default function ThemeRoutes() {
    return useRoutes([MainRoutes, LoginRoutes]);
}
