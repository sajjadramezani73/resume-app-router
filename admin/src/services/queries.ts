import service from './Api'

export const getAbout = async () => {
  const res = await service.get('/api/about/adminGetAbout')
  return res?.data
}

export const getProjects = async () => {
  const res = await service.get('/api/project/adminGetProjects')
  return res?.data
}
