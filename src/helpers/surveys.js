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

export const surveyVote = async (userId, fieldId) => {
  const { data: survey } = await supabase
    .from('user_votes')
    .select('*')
    .eq('survey_field_id', fieldId)
    .eq('user_id', userId)
    .single()

  if (!survey) {
    const { error } = await supabase
      .from('user_votes')
      .insert({
        user_id: userId,
        survey_field_id: fieldId
      })

    return { ok: !error }
  }

  const { error } = await supabase
    .from('user_votes')
    .delete()
    .eq('survey_field_id', fieldId)
    .eq('user_id', userId)
  return { ok: !error }
}
