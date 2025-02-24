import React from 'react';
import classNames from 'classnames';
import PageHeaderLayout from '../../layouts/pageLayouts/PageHeaderLayout';
import './styles.less';
import {
  SendIcon,
  SendFaceIcon,
  ReadMeIcon,
  ReadingIcon,
  PictureAddIcon,
  PngIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  HeartIcon,
  PandaIcon,
  SettingsIcon,
  DeleteIcon,
  WarningIcon,
  AttachmentIcon,
  CompassIcon,
} from '../../components/CustomIcon';

export default class IconSet extends React.Component {
  static defaultProps = {
    icons: [],
  };

  render() {
    const listClassName = classNames({
      iconList: true,
      clearfix: true,
      icons: true,
    });
    const listClassNameHead = classNames({
      iconListHead: true,
    });

    return (
      <PageHeaderLayout title="Icons">
        <ul className={listClassNameHead}>
          <li>
            <span> For Antd Icons</span>{' '}
            <a
              href="https://ant.design/components/icon"
              target="blank"
              style={{ color: '#20639b' }}
            >
              Visit Antd Icons
            </a>
          </li>
        </ul>
        <ul className={listClassName}>
          <li>
            <SendIcon />
          </li>
          <li>
            <SendFaceIcon />
          </li>
          <li>
            <ReadMeIcon />
          </li>
          <li>
            <ReadingIcon />
          </li>
          <li>
            <PictureAddIcon />
          </li>
          <li>
            <PngIcon />
          </li>
          <li>
            <FacebookIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <PandaIcon />
          </li>
          <li>
            <HeartIcon />
          </li>
          <li>
            <SettingsIcon />
          </li>
          <li>
            <DeleteIcon />
          </li>
          <li>
            <WarningIcon />
          </li>
          <li>
            <AttachmentIcon />
          </li>
          <li>
            <CompassIcon />
          </li>
        </ul>
      </PageHeaderLayout>
    );
  }
}
