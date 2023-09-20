import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  safeWallet,
  localWallet,
  paperWallet,
  trustWallet,
  zerionWallet,
  bloctoWallet,
  frameWallet,
  rainbowWallet,
  phantomWallet,
} from "@thirdweb-dev/react";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <ThirdwebProvider
      activeChain="mumbai"
      clientId={process.env.YOUR_CLIENT_ID}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
        safeWallet({
          personalWallets: [
            metamaskWallet(),
            coinbaseWallet(),
            walletConnect(),
          ],
        }),
        localWallet(),
        paperWallet(),
        trustWallet(),
        zerionWallet(),
        bloctoWallet(),
        frameWallet(),
        rainbowWallet(),
        phantomWallet(),
      ]}
    >
      <div className={styles.container}>
        {/* Top Section */}
        <h1 className={styles.h1}>OkayBearsYachtClub NFT - Staking Dapp - $Bearberry</h1>
        <ConnectWallet theme="dark" />
        
        <div className={styles.nftBoxGrid}>
          <div
            className={styles.optionSelectBox}
            role="button"
            onClick={() => router.push(`/mint`)}
          >
            {/* Mint a new NFT */}
            <Image src="/icons/drop.webp" alt="drop" width={64} height={64} />
            <h2 className={styles.selectBoxTitle}>Mint a new Bear</h2>
            <p className={styles.selectBoxDescription}>
              Use the NFT Drop Contract to claim a Bear from the collection.
            </p>
          </div>

          <div
            className={styles.optionSelectBox}
            role="button"
            onClick={() => router.push(`/stake`)}
          >
            {/* Staking an NFT */}
            <Image src="/icons/token.webp" alt="token" width={64} height={64} />
            <h2 className={styles.selectBoxTitle}>Stake Your Bears</h2>
            <p className={styles.selectBoxDescription}>
              Use the custom staking contract deployed via <b>Bearified Labs</b> 
              to stake your NFTs, and earn tokens from the <b>Token</b> contract.
            </p>
          </div>
        </div>
      </div>
    </ThirdwebProvider>
  );
};

export default Home;
