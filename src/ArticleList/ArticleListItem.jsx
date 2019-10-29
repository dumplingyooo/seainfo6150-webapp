import React from 'react'
import SlugButton from "./SlugButton"
import ArticleImage from "./ArticleImage"
import styles from "./ArticleListItem.module.css"

const ArticleListItem = ({value}) => {
  return (
      <html>
      <ul class = {styles.container}>
        <div className = {styles.image}>
          <ArticleImage url = {value.image} title = {value.title}></ArticleImage>
        </div>
        <div className = {styles.word}>
          <h1 className = {styles.title}>{value.title}</h1>
          <p className = {styles.text}>{value.shortText}</p>
          <time className = {styles.date} dateTime={value.pubDate}>{value.pubDate}</time>
        </div>
        <div className ={styles.button}>
          <SlugButton slug = {value.slug} buttonText = {value.author}></SlugButton>
        </div>
        <div className = {styles.clear}></div>
      </ul>
      </html>
  );
};

export default ArticleListItem;
