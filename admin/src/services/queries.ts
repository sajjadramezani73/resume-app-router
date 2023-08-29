import service from './Api'

export const getAbout = async () => {
  const res = await service.get('/api/about/adminGetAbout')
  return res?.data
}

export const getExperiences = async () => {
  const res = await service.get('/api/experience/adminGetExperiences')
  return res?.data
}

export const getEducations = async () => {
  const res = await service.get('/api/education/adminGetEducations')
  return res?.data
}

export const getProjects = async () => {
  const res = await service.get('/api/project/adminGetProjects')
  return res?.data
}
