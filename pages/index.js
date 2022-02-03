import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  buttonText,
  LinkName,
  imageUrl,
}) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
    <Image src={imageUrl} width={500} height={300} alt='banner' />
    <Box p='5'>
      <Text color='gray.500' fontsize='sm' fontweight='medium'>
        {purpose}
      </Text>
      <Text fontsize='3x1' fontWeight='bold'>
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontsize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>
        {desc1}
      </Text>
      <Button fontSize='x1' bg='blue.300' color='white'>
        <Link href={LinkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);
export default function Home() {
  return (
    <div>
      <Banner
        purpose='RENT A HOME'
        title1='Rental Homes for'
        title2='Everyone'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more'
        buttonText='Explore Renting'
        LinkName='/search?purpose%3for-rent'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />

      <Banner
        purpose='BUY A HOME'
        title1='Find, Buy & Own Your'
        title2='Dream Home'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more'
        buttonText='Explore Buying'
        LinkName='/search?purpose-for-sale'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
      />
    </div>
  );
}
