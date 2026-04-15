import React from 'react'
import { DashboardContainer } from "../../shared/layout/DashboardContainer.jsx"
import { Outlet } from 'react-router-dom'

export const DashboardPage = () => {
  return (
    <DashboardContainer>
        <Outlet/>
    </DashboardContainer>
  )
}
