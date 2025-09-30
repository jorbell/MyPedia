import { useState } from 'react';

const AddChapterForm = ({ addChapter }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    addChapter(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter chapter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Chapter</button>
    </form>
  );
};

export default AddChapterForm;

