export const useHeader = (goToPage, activePage, setActivePage) => {
  const handlePage = (path) => {
    setActivePage(path)
    goToPage(path)
  }

  return [handlePage]
}
