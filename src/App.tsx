import React, { Fragment, useEffect, useMemo, useState } from 'react';
import Header from './components/header/header';
import List from './components/list'
import './index.css'
import { getSearchId } from './methods/getSearchId';
import Sort from './components/sort';
import { sortByPrice, sortByDuration, sortByOptimal } from './methods/sorts'
import Category from './components/category';
import { useLongPooling } from './hooks/useLongPooling';

const App = () => {

  const [selectedSort, setSelectedSort] = useState<string>('cheap')
  const [category, setSelectedCategory] = useState<Array<string>>([])


  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [searchId, setSearchId] = useState<string>("")

  useEffect(() => {
    setIsLoading(false)
    setTimeout(() => setIsLoading(true), 1500)
  }, [selectedSort, category])

  useEffect(() => {
    getSearchId(setSearchId, startPooling, stopPooling)
  }, [])


  const { startPooling, stopPooling, data } = useLongPooling(searchId, setIsLoading)


  const sortedItems = useMemo(() => {
    let value = data
    switch (selectedSort) {
      case 'cheap':
        value = sortByPrice(data)
        break;
      case 'fast':
        value = sortByDuration(data)
        break;
      case 'optimal':
        value = sortByOptimal(data)
        break;
    }
    return value
  }, [selectedSort, data])

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