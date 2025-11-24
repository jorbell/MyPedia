import { useState } from 'react';
import '../styles/AddBookForm.css'

const AddBookForm = ({ addBook, setAdding, adding }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    addBook(name);
    setName('');
  };

  return (
    <div className="add-book-form">
      <form onSubmit={handleSubmit}>
        Name:
        <input
          className="add-book-input"
          type="text"
          placeholder="Enter book name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
          <button className="submit"type="submit">Add</button>
          <button className="cancel" onClick={() => setAdding(!adding)}>Cancel</button>
      </form>
    </div>
  );
};

export default AddBookForm;

