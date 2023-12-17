import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(`https://${import.meta.env.VITE_SUPABASE_APP_NAME}.supabase.co`, import.meta.env.VITE_SUPABASE_API_KEY)
