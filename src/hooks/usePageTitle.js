// src/hooks/usePageTitle.js
import { useEffect } from 'react';

function usePageTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export default usePageTitle;
