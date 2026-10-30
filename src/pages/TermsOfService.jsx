import LegalPage from "../components/LegalPage";
import { useContent } from "../i18n/context";
import { TERMS } from "../content/terms";

const TermsOfService = () => <LegalPage content={useContent(TERMS)} />;

export default TermsOfService;
