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
export const useUpdateChapter = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, content, name }) => booksService.update(id, content, name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
  });
};
