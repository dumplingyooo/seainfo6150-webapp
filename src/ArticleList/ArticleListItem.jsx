import React from 'react'

const ArticleListItem = ({value}) => {
  return (
      <html>
      <div>
          <h1>{value.title}</h1>
          <p>{value.shortText}</p>
          <time dateTime={value.pubDate}>{value.pubDate}</time>
          <button onClick={
              ()=>alert(`${value.slug}`)
          }>show article slug</button>
      </div>
      </html>
  );
};

export default ArticleListItem;
