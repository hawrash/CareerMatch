import React from 'react';
import './SearchBar.css';

function Suggest({ suggestions, onSelect }) {
  return (
    <ul className="suggest-list">
      {suggestions.map((item) => (
        <li key={item.pk} onClick={() => onSelect(item.fields.name)}>
          {item.fields.name}
        </li>
      ))}
    </ul>
  );
}

export default Suggest;
