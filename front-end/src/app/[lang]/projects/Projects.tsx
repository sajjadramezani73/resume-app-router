import ProjectItem from '@/components/projectItem'
import { getProjects } from '@/service/queries'
import { ILanguageProps } from '@/type/types'
import React from 'react'

const Projects = async ({ language }: ILanguageProps) => {
  const { projects } = await getProjects()

  console.log(projects)

  return (
    <>
      {projects?.reverse().map((item: any) => {
        return (
          <ProjectItem key={item?._id} project={item} language={language} />
        )
      })}
    </>
  )
}

export default Projects
