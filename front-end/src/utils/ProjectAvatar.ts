// set Avater user or static avater
export const projectAvatar = (images: any) => {
  if (images.length > 0) {
    return process.env.NEXT_PUBLIC_SERVER_URL + '/' + images[0].path
  } else {
    return './assets/image/empty.jpg'
  }
}
