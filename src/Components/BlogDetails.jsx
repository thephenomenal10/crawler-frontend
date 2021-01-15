import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { PulseLoader } from 'react-spinners';

import {  local } from '../config.json';

const BlogDetails = () => {
  const location = useLocation();
  const { url, details, creator, title } = location.state;
  const [tags, setTags] = useState([]);
  const [para, setPara] = useState({ paragraph: [] });
  const [loading, setLoading] = useState(false);
  const regex = new RegExp("^[a-zA-Z0-9_]*$");


  const fetchBlogs = url => {
    console.log(url);
    
    let axiosConfig = {
      method: 'post',
      url: local + '/api/v1/medium/crawlBlogs',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      data: { blogUrl: url },
    };

    setLoading(true);
    axios(axiosConfig)
      .then(res => {
        setLoading(false);
        console.log(res.data.data);
        setPara(res.data.data);
        setTags(res.data.data.tags);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => fetchBlogs(url), [url]);

  return (
    <React.Fragment>
      <table className="table text-white">
        <tbody>
          <tr>
            <th scope="col">Creator</th>
            <td>{creator}</td>
          </tr>
          <tr>
            <th scope="col">Title</th>
            <td>{title}</td>
          </tr>
          <tr>
            <th scope="col">Details</th>
            <td>{details}</td>
          </tr>
          <tr>
            <th scope="col">URL</th>
            <td>
              <a href={url} className="text-light">
                {url}
              </a>
            </td>
          </tr>
          <tr>
            <th scope="col">Tags</th>
            <td>
              {tags.map((tag, i) =>(
                regex.test(tag) ? (
                  <Link
                    key={i}
                    to={{ pathname: '/tag', state: { newtag: tag } }}
                  >
                    <button className="suggestion-button">{tag}</button>
                  </Link>
                ) : null)
              )}
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="mb-3 fw-bold blog-title">{title}</h2>
      {loading === true ? (
        <React.Fragment>
          <h2>Crawling...</h2>
          <PulseLoader
            loading={loading}
            css={`
              marginleft: ;
            `}
            height={70}
            radius={20}
            width={5}
            margin={3}
            color="#ffffff"
          />
        </React.Fragment>
      ) : (
        para.paragraph.map((paragraph, index) => (
          <p key={index} style={{ fontSize: '20px' }}>
            {paragraph}
          </p>
        ))
      )}
    </React.Fragment>
  );
};

export default BlogDetails;
