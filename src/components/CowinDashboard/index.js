import {Component} from 'react'

import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'

import VaccinationByAge from '../VaccinationByAge'

import VaccinationByGender from '../VaccinationByGender'

import {
  AppContainer,
  CowinTextContainer,
  LogoContainer,
  Image,
  TextContent,
  Heading,
  LoadingView,
  FailureView,
  FailureImage,
  FailureText,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {
    apiStatus: apiConstants.initial,
    last7DaysVaccination: [],
    VaccinationByAgeList: [],
    vaccinationByGenderList: [],
  }

  componentDidMount() {
    this.getAPIResponse()
  }

  getAPIResponse = async () => {
    this.setState({
      apiStatus: apiConstants.inProgress,
    })
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const UpdatedDataVaccination = data.last_7_days_vaccination.map(each => ({
        dose1: each.dose_1,
        dose2: each.dose_2,
        vaccineDate: each.vaccine_date,
      }))
      const UpdatedVaccinationByAge = data.vaccination_by_age.map(each => ({
        age: each.age,
        count: each.count,
      }))
      const UpdatedvaccinationByGender = data.vaccination_by_gender.map(
        each => ({
          gender: each.gender,
          count: each.count,
        }),
      )
      this.setState({
        last7DaysVaccination: UpdatedDataVaccination,
        VaccinationByAgeList: UpdatedVaccinationByAge,
        vaccinationByGenderList: UpdatedvaccinationByGender,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiConstants.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {
      last7DaysVaccination,
      VaccinationByAgeList,
      vaccinationByGenderList,
    } = this.state
    return (
      <>
        <VaccinationCoverage last7DaysVaccination={last7DaysVaccination} />
        <VaccinationByAge VaccinationByAgeList={VaccinationByAgeList} />
        <VaccinationByGender
          vaccinationByGenderList={vaccinationByGenderList}
        />
      </>
    )
  }

  renderLoader = () => (
    <LoadingView data-testid="loader">
      <Loader color="#ffffff" height={80} type="ThreeDots" width={80} />
    </LoadingView>
  )

  renderFailureView = () => (
    <FailureView>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <FailureText>Something went wrong</FailureText>
    </FailureView>
  )

  renderViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderSuccessView()
      case apiConstants.inProgress:
        return this.renderLoader()
      case apiConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <AppContainer>
        <CowinTextContainer>
          <LogoContainer>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
            />
            <TextContent>Co-WIN</TextContent>
          </LogoContainer>
          <Heading>CoWIN Vaccination in India</Heading>
        </CowinTextContainer>
        {this.renderViews()}
      </AppContainer>
    )
  }
}
export default CowinDashboard
