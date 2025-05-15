import useLink from "./useLink"

const useNavigationBar = () => {
  const logo = useLink("", "MyPedia")
  const libraryLink = useLink("library", "Library")

  const links = [libraryLink]

  return {links, logo}
}
export default useNavigationBar
