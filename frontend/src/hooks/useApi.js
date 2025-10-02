import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import booksService from '../api/booksApi';
import chapterService from '../api/chaptersApi';

// Get all books
export const useBooks = () => {
  return useQuery({
    queryKey: ['books'],
    queryFn: booksService.getAll,
  });
};

// Mutation to add a new book
export const useAddBook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: booksService.create, // expects (name)
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
  });
};

// Mutation to add a new chapter
export const useAddChapter = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ bookId, name }) => chapterService.create(bookId, name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
  });
};

// Mutation to update a chapter
export const useUpdateChapter = (setNotification) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, content, name }) => {
      const notification = {
        "isVisible": true,
        "title": `Updating ${name}...`,
        "text": `Updating chapter: ${name}`
      }
      setNotification(notification);
      return(
        chapterService.update(id, content, name)
      )
    },
    onSuccess: () => {
      const notification = {
        "isVisible": false,
        "title": `Finished`,
        "text": `Chapter updated succesfully!`
      }
      setTimeout(function(){
        setNotification(notification);
      }, 1000);
      return(
        queryClient.invalidateQueries({ queryKey: ['books'] })
      )
    },
  });
};
