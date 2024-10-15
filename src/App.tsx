import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./views/home-page/HomePage";
import LoginPage from "./views/login-page/LoginPage";
import RegisterPage from "./views/register-page/RegisterPage";
import TemplatePersonalizedPage from "./views/template-personalized-page/TemplatePersonalizedPage";
import DashboardPage from "./views/dashboard-page/DashboardPage";
import CreateInvitationPage from "./views/create-invitaion-page/CreateInvitationPage";
import ViewCreateInvitationPage from "./views/view-create-invitation-page/ViewCreateInvitationPage";
import { getTemplatePersonalizedByDomain } from "./services/template-personalized/TemplateService";
import { ITemplatePersonalized } from "./interfaces/templatePersonalized.interfaces";
import LoadingPage from "./views/loading-page/LoadingPage";

function App() {
  const [templatePersonalized, setTemplatePersonalized] =
    useState<ITemplatePersonalized | null>(null);
  const [loading, setLoading] = useState(true);
  const isSubDomain = window.location.host.includes(".");

  useEffect(() => {
    const fetchTemplatePersonalized = async () => {
      const domain = window.location.host; // Get the current domain
      const template = await getTemplatePersonalizedByDomain(domain); // Fetch template by domain
      setTemplatePersonalized(template); // Set the template data into state
      setLoading(false); // Stop the loading state
    };

    fetchTemplatePersonalized();
  }, []);

  if (loading && isSubDomain) {
    return (
      <LoadingPage />
    )
  }

  if (templatePersonalized && !loading) {
    return (
      <Routes>
        <Route
          path="*"
          element={<TemplatePersonalizedPage template={templatePersonalized} />}
        />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/edit" element={<CreateInvitationPage />} />
        <Route path="/edit/view" element={<ViewCreateInvitationPage />} />
      </Routes>
    );
  }
}

export default App;
