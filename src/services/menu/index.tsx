import { firebaseDB } from '../../config/firebase';
import { collection, where, query, orderBy, getDocs } from 'firebase/firestore';

const getMenuList = async () => {
  const queryMenu = query(
    collection(firebaseDB, 'menu'),
    where('active', '==', true),
    orderBy('order', 'asc'),
  );
  return await getDocs(queryMenu);
};

export { getMenuList };
