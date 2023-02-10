import { useDispatch } from 'react-redux';

import { AppDispatch } from '../store';

function useAppDispatch() {
  return useDispatch<AppDispatch>();
}

export { useAppDispatch };
