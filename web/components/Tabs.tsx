import { Tabs, Tab } from '@mui/material'
import { TabItem } from './types'

const TabsComponent = <T extends string>({items, value, handleTabChange}: {items: TabItem<T>[], value: T, handleTabChange: (value: T) => void}) => {
   
  return (
    <Tabs value={value} onChange={(_, newValue) => handleTabChange(newValue)} >
        {items.map((item) => (
            <Tab value={item.value} key={item.value} label={item.label} />
        ))}
    </Tabs>
  )
}

export default TabsComponent