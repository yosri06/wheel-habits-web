import LegalPage from "../components/LegalPage";
import { useContent } from "../i18n/context";
import { DELETE_ACCOUNT } from "../content/deleteAccount";

const DeleteAccount = () => <LegalPage content={useContent(DELETE_ACCOUNT)} />;

export default DeleteAccount;
