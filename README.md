# Metacrafters-JS-Proof-Project

# NFT Minting Simulation Project

This NFT Minting Simulation project is a simple and interactive JavaScript application designed to emulate the creation and management of Non-Fungible Tokens (NFTs). The project includes functions to mint new NFTs, list all minted NFTs, and track the total supply of NFTs created.

## Key Features

1. **Mint New NFTs**: The `createNFT` function allows users to generate a new NFT with specific metadata such as title, eye color, shirt type, and accessory. Each newly minted NFT is stored in an array, and a confirmation message is displayed.
   
2. **List All NFTs**: The `displayNFTs` function iterates through the array of NFTs and prints their metadata to the console. This function provides a clear and organized display of all the NFTs that have been created.
   
3. **Total NFT Supply**: The `totalNFTs` function returns the total number of NFTs that have been minted. This gives users a quick overview of the total NFTs in the collection.

## Project Structure

1. **NFT Storage**: An array named `nftCollection` is used to store all the NFT objects.
   
2. **Minting Function**: The `createNFT` function creates and adds new NFT objects to the `nftCollection` array.
   
3. **Listing Function**: The `displayNFTs` function prints each NFT’s metadata to the console in a readable format.
   
4. **Supply Function**: The `totalNFTs` function returns the number of NFTs stored in the array.

## Conclusion

This project serves as an educational tool to understand the basic principles of NFT creation and management. It allows users to interact with the code by minting new NFTs, viewing their collection
