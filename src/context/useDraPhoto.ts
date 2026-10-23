import { useState, useEffect } from 'react';

const DEFAULT_IMAGE = `${import.meta.env.BASE_URL || './'}image.png`;

export function useDraPhoto() {
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dra_ana_vladia_photo');
      if (saved) return saved;
    }
    return DEFAULT_IMAGE;
  });

  const updatePhoto = (newUrl: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('dra_ana_vladia_photo', newUrl);
    }
    setPhotoUrl(newUrl);
    window.dispatchEvent(new Event('dra_photo_changed'));
  };

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        updatePhoto(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const resetToDefault = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('dra_ana_vladia_photo');
    }
    setPhotoUrl(DEFAULT_IMAGE);
    window.dispatchEvent(new Event('dra_photo_changed'));
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem('dra_ana_vladia_photo');
      setPhotoUrl(saved || DEFAULT_IMAGE);
    };

    window.addEventListener('dra_photo_changed', handleStorageChange);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('dra_photo_changed', handleStorageChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return { photoUrl, updatePhoto, handleFileUpload, resetToDefault };
}
