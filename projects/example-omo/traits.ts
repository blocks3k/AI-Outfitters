import { NFTGenerativeTraitEnum, NFTGenerativeTraitImage } from '@owlprotocol/nft-sdk';

export const traitEnumVibe: NFTGenerativeTraitEnum = {
    name: 'Vibe',
    type: 'enum',
    options: ['Chill', 'Boring', 'Eccentric'],
    probabilities: [70, 20, 10],
};

export const traitImageBg: NFTGenerativeTraitImage = {
    name: 'Background',
    type: 'image',
    image_type: 'png',
    options: [
        {
            value: 'Dunes',
            image_url: 'ipfs://QmfSABDaq7V2WKrdTnK3ofnnbucax4e5jBcztXqL34zsrL/bg-dunes.png',
        },
        {
            value: 'Downtown',
            image_url: 'ipfs://QmfSABDaq7V2WKrdTnK3ofnnbucax4e5jBcztXqL34zsrL/bg-downtown.png',
        },
    ],
    probabilities: [ 5, 5],
};

export const traitImageBody: NFTGenerativeTraitImage = {
    name: 'Body',
    type: 'image',
    image_type: 'png',
    options: [
        {
            value: 'Common',
            image_url: 'ipfs://QmPwdFi3y79iDtG59CE1kEB395KemBe2xBZu1uVs7Xphvr/body-base.png',
        },
        {
            value: 'Albino',
            image_url: 'ipfs://QmPwdFi3y79iDtG59CE1kEB395KemBe2xBZu1uVs7Xphvr/body-base.png',
        },
    ],
    probabilities: [2, 8],
};


export const traitImageGlass: NFTGenerativeTraitImage = {
    name: 'Glass',
    type: 'image',
    image_type: 'png',
    options: [
        {
            value: 'gucci',
            image_url: 'ipfs://QmPwdFi3y79iDtG59CE1kEB395KemBe2xBZu1uVs7Xphvr/body-glass.png',
        },
        {
            value: 'prada',
            image_url: 'ipfs://QmPwdFi3y79iDtG59CE1kEB395KemBe2xBZu1uVs7Xphvr/body-glass2.png',
        },
    ],
    probabilities: [5, 5],
};



export const traitImageHats: NFTGenerativeTraitImage = {
    name: 'Hats',
    type: 'image',
    image_type: 'png',
    options: [
        {
            value: 'Cap',
            image_url: 'ipfs://QmPwdFi3y79iDtG59CE1kEB395KemBe2xBZu1uVs7Xphvr/hats-beanie.png',
        },
        {
            value: 'Beanie',
            image_url: 'ipfs://QmPwdFi3y79iDtG59CE1kEB395KemBe2xBZu1uVs7Xphvr/hats-cap.png',
        },
    ],
    probabilities: [50, 50],
};
