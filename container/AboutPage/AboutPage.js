import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { AboutPageWrapper, SubTitle, Title, SideText, Section, ImageWrapper, CommentContent, CommentWrapper, CommentAuthor } from './AboutPage.style'
import Image1 from '../../public/images/About_image1.jpeg';
import Image2 from '../../public/images/About_image2.jpeg';
import Image3 from '../../public/images/About_image3.jpg';
import Image4 from '../../public/images/About_image4.jpg';
import Image5 from '../../public/images/About_image5.jpg';
import Image6 from '../../public/images/About_image6.jpg';
import Image7 from '../../public/images/About_image7.jpg';
import Image8 from '../../public/images/About_image8.jpg';
import { Comment } from 'antd';

const AboutPage = ({ user, pageData }) => {

  const router = useRouter();
  const { locale } = router;
  
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
          quality="50%"
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
            quality="50%"
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
              quality="50%"
              />
            </Link>
            <Link href={'#'}>
              <Image 
              src={Image4}
              alt={"image 1"}
              width="1000px"
              height="700px"
              quality="50%"
              />
            </Link>
            <Link href={'#'}>
              <Image 
              src={Image5}
              alt={"image 1"}
              width="1000px"
              height="700px"
              quality="50%"
              />
            </Link>
          </ImageWrapper>
        </Section>

        <Section>
          <SideText>Avis</SideText>
        <CommentWrapper>
          <Comment
            user={user}
            author={<CommentAuthor>Han Solo</CommentAuthor>}
            avatar={<Image src={Image6} alt="Han Solo" width={50} height={50} quality="50%" />}

            content={
              <CommentContent>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully
                and efficiently.
              </CommentContent>
            }
          >
          </Comment>

          <Comment
            user={user}
            author={<CommentAuthor>Han Solo</CommentAuthor>}
            avatar={<Image src={Image7} alt="Han Solo" width={50} height={50} quality="50%"/>}

            content={
              <CommentContent>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully
                and efficiently.
              </CommentContent>
            }
          >
          </Comment>

          <Comment
            user={user}
            author={<CommentAuthor>Han Solo</CommentAuthor>}
            avatar={<Image src={Image8} alt="Han Solo" width={50} height={50} quality="50%"/>}

            content={
              <CommentContent>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully
                and efficiently.
              </CommentContent>
            }
          >
          </Comment>

          </CommentWrapper>
        </Section>

    </AboutPageWrapper>
    </>
  )
}

export default AboutPage