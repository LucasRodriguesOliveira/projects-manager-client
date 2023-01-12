import { EditProject } from ".";
import { ProtectedPage } from "../../../components/ProtectedPage";

export const EditProjectRoute = {
  path: '/project/:id/edit',
  element: <ProtectedPage><EditProject /></ProtectedPage>
}