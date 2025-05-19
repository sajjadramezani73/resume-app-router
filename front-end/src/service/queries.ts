import { cookies } from 'next/headers'

export const getAbout = async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get('Next-Locale') ?? { value: 'fa' };

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/about`, {
    cache: 'no-cache',
    headers: { location: locale.value },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const getExperiences = async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get('Next-Locale') ?? { value: 'fa' };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/experience`,
    {
      cache: 'no-cache',
      headers: { location: locale.value },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const getEducations = async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get('Next-Locale') ?? { value: 'fa' };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/education`,
    {
      cache: 'no-cache',
      headers: { location: locale.value },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const getProjects = async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get('Next-Locale') ?? { value: 'fa' };
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/project`, {
    cache: 'no-cache',
    headers: { location: locale.value },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const getOneProject = async (id: string) => {
  const cookieStore = await cookies();
  const locale = cookieStore.get('Next-Locale') ?? { value: 'fa' };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/project/detail/${id}`,
    {
      cache: 'no-cache',
      headers: { location: locale.value },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
