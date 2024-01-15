'use client';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useRouter } from 'next/navigation';
import { authenticateUser, removeAccount } from '../redux/store/reducers/accountsSlice';
import { useEffect } from 'react';

export const Header = () => {
  const router = useRouter();
  const dispatch = useAppDispatch()
  const { accounts } = useAppSelector((state) => state.accountReducer);
  const logOut = () => {
    dispatch(removeAccount())
  }
  useEffect(() => {
    dispatch(authenticateUser());
  }, []);

  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <img src="./favicon.ico" alt="" className="header__logo" />
          <div className="p-8">
            {Object.values(accounts).length === 0 ? (
              <button
                className="header__btn"
                onClick={() => router.push('/signin')}
              >
                Log in
              </button>

            ) : (
              <div className='header-account'>
                <div className='text-white'>{accounts.email}</div>
                <button
                  className="header__btn"
                  onClick={logOut}
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
