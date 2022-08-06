import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));


function UserRoutes() {
    return (
        <Suspense fallback={<p>...Loading page</p>}>
            <Routes>
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}

export default UserRoutes;
