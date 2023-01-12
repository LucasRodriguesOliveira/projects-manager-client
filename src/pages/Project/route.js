import { Project } from ".";
import { ProtectedPage } from "../../components/ProtectedPage";

export const ProjectRoute = {
  path: '/project',
  element: <ProtectedPage><Project /></ProtectedPage>
};
