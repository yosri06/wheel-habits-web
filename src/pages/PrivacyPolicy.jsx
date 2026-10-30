import LegalPage from "../components/LegalPage";
import { useContent } from "../i18n/context";
import { PRIVACY } from "../content/privacy";

const PrivacyPolicy = () => <LegalPage content={useContent(PRIVACY)} />;

export default PrivacyPolicy;
