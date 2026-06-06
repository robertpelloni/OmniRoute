"use client";

import { useState, useCallback } from "react";
<<<<<<< HEAD
=======
import PropTypes from "prop-types";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
import OAuthModal from "./OAuthModal";
import KiroAuthModal from "./KiroAuthModal";
import KiroSocialOAuthModal from "./KiroSocialOAuthModal";

<<<<<<< HEAD
type KiroOAuthWrapperProps = {
  isOpen: boolean;
  providerInfo?: { id?: string; name?: string } | null;
  onSuccess?: () => void;
  onClose: () => void;
  reauthConnection?: null | { id?: string };
};

=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
/**
 * Kiro OAuth Wrapper
 * Orchestrates between method selection, device code flow, and social login flow
 */
<<<<<<< HEAD
export default function KiroOAuthWrapper({
  isOpen,
  providerInfo,
  onSuccess,
  onClose,
  reauthConnection,
}: KiroOAuthWrapperProps) {
=======
export default function KiroOAuthWrapper({ isOpen, providerInfo, onSuccess, onClose }) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  const [authMethod, setAuthMethod] = useState(null); // null | "builder-id" | "idc" | "social" | "import"
  const [socialProvider, setSocialProvider] = useState(null); // "google" | "github"
  const [idcConfig, setIdcConfig] = useState(null);

  const handleMethodSelect = useCallback(
    (method, config) => {
      if (method === "builder-id") {
        // Use device code flow (AWS Builder ID)
        setAuthMethod("builder-id");
      } else if (method === "idc") {
        // Use device code flow with IDC config
        setAuthMethod("idc");
        setIdcConfig(config);
      } else if (method === "social") {
        // Use social login with manual callback
        setAuthMethod("social");
        setSocialProvider(config.provider);
      } else if (method === "import") {
        // Import handled in KiroAuthModal, just close
        onSuccess?.();
      }
    },
    [onSuccess]
  );

  const handleBack = () => {
    setAuthMethod(null);
    setSocialProvider(null);
    setIdcConfig(null);
  };

  const handleSocialSuccess = () => {
    setAuthMethod(null);
    setSocialProvider(null);
    onSuccess?.();
  };

  const handleDeviceSuccess = () => {
    setAuthMethod(null);
    setIdcConfig(null);
    onSuccess?.();
  };

  // Show method selection first
<<<<<<< HEAD
  const oauthProviderId = providerInfo?.id || "kiro";
  const providerLabel = providerInfo?.name || "Kiro";

  if (!authMethod) {
    return (
      <KiroAuthModal
        isOpen={isOpen}
        providerId={oauthProviderId}
        providerLabel={providerLabel}
        onMethodSelect={handleMethodSelect}
        onClose={onClose}
      />
    );
=======
  if (!authMethod) {
    return <KiroAuthModal isOpen={isOpen} onMethodSelect={handleMethodSelect} onClose={onClose} />;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  }

  // Show device code flow (Builder ID or IDC)
  if (authMethod === "builder-id" || authMethod === "idc") {
    return (
      <OAuthModal
        isOpen={isOpen}
<<<<<<< HEAD
        provider={oauthProviderId}
        providerInfo={providerInfo}
        onSuccess={handleDeviceSuccess}
        reauthConnection={reauthConnection}
=======
        provider="kiro"
        providerInfo={providerInfo}
        onSuccess={handleDeviceSuccess}
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
        onClose={handleBack}
        idcConfig={idcConfig}
      />
    );
  }

  // Show social login flow (Google/GitHub with manual callback)
  if (authMethod === "social" && socialProvider) {
    return (
      <KiroSocialOAuthModal
        isOpen={isOpen}
        provider={socialProvider}
<<<<<<< HEAD
        providerLabel={providerLabel}
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
        onSuccess={handleSocialSuccess}
        onClose={handleBack}
      />
    );
  }

  return null;
}
<<<<<<< HEAD
=======

KiroOAuthWrapper.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  providerInfo: PropTypes.shape({
    name: PropTypes.string,
  }),
  onSuccess: PropTypes.func,
  onClose: PropTypes.func.isRequired,
};
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
