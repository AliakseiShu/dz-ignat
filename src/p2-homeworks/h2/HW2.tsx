import React, { useState } from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'
export type AffairType = {
  _id: number
  name: string
  priority: string
};
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [
  {_id: 1, name: 'React', priority: 'high'},
  {_id: 2, name: 'anime', priority: 'low'},
  {_id: 3, name: 'games', priority: 'low'},
  {_id: 4, name: 'work', priority: 'high'},
  {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // need to fix any
  if (filter === 'all') return affairs
  else if (filter === 'high') return affairs.filter(a => a.priority === 'high')
  else if (filter === 'low') return affairs.filter(a => a.priority === 'low')
  else if (filter === 'middle') return affairs.filter(a => a.priority === 'middle')
  else {
  }
  return []
  // need to fix

}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): AffairType[] => {
  return affairs.filter(affair => affair._id !== _id)
}

function HW2() {
  const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
  const [filter, setFilter] = useState<FilterType>('all')

  // [value, setValue]
  // setValue is Function who change 1st element in array, те value

  // Type
  // value: number[]
  // setValue: (value: number[]) => void;

  const filteredAffairs = filterAffairs(affairs, filter)
  const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

  return (
    <div>
      <hr/>
      homeworks 2

      {/*should work (должно работать)*/}
      <Affairs
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
        filter={filter}
      />

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeAffairs/>*/}
      <hr/>
    </div>
  )
}

export default HW2
