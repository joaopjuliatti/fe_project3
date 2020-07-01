export const useHeader = (goToPage, activePage, setActivePage) => {
  const handlePage = (path, page) => {
    if (page) setActivePage(page)
    goToPage(path)
  }

  return [handlePage]
}
