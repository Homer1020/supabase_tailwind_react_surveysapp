import Container from '../components/Container'
import Title from '../components/Title'
import { useContext, useEffect, useState } from 'react'
import { authContext } from '../context/authContext'
import Button from '../components/Button'
import { deleteSurvey, getAllSurveys, surveyVote } from '../helpers/surveys'
import SurveyField from '../components/SurveyField'

export default function Home () {
  const { auth } = useContext(authContext)
  const [surveys, setSurveys] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllSurveys()
      .then(({ surveys, error }) => {
        setLoading(false)
        if (!error) {
          setSurveys(surveys)
        }
      })
  }, [auth.id])

  const handleDelete = async id => {
    const { ok } = await deleteSurvey(id)
    if (ok) {
      setSurveys(surveys.filter(survey => survey.id !== id))
    }
  }

  const handleVote = async (id, $target) => {
    const { ok } = await surveyVote(auth.id, id)
    if (ok) {
      $target.closest('li').classList.toggle('survey_field_active')
    }
  }

  return (
    <Container className='py-14'>
      <Title text='Encuestas Recientes' />
      <section className="grid grid-cols-4 gap-6 items-start">
        {loading
          ? (
            <h1 className='text-white'>Loading...</h1>
            )
          : surveys.map(survey => (
            (<article key={survey.id} className="bg-white dark:bg-slate-800 text-gray-800 shadow-sm dark:text-gray-100 p-6 rounded-md border border-slate-700">
              <div className='text-sm text-gray-300 mb-1'>
                {survey.users.email}
              </div>
              <div className='mb-3'>
                {survey.heading}
              </div>
              {
                survey.survey_fields && (
                  <ul className='list'>
                    {
                      survey.survey_fields.map(field => (
                        <SurveyField
                          onClick={e => { handleVote(field.id, e.target) }}
                          key={field.id}
                          field={field}
                          className={ field.user_votes.some(vote => vote.user_id === auth.id) ? 'survey_field_active' : '' }
                        />
                      ))
                    }
                  </ul>
                )
              }
              <div className='mt-5'>
                {auth.id === survey.user_id
                  ? (
                    <Button className='bg-red-500 hover:bg-red-600 text-sm' onClick={() => { handleDelete(survey.id) }}>Elimniar</Button>
                    )
                  : null}
              </div>
            </article>)
          ))}
      </section>
    </Container>
  )
}
