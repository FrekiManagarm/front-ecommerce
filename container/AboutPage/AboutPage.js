import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AboutPageWrapper, SubTitle, Title, SideText, Section, ImageWrapper } from './AboutPage.style'
import AboutUser from '../../public/images/AboutUser.png'

const AboutPage = ({ pageData }) => {
  return (
    <>
    <AboutPageWrapper>

      <Section>
        <Title> About </Title>
        <SubTitle> L'endroit ou vous réaliserez vos plus grand rêves. </SubTitle>
      </Section>

      <Section>
        <SideText>Qui sommes-nous ?</SideText>
        <Title> Société de location de matériels audiovisuels </Title>
        <ImageWrapper>
          <Image src={AboutUser}></Image>
        </ImageWrapper>
      </Section>

        <Section>
          <SideText>Agence composée de 3 membres</SideText>
          <Title>Jessica Ferreira - Raphael Jeune - Lucie Marques</Title>
          <ImageWrapper>
            <Image src={AboutUser}></Image>
          </ImageWrapper>
        </Section>

        <Section>
          <SideText>Work</SideText>
          <ImageWrapper>
            <Link href={'#'}>
              <Image src={AboutUser}></Image>
            </Link>
            <Link href={'#'}>
              <Image src={AboutUser}></Image>
            </Link>
            <Link href={'#'}>
              <Image src={AboutUser}></Image>
            </Link>
          </ImageWrapper>
        </Section>

        <Section>
          <SideText>Avis</SideText>
          
        </Section>

    </AboutPageWrapper>
    </>
  )
}

export default AboutPage