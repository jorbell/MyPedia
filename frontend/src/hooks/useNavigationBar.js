import useLink from "./useLink"

const useNavigationBar = () => {
  const libraryLink = useLink("library", "Library")
  const taskerLink = useLink("tasker", "Tasker")
  const youtuberLink = useLink("youtuber", "YouTuber")
  const logo = useLink("", "MyPedia")


  const links = [libraryLink, taskerLink, youtuberLink]

  return {links, logo}
}
export default useNavigationBar
