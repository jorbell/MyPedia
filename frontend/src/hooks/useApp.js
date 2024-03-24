import useNavigationBar from './useNavigationBar'
const useApp = () => {
  const nav = useNavigationBar()
  const routes = []

  return {nav, routes}

}
export default useApp
