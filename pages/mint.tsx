import { Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { nftDropContractAddress } from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";

const Mint: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Mint An NFT!</h1>

      <p className={styles.explain}>
        Here is where we use our <b>NFT Drop</b> contract to allow users to mint
        one of the NFTs that we lazy minted.
      </p>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

      <Web3Button
        theme="dark"
        contractAddress={nftDropContractAddress}
        action={async (contract) => {
          const _mintAmount = 1; // You can adjust this value as needed
          const data = await contract.call("mint", [_mintAmount]);
          if (data) {
            alert("NFT Minted!");
            router.push("/stake");
          }
        }}
        onError={(error) => {
          alert(error);
        }}
      >
        Mint An NFT
      </Web3Button>
    </div>
  );
};

export default Mint;
