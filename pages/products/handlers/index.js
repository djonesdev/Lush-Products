export const onClickTogglePage = (getProducts, queryParams) =>
    getProducts(queryParams);

export const onClickCategory = (category, activeCategories, setActiveCategories) => {
    if(activeCategories.includes(category)) {
      const filteredActiveCategories = activeCategories.filter(categoryId => category !== categoryId)
      setActiveCategories(filteredActiveCategories)
    } else {
      setActiveCategories((currentState) => [...currentState, category]);
    }
};