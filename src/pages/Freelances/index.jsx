import DefaultPicture from '../../assets/profile.jpg'
import Card from '../../components/Card'
import styled from 'styled-components'

const freelanceProfiles = [
    {
        name: 'Papi LO',
        jobTitle: 'Web and Mobile Developper',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur Frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Developpeuse Fullstack',
        picture: DefaultPicture,
    },
    
]

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-templatees-columns: repeat(2, 1fr); 
`

function Freelances() {
    return (
        <div>
            <h1> Freelances </h1>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) =>(
                    <Card 
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        picture={profile.picture}
                        title={profile.name}
                    />
                ))}
            </CardsContainer>
        </div>
    )
} 

export default Freelances 