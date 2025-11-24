import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import booksService from '../api/booksApi'
import chapterService from '../api/chaptersApi'

// Get all books
export const useBooks = () => {
  return useQuery({
    queryKey: ['books'],
    queryFn: booksService.getAll,
  })
}

// Mutation to add a new book
export const useAddBook = (setNotification) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (name) => {
      const notification = {
        isFading: false,
        title: `Creating a book: ${name}.`,
        text: `Waiting for response from the server..`,
      }
      setNotification(notification)
      return booksService.create(name) // expects (name)
    },
    onSuccess: () => {
      const notification = {
        isFading: true,
        title: `Finished!`,
        text: `Book created succesfully!`,
      }
      setTimeout(function () {
        setNotification(notification)
      }, 1000)

      return queryClient.invalidateQueries({ queryKey: ['books'] })
    },
  })
}

// Mutation to add a new chapter
export const useAddChapter = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ bookId, name }) => chapterService.create(bookId, name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] })
    },
  })
}

// Mutation to update a chapter
export const useUpdateChapter = (setNotification) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, content, name }) => {
      const notification = {
        isHidden: false,
        isFading: true,
        title: `Updating ${name}...`,
        text: `Updating chapter: ${name}`,
      }
      setNotification(notification)
      return chapterService.update(id, content, name)
    },
    onSuccess: () => {
      const notification = {
        isHidden: false,
        isFading: false,
        title: `Finished`,
        text: `Chapter updated succesfully!`,
      }
      setTimeout(function () {
        setNotification(notification)
      }, 1000)
      setTimeout(function () {
        setNotification({ ...notification, isHidden: true })
      }, 5000)
      return queryClient.invalidateQueries({ queryKey: ['books'] })
    },
  })
}
