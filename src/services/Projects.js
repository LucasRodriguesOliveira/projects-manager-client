import { API } from "./Api";

export async function listProjects(isSigned = false) {
  if(!isSigned) {
    return [];
  }

  return API.get('project');
}

export async function removeProject(id) {
  return API.delete(`/project/${id}`);
}

export async function createProject(data) {
  return API.post('/project', data);
}

export async function findProject(id) {
  return API.get(`/project/${id}`);
}

export async function updateStatus(id, isDone) {
  return API.patch(`/project/${id}`, { isDone });
}

export async function update(id, data) {
  return API.put(`/project/${id}`, data);
}
