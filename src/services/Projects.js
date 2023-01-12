import { API } from "./Api";

export async function listProjects(isSigned = false) {
  if(!isSigned) {
    return [];
  }

  return API.get('project');
}