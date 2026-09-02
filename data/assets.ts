const img = (id: string, args = '') => `https://framerusercontent.com/images/${id}${args}`;

export const assets: Record<string, string> = {
  portrait: '/portrait-me.png',
  aboutImage: '/new about me.png',
  dansk: img('0ZJKTNJ2hCBPnOhFg0jfRgRWwU.png', '?scale-down-to=2048&width=4096&height=2731'),
  nissan: img('E6YRbfbg3njbTOm8p16oFTnmQ.png', '?scale-down-to=2048&width=4096&height=2731'),
  loreal: img('hhclzF6desw7KRd4g4TcWgGZu6I.png', '?width=2048&height=1366'),
  marketly: img('WZjYOMw9rqOtCDei9bsvUfrcjI.png', '?width=2048&height=1366'),
  about: img('Xvd6TJPVazOh8gTZm3JCk8VWA7U.png', '?scale-down-to=2048&width=3375&height=3375'),
};
