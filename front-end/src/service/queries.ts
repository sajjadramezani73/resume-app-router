import { cookies } from 'next/headers'

export const getAbout = async () => {
  const cookieStore = cookies()
  const locale = cookieStore.get('Next-Locale') ?? { value: 'fa' }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/about/getAbout`,
    {
      cache: 'no-store',
      headers: { location: locale.value },
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const getExperiences = async () => {
  const cookieStore = cookies()
  const locale = cookieStore.get('Next-Locale') ?? { value: 'fa' }
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/experience/getExperiences`,
    {
      cache: 'no-store',
      headers: { location: locale.value },
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const getEducations = async () => {
  const cookieStore = cookies()
  const locale = cookieStore.get('Next-Locale') ?? { value: 'fa' }
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/education/getEducations`,
    {
      cache: 'no-store',
      headers: { location: locale.value },
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const getProjects = async () => {
  const cookieStore = cookies()
  const locale = cookieStore.get('Next-Locale') ?? { value: 'fa' }
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/project/getProjects`,
    {
      cache: 'no-store',
      headers: { location: locale.value },
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
