// set Avater user or static avater
export const avatar = (avatar: string) => {
  if (avatar !== '') {
    return process.env.NEXT_PUBLIC_SERVER_URL + '/' + avatar
  } else {
    return './assets/image/man.svg'
  }
}
