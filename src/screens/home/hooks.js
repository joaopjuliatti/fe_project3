

export const useHome = (setIsLoading, goToPage, setActivePage) => {

  const handlePage = (path) => {
    setActivePage(path)
    goToPage(path)
  }

  return [ handlePage]
}
