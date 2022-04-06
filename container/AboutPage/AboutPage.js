import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AboutPageWrapper, SubTitle, Title, SideText, Section, ImageWrapper } from './AboutPage.style'
import Image1 from '../../public/images/About_image1.jpeg';
import Image2 from '../../public/images/About_image2.jpeg';
import Image3 from '../../public/images/About_image3.jpg';
import Image4 from '../../public/images/About_image4.jpg';
import Image5 from '../../public/images/About_image5.jpg';
import { Comment } from 'antd';

const AboutPage = ({ pageData }) => {
  return (
    <>
    <AboutPageWrapper>

      <Section>
        <Title font="10rem"> About </Title>
        <SubTitle> L'endroit ou vous réaliserez vos plus grand rêves. </SubTitle>
      </Section>

      <Section>
        <SideText>Qui sommes-nous ?</SideText>
        <Title font="4rem"> Société de location de matériels audiovisuels </Title>
        <ImageWrapper>
          <Image 
          src={Image1} 
          alt={"image 1"}
          width="1000px" 
          height="700px" 
          />
        </ImageWrapper>
      </Section>

        <Section>
          <SideText>Agence composée de 3 membres</SideText>
          <Title font="4rem">Jessica Ferreira - Raphael Jeune - Lucie Marques</Title>
          <ImageWrapper>
            <Image 
            src={Image2}
            alt={"image 1"}
            width="1000px"
            height="700px"
            />
          </ImageWrapper>
        </Section>

        <Section>
          <SideText>Work</SideText>
          <ImageWrapper>
            <Link href={'#'}>
              <Image 
              src={Image3}
              alt={"image 1"}
              width="1000px"
              height="700px"
              />
            </Link>
            <Link href={'#'}>
              <Image 
              src={Image4}
              alt={"image 1"}
              width="1000px"
              height="700px"
              />
            </Link>
            <Link href={'#'}>
              <Image 
              src={Image5}
              alt={"image 1"}
              width="1000px"
              height="700px"
              />
            </Link>
          </ImageWrapper>
        </Section>

        <Section>
          <SideText>Avis</SideText>

          <Comment></Comment>

        </Section>

    </AboutPageWrapper>
    </>
  )
}

export default AboutPage