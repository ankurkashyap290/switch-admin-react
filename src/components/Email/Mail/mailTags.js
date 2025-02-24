import React from 'react';

const tags = ['Friend', 'Family', 'Colleague', 'Teachers', 'Students', 'ClassMates'];
const tagColor = ['#CD3131', '#74B49B', '#0962EA', '#141829', '#FFCD38', '#61105E'];

function getTags(mails, filterAttr) {
  const tempTags = {};
  mails.forEach(mail => {
    if (mail.tags && mail.bucket === filterAttr.bucket) {
      mail.tags.split(' ').forEach(tag => (tempTags[tag] = 1));
    }
  });
  return tempTags;
}

export default function mailTags(mails, filterAction, filterAttr, onDrawerClose) {
  const Tags = getTags(mails, filterAttr);
  const renderSingleTag = (tag, key) => {
    const onClick = () => {
      filterAction({ tag });
      if (onDrawerClose) {
        onDrawerClose();
      }
    };
    const selectedTag = tag === filterAttr.tag;
    const activeClass = selectedTag ? 'active' : '';
    const background = tagColor[tags.findIndex(tempTags => tempTags === tag)];
    return (
      <li key={`tag${key}`} onClick={onClick} className={`msaMailTag ${activeClass}`}>
        <span className="msaLabelIndicatorColor" style={{ background }} />
        <span>{tag}</span>
      </li>
    );
  };
  return (
    <ul className="msaMailTagList">
      <p className="msaSectionLabel">Label</p>
      {Object.keys(Tags).map((tag, index) => renderSingleTag(tag, index))}
    </ul>
  );
}
export { tags, tagColor };
