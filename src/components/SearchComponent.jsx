import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const SearchComponent = ({ onSearch, sources, setArticles }) => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [source, setSource] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = () => {
    onSearch({ keyword, category, source, date });
  };

  return (
    <Form className="mb-4">
      <Row>
        <Col md={3}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Search by keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select Category</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Select value={source} onChange={(e) => {setSource(e.target.value) 
              setArticles((prv)=> {
                return prv.filter((p, i)=> {
                  return p.source.id === e.target.value
                } )
              })
            }}>
              {sources.map((p, i)=>{
                return <option value={p.id} key={i}>{p.name}</option>
              }) }
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={1}>
          <Button variant="primary" onClick={handleSearch}>
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchComponent;