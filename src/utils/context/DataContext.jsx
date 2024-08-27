import { createContext, useContext } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export const DataContext = createContext()

export function useDataContext() {
  return useContext(DataContext)
}

export function DataContextProvider(props) {
  const apiUrl = 'http://localhost:3000'
  const { userId } = useParams()

  const userUrl = `${apiUrl}/user/${userId}`
  const activityUrl = `${apiUrl}/user/${userId}/activity`
  const avgSessionsUrl = `${apiUrl}/user/${userId}/average-sessions`
  const performanceUrl = `${apiUrl}/user/${userId}/performance`

  const {
    data: userData,
    isLoading: isUserLoading,
    error: userError,
  } = useFetch(userUrl)
  const {
    data: activityData,
    isLoading: isActivityLoading,
    error: activityError,
  } = useFetch(activityUrl)
  const {
    data: avgSessionsData,
    isLoading: isAvgSessionsLoading,
    error: avgSessionsError,
  } = useFetch(avgSessionsUrl)
  const {
    data: performanceData,
    isLoading: isPerformanceLoading,
    error: performanceError,
  } = useFetch(performanceUrl)

  // Format the activityData day
  if (activityData) {
    for (let i = 0; i < activityData.data.sessions.length; i++) {
      activityData.data.sessions[i].day = i + 1
    }
  }

  const isLoading =
    isUserLoading ||
    isActivityLoading ||
    isAvgSessionsLoading ||
    isPerformanceLoading
  const error =
    userError || activityError || avgSessionsError || performanceError

  return (
    <DataContext.Provider
      value={{
        userData,
        activityData,
        avgSessionsData,
        performanceData,
        isLoading,
        error,
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}
