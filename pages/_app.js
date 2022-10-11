import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <ThirdwebProvider
  desiredChainId = {ChainId.Goerli}
  chainRpc={{
    [ChainId.Goerli]:'https://goerli.infura.io/v3/60be2dca83dd46e1acc30f6a8d076cec'
  }}
  >
  
    <Component {...pageProps} />
  </ThirdwebProvider> 
  
}

export default MyApp
