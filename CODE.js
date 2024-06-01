/*
Assessment Requirements
1. Create a variable that can hold a number of NFTs. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFTs you have created
*/

// Create a variable to hold your NFTs
let nftCollection = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function createNFT(title, colorOfEyes, typeOfShirt, accessory) {
    const nftMetadata = {
        title: title,
        colorOfEyes: colorOfEyes,
        typeOfShirt: typeOfShirt,
        accessory: accessory
    };
    nftCollection.push(nftMetadata);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function displayNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("NFT #" + (i + 1));
        console.log("Title: " + nftCollection[i].title);
        console.log("Eye Color: " + nftCollection[i].colorOfEyes);
        console.log("Shirt Type: " + nftCollection[i].typeOfShirt);
        console.log("Accessory: " + nftCollection[i].accessory);
        console.log("--------------------");
    }
}

// Print the total number of NFTs we have minted to the console
function totalNFTs() {
    return nftCollection.length;
}

// Call your functions below this line
createNFT("Elysia", "Hazel", "T-Shirt", "Diamond Ring");
createNFT("Quantum", "Gray", "Hoodie", "Platinum Watch");
createNFT("Zephyr", "Amber", "Blazer", "Ruby Pendant");

// List all NFTs
displayNFTs();

// Print the total number of NFTs
console.log("Total NFTs Minted: " + totalNFTs());
