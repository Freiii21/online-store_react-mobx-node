import React, {useContext} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from 'routes';
import { ROUTES } from 'utils/constants';
import { UserContext} from 'App';
import { User } from 'types/user';

export const AppRouter: React.FC = () => {
    const { user } = useContext(UserContext) as User;

    return (
        <Routes>
            <Route path="/" element={<Navigate to={ROUTES.SHOP}/>} />

            {user.isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component/>} />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component/>} />
            )}

            <Route path="*" element={<Navigate to={ROUTES.SHOP}/>} />
        </Routes>
    );
};
