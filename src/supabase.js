import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://lieazuayrmdowpnnzpem.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpZWF6dWF5cm1kb3dwbm56cGVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4NjQyMzcsImV4cCI6MjA0NzQ0MDIzN30.ypgl8BdZsB6CcFGX_22oe3nEfoo0QCaFQjOhkXKJC1k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
