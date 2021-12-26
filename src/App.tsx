import React, { Fragment, useEffect, useMemo, useState } from 'react';
import Header from './components/header/header';
import List from './components/list'
import './index.css'
import { getSearchId } from './methods/getSearchId';
import Sort from './components/sort';
import { sortByPrice, sortByDuration, sortByOptimal } from './methods/sorts'
import Category from './components/category';
import { useLongPooling } from './hooks/useLongPooling';
import { useTypeSelector } from './hooks/useTypeSelector';

const App = () => {

  const [selectedSort, setSelectedSort] = useState<string>('cheap')
  const [category, setSelectedCategory] = useState<Array<string>>([])


  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [searchId, setSearchId] = useState<string>("")
  const { sorts } = useTypeSelector(state => state.sort)

  useEffect(() => {
    setIsLoading(false)
    setTimeout(() => setIsLoading(true), 1500)
  }, [sorts, category])

  useEffect(() => {
    getSearchId(setSearchId, startPooling, stopPooling)
  }, [])


  const { startPooling, stopPooling, data } = useLongPooling(searchId, setIsLoading)


  const sortedItems = useMemo(() => {
    const sortType = sorts.find(i => i.active === true) 
    switch (sortType?.value) {
      case 'cheap':
        return sortByPrice(data)
      case 'fast':
        return sortByDuration(data)
      case 'optimal':
        return sortByOptimal(data)
      default:
        return data
    }
  }, [sorts, data])

  const categoredAndSortedItems = useMemo(() => {
    if (category.length === 0 || category.includes('all')) {
      return sortedItems
    } else {
      return sortedItems.filter((item) => category.some(f => item.segments[0].stops.length === parseInt(f)))
    }
  }, [sortedItems, category])

  const deleteCategory = (value: string | number) => {
    setSelectedCategory(category.filter(i => i !== value))
  }

  return (
    <Fragment>
      <Header />
      <div className="container">
        <Category
          items={[{
            title: 'Все',
            value: 'all',
          },
          {
            title: 'Без пересадок',
            value: 0,
          },
          {
            title: '1 пересадка',
            value: 1,
          },
          {
            title: '2 пересадки',
            value: 2,
          },
          {
            title: '3 пересадки',
            value: 3,
          }]}
          setCategory={(value: string) => setSelectedCategory([...category, value])}
          deleteCategory={(value: string) => deleteCategory(value)}
        />
        <div className="list-wrapper">
          <Sort value={selectedSort} onChange={setSelectedSort} />
          <List items={categoredAndSortedItems} isLoading={isLoading} />
        </div>
      </div>
    </Fragment>
  );
};

export default App;