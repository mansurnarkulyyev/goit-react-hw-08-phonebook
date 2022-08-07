import HomePage from "pages/HomePage";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "shared/components/PrivateRoute";
import PublikRoute from "shared/components/PublikRoute";

const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));


function UserRoutes() {
    return (
        <Suspense fallback={<p>...Loading page</p>}>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path={"/contacts"} element={<ContactsPage />} />
                </Route>
                <Route element={<PublikRoute />}>
                    <Route path={"/"} element={<HomePage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}

export default UserRoutes;
