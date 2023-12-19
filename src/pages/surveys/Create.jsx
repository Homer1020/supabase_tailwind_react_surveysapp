import Container from '../../components/Container'
import Textarea from '../../components/Textarea'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useContext, useState } from 'react'
import { supabase } from '../../config/supabase'
import { authContext } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'

export default function Create () {
  const { auth } = useContext(authContext)
  const navigate = useNavigate()
  const [sending, setSeding] = useState(false)
  const [fields, setFields] = useState([
    {
      id: new Date(),
      value: ''
    }
  ])

  const handleCreateSurvey = async e => {
    e.preventDefault()

    setSeding(true)
    const { data: survey, error } = await supabase
      .from('surveys')
      .insert({
        user_id: auth.id,
        heading: e.target.heading.value
      })
      .select('*')

    if (!error) {
      const { error: errorForFields } = await supabase
        .from('survey_fields')
        .insert(fields.map(field => ({
          survey_id: survey[0].id,
          field: field.value
        })))

      console.log({ errorForFields })

      if (!errorForFields) {
        navigate('/')
      } else {
        await supabase
          .from('surveys')
          .delete()
          .eq('id', survey.id)
      }
    }
    setSeding(false)
  }

  const handleAddField = () => {
    setFields([...fields, {
      id: new Date(),
      value: ''
    }])
  }

  const handleDeleteField = (param) => {
    console.log({ fields, param })
    setFields(fields.filter(field => field.id !== param))
  }

  const handleUpdateField = (id, value) => {
    setFields(fields.map(field => {
      if (field.id === id) {
        return ({
          ...field,
          value
        })
      }
      return field
    }))
  }

  return (
    <Container className='py-14'>
      <form onSubmit={ handleCreateSurvey } className='bg-white dark:bg-slate-800 dark:text-gray-100 rounded-md border border-gray-700 shadow-md p-5 w-5/12 ml-auto mr-auto my-7'>
        <h1 className='uppercase text-lg font-semibold mb-5'>Crear encuesta</h1>

        <div className="mb-3">
          <div className="mb-3">
            <label htmlFor="heading" className='inline-block mb-2'>Enunciado</label>
            <Textarea
              id="heading"
              rows={ 2 }
              name='heading'
              placeholder='Quieres ser mi girlfriend?'
            />
          </div>

          <div className="flex flex-wrap justify-between gap-3">
            {
              fields.map(({ id }, index) => (
                <>
                  <Input
                    key={ id }
                    type="text"
                    name="fields[]"
                    className='w-[calc(100%_-_81px_-_0.75rem)] first:w-full'
                    placeholder={`Campo #${index + 1}`}
                    onChange={ e => { handleUpdateField(id, e.target.value) } }
                    value={ fields.find(field => field.id === id).value }
                  />
                  {
                    (fields.length && index)
                      ? (
                      <Button type='button' className='bg-red-500 hover:bg-red-600' onClick={ () => { handleDeleteField(id) } }>Eliminar</Button>
                        )
                      : null
                  }
                </>
              ))
            }
            <Button type='button' onClick={ handleAddField } className='ml-auto bg-indigo-600 hover:bg-indigo-700'>Agregar Campo</Button>
          </div>

          <Button
            className='mt-5 disabled:opacity-75 disabled:cursor-progress'
            type='submit'
            disabled={ sending }
          >
            Guardar
          </Button>
        </div>
      </form>
    </Container>
  )
}
