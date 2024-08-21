import styled from 'styled-components'

import NavBar from '../../components/NavBar'
import ActivityChart from '../../components/ActivityChart'
import AvgSessionsChart from '../../components/AvgSessionsChart'
import PerformanceChart from '../../components/PerformanceChart'
import ObjectiveChart from '../../components/ObjectiveChart'
import KeyMetrics from '../../components/KeyMetrics'

import caloriesIcon from '../../assets/icon/caloriesIcon.png'
import proteinesIcon from '../../assets/icon/proteinesIcon.png'
import glucidesIcon from '../../assets/icon/glucidesIcon.png'
import lipidesIcon from '../../assets/icon/lipidesIcon.png'

import { useDataContext } from '../../utils/context/DataContext'

const StyledHome = styled.div`
  flex: 1;
  display: flex;
  width: 100vw;
  height: 100%;

  .home {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    row-gap: 24px;
    width: 100%;
    padding: 32px 128px;
    flex: 1;

    &__content {
      display: grid;
      width: 100%;
      height: 100%;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, 1fr);
      grid-column-gap: 24px;
      grid-row-gap: 24px;
    }

    &__header {
      font-size: 18px;
      display: flex;
      flex-direction: column;
      gap: 16px;

      &-username {
        color: #ff0101;
      }
    }
  }

  .charts {
    &-all {
      font-weight: 500;
      background: #fbfbfb;
      box-shadow: 0rem 0.2rem 0.4rem rgba(0, 0, 0, 0.0212249);
      border-radius: 0.5rem;
    }

    &-activity {
      grid-area: 1 / 1 / 3 / 4;
    }

    &-sessions {
      grid-area: 3 / 1 / 5 / 2;
      background: #ff0000;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-performance {
      grid-area: 3 / 2 / 5 / 3;
      background: #282d30;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-objective {
      grid-area: 3 / 3 / 5 / 4;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-calories {
      grid-area: 1 / 4 / 2 / 5;
    }

    &-proteines {
      grid-area: 2 / 4 / 3 / 5;
    }

    &-glucides {
      grid-area: 3 / 4 / 4 / 5;
    }

    &-lipides {
      grid-area: 4 / 4 / 5 / 5;
    }
  }
`

function Home() {
  const {
    isLoading,
    userData,
    activityData,
    avgSessionsData,
    performanceData,
  } = useDataContext()

  if (isLoading) return

  console.log(userData)

  return (
    <StyledHome>
      <NavBar />
      <div className="home">
        <div className="home__header">
          <h1>
            Bonjour,{' '}
            <span className="home__header-username">
              {userData?.data?.userInfos?.firstName}
            </span>
          </h1>
          <p className="home__header-message">
            Félicitations ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>

        <div className="home__content">
          <div className="charts-activity charts-all">
            <ActivityChart data={activityData} />
          </div>
          <div className="charts-sessions charts-all">
            <AvgSessionsChart data={avgSessionsData} />
          </div>
          <div className="charts-performance charts-all">
            <PerformanceChart data={performanceData} />
          </div>
          <div className="charts-objective charts-all">
            <ObjectiveChart data={userData} />
          </div>
          <div className="charts-calories charts-all">
            <KeyMetrics
              icon={caloriesIcon}
              name="Calories"
              value={userData.data.keyData.calorieCount}
            />
          </div>
          <div className="charts-proteines charts-all">
            <KeyMetrics
              icon={proteinesIcon}
              name="Proteines"
              value={userData.data.keyData.proteinCount}
            />
          </div>
          <div className="charts-glucides charts-all">
            <KeyMetrics
              icon={glucidesIcon}
              name="Glucides"
              value={userData.data.keyData.carbohydrateCount}
            />
          </div>
          <div className="charts-lipides charts-all">
            <KeyMetrics
              icon={lipidesIcon}
              name="Lipides"
              value={userData.data.keyData.lipidCount}
            />
          </div>
        </div>
      </div>
    </StyledHome>
  )
}

export default Home
