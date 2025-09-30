import { useState } from 'react';

const AddBookForm = ({ addBook }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    addBook(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter book name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;

