import {PieChart, Pie, Cell, Legend} from 'recharts'

import {VaccinationByAgeContainer, TexContent} from './styledComponents'

const VaccinationByAge = props => {
  const {VaccinationByAgeList} = props
  return (
    <VaccinationByAgeContainer>
      <TexContent>Vaccination by age</TexContent>
      <PieChart width={900} height={400}>
        <Pie
          data={VaccinationByAgeList}
          cx="50%"
          cy="35%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64C2A6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{
            fontSize: 12,
            fontFamily: 'Roboto',
          }}
        />
      </PieChart>
    </VaccinationByAgeContainer>
  )
}
export default VaccinationByAge
