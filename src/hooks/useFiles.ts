import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from './../store/hooks';
import { scanFiles } from './../store/filesSlice';

const useFiles = () => {
  const dispatch = useAppDispatch();
  const files = useAppSelector(state => state.files.files);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const scanAndSetFiles = async () => {
      setLoading(true);
      setError(null);
      try {
        await dispatch(scanFiles());
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unexpected error');
      } finally {
        setLoading(false);
      }
    };

    scanAndSetFiles();
  }, []);

  return { loading, error, files, rescanFiles: () => dispatch(scanFiles()) };
};

export default useFiles;
