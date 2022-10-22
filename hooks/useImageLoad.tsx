import { useEffect, useState } from 'react';

export const useImageLoad = (url: string) => {
  const [img, setImg] = useState<string>();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await fetch(url, {
          cache: 'no-cache',
          credentials: 'omit',
          referrerPolicy: 'strict-origin-when-cross-origin',
        });
        await res.blob().then((imgObj) => {
          setLoaded(true);
          setImg(URL.createObjectURL(imgObj));
        });
      } catch (e) {
        console.log(e);
      }
    };
    fetchImage();
  }, []);

  return { img, loaded };
};
