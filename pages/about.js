import React from 'react';
// import { Comment, Tooltip, Avatar } from 'antd';
// import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import AboutPage from '../container/AboutPage/AboutPage';
import { useRouter } from 'next/router';
import { withData } from '../helpers/restriction';
import GetAPIData from '../helpers/get_api_data';

const About = () => {
 
  // const [likes, setLikes] = useState(0);
  // const [dislikes, setDislikes] = useState(0);
  // const [action, setAction] = useState(null);

  // const actions = [
  //   <Tooltip key="comment-basic-like" title="Like">
  //     <span style={{ color: 'white' }} onClick={like}>
  //       {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
  //       <span style={{ color: 'white' }} className="comment-action">{likes}</span>
  //     </span>
  //   </Tooltip>,
  //   <Tooltip key="comment-basic-dislike" title="Dislike">
  //     <span style={{ color: 'white' }} onClick={dislike}>
  //       {createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
  //       <span style={{ color: 'white' }}>{dislikes}</span>
  //     </span>
  //   </Tooltip>,
  //   <span style={{ color: 'white' }} key="comment-basic-reply-to">Reply to</span>,
  // ];

  // const like = () => {
  //   setLikes(1);
  //   setDislikes(0);
  //   setAction('liked');
  // };

  // const dislike = () => {
  //   setLikes(0);
  //   setDislikes(1);
  //   setAction('disliked');
  // };

  return (
    <>

      {/* <Content className={styles.layoutStyles}>
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
        

      </Content> */}
      <AboutPage />
    </>
  )
}

export default About
