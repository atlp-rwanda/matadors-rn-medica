import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://smyciiybvwvwisdmnrtk.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNteWNpaXlidnd2d2lzZG1ucnRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1NjMyMjAsImV4cCI6MjAzMzEzOTIyMH0.Ca0dmDaXJDXXKdwnbW8I_Itpy10Q_oh1ailg5KArpGc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})