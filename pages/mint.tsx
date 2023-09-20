import { useContract, useContractWrite } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { nftDropContractAddress } from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";

const Mint: NextPage = () => {
  const router = useRouter();
  const { contract } = useContract(nftDropContractAddress);
  const { mutateAsync: mint, isLoading } = useContractWrite(contract, "mint");

  const handleMint = async () => {
    try {
      const mintAmount = 1; // Assuming you want to mint 1 NFT
      const data = await mint({ args: [mintAmount] });
      console.info("NFT minted successfully", data);
      alert("NFT Claimed!");
      router.push("/stake");
    } catch (err) {
      console.error("Minting failed", err);
      alert(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Mint a 🐻Bear!</h1>

      <p className={styles.explain}>
        Here is where we use our <b>Bearified Labs</b> contract to allow users to mint
        one of 🐻Bears that we lazy minted.
      </p>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

      <button onClick={handleMint} disabled={isLoading}>
        Claim a FREE (Test) 🐻Bear
      </button>
    </div>
  );
};

export default Mint;
