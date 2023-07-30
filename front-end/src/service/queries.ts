export const getAbout = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/about/getAbout`,
    {
      cache: 'no-store',
      headers: { location: 'en' },
    }
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const getExperiences = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/experience/getExperiences`,
    {
      cache: 'no-store',
      headers: { location: 'en' },
    }
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const getEducations = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/education/getEducations`,
    {
      cache: 'no-store',
      headers: { location: 'en' },
    }
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const getProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/project/getProjects`,
    {
      cache: 'no-store',
      headers: { location: 'en' },
    }
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
