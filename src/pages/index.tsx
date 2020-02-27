import React from 'react';
import { Link } from 'gatsby';
import Layout from '@layout';
import Image from '@components/Image';
import './indexPage.scss';

function indexPage(): JSX.Element {
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great lol.</p>
      <figure className="indexPage__imgContainer">
        <Image />
      </figure>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
}

export default indexPage;
