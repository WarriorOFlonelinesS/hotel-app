import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../hooks"
import { getAccounts } from "../redux/store/reducers/accountsSlice"

export const Header = () => {
    const { accounts } = useAppSelector(state => state.accountReducer)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getAccounts())
    }
        , [dispatch])
    return (
        accounts.length > 0
            ?
            <div className="header">
                <div className="container">
                    <div className="header-content">
                        <img src="./favicon.ico" alt="" className="header__logo" />
                        <div className="auth-form">
                            <img src={accounts[0].image} alt="" className="auth-form__logo" />
                            <button className="btn">Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
            :
            <p>...Loading</p>
    )
}