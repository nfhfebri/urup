import { useAddress, useMetamask } from '@thirdweb-dev/react'
import styles from '../styles/Home.module.css'

const style = {
  wrapper: 'flex h-screen items-center justify-center',
  connectWalletButton: 'rounded-lg border-4 border-blue-500 px-10 py-5 transtition-all hover:bg-blue-500 hover:text-white',

}

export default function Home() {

  const connectWithMetamask = useMetamask()
  const address = useAddress()

  console.log(address)

  const Auth = () => {

  return (
    <div className={style.wrapper}>
      <button onClick={connectWithMetamask}
      className={style.connectWalletButton}
      >
        Connect Wallet
      
      </button>
    </div>
  )
  }
  
  return <>{address ? <div>LOGGED IN</div> : Auth()}</>
}
