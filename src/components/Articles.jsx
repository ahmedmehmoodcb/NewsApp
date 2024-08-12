import React, { useState } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import SearchComponent from './SearchComponent';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async (searchParams) => {
    const { keyword, category, source, date } = searchParams;
    console.log(searchParams)
    const API_KEY = '9c4e532098da45c4b1358a6e75ddcac6';
    
    try {
      const response = await axios.get('https://newsapi.org/v2/everything', {
        params: {
          q: keyword || source || category || 'general',
          from: date || '2024-07-12',
          sortBy: 'publishedAt',
          apiKey: API_KEY,
        },
      });

      setArticles(response.data.articles);
    } catch (error) {
      console.error('Error fetching articles:', error.message);
    }
  };

  return (
    <div>
      <SearchComponent onSearch={fetchArticles} />
      <Row>
        {articles.map((article, index) => (
          <Col md={4} key={index}>
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
