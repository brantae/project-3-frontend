import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function FestivalForm({ onAddFestival }) {
  
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    month: '',
    website: ''
  })

  function handleChangeSubmit(event) {
      setFormData({
      ...formData,  [event.target.name]: event.target.value
    })
  }


  function handleSubmit(e) {
    e.preventDefault()

    const newFestival = {
      name: formData.name,
      city: formData.city,
      month: formData.month,
      website: formData.website,
    }

    fetch('http://localhost:9292/festivals', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFestival),
    })
    .then((r) => r.json())
    .then((data) =>{
      onAddFestival(data)
    })
  }


  return (
    <div className="form">
      <h1>add a festival here!</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Input
            required
            label="name"
            placeholder="festival name"
            name="name"
            value={formData.name}
            onChange={handleChangeSubmit} 
            />
          <Form.Input
            required
            label="city"
            placeholder="festival city"
            name="city"
            value={formData.city}
            onChange={handleChangeSubmit} 
          />
          <Form.Input
            required
            label="month"
            placeholder="month it occurs"
            name="month"
            value={formData.month}
            onChange={handleChangeSubmit} 
            />
            <Form.Input
            required
            label="website"
            placeholder="link to site"
            name="website"
            value={formData.website}
            onChange={handleChangeSubmit} 
            />
          </Form.Group>
        <Form.Button>submit</Form.Button>
      </Form>
    </div>
  );
}

export default FestivalForm;