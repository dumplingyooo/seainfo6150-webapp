import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from "./ArticleListItem"
import styles from './ArticleList.module.css'


const ArticleList = props => {
  return (
    <html>
    <div>
      <ul className={styles.grayBackground}>
        {props.articles.map(article => (
          <li key={props.slug} className={styles.whiteBackground}>
          <ArticleListItem value = {article}></ArticleListItem>
          </li>
        ))}
      </ul>
    </div>
    </html>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
