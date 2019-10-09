import React from 'react'
import SlugButton from "./SlugButton"
import styles from "./ArticleListItem.module.css"

const ArticleListItem = ({value}) => {
  return (
      <html>
      <div>
          <h1 className = {styles.title}>{value.title}</h1>
          <p className = {styles.text}>{value.shortText}</p>
          <time className = {styles.date} dateTime={value.pubDate}>{value.pubDate}</time>
          <SlugButton slug = {value.slug} buttonText = {value.author}></SlugButton>
          <div className = {styles.clear}></div>
      </div>
      </html>
  );
};

export default ArticleListItem;
