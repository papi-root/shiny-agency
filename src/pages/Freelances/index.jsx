import DefaultPicture from '../../assets/profile.jpg'
import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'


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
    grid-template-columns: repeat(2, 1fr); 
    align-items: center;
    justify-items: center; 
`

const PageTitle = styled.h1`
    font-size: 30px;
    color: #000;
    text-align: center;
    padding-bottom: 30px; 
`

const PageSubtitle = styled.h2`
    font-size: 20px; 
    color: ${colors.secondary};
    font-weight: 300;
    text-align: center;
    padding-bottom: 30px; 
`

function Freelances() {
    return (
        <div>
            <PageTitle> Trouvez votre prestataire </PageTitle>
            <PageSubtitle>
                Chez Shyni nous reunissons les meilleurs profils pour vous. 
            </PageSubtitle>
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