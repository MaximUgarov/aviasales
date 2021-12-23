import React, { Fragment, useEffect, useMemo, useState } from 'react';
import Header from './components/header/header';
import List from './components/list'
import { IitemTicketProps } from './types'
import './index.css'
import { useInterval } from './hooks/useInterval'
import { longPollingReq } from './methods/longPollingReq';
import { getSearchId } from './methods/getSearchId';
import Sort from './components/sort';
import { sortByPrice, sortByDuration, sortByOptimal } from './methods/sorts'
import Category from './components/category';

const App = () => {

  const [selectedSort, setSelectedSort] = useState<string>('cheap')

  const [category, setSelectedCategory] = useState<Array<number | string>>([])

  const [data, setData] = useState<IitemTicketProps[]>()
  const [polling, setPolling] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [delay, setDelay] = useState<number>(1000)
  const [searchId, setSearchId] = useState<string>("")

  useEffect(() => {
    setIsLoading(false)
    setTimeout(() => setIsLoading(true), 1000)
  }, [selectedSort,category])

  useEffect(() => {
    getSearchId(setSearchId, setPolling)
  }, [])

  useInterval(polling,
    async () => {
      longPollingReq(searchId, setData, setPolling, delay, setDelay, setIsLoading, data)
    }
    , delay)



  const sortedItems = useMemo(() => {
    if (selectedSort === 'cheap') {
      return data ? sortByPrice(data) : data
    } else if (selectedSort === 'fast') {
      return data ? sortByDuration(data) : data
    }
    else if (selectedSort === 'optimal') {
      return data ? sortByOptimal(data) : data
    } else return data
  }, [selectedSort, data])

  const categoredAndSortedItems = useMemo(() => {
    if (category.length === 0 || category.includes('all')) {
      return sortedItems
    } else {
      return sortedItems?.filter((item) => {
        if (item.segments && item.segments.length) {
          return category.some(f => item.segments[0].stops.length == f)
        } else return false
      })
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
          setCategory={(value: number | string) => setSelectedCategory([...category, value])}
          deleteCategory={(value: number | string) => deleteCategory(value)}
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