import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const Preferences = () => {
  const [preferences, setPreferences] = useState({
    sources: [],
    categories: [],
    authors: [],
  });

  useEffect(() => {
    const savedPreferences = JSON.parse(localStorage.getItem('preferences'));
    if (savedPreferences) {
      setPreferences(savedPreferences);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('preferences', JSON.stringify(preferences));
  };

  return (
    <Form className="mb-4">
      <h3>Customize Your News Feed</h3>
      {/* Add checkboxes or dropdowns for selecting preferences */}
      <Button variant="primary" onClick={handleSave}>Save Preferences</Button>
    </Form>
  );
};

export default Preferences;
