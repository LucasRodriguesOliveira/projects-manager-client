import { NewProject } from ".";
import { ProtectedPage } from "../../../components/ProtectedPage";

export const NewProjectRoute = {
  path: '/new-project',
  element: <ProtectedPage><NewProject /></ProtectedPage>
};
