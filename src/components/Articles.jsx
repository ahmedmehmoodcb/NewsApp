import React, { useState } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import SearchComponent from './SearchComponent';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async (searchParams) => {
    const { keyword, category, source, date } = searchParams;
    const response = await axios.get('API_URL', {
      params: { keyword, category, source, date },
    });
    setArticles(response.data.articles);
  };

  return (
    <div>
      <SearchComponent onSearch={fetchArticles} />
      <Row>
        {articles.map((article) => (
          <Col md={4} key={article.id}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Articles;
