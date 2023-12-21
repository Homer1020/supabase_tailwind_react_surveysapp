import { supabase } from '../config/supabase'

export const deleteSurvey = async id => {
  const { error } = await supabase
    .from('surveys')
    .delete()
    .eq('id', id)
  return { ok: !error }
}

export const getAllSurveys = async () => {
  const { data, error } = await supabase
    .from('surveys')
    .select('*, users(*),survey_fields(*,user_votes(*))')

  return { surveys: data, error }
}

export const surveyVote = async (userId, fieldId, surveyId) => {
  // search if the user votes previusly
  const { data: vote } = await supabase
    .from('user_votes')
    .select('*')
    .eq('survey_field_id', fieldId)
    .eq('user_id', userId)

  // get fields ids
  const { data: survey } = await supabase
    .from('surveys')
    .select(`
      *,
      survey_fields(*)
    `)
    .eq('id', surveyId)
    .single()
  const fieldsId = survey.survey_fields.map(s => s.id)

  // delete all previous votes
  await supabase
    .from('user_votes')
    .delete()
    .eq('user_id', userId)
    .in('survey_field_id', fieldsId)

  // if previusly the user do not vote, insert a vote in the db
  if (!vote[0]) {
    const { error } = await supabase
      .from('user_votes')
      .insert({
        user_id: userId,
        survey_field_id: fieldId
      })
    if (error) return { ok: false }
  }

  const { data: surveyOutput } = await supabase
    .from('surveys')
    .select('*, users(*),survey_fields(*,user_votes(*))')
    .eq('id', surveyId)
    .single()

  return { ok: true, survey: surveyOutput }
}
