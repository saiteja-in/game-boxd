import React from 'react';
import bullsEye from '../assets/Emojis/bulls-eye.webp';
import thumbsUp from '../assets/Emojis/thumbs-up.webp';
import meh from '../assets/Emojis/meh.webp';
import { Image, ImageProps } from '@chakra-ui/react';
interface Props{
    rating:number
}

export const Emoji = ({ rating }: Props) => {
    if (rating < 3) return null;
    const emojiMap:{[key:number]:ImageProps} = {
        3: { src: meh, alt: 'meh' },
        4: { src: thumbsUp, alt: 'recommended' },
        5: { src: bullsEye, alt: 'exceptional' },
    };
    return (
        <Image {...emojiMap[rating]} boxSize={'25px'} marginTop={1}/>
    );
};
