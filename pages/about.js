import { Layout, Image as AntImage } from 'antd';
import React, { createElement, useState } from 'react';
import marker from '../public/images/marker.png'
import phone from '../public/images/aboutPhone.png'
import user from '../public/images/aboutUser.png'
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import styles from '../public/style/About.module.css'
import { FooterLowerWrapper, FooterTextOpacityWrapper, FooterLogoWrapper, TextOpacity, TextSpan } from '../container/Layout/Footer/Footer.style';
import InstagramPic from '../public/images/Instagram.png';
import FacebookPic from '../public/images/Facebook.png';
import TwitterPic from '../public/images/Twitter.png';
import TwitchPic from '../public/images/Twitch.png';


const { Content } = Layout;

const About = () => {

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span style={{ color: 'white' }} onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span style={{ color: 'white' }} className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span style={{ color: 'white' }} onClick={dislike}>
        {createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span style={{ color: 'white' }}>{dislikes}</span>
      </span>
    </Tooltip>,
    <span style={{ color: 'white' }} key="comment-basic-reply-to">Reply to</span>,
  ];

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  return (
    <>

      <Content className={styles.layoutStyles}>
        <div>
          <h1 className={styles.h1}>About us</h1>
          <h3 className={styles.h3}>L'endroit ou vous réaliserez vos plus grands rêves</h3>
        </div>
      </Content>

      <Content className={styles.layoutStyles}>
        <div>
          <small className={styles.small}>Qui sommes-nous ?</small>
          <h1 className={styles.h1}>Société de location de matériels audiovisuels.</h1>
          <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '50%' }}>
            <AntImage className={styles.image} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
          </div>
        </div>
      </Content>

      <br></br>

      <Content className={styles.layoutStyles}>
        <div>
          <small className={styles.small}>Agence composée de trois membres.</small>
          <h1 className={styles.h1}>Jessica Ferreira - Raphael Jeune - Lucie Marques</h1>
          <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '50%' }}>
            <AntImage className={styles.image} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
          </div>
        </div>
      </Content>

      <br></br>

      <Content className={styles.layoutStyles}>
        <div>
          <small className={styles.small}>Work</small>
          <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '50%' }}>
            <Link href={'#'}>
              <AntImage preview={false} className={styles.image} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
            </Link>
            <Link href={'#'}>
              <AntImage preview={false} className={styles.image} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
            </Link>
            <Link href={'#'}>
              <AntImage preview={false} className={styles.image} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
            </Link>
          </div>
        </div>
      </Content>

      <br></br>

      <Content className={styles.layoutStyles}>
        <small className={styles.small}>Avis</small>

        <div className={styles.comment}>
          <Comment
            actions={actions}
            author={<a style={{ color: 'white' }}>Han Solo</a>}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
              <p style={{ color: 'white' }}>
                Très beau site !
              </p>
            }
            datetime={
              <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
          <Comment
            actions={actions}
            author={<a style={{ color: 'white' }}>Han Solo</a>}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
              <p style={{ color: 'white' }}>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully
                and efficiently.
              </p>
            }
            datetime={
              <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
          <Comment
            actions={actions}
            author={<a style={{ color: 'white' }}>Han Solo</a>}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
              <p style={{ color: 'white' }}>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully
                and efficiently.
              </p>
            }
            datetime={
              <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />

          <Comment
            actions={actions}
            author={<a style={{ color: 'white' }}>Han Solo</a>}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
              <p style={{ color: 'white' }}>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully
                and efficiently.
              </p>
            }
            datetime={
              <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
        </div>
        <br />
        <br />
        <br />
        <h2 className={styles.h3}>Marshightech@gmail.com</h2>
        <div style={{ marginLeft: '760px', marginRight: 'auto', width: '40%' }}>
          <Image src={marker} width={50} height={50} />
          <span style={{ width: '20px', color: 'green' }}>texteunjkjkjjkjkjjkjkjkjk</span>
          <Image style={{ marginRight: '10px' }} src={phone} width={50} height={50} />
          <span style={{ width: '20px', color: 'green' }}>textejknjknjknjknjjkjkjjkj</span>
          <Image src={user} width={50} height={50} />{" "}
        </div>
        <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '50%' }}>
          <span style={{ color: 'white', width: '190px', marginLeft: '220px' }}>102 cours Franklin Roosevelt <br /><span style={{ marginLeft: '220px' }}>33000 Bordeaux</span></span>
          <span style={{ color: 'yellow' }}>Texte avant</span>
          <span style={{ color: 'white', marginLeft: '40px' }}>+33.7.35.55.74.32</span>
          <span style={{ color: 'yellow' }}>Textehy</span>
          <span style={{ color: 'white' }}>Quo autem reprensetativ qui<br /><span style={{ marginLeft: '598px' }}>representativ quo</span></span>
        </div>

        <FooterLowerWrapper>
          <FooterTextOpacityWrapper>
            <TextOpacity><TextSpan>©</TextSpan>All Right reserved</TextOpacity>
          </FooterTextOpacityWrapper>
          <FooterLogoWrapper>
            <Link href={"#"}>
              <Image src={FacebookPic} width={50} height={50} />
            </Link>
            <Link href={"#"}>
              <Image src={TwitterPic} width={50} height={50} />
            </Link>
            <Link href={"#"}>
              <Image src={InstagramPic} width={50} height={50} />
            </Link>
            <Link href={"#"}>
              <Image src={TwitchPic} width={50} height={50} />
            </Link>
          </FooterLogoWrapper>
        </FooterLowerWrapper>

      </Content>



    </>
  )
}

export default About
