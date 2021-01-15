import React, { useState } from 'react';

const Form = ({ fetchData }) => {
  const [tag, setTag] = useState('');

  return (
    <React.Fragment>
      <form
        className="promotion mb-3"
        onSubmit={e => {
          e.preventDefault();
          fetchData(tag);
        }}
      >
        <input
          type="text"
          placeholder="Enter tag"
          value={tag}
          onChange={e => setTag(e.target.value)}
        />
        <button type="submit" />
      </form>
    </React.Fragment>
  );
};

export default Form;
