export const baseApiUrl = 'https://imas-cord-hub-api.vercel.app/api';

export const selectIpColor = (ip: string): string => {
  switch (ip) {
    case '765as':
      return '#ff74b8';
    case 'cinderella':
      return '#2681c8';
    case 'million':
      return '#ffc30b';
    case 'shiny':
      return '#8dbbff';
    case 'sidem':
      return '#0fbe94';
    case 'others':
      return '#512aa3';
    default:
      return '#ff74b8'; // imas brand color
  }
}
